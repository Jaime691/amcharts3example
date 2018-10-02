import React, { Component } from 'react';
import TableItem from './TableItem';
import './TableStyle.css';

class Table extends Component {
  state = {};

  render() {
    const { data } = this.props;
    const { buttonStyle } = styles;
    const items = data.map(item => (
      <TableItem key={item.country} item={item} />
    ));
    return (
      <div style={styles.divStyle}>
        <table style={styles.tableStyle}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Visitors</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
        <div style={styles.buttonsDiv}>
          {' '}
          <button
            style={styles.buttonStyle}
            onClick={() => this.props.handleClick(1)}
          >
            1
          </button>
          <button
            style={styles.buttonStyle}
            onClick={() => this.props.handleClick(2)}
          >
            2
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  divStyle: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px 15px 15px 15px '
  },
  tableStyle: {
    borderCollapse: 'collapse',
    width: '100%'
  },
  tableHeader: {
    backgroundColor: 'rgb(76, 107, 175)',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  },
  tableCell: {
    border: '2px solid black',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  },
  buttonsDiv: {
    margin: '15px 15px 15px 15px ',
    justifyContent: 'space-evenly',
    display: 'flex'
  },

  buttonStyle: {
    padding: '10px 30px 10px 30px',
    borderRadius: 4,
    fontSize: 18
  }
};

export default Table;
