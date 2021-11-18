import axios from 'axios'

export const asyncGetBuilding = () => {
    return (dispatch) => {
        axios.get('http://localhost:3088/api/building')
            .then((response) => {
                const data = response.data
                dispatch(getBuilding(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getBuilding = (data) => {
    return {
        type: 'GET_BUILDING',
        payload: data
    }
}