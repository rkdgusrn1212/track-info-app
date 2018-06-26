import React, { PropTypes } from 'react';
import { Col, Row, PageHeader } from 'react-bootstrap';

const applyImg = require('../../../public/track_apply.png');

class Apply extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Col lg={12}>
                        <PageHeader>트랙신청</PageHeader>
                    </Col>
                </div>
    
                <div style={{textAlign: "center"}} className="row">
                    <Col md={6}>
                        <a href="http://www.naver.com">
                            <img style={{width: "60%"}} src={applyImg}/>
                        </a>
                    </Col>
                    <br/>
                    <Col md={6}>
                        <Row>
                            <h3>신청 일자</h3>
                            <h4>2018.05.14 ~ 2018.05.31</h4>
                        </Row>
                        <Row>
                            <h3>문의</h3>
                            <h4>조윤식 교수</h4>
                            <h4>(yscho@sejong.ac.kr)</h4>
                        </Row>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Apply;
