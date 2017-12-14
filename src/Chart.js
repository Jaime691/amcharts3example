import React, {Component} from "react";
import AmCharts from "@amcharts/amcharts3-react";

class Chart extends Component {
    state = {  }
    render() {

    const { data, yMin, yMax } = this.props;
    console.log( yMin, yMax)
    data.map(e => {
      if (e.visits < yMin) {
        e.color = "#0260B1";
      } else if (e.visits > yMax) {
        e.color = "#F2BD37";
      } else {
        e.color = "#D63230";
      }
      return e
    });
    console.log(data)
            const config = {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
  "guides": [
    {
      "fillAlpha": 0.10,
      "value": yMin,
      "toValue": yMax,
      "fillColor": "#00cc00",
      "lineColor": "#00cc00"
    }
  ],
    "dataProvider": data,
    "valueAxes": [{
        "position": "left",
        "title": "Visitors"
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "visits"
    }],
    "depth3D": 20,
	"angle": 40,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 90
    },
    "export": {
    	"enabled": true
     }

};
        return (
            <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
        );
    }
}

export default Chart; 