import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['type1', 'type2', 'type3', 'type4','type5', 'type6'],
                datasets: [
                    {
                        label:'population',
                        data:[
                            345,657,345,654,786,345
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 32, 0.7)',
                            'rgba(25, 199, 32, 0.7)',
                            'rgba(255, 9, 132, 0.7)',
                            'rgba(55, 199, 132, 0.7)',
                            'rgba(25, 99, 255, 0.7)',
                            'rgba(155, 199, 132, 0.7)'
                        ]
                    }
                ]
            }
        }

    }

    render() {
        return (
            <div className="container">
                <div className="chart" style={{marginTop:90, backgroundColor:'white'}}>
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:true,
                                text:'Performance of Sakitha',
                                fontSize:25
                            },
                            legend:{
                                display: true,
                                position: 'bottom'
                            }
                        }}
                    />
                </div>

            </div>
        );
    }
}

export default Chart;
