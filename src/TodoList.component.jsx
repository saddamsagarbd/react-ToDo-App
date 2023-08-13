import React from 'react';
import axios from 'axios';

import Todo from './common/Todo.component';
import Button from './common/button.componenet';
import { useState } from 'react';
import { useEffect } from 'react';

function TodoList() {
    const [todolist, setTodolist] = useState([]); 

    // useEffect(){
    //     async function getTodos(){
    //         const res = await axios.get("https://dummyjson.com/todos");
    //         setTodolist(res.data.todos);
    //     }
    //     axios.get("https://dummyjson.com/todos")
    //     .then(res => {
    //         console.log(res.data.todos);
    //         this.setState({todolist: res.data.todos})

    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         alert("Error occured!");
    //     });
    // }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("https://dummyjson.com/todos");
                setTodolist(res.data.todos);  // setTodolist set todos array in todolist variable         
            } catch (error) {
                console.log(error);
                alert("Error occured");            
            }
        }
        fetchData();
    }, []);


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
                        todolist.map((todo, index) => {
                            return <Todo todo={todo.todo} key={index}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}
 
export default TodoList;