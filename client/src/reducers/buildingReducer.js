const initialState = []

const buildingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BUILDING': {
            return [
                ...state, ...action.payload
            ]
        }
        case 'CREATE_BUILDING': {
            return [
                ...state, { ...action.payload }
            ]
        }
        default:
            return state
    }
}

export default buildingReducer