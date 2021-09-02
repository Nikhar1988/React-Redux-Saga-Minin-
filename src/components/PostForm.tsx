import React from "react";
import { connect } from "react-redux";
import {createPost} from '../redux/actions/createPost'
import { CreatePostActionType, NewPostType } from "../type/typePost";

type PropsType ={
    createPost: (newPost: NewPostType ) => CreatePostActionType
}

type StateType = {
    title: string,
    zopa: string
}

 class PostForm extends React.Component<PropsType, StateType> {
    constructor(props:any) {
        super(props)

        this.state ={
            title:'',
            zopa:''
        }
    }

    submitHandler =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title} = this.state
        
        if(!title.trim()) {
            return
        }

        const newPost = {
            title, id:Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({title:''})
    }
    
    handleInputChange =(event: React.ChangeEvent<HTMLInputElement>) => {
         this.setState(prev =>({...prev,...{ [event.target.name]:event.target.value
        }}))  
       
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        name="title"
                    />
                   
                </div> 
                <button className="btn btn-success" type="submit" >Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps )(PostForm)