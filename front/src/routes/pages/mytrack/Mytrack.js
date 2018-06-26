import React, { PropTypes } from 'react';
import { Col, Row, PageHeader, ProgressBar, Panel } from 'react-bootstrap';

const title = "나의 트랙이수현황";

class Mytrack extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
    }

    render() {
        return (
            <div>
                <Row>
                    <PageHeader>{title}</PageHeader>
                </Row>
                <Row>
                  <Col>
                    <Panel>
                    <ProgressBar>
                      <ProgressBar striped bsStyle="success" now={35} key={1} label={35} />
                      <ProgressBar bsStyle="warning" now={20} key={2} />
                      <ProgressBar active bsStyle="danger" now={10} key={3} />
                    </ProgressBar>
                    </Panel>
                  </Col>
                </Row>
            </div>
        );
    }
}

Mytrack.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Mytrack;
