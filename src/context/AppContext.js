import React, { createContext, useReducer } from 'react';
import reducer from '../reducer/appReducer';
import axios from 'axios'
import { env } from '../config';


const initialState = {
    users: [],
    transactions: [],
    errorMessage: ''
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

    return (
        <AppContext.Provider value={{ users: state.users, transactions: state.transactions, getUsers, getTransactions }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
