const reducer = function (state, action) {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload }
        case 'GET_TRANSACTIONS':
            return { ...state, transactions: action.payload }
        default:
            return state
    }
}

export default reducer
