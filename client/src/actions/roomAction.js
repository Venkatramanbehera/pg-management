import axios from "axios";

export const asyncGetRoom = () => {
    return (dispatch) => {
        axios.get('http://localhost:3088/api/room')
            .then((response) => {
                const data = response.data
                dispatch(getRoom(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getRoom = (data) => {
    return {
        type: 'GET_ROOM',
        payload: data
    }
}