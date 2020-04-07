import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {startGetComments} from "../actions/commentActions"
import {startGetUsers} from "../actions/userActions"
import {startGetPosts} from "../actions/postActions"
import {Link} from 'react-router-dom'

const PostComments = (props) => {

    console.log(props)
    useEffect(()=>{

        if(props.users.length==0){
            props.dispatch(startGetUsers())
            props.dispatch(startGetPosts())
        }
        if(props.comments.length==0){
            props.dispatch(startGetComments())
        }
        

    },[])
 
    return (
        <div>
            <h1>Hello</h1>
            <h2>USER NAME: {props.users.find(user => user.id == props.posts.userId).name}</h2>
            <h2>TITLE: {props.posts.title}</h2>
            <h2>BODY:</h2>
            <h3>{props.posts.body}</h3>
            <hr/>
            <h2>COMMENTS</h2>
            <ul>
                {
                    props.comments.map(comment=>{
                        return(
                        <li key={comment.id}>{comment.body}</li>
                        )
                    })
                }
            </ul>
            <h4><Link to={`/users/${props.users.find(user => user.id == props.posts.userId).id}`}>More posts of  Author : {props.users.find(user => user.id == props.posts.userId).name}</Link></h4>
        </div>
    )
    
}

const mapStateToPrps=(state,ownProps)=>{
    return{
        users:state.users,
        posts:state.posts.find(post => post.id == ownProps.match.params.pid),
        comments:state.comments.filter(comment=>{
            return comment.postId==ownProps.match.params.pid
        })
    }

}

export default connect(mapStateToPrps)(PostComments)
