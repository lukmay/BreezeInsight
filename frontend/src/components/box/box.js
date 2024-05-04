//statefull react component which gets boxId from url and fetches data for that box
import React from 'react';
import 'devextreme/dist/css/dx.material.lime.dark.css';
import Chart, {
    ArgumentAxis,
    Series,
    Legend,
    Tooltip
} from 'devextreme-react/chart';
import { getBoxData } from '../../api/data';
import { SingleCard } from '../../layouts';

class BoxChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            boxId: this.props.boxId,
            data: [],
            loading: true
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const data = await getBoxData(this.state.boxId);
        this.setState({ data });
        this.setState({ loading: false });
    }

    render() {
        return (
            this.state.boxId === undefined ? <div>Box not found</div> :
            this.state.loading ? <div>Loading...</div> :
            <SingleCard title={this.state.boxId} >
                <div>
                    <Chart
                        title="Temperature"
                        dataSource={this.state.data.records.filter(record => record.sensorType === "Temperature" )}
                    >
                        <ArgumentAxis argumentType="datetime" />
                        <Series
                            valueField="temperature"
                            argumentField="timestamp"
                            name="Temperature"
                        />
                        <Legend visible={false} />
                        <Tooltip enabled={true} customizeTooltip={customizeTooltip}/>
                    </Chart>
                    <Chart
                        title="Humidity"
                        dataSource={this.state.data.records.filter(record => record.sensorType === "Humidity" )}
                    >
                        <ArgumentAxis argumentType="datetime" />
                        <Series
                            valueField="humidity"
                            argumentField="timestamp"
                            name="Humidity"
                        />
                        <Legend visible={false} />
                        <Tooltip enabled={true} customizeTooltip={customizeTooltip}/>
                    </Chart>
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
export default BoxChart;