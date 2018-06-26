
import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

class Defence extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            base : ['웹해킹과보안', '사이버전개론', '시스템해킹과보안', '사이버관제및대응', '사이버공방종합훈련', '디지털포렌식', '네트워크해킹과 보안', '악성코드분석'],
            sub : []
        }
    }

    render() {
        let baseData = this.state.base;
        let subData = this.state.sub;

        let baseItems = [];
        let subItems = [];

        let tdStyle = {
            paddingLeft : 20,
            height: 40
        }

        let introStyle = {
            width: "97%",
            textAlign: "justify",
            paddingLeft: 20,
            lineHeight: 2,
        }

        for (var index = 0; index < baseData.length; index +=2) {
            if (index + 1 < baseData.length) {
                baseItems.push(
                    <tr>
                        <td style={tdStyle}>{baseData[index]}</td>
                        <td style={tdStyle}>{baseData[index+1]}</td>
                    </tr>
                );
            } else {
                baseItems.push(
                    <tr><td style={tdStyle}>{baseData[index]}</td></tr>
                );
            }
        }

        for (var index = 0; index < subData.length; index +=2) {
            if (index + 1 < subData.length) {
                subItems.push(
                    <tr>
                        <td style={tdStyle}>{subData[index]}</td>
                        <td style={tdStyle}>{subData[index+1]}</td>
                    </tr>
                );
            } else {
                subItems.push(
                    <tr><td style={tdStyle}>{baseData[index]}</td></tr>
                );
            }
        }

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>사이버 국방</PageHeader>
                    </div>
                </div>

                <div className="row">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        사이버 국방.
                    </p>
                </div>

                 <div className="row">
                    <h4>교과목들</h4>
                    <table className="track-info-table">
                        <tbody>
                        {baseItems}
                        </tbody>
                    </table>

                    <p>이 외 군관련 과목 7학점 이상 이수</p>
                </div>
            </div>
        );
    }
}

export default Defence;