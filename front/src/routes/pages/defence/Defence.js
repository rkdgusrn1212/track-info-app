
import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

class Defence extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>사이버 국방</PageHeader>
                    </div>
                </div>

                <div className="row">
                    <p>
                        사이버 국방 입니다.
                    </p>
                </div>
            </div>
        );
    }
}

export default Defence;