import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Table from './Table';
import CodePenChart from "./CodePenChart";

// Component which contains the dynamic state for the chart
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  handleClick(selection){
    if (selection===1) {
      this.setState({
        data: [
          { country: "Netherlands", visits: 665}, 
          { country: "Russia", visits: 580}, 
          { country: "South Korea", visits: 443}, 
          { country: "Germany", visits: 1322}, 
          { country: "UK", visits: 1122}, 
          { country: "France", visits: 1114}, 
          { country: "Australia", visits: 384}, 
          { country: "Taiwan", visits: 338}, 
          { country: "Poland", visits: 328}]
      })
    } else if (selection===2) {
      this.setState({
        data: [{ country: "USA", visits: 4025}, 
          { country: "China", visits: 1882}, 
          { country: "Japan", visits: 1809}, 
          { country: "Canada", visits: 1441}, 
          { country: "Brazil", visits: 395}, 
          { country: "Italy", visits: 386}, 
          { country: "India", visits: 984}, 
          { country: "Spain", visits: 711}]
      })
    }
  }

  render() {

    var yMin = 1000,
      yMax = 1500;

    return (
      <div className="App">
        <Chart data={this.state.data} yMin={yMin} yMax={yMax} />
        <Table data={this.state.data} handleClick={this.handleClick.bind(this)} />
        <CodePenChart />

      </div>
    );
  }
}

export default App;
