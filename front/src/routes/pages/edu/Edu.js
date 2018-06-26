
import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

class Edu extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>SW 교육</PageHeader>
                    </div>
                </div>

                <div className="row">
                    <p>
                        SW 교육 입니다.
                    </p>
                </div>
            </div>
        );
    }
}

export default Edu;