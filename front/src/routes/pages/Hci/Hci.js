import React,{PropTypes} from 'react';
import {PageHeader} from 'react-bootstrap';


const title = 'HCI & 비쥬얼컴퓨팅';

function Hci(props, context){
  context.setTitle(title);
  return(
    <div className="row">
        <div className="col-lg-12">
            <PageHeader>HCI & 비쥬얼컴퓨팅</PageHeader>
        </div>
    </div>
  );
}

Hci.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Hci;
