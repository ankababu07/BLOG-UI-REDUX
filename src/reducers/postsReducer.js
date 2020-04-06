import React from 'react'


const inittialState=[]

const postsReducer = (state=inittialState,action) => {
    switch(action.type){
        case 'SET_POSTS':{
            return [].concat(action.payload)
        }
        default:{
            return [...state]
        }
            
    }
}

export default postsReducer
