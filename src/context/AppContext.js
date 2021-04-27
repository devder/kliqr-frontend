import React, { createContext, useReducer } from 'react';
import reducer from '../reducer/appReducer';
import axios from 'axios'
import { env } from '../config';

//for a bigger app, I wouldn't set active user in the context but in the local state
const initialState = {
    users: [],
    activeUser: {},
    transactions: [],
    errorMessage: '',
    isLoading: true
}

const AppContext = createContext()

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    //fetch users from data base and store in state
    const getUsers = async () => {
        dispatch({ type: 'SET_LOADING' })
        try {
            const response = await axios.get(`${env.server}/api/users`)
            if (response.status === 200) {
                dispatch({ type: 'GET_USERS', payload: response.data.users })
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: 'Could not fetch users' })
        }

    }

    //fetch transactions from data base and store in state
    const getTransactions = async () => {
        dispatch({ type: 'SET_LOADING' })
        try {
            const response = await axios.get(`${env.server}/api/transactions`)
            if (response.status === 200) {
                dispatch({ type: 'GET_TRANSACTIONS', payload: response.data.transactions })
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: 'Could not fetch transactions' })
        }
    }

    //fetchd deatils for a particular user
    const setActiveUser = async (id) => {
        dispatch({ type: 'SET_LOADING' })
        try {
            const { data, status } = await axios.get(`${env.server}/api/users/${id}`)
            const response = await axios.get(`${env.server}/api/transactions/${id}`)
            const payload = {
                user: data.user, totalCreditDebit: data.totalCreditDebit,
                expenseTrendIcons: response.data.expenseTrendIcons,
                similarUsers: response.data.similarUsersDetails
            }
            if (status === 200 && response.status === 200) {
                dispatch({ type: 'SET_ACTIVE_USER', payload })
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: 'Could not fetch user' })
        }
    }

    return (
        <AppContext.Provider value={{
            users: state.users,
            transactions: state.transactions,
            activeUser: state.activeUser,
            getUsers, getTransactions, setActiveUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
