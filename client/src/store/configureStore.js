import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import buildingReducer from '../reducers/buildingReducer'
import roomReducer from '../reducers/roomReducer'
import tenantReducer from '../reducers/tenantReducer'
import userReducer from '../reducers/userReducer'

const configureStore = () => {

    const store = createStore(combineReducers({
        user: userReducer,
        building: buildingReducer,
        room: roomReducer,
        tenant: tenantReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore