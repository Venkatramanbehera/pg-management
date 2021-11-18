const initialState = []

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ROOM':
            return [
                ...state, ...action.payload
            ]
        default:
            return state
    }
}

export default roomReducer