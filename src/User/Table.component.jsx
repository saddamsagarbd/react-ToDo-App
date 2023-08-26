import React from 'react';
import TableHeader from './TableHeader.component';
import TableBody from './TableBody.component';

function Table(props) {
    const { items, columns, sortColumn, sortOrder, onHandleSort } = props;
    return (
        <table className="table table-hover">
            <TableHeader 
                columns={ columns } 
                sortColumn= {sortColumn}
                sortOrder= {sortOrder} 
                onHandleSort = {onHandleSort}
            />
            <TableBody items={ items } columns={ columns } />
        </table>
    );
}

export default Table;