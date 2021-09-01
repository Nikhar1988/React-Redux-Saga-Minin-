import React from "react"
import {connect} from 'react-redux'
import { InitialStateType } from "../type/typePost"
import Post from "./Post"


type PostsType = {
    posts:number[]
}

const Posts:React.FC<PostsType> =({posts}) => {
    if (!posts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return <div>
                {posts.map(post => <Post post={post} key={post}/>)}
            </div>   
} 

const mapStateToProps = (state:InitialStateType) => {
    console.log(state)
    return state
}
export default connect(mapStateToProps, null)(Posts)