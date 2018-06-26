import React, { PropTypes } from 'react';
import { Col, Row, PageHeader } from 'react-bootstrap';

class Graduate extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Row>
                    <PageHeader>트랙 심화과정</PageHeader>
                </Row>

                <Row className="text-center">
                    <Col md={6}>
                        <Row>
                            <h2>HCI&비주얼 컴퓨팅 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>멀티미디어 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>사물 인터넷 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>시스템응용 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>인공지능 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <h2>SW교육 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>가상현실 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>정보보호 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>데이터사이언스 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                        <Row>
                            <h2>사이버국방 트랙</h2>
                            <h4>교수님 성함</h4>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Graduate;
