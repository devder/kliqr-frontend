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
}

const AppContext = createContext()

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    //fetch users from data base and store in state
    const getUsers = async () => {
        try {
            const response = await axios.get(`${env.server}/api/users`)
            if (response.status === 200) {
                dispatch({ type: 'GET_USERS', payload: response.data.users })
            }
        } catch (error) {
            console.log(error);
        }

    }

    //fetch transactions from data base and store in state
    const getTransactions = async () => {

        try {
            const response = await axios.get(`${env.server}/api/transactions`)
            if (response.status === 200) {
                dispatch({ type: 'GET_TRANSACTIONS', payload: response.data.transactions })
            }
        } catch (error) {
            console.log(error);
        }
    }

    //fetchd deatils for a particular user
    const setActiveUser = async (id) => {
        try {
            const response = await axios.get(`${env.server}/api/users/${id}`)
            if (response.status === 200) {
                dispatch({ type: 'SET_ACTIVE_USER', payload: response.data })
            }
        } catch (error) {
            console.log(error);
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
