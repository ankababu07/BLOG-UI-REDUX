import React from 'react'
import {startGetComments} from "../actions/commentActions"
import {startGetUsers} from "../actions/userActions"
import {startGetPosts} from "../actions/postActions"
import {connect} from 'react-redux'

const Home = (props) => {
    if(props.users.length==0){
    props.dispatch(startGetUsers())
    props.dispatch(startGetPosts())
    props.dispatch(startGetComments())
    }
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    )
}

const mapStateToPrps=(state)=>{
    return{
        users:state.users,
        posts:state.posts,
        comments:state.comments
    }

}

export default connect(mapStateToPrps)(Home)
