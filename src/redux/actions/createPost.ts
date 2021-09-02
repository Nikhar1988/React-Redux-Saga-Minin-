import { CreatePostActionType, DefenitionActionPosts, NewPostType } from "../../type/typePost"


export const createPost = (post:NewPostType): CreatePostActionType => {
    return {
        type: DefenitionActionPosts.CREATE_POST,
        payload: post
    }
}

export const fetchPost = (dispatch:any) => {
    return async () => {
        dispatch({type:DefenitionActionPosts.SHOW_LOADER})
        const request = await fetch( 'https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await request.json();
        dispatch({type:DefenitionActionPosts.HIDE_LOADER})
       dispatch({
           type:DefenitionActionPosts.FETCH_POST,
            payload:json})
            
        
    }   
}