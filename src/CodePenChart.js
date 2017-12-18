import React, { Component } from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";
// import "amcharts3/amcharts/plugins/export/export";
// import "amcharts3/amcharts/plugins/export/export.css";
import AmCharts from "@amcharts/amcharts3-react";

class CodePenChart extends Component {
    constructor(props){
        super(props);
        this.state = { data: {}};
        this.chart = null;
    }

    generateChartData() {
        var month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var chartData = [];

        for (var i = 0; i < 12; i++) {
            var a = Math.round(Math.random() * (200 + i)) + 100 + i;

            chartData.push({
                date: month[i],
                value: a,
            });
        }

        return chartData;
    }

    handleClick() {
        this.setState({ data: this.generateChartData()})
    }

    
    render() {
        if (this.chart !== null) {
            this.chart.animateAgain()
        }
        const config = {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,
            "listeners": [{
                "event": "init",
                "method": (e) => {
                    this.chart = e.chart
                }
            }],
            "dataProvider": this.state.data,
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
                "valueField": "value"
            }],
            "depth3D": 20,
            "angle": 40,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "date",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 90
            },
            "export": {
                "enabled": true
            }
        };

        return (
            <div>
                <button onClick={()=>this.handleClick()}>Click</button>
                <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
            </div>
        );
    }
}

export default CodePenChart;









