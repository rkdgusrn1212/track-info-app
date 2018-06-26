import React,{PropTypes} from 'react';
import {PageHeader} from 'react-bootstrap';


const title = 'HCI & 비쥬얼 컴퓨팅';

function Hci(props, context){
  context.setTitle(title);
  return(
  <div>
    <PageHeader>
      HCI & 비쥬얼컴퓨팅
    </PageHeader>
  </div>
  );
}

Hci.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Hci;
