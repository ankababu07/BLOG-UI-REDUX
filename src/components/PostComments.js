import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {startGetComments} from "../actions/commentActions"

const PostComments = (props) => {
    console.log(props)
    useEffect(()=>{
        if(props.comments.length==0){
            props.dispatch(startGetComments())
        }
    },[])
    return (
        <div>
            
        </div>
    )
}

const mapStateToPrps=(state,ownProps)=>{
    return{
        comments:state.comments
    }

}

export default connect(mapStateToPrps)(PostComments)
