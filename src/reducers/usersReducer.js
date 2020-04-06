import React from 'react'


const initialState=[]
const usersReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SET_USERS':{
            return [].concat(action.payload)
        }
        default:{
            return [...state]
        }
    }
}

export default usersReducer
