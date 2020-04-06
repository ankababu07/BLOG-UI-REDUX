import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {startGetPosts} from '../actions/postActions'
import {startGetUsers} from '../actions/userActions'
import {Link} from 'react-router-dom'

const UserPosts = (props) => {

useEffect(()=>{
    console.log("Use effect1")
    if(props.users.length==0){
        props.dispatch(startGetUsers())
    }
    if(props.posts.length==0){
        props.dispatch(startGetPosts())
    }
    
  
},[])



//console.log(props.users)
console.log(props.users)
console.log(props.posts)
    return (
        <div>
            <h1>User Name: {props.users.name}</h1>
            <h1>POSTS WRITTEN BY USER</h1>
            <ul>
                {
                    props.posts.map(post=>{
                        return (
                        <li key={post.id}><Link>{post.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    ) 
}

const mapStateToProps=(state,ownState)=>{
    return {
        users:state.users.find(usr=> usr.id== ownState.match.params.id)  ,
        posts:state.posts.filter(post=> post.userId == ownState.match.params.id)
    }
}


export default connect(mapStateToProps)(UserPosts)