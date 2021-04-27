const reducer = function (state, action) {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload, isLoading: false }
        case 'GET_TRANSACTIONS':
            return { ...state, transactions: action.payload, isLoading: false }
        case 'SET_ACTIVE_USER':
            return {
                ...state, activeUser: {
                    ...action.payload.user[0],
                    totalTransactions: action.payload.totalCreditDebit[0].total_transactions,
                    totalCredit: action.payload.totalCreditDebit[1].total_transactions,
                    totalDebit: action.payload.totalCreditDebit[2].total_transactions,
                    expenseTrendIcons: action.payload.expenseTrendIcons,
                    similarUsers: action.payload.similarUsers,
                    isLoading: false
                }
            }
        case 'SET_LOADING':
            return { ...state, isLoading: true }
        case 'ERROR':
            return { ...state, errorMessage: action.payload, isLoading: false }
        default:
            return state
    }
}

export default reducer
