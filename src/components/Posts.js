import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {startGetPosts} from '../actions/postActions'

const Posts = (props) => {
console.log(props)
useEffect(()=>{
    if(props.posts.length==0){
        props.dispatch(startGetPosts())
    }
},[])

console.log(props.posts)
    return (
        <div>
            
        </div>
    )
}

const mapsStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapsStateToProps)(Posts)
