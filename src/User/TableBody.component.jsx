import React from 'react';
import Tablerow from './Tablerow.component';

function TableBody(props) {
    const { items, columns } = props
    return ( 
        <tbody>
            {
                items.map((item, index) => {
                    return <Tablerow
                        key={ index }
                        uniqueKey={ index }
                        columns={ columns }
                        item={ item }
                    />
                })
            }
        </tbody>
    );
}

export default TableBody;