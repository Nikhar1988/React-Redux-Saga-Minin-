import { DefenitionActionPosts, InitialStateType } from "../../type/typePost"

 const initialState ={
    posts: [],
    FetchedPosts:[],
    loader: false
}

export const postsReducer = (state:InitialStateType = initialState, action: any):InitialStateType => {
    switch(action.type) {
        case DefenitionActionPosts.CREATE_POST:
        return { ...state, posts:[...state.posts, action.payload]}
        // return { ...state, posts:state.posts.concat(action.payload)}
        case DefenitionActionPosts.FETCH_POST:
            return {...state, FetchedPosts:action.payload}
        case DefenitionActionPosts.SHOW_LOADER:
            return {...state, loader: true}
        case DefenitionActionPosts.HIDE_LOADER:
            return {...state, loader: false}
            default: return state
    }
    

}