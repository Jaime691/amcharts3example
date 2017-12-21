import React, { Component } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
// import "amcharts3/amcharts/plugins/export/export";
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chart = null;
  }
  render() {
    if (this.chart !== null) {
      this.chart.animateAgain();
    }

    const { data, yMin, yMax } = this.props;

    data.map(e => {
      if (e.visits < yMin) {
        e.color = '#0260B1';
      } else if (e.visits > yMax) {
        e.color = '#F2BD37';
      } else {
        e.color = '#D63230';
      }
      return e;
    });

    const config = {
      theme: 'light',
      type: 'serial',
      startDuration: 2,
      listeners: [
        {
          event: 'init',
          method: e => {
            this.chart = e.chart;
          }
        }
      ],
      guides: [
        {
          fillAlpha: 0.1,
          value: yMin,
          toValue: yMax,
          fillColor: '#00cc00',
          lineColor: '#00cc00'
        }
      ],
      dataProvider: data,
      valueAxes: [
        {
          position: 'left',
          title: 'Visitors'
        }
      ],
      graphs: [
        {
          balloonText: '[[category]]: <b>[[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 1,
          lineAlpha: 0.1,
          type: 'column',
          valueField: 'visits'
        }
      ],
      depth3D: 20,
      angle: 40,
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 90
      },
      export: {
        enabled: true
      }
    };
    return (
      <AmCharts.React
        style={{ width: '100%', height: '500px' }}
        options={config}
      />
    );
  }
}

export default Chart;
