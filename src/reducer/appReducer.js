const reducer = function (state, action) {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload }
        case 'GET_TRANSACTIONS':
            return { ...state, transactions: action.payload }
        case 'SET_ACTIVE_USER':
            return {
                ...state, activeUser: {
                    ...action.payload.user[0],
                    totalTransactions: action.payload.totalCreditDebit[0].total_transactions,
                    totalCredit: action.payload.totalCreditDebit[1].total_transactions,
                    totalDebit: action.payload.totalCreditDebit[2].total_transactions,
                }
            }
        default:
            return state
    }
}

export default reducer
