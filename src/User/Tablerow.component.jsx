import React from 'react';

function Tablerow(props) {
    const { uniqueKey, columns, item } = props;
    return (
        <>
            <tr key={ uniqueKey }>
                {
                    columns.map((column, index) => {
                        if(column.path){
                            return <td key={ `col-${ index }` }>{ item[column.path] }</td>
                        }
                        return column.getContent(item, index)
                    })
                }
            </tr>
        </>
    );
}

export default Tablerow;