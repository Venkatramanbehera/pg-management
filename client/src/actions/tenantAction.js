import axios from "axios";

export const asyncGetTenant = () => {
    return (dispatch) => {
        axios.get('http://localhost:3088/api/tenant')
            .then((response) => {
                const data = response.data
                dispatch(getTenant(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getTenant = (data) => {
    return {
        type: 'GET_TENANT',
        payload: data
    }
}