import { DefenitionActionPosts, InitialStateType } from "../../type/typePost"

 const initialState ={
    posts: [],
    FetchedPosts:[]
}

export const postsReducer = (state:InitialStateType = initialState, action: any):InitialStateType => {
    switch(action.type) {
        case DefenitionActionPosts.CREATE_POST:
        return { ...state, posts:[...state.posts,action.payload]}
        // return { ...state, posts:state.posts.concat(action.payload)}
        default: return state
    }
    

}