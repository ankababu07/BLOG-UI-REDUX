import axios from 'axios'

export const setUsers=(users)=>{
    return {type:'SET_USERS',payload:users}
}



export const startGetUsers=()=>{
    return (dispatch)=>{
        axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then(resp=>{
            const users=resp.data
            // console.log(users)
            dispatch(setUsers(users))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}