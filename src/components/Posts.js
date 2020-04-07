import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {startGetPosts} from '../actions/postActions'
import {Link} from 'react-router-dom'

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
            <ul>
                {
                    props.posts.map(post=>{
                        return (
                            <li key={post.id}><Link to={`/posts/${post.id}`}> {post.title} </Link> </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

const mapsStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapsStateToProps)(Posts)
