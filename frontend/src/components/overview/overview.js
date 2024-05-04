//statefull react compontent that fetches box list from api and displays cards for each box
import React from 'react';
import 'devextreme/dist/css/dx.material.lime.dark.css';
import {Link} from 'react-router-dom';
import { getBoxList } from '../../api/data';

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            loading: true
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const boxes = await getBoxList();
        this.setState({ boxes });
        this.setState({ loading: false });
    }

    handleCardClick = (boxId) => {
        this.props.history.push(`/box/${boxId}`);
    }

    render() {
        return (
            //while data loading show loading spinner and when data is loaded show cards for each box
            this.state.loading ? <div>Loading...</div> :
                <div className='card-container'>
                    <Link to='/box/Alle' className='dx-card card'>
                        <div className='dx-card-header'>
                            <div className='dx-card-header-title'>Alle</div>
                        </div>
                    </Link>
                    {this.state.boxes.map((box) => {
                        return (
                            <Link to={`/box/${box.boxId}`} className='dx-card card' key={box.boxId}>
                                <div className='dx-card-header'>
                                    <div className='dx-card-header-title'>{box.boxId}</div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
        );
    }
}

export default Overview;