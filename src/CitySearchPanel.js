import React, { Component } from 'react';
import { List } from 'immutable';
import './CitySearchPanel.css';

const classnames = require('classnames');

class CitySearchPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="c_address_select">
                    <div className="c_address_wrap">
                        <div className="c_address_hd">h，按拼音排序</div>
                        <div className="c_address_list">
                            <a data="haerbin|哈尔滨|haerbin|哈尔滨|heb" style="display: block;" className="hover"><span>haerbin</span>哈尔滨</a>
                            <a data="haian|海安|haian|海安|ha" style="display: block;"><span>haian</span>海安</a>
                            <a data="haicheng|海城|haicheng|海城|hc" style="display: block;"><span>haicheng</span>海城</a>
                            <a data="haidong|海东|haidong|海东|hd" style="display: block;"><span>haidong</span>海东</a>
                            <a data="haifeng|海丰|haifeng|海丰|hf" style="display: block;"><span>haifeng</span>海丰</a>
                            <a data="haikou|海口|haikou|海口|hk" style="display: block;"><span>haikou</span>海口</a>
                            <a data="haimen|海门|haimen|海门|hm" style="display: block;"><span>haimen</span>海门</a>
                            <a data="haining|海宁|haining|海宁|hn" style="display: block;"><span>haining</span>海宁</a>
                            <a data="haixi|海西|haixi|海西|hx" style="display: block;"><span>haixi</span>海西</a>
                            <a data="haixing|海兴|haixing|海兴|hx" style="display: block;"><span>haixing</span>海兴</a>
                            <a data="haiyang|海阳|haiyang|海阳|hy" style="display: block;"><span>haiyang</span>海阳</a>
                            <a data="haiyuan2|海原|haiyuan2|海原|hy" style="display: block;"><span>haiyuan2</span>海原</a>
                        </div>
                        <div className="c_address_pagebreak" style="display: block;">
                            <a className="address_current" page="0">1</a>
                            <a page="1">2</a>
                            <a page="2">3</a>
                            <a page="3">4</a>
                            <a page="4">5</a>
                            <a page="1">-&gt;</a> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CitySearchPanel;
