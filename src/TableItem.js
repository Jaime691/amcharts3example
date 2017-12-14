import React from 'react';

const TableItem = ({ item }) => {
    const { country, visits } = item;
    const { tableRow } = styles;

    return (
        <tr style={tableRow}>
            <td>{country}</td>
            <td>{visits}</td>
        </tr>
    );
};

const styles = {
    tableRow: {
        color: "red"
    }
}

export default TableItem;