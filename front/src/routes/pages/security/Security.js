
import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

class Security extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>정보보호</PageHeader>
                    </div>
                </div>

                <div className="row">
                    <p>
                        정보보호 입니다.
                    </p>
                </div>
            </div>
        );
    }
}

export default Security;