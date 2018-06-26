
import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

class Data extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>데이터 사이언스</PageHeader>
                    </div>
                </div>

                <div className="row">
                    <p>
                        데이터 사이언스 입니다.
                    </p>
                </div>
            </div>
        );
    }
}

export default VR;