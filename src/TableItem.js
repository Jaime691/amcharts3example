import React from 'react';

const TableItem = ({ item }) => {
    const { country, visits } = item;


    return (
        <tr>
            <td>{country}</td>
            <td>{visits}</td>
        </tr>
    );
};


export default TableItem;