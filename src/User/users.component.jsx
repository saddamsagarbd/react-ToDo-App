import axios from 'axios';
import * as _ from 'lodash';
import React, { useState, useEffect } from 'react';
import Table from './Table.component';
import Pagination from '../common/pagination.component';

function Users() {

    const [ users, setUsers ] = useState([]);
    const [ sortColumn, setSortColumn ] = useState("Id");
    const [ sortOrder, setSortOrder ] = useState("asc");
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ limit, setLimit ] = useState(5);
    
    


    const columns = [ 
        { name: "Id", path: "id"},
        { name: "First Name",  path: "firstName"},
        { name: "Last Name",  path: "lastName"},
        { name: "Email", path: "email"},
        { name: "Age", path: "age"},
        { name: "Hair Color", getContent: (item, id) => {
            return <td key={ `col-${id}` }>{ item.hair.color }</td>
        }},
        
    ];
    

    useEffect(() => {

        async function fetchUsers(){

            try {

                const { data } = await axios.get('https://dummyjson.com/users');

                setUsers(data.users);
                
            } catch (error) {

                console.group(error, 'error')

            }

        }

        fetchUsers();

    }, [])


    const handleSort = (column, order) => {
        setSortColumn(column);
        setSortOrder(order);
    }

    const sortUsers = () => {
        const column = columns.find((column) => column.name === sortColumn);
        if(column.path){
            const sortedUsers = _.orderBy(users, column.path, sortOrder);
            return sortedUsers;
        }

    }

    const paginatedUsers = () => {
        /*
            1 => (0 -5)
            2 => (6 -10)
        */

        const sortedUsers = sortUsers();
        const offset = (currentPage - 1) * limit;
        const paginatedUsers = _.drop(sortedUsers, offset).slice(0, limit);
        return paginatedUsers;
    }


    return ( 
        <>
            <div className='container my-3'>
                <Table 
                    items={ paginatedUsers() } 
                    columns = { columns } 
                    sortColumn= {sortColumn}
                    sortOrder= {sortOrder} 
                    onHandleSort={handleSort}
                />
                <Pagination 
                    limit={ limit }
                    items={ users }
                    currentPage={ currentPage }
                    setCurrentPage={ setCurrentPage }
                />
            </div>
        </>
    );
}

export default Users;

/**
 * to make pagination
 * 1. set limit : limit is number of rows will display in a page
 * 2. set currentPage
 * 
 */