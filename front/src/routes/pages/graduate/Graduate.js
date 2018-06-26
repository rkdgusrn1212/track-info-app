import React, { PropTypes } from 'react';
import { Col, Row, Panel, PageHeader } from 'react-bootstrap';

class Graduate extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={12}>
                        <PageHeader>트랙 심화과정</PageHeader>
                    </Col>
                </Row>

                <Row className="text-center graduate">
                    <Col md={6}>
                        <Row>
                            <Panel header="HCI&비주얼 컴퓨팅 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="멀티미디어 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="사물 인터넷 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="시스템응용 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="인공지능 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Panel header="SW교육 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="가상현실 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="정보보호 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="데이터사이언스 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="사이버국방 트랙">
                                <h4>교수님 성함</h4>
                            </Panel>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Graduate;
