const initialState = []

const tenantReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TENANT':
            return [
                ...state, ...action.payload
            ]
        default:
            return state
    }
}

export default tenantReducer