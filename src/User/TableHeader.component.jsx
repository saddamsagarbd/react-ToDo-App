import React from 'react';

function TableHeader(props) {
    const { columns, sortColumn, sortOrder, onHandleSort } = props
    return (
        <thead>
            <tr>
                {
                    columns.map((column, index) => {
                        return (
                            <th 
                                key={ index } 
                                scope="col" 
                                style={{cursor: "pointer"}}
                                onClick={() => onHandleSort(column.name, sortColumn === column.name ? sortOrder === "asc" ? "desc" : "asc" : "desc")}
                            >
                                { column.name }
                                {
                                    column.path && sortColumn === column.name && sortOrder === "asc" && (<i class="bi bi-arrow-down"></i>)
                                }
                                {
                                    column.path && sortColumn === column.name && sortOrder === "desc" && (<i class="bi bi-arrow-up"></i>)
                                }
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    );
}

export default TableHeader;