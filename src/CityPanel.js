const classnames = require('classnames');
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';

import './CityPanel.css';
import CityItem from './CityItem';

console.log('init');

/**
 * 常量
 * @type {{HOT: string, A: string, E: string, J: string, N: string, T: string, Y: string}}
 */
const CITY_SECTION_KEY = {
    HOT: 'HOT',
    A: 'A',
    E: 'E',
    J: 'J',
    N: 'N',
    T: 'T',
    Y: 'Y'
};

/**
 * 默认城市面板
 */
class CityPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            section: CITY_SECTION_KEY.HOT
        };
    }

    /**
     * 切换城市面板
     * @param sectionKey 面板的key
     * @returns {function()} 点击事件的回调函数
     */
    changeCitySection(sectionKey) {
        return () => {
            this.setState({
                section: sectionKey
            });
        };
    }

    /**
     * 渲染城市数据
     * @param startIndex 起始索引
     * @param endIndex 结束索引，不包含endIndex
     * @returns {*}
     */
    renderCityItem(startIndex, endIndex) {
        const cities = this.props.cities.slice(startIndex, endIndex);
        return cities.map((item, index) => {
            return <CityItem city={item} index={startIndex + index} key={item.get('cityCode')} onSelectCity={this.props.onSelectCity}/>
        });
    }

    /**
     * 渲染城市面板
     * @returns {XML}
     */
    render() {

        return (
            <div className="city_select_lhsl">
                <a className="close CQ_suggestionClose">×</a>
                <p className="title">支持中文/拼音/简拼输入</p>
                <ul className="tab_box">
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.HOT})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.HOT)}>
                        <span>热门</span>
                    </li>
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.A})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.A)}>
                        <span>ABCD</span>
                    </li>
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.E})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.E)}>
                        <span>EFGH</span>
                    </li>
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.J})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.J)}>
                        <span>JKLM</span>
                    </li>
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.N})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.N)}>
                        <span>NOPQRS</span>
                    </li>
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.T})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.T)}>
                        <span>TUVWX</span>
                    </li>
                    <li className={classnames({'hot_selected': this.state.section === CITY_SECTION_KEY.Y})}
                        onClick={this.changeCitySection(CITY_SECTION_KEY.Y)}><span>YZ</span></li>
                </ul>

                <div className={classnames({'city_item': true, 'hide': this.state.section != CITY_SECTION_KEY.HOT})}>
                    <div>
                        {this.renderCityItem(0, 21)}
                    </div>
                </div>

                <div className={classnames({'city_item': true, hide: this.state.section != CITY_SECTION_KEY.A})}>
                    <div className="city_item_in">
                        <span className="city_item_letter">A</span>
                        {this.renderCityItem(21, 30)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">B</span>
                        {this.renderCityItem(30, 50)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">C</span>
                        {this.renderCityItem(50, 71)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">D</span>
                        {this.renderCityItem(71, 86)}

                    </div>

                </div>

                <div className={classnames({'city_item': true, hide: this.state.section != CITY_SECTION_KEY.E})}>
                    <div className="city_item_in">
                        <span className="city_item_letter">E</span>
                        {this.renderCityItem(86, 88)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">F</span>
                        {this.renderCityItem(88, 95)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">G</span>
                        {this.renderCityItem(95, 106)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">H</span>
                        {this.renderCityItem(106, 141)}

                    </div>

                </div>

                <div className={classnames({'city_item': true, hide: this.state.section != CITY_SECTION_KEY.J})}>
                    <div className="city_item_in">
                        <span className="city_item_letter">J</span>
                        {this.renderCityItem(141, 164)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">K</span>
                        {this.renderCityItem(164, 168)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">L</span>
                        {this.renderCityItem(168, 199)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">M</span>
                        {this.renderCityItem(199, 206)}

                    </div>

                </div>

                <div className={classnames({'city_item': true, hide: this.state.section != CITY_SECTION_KEY.N})}>
                    <div className="city_item_in">
                        <span className="city_item_letter">N</span>
                        {this.renderCityItem(206, 218)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">P</span>
                        {this.renderCityItem(218, 228)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">Q</span>
                        {this.renderCityItem(228, 242)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">R</span>
                        {this.renderCityItem(242, 244)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">S</span>
                        {this.renderCityItem(244, 271)}

                    </div>

                </div>

                <div className={classnames({'city_item': true, hide: this.state.section != CITY_SECTION_KEY.T})}>
                    <div className="city_item_in">
                        <span className="city_item_letter">T</span>
                        {this.renderCityItem(271, 290)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">U</span>
                        {this.renderCityItem(290, 291)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">W</span>
                        {this.renderCityItem(291, 307)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">X</span>
                        {this.renderCityItem(307, 328)}

                    </div>

                </div>

                <div className={classnames({'city_item': true, hide: this.state.section != CITY_SECTION_KEY.Y})}>
                    <div className="city_item_in">
                        <span className="city_item_letter">Y</span>
                        {this.renderCityItem(328, 352)}

                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">Z</span>
                        {this.renderCityItem(352, 373)}

                    </div>

                </div>

            </div>
        );
    }
}

CityPanel.propTypes = {
    showCityPanel: PropTypes.bool,
    cities: PropTypes.instanceOf(List)
};

export default CityPanel;
