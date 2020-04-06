import axios from 'axios'

export const setPosts=(posts)=>{
    return {type:'SET_POSTS',payload:posts}
}



export const startGetPosts=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(resp=>{
            const posts=resp.data
            // console.log(users)
            dispatch(setPosts(posts))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}