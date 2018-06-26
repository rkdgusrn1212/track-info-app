import React, { PropTypes } from 'react';
import { Panel, Col, Row, PageHeader } from 'react-bootstrap';

var RadarChart = require("react-chartjs").Radar;


const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

const data2= {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
        data: [20, 10, 4, 2]
    }]
};

const options = {
    scale: {
        // Hides the scale
        display: false
    }
};


class Findtrack extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Row>
                    <PageHeader>나와 비슷한 트랙 찾기</PageHeader>
                </Row>

                <Row className="text-center">
                  <Col sm={12}>
                    <Canvas responsive={true}>
                    <RadarChart data={data2} options={options}/>
                    </Canvas>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default Findtrack;
