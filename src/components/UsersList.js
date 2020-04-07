import React,{useEffect} from 'react'
import {startGetUsers} from "../actions/userActions"
import {connect} from "react-redux"
import { Link } from 'react-router-dom'


const UsersList = (props) => {    
    useEffect(()=>{
        if(props.users.length===0){
        props.dispatch(startGetUsers())
        }
    },[])

        return (
        
            <div>
                <h1>Users:{props.users.length}</h1>
                <ul>
                {
                        props.users.map(user=>{
                        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
                    
                
            </div>
        )
    
}


const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(UsersList)
