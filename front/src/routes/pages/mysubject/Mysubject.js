import React, { PropTypes } from 'react';
import { Panel, Col, Row, PageHeader } from 'react-bootstrap';

class Mysubject extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Row>
                    <PageHeader>이미 수강한 과목</PageHeader>
                </Row>

                <Row>
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
                </Row>
            </div>
        );
    }
}

export default Mysubject;
