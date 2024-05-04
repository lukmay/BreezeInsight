//react stateful component
import React from 'react';
import 'devextreme/dist/css/dx.material.lime.dark.css';
import Chart, {
    ArgumentAxis,
    Series,
    Legend,
    Tooltip
} from 'devextreme-react/chart';
import { getChartData } from '../../api/data';
import { SingleCard } from '../../layouts';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const data = await getChartData();
        this.setState({ data });
        this.setState({ loading: false });
    }

    

    render() {
        return (
            //while data loading show loading spinner and when data is loaded show charts for each box
            this.state.loading ? <div>Loading...</div> :
            <SingleCard title="Alle" >
                <div>
                    {this.state.data.boxes.map((box, index) => {
                        return (
                            //chart for each box with 2 series for each sensor data
                            <Chart
                                key={index}
                                title={box.boxId}
                                dataSource={box.records}
                            >
                                <ArgumentAxis argumentType="datetime" />
                                <Series
                                    key="sensorType"
                                    valueField="temperature"
                                    argumentField="timestamp"
                                    name="Temperature"
                                />
                                <Series
                                    key="sensorType"
                                    valueField="humidity"
                                    argumentField="timestamp"
                                    name="Humidity"
                                />
                                <Legend visible={true} />
                                <Tooltip enabled={true} customizeTooltip={customizeTooltip}/>
                            </Chart>
                        );
                    })}
                </div>
            </SingleCard>
        );
    }
}
function customizeTooltip(arg) {
    return {
        text: arg.valueText + (arg.seriesName === "Temperature" ? "°C" : "%")	
    };
}
export default ChartComponent;