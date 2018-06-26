import React, { PropTypes } from 'react';
import { Panel, Col, Row, PageHeader } from 'react-bootstrap';

import Donut from '../../../components/Donut';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

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
                    <Col md={4}>
                        <Panel header="가장 가까운 트랙">
                            <div>
                                <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="학점 평균이 높은 트랙">
                            <div>
                                <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header=" 수강을 가장 많이 한 트랙">
                            <div>
                                <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Findtrack;
