import React from "react";

type StateType = {
    title: string
}

export default class PostForm extends React.Component<{},StateType> {
    constructor(props:any) {
        super(props)

        this.state ={
            title:''
        }
    }

    submitHandler =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title} = this.state

        const newPost = {
            title, id:Date.now().toString()
        }
        console.log(newPost)
        this.setState({title:''})
    }
    
    handleInputChange =(event: React.ChangeEvent<HTMLInputElement>) => {
         this.setState(prev =>({...prev,...{ [event.target.name]:event.target.value
        }}))  
        console.log(event.target.name)
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