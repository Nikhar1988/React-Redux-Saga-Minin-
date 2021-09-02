import React from "react"
import {connect} from 'react-redux'
import { InitialStateType } from "../type/typePost"
import Post from "./Post"


 

const Posts:React.FC =({syncPost}:any) => {
    
    if (!syncPost.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return <div>
                {syncPost.map((post:any) => <Post post={post.title} key={post.id}/>)}
            </div>   
} 

const mapStateToProps = (state:InitialStateType) => {
    
    return  {
        syncPost:state.posts.posts
    } 
}




export default connect(mapStateToProps, null)(Posts)