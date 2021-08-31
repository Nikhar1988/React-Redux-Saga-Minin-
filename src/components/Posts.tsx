import React from "react"
import Post from "./Post"

type PostsType = {
    posts:number[]
}

export default ({posts}:PostsType) => {
    if (!posts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return <div>
                {posts.map(post => <Post post={post} key={post}/>)}
            </div>
   
} 
