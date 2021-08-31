import React from "react";
import Post from "./Post";

type PropsType={
    posts:Array<any>
}

 const FetchedPosts: React.FC<PropsType> = ({posts}):JSX.Element  => {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return <>
             {posts.map(post => <Post post={post} key={post}/>)}
        </>
            
}

export default FetchedPosts;