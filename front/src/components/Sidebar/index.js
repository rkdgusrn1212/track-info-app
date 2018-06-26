import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';
import {Row, Col, Image} from 'react-bootstrap';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
          <li>
           <div style={{height:'130px', width:'100%', 'padding-top':'20px'}}>
            <Image style={{width:'80px', height:'80px', margin:'0 auto'}} src="./logo.png" circle responsive/>
            <h5 style={{height:'20px', width:'80px', margin:'10px auto', 'text-align':'center'}}>홍길동</h5>
           </div>
          </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-home fa-fw" /> &nbsp;홈
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/trackinfo'); }} >
                <i className="fa fa-question fa-fw" /> &nbsp;트랙이란
              </a>
            </li>
            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                }); return false;
                }}
              >
                <i className="fa fa-info fa-fw" /> &nbsp;트랙소개<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.uiElementsCollapsed,
                })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/hci'); }} >
                    HCI & 비쥬얼컴퓨팅
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/multi'); }} >
                    멀티미디어
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/track/iot'); }}
                  >
                    사물인터넷
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/system'); }} >
                    시스템응용
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/ai'); }} >
                    인공지능
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/vr'); }} >
                    가상현실
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/security'); }} >
                    정보보호
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/data'); }} >
                    데이터사이언스
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/edu'); }} >
                    SW교육
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/track/defence'); }} >
                    사이버국방
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/graduate'); }} >
                <i className="fa fa-university fa-fw" /> &nbsp;대학원
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/mytrack'); }} >
                <i className="fa fa-flag fa-fw" /> &nbsp;나의 트랙이수현황
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/findtrack'); }} >
                <i className="fa fa-search fa-fw" /> &nbsp;나와 비슷한 트랙 찾기
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/mysubject'); }} >
                <i className="fa fa-graduation-cap fa-fw" /> &nbsp;이미 수강한 과목
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/board'); }} >
                <i className="fa fa-comments fa-fw" /> &nbsp;게시판
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
