import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from "../reducers/usersReducer"
import postsReducer from "../reducers/postsReducer"
import commentsReducer from "../reducers/commentsReducer"



const configStore=()=>{
    const store=createStore(combineReducers({
     users:usersReducer,
     posts:postsReducer,
     comments:commentsReducer
    }),applyMiddleware(thunk))

    return store
}

export default configStore