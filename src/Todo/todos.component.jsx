import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '../User/Table.component';

function Todos() {

    const [ todos, setTodos ] = useState([]);

    const columns = [ 
        { name: "Id", path: "id"},
        { name: "Todo",  path: "todo"},
        { name: "Status", getContent: (item, id) => {
            return <td key={ `col-${id}` }>{ item.completed ? "Completed" : "Pending" }</td>
        }},
        { name: "User ID", path: "userId"},
        
    ];
    

    useEffect(() => {

        async function fetchTodos(){

            try {

                const { data } = await axios.get('https://dummyjson.com/todos');

                console.log(data.todos, 'todos')

                setTodos(data.todos)
                
            } catch (error) {

                console.group(error, 'error')

            }

        }

        fetchTodos();

    }, [])

    return ( 
        <>
            <div className='container my-3'>
                <Table
                    items={ todos } 
                    columns = { columns }
                 />
            </div>
        </>
    );
}

export default Todos;

{/* <i class="bi bi-arrow-down"></i> */}
{/* <i class="bi bi-arrow-up"></i> */}