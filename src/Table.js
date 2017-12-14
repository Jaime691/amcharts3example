import React, { Component } from 'react';
import TableItem from './TableItem';

class Table extends Component {
    state = {  }

    
    render() {
        const { data } = this.props;
        const { tableStyle, buttonStyle } = styles;
        const items = data.map(item => <TableItem key={item.country}item={item}/>);
        return (
            <div>
                <table style={tableStyle}>
                    <thead>
                        <tr >
                            <th>Country</th>
                            <th>Visitors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
                <button style={buttonStyle} onClick={()=>this.props.handleClick(1)}>1</button>
                <button style={buttonStyle} onClick={()=>this.props.handleClick(2)}>2</button>
            </div>
        );
    }
}

const styles = {
    tableStyle: {
        border: "2px solid black",
        borderRadius: 4
    },
    buttonStyle: {
        padding: "10px 30px 10px 30px",
        borderRadius: 4,
        fontSize: 18
    }
}

export default Table;