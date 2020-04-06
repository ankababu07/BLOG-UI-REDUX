import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from "../reducers/usersReducer"
import postsReducer from "../reducers/postsReducer"



const configStore=()=>{
    const store=createStore(combineReducers({
     users:usersReducer,
     posts:postsReducer,
     comments:commentsReducer
    }),applyMiddleware(thunk))

    return store
}

export default configStore