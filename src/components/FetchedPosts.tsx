import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions/createPost";
import { Loader } from "./Loader";
import Post from "./Post";



 const FetchedPosts: React.FC = ({posts}:any):JSX.Element  => {
    const dispatch = useDispatch()
    const {FetchedPosts, loader} = useSelector((state:any) => state.posts)
    if (loader) {
        return <Loader/> 
    }
    if (!FetchedPosts.length) {
        return <button 
        className="btn btn-primary"
        onClick={fetchPost(dispatch)}
        >Загрузить</button>
    }
    return <>
             {FetchedPosts.map((post:any) => <Post post={post.title} key={post.id}/>)}
        </>
            
}

export default FetchedPosts;