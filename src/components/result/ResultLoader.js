import React, { Component } from 'react'
import Chart from './Chart'

class ResultLoader extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }
    componentWillMount() {
        this.getChartData()
    }

    getChartData(){
        //call to the API
        this.setState({
            chartData:{
                labels: ['Living Tishues', 'Photosynthesis', 'Mixtures', 'Waves','Optics', 'Heat'],
                datasets: [
                    {
                        label:'population',
                        data:[
                            3,6,4,5,2,1
                        ],
                        backgroundColor: '#32db64'
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop:120, textAlign:'center', color:'red'}}>
                    <h3>Congratulations from win-win</h3>
                    <div>
                        <Chart chartData={this.state.chartData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultLoader
