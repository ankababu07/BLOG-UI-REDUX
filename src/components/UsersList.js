import React,{useEffect} from 'react'
import {startGetUsers} from "../actions/userActions"
import {connect} from "react-redux"
import { Link } from 'react-router-dom'


const UsersList = (props) => {
    // const [state, setstate] = useState([])
    // console.log("this is props",props.users)
    
    useEffect(()=>{
        // console.log("hello",props.users)
        if(props.users.length===0){
        props.dispatch(startGetUsers())
        // setstate(props.users)
        }
        // setstate(props.users)
        // console.log("length",props.users.length)

    },[])

    // console.log("State",state)
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
