import React, { PropTypes } from 'react';
import { Tabs, Tab, PageHeader } from 'react-bootstrap';

const PageTitle = 'Track Infomation';

class TrackInfo extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
        context.setTitle(PageTitle);

        this.state = {
            menu : 1
        }
    }

    handleSelect(menu) {
        this.setState({ menu });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>트랙이란?</PageHeader>
                    </div>
                </div>
    
                <div className="row">
                    <Tabs
                    activeKey = {this.state.key}
                    onSelect = {this.handleSelect}
                    id="track-infomation-tabs">
                        <Tab eventKey={1} title="소개">
                            <p>
                                SW융합대학 내 전공 4개 학과에서는 10여개의 트랙을 제공하여 학생들로 하여금 전공과 무관하게 이수가 가능하고 졸업 시 트랙 인증이 부여됩니다.
                            </p>
                            
                            <p>
                                HCI&비주얼컴퓨팅, 멀티미디어, 사물인터넷, 시스템응용, 인공지능, 가상현실, 정보보호, 데이터사이언스, SW교육, 사이버국방 의 트랙이 있고, 하나의 트랙을 인증받기 위해서 트랙기초교과의 전교과와 6개 이상의 교과를 트랙응용교과에서 선택이수하여야 합니다.
                            </p>
                        </Tab>
                        <Tab eventKey={2} title="Tab 2">
                            내용2
                        </Tab>
                        <Tab eventKey={3} title="Tab 3">
                            내용3
                        </Tab>
                    </Tabs>

                    
                </div>
            </div>
        );
    }
}

export default TrackInfo;
