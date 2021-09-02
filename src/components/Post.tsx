import React from "react"

type PostType = {
    post: string,
    key: number
}

const Post:React.FC<PostType> = ({post}):JSX.Element => {
   console.log(post)
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{post}</h5>  
            </div>
        </div>
    )
}
export default Post