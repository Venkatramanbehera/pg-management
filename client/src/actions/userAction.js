import axios from 'axios'

export const asyncGetUser = () => {
    return (dispatch) => {
        axios.get('http://localhost:3088/api/user')
            .then((response) => {
                const data = response.data
                dispatch(getUser(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getUser = (data) => {
    return {
        type: 'GET_USER',
        payload: data
    }
}

// export const asyncCreateUser = (formData) => {
//     return (dispatch) => {
//         axios.post('http://localhost:3088/api/user', formData)
//             .then((res) => {
//                 console.log(res)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
// }