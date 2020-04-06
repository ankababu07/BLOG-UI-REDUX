import React,{useEffect} from 'react'
import {startGetUsers} from "../actions/userActions"
import {connect} from "react-redux"


const UserDetails = (props) => {

    useEffect(()=>{
        if(props.users.length===0){
        props.dispatch(startGetUsers())
        }

    },[])
    
    console.log(props.users)
    return (
        <div>
        {props.users.name}
        </div>
    )
}

const mapStateToProps=(state,ownstate)=>{
    return{
        users:state.users.find(usr=>{
            return ownstate.match.params.id=usr.id
        })
    }
}

export default connect(mapStateToProps)(UserDetails)
