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
                    <Panel
                    header="트랙 별 나의 이수 현황">
                        <ProgressBar>
                            <ProgressBar striped bsStyle="success" now={35} key={1} label={35} />
                            <ProgressBar bsStyle="warning" now={20} key={2} />
                            <ProgressBar active bsStyle="danger" now={10} key={3} />
                        </ProgressBar>
                    </Panel>
                  </Col>
                </Row>
                <Row>
                    <Panel
                    header="트랙 별 이수 해야 할 과목">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>학수 번호</th>
                                    <th>과목 명</th>
                                    <th>교수 명</th>
                                    <th>학년(학기)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1 </td>
                                    <td>Mark </td>
                                    <td>Otto </td>
                                    <td>@mdo </td>
                                </tr>
                                <tr>
                                    <td>2 </td>
                                    <td>Jacob </td>
                                    <td>Thornton </td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3 </td>
                                    <td>Larry </td>
                                    <td>the Bird </td>
                                    <td>@twitter </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Panel>
                </Row>
            </div>
        );
    }
}

Mytrack.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Mytrack;
