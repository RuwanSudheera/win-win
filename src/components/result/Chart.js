import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom'
    };

    render() {
        return (
            <div className="container">
                <div className="chart" style={{marginTop:40, backgroundColor:'white', padding:40, border:'2px solid black'}}>
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:'Performance of Sakitha',
                                fontSize:25
                            },
                            legend:{
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                </div>

            </div>
        );
    }
}

export default Chart;
