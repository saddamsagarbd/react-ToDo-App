import React, { Component } from 'react';
import axios from 'axios';

import Todo from './common/Todo.component';
import Button from './common/button.componenet';

class TodoList extends Component {
    state = { 
        todolist:[]
    } 

    componentDidMount(){
        axios.get("https://dummyjson.com/todos")
        .then(res => {
            console.log(res.data.todos);
            this.setState({todolist: res.data.todos})

        })
        .catch(err =>{
            console.log(err);
            alert("Error occured!");
        });
    }

    render() { 
        return (
            <>
                <div className='container'>
                    <div className="card">
                        <div className="card-header text-center">
                            <h1>Todo App</h1>
                        </div>
                        <div className="card-body text-center">                    
                            <Button
                                text="Add"
                                className="btn btn-primary"
                            />
                        </div>
                        <br/>
                        <div className="card-body text-center">
                            <h3><u>Todo List</u></h3>
                        </div>
                        {
                            this.state.todolist.map((todo, index) => {
                                return <Todo todo={todo.todo} key={index}/>
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}
 
export default TodoList;