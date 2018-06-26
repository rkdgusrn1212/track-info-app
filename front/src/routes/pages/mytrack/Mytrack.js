import React, { PropTypes } from 'react';
import { Col, Row, PageHeader, ProgressBar, Panel, Alert } from 'react-bootstrap';
import TrackInfo from '../../../TrackInfo';

const title = "나의 트랙이수현황";

class Mytrack extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
    }

    renderSingleTrack(trackName, trackSpec, lectures){
      let pCount = 0;//필수 충족수
      let pTotal = trackSpec["트랙기초교과"].length;//전체 필수과목
      let cCount = 0;//선택 충족수
      let cTotal;
      let pText="";
      let cText="";
      if(trackSpec["트랙응용교과"].length>6){
        cTotal = 6;
      }else{
        cTotal = trackSpec["트랙응용교과"].length;
      }
      for(let i=0; i< trackSpec["트랙기초교과"].length; i++){
        for(let j in lectures){
          if(lectures[j][7]==trackSpec["트랙기초교과"][i]){
            pCount++;
            if(pCount>1){
              pText+=", ";
            }
            pText+=trackSpec["트랙기초교과"][i];
          }
        }
      }
      for(let i=0; i< trackSpec["트랙응용교과"].length; i++){
        for(let j in lectures){
          if(lectures[j][7]==trackSpec["트랙응용교과"][i]){
            cCount++;
            if(cCount>1){
              cText+=", ";
            }
            cText+=trackSpec["트랙응용교과"][i];
          }
        }
      }
      let pPercent = pCount*100/(pTotal+cTotal);
      let cPercent = cCount*100/(pTotal+cTotal);
      return(
        <div>
          <p>{trackName}</p>
          <ProgressBar>
              <ProgressBar striped bsStyle="success" now={pPercent} key={1} label={pText} />
              <ProgressBar bsStyle="warning" now={cPercent} key={2} label={cText} />
            </ProgressBar>
        </div>
      );
    }

    renderTrack(lectures){
      if(lectures == null){
        return(<Panel
        header="트랙 별 나의 이수 현황">
            <Alert bsStyle="warning">로그인이 먼저 필요합니다.</Alert>
        </Panel>);
      }
      let items = [];
      for(let key in TrackInfo){
        items.push(this.renderSingleTrack(key,TrackInfo[key],lectures));
      }
      return(
        <Panel
        header="트랙 별 나의 이수 현황">
            {items}
        </Panel>
      );
    }

    render() {
      let lectures;
      if(localStorage.getItem('user')!=null){
        lectures = JSON.parse(localStorage.getItem('user')).lecture;
      }else{
        lectures = null;
      }

        return (
            <div>
                <Row>
                    <PageHeader>{title}</PageHeader>
                </Row>
                <Row>
                  <Col>
                    {this.renderTrack(lectures)}
                  </Col>
                </Row>
                <Row>
                    <Panel
                    header="트랙 별 이수 해야 할 과목">
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
                    </Panel>
                </Row>
            </div>
        );
    }
}

Mytrack.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Mytrack;
