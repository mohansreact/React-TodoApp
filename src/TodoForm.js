import React, { Component } from 'react';
import uuid from "uuid/v4";
import "./TodoForm.css"

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({task: ""});
    }

    render() {
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">NewTodo</label>
                <input 
                    type="text"
                    name="task" 
                    id="task"
                    placeholder="newTodo" 
                    value={this.state.task} 
                    onChange={this.handleChange} 
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;