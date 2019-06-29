import React, { Component } from 'react';
import TodoForm from "./TodoForm";
import  Todo from "./Todo";
import "./TodoList.css";


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }

    update(id, updateTask) {
        const updatedTodo = this.state.todos.map(todo => {
            if(todo.id === id) {
                return{
                    ...todo,
                    task: updateTask
                }
            }
            return todo;
        });
        this.setState({todos: updatedTodo});
    }

    toggleComplete(id) {
        const updatedTodo = this.state.todos.map(todo => {
            if(todo.id === id) {
                return{
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });
        this.setState({todos: updatedTodo});
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
                        key={todo.id} 
                        id={todo.id} 
                        task={todo.task}
                        completed= {todo.completed}
                        removeTodo={this.remove}
                        updateTodo = {this.update}
                        toggleTodo = {this.toggleComplete} 
                    />
        });

        return(
            <div className="TodoList">
                <h1>React<span>TodoListApp</span></h1>
                <ul>{todos}</ul>
                <TodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;