import React from "react"

type PostType = {
    post: number,
    key: number
}

export default ({post}:PostType):JSX.Element => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Title here {post}</h5>  
            </div>
        </div>
    )
}