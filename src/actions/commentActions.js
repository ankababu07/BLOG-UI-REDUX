import axios from 'axios'


export const setComments=(comments)=>{
    return {type:'SET_COMMENTS',payload:comments}
}

export const startGetComments=()=>{
    return (dispatch)=>{
         axios.get(`https://jsonplaceholder.typicode.com/comments`)
         .then(resp=>{
             const comments=resp.data
             dispatch(setComments(comments))
         })
         .catch(err=>{
             console.log(err)
         })
    }
}