import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import Animate from 'rc-animate';

import './CityPanel.css';
import CityItem from './CityItem';

const classnames = require('classnames');
/**
 * constant CITY_SECTION_KEY
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
 * default city panel
 */
class CityPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: CITY_SECTION_KEY.HOT
        };
    }

    /**
     * change city panel
     * @param sectionKey key of the panel
     * @returns {function()} click function callback
     */
    changeCitySection(sectionKey) {
        return () => {
            this.setState({
                section: sectionKey
            });
        };
    }

    /**
     * render city item in panel
     * @param startIndex start index
     * @param endIndex end index, not include end index item
     * @returns {*}
     */
    renderCityItems(startIndex, endIndex) {
        const cities = this.props.cities.slice(startIndex, endIndex);
        return cities.map((item, index) => {
            return (<CityItem city={item}
                index={startIndex + index}
                key={item.get('cityCode')}
                onSelectCity={this.props.onSelectCity} />);
        });
    }

    renderCityItem(index) {
        const city = this.props.cities.get(index);
        const key = city.get('cityCode');
        return <CityItem city={city} index={index} key={key} onSelectCity={this.props.onSelectCity} />;
    }

    /**
     * render city panel
     * @returns {XML}
     */
    render() {
        return (
            <Animate
                showProp={'data-show'}
                transitionName={'fade'}>
                <div
                    className="city_select_lhsl"
                    data-show={this.props.open}
                    style={{ display: this.props.open ? 'block' : 'none' }}>
                    <a className="close CQ_suggestionClose" onClick={() => { this.props.openCityPanel(false); } }>×</a>
                    <p className="title">支持中文/拼音/简拼输入</p>
                    <ul className="tab_box">
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.HOT })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.HOT)}>
                            <span>热门</span>
                        </li>
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.A })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.A)}>
                            <span>ABCD</span>
                        </li>
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.E })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.E)}>
                            <span>EFGH</span>
                        </li>
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.J })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.J)}>
                            <span>JKLM</span>
                        </li>
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.N })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.N)}>
                            <span>NOPQRS</span>
                        </li>
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.T })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.T)}>
                            <span>TUVWX</span>
                        </li>
                        <li className={classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.Y })}
                            onClick={this.changeCitySection(CITY_SECTION_KEY.Y)}><span>YZ</span></li>
                    </ul>

                    <div className={classnames({ 'city_item': true, 'hide': this.state.section !== CITY_SECTION_KEY.HOT })}>
                        <div>
                            {this.renderCityItem(0)}
                            {this.renderCityItem(1)}
                            {this.renderCityItem(2)}
                            {this.renderCityItem(3)}
                            {this.renderCityItem(5)}
                            {this.renderCityItem(6)}
                            {this.renderCityItem(7)}
                            {this.renderCityItem(9)}
                            {this.renderCityItem(11)}
                            {this.renderCityItem(14)}
                            {this.renderCityItem(22)}
                            {this.renderCityItem(25)}
                            {this.renderCityItem(26)}
                            {this.renderCityItem(28)}
                            {this.renderCityItem(39)}
                            {this.renderCityItem(513)}
                            {this.renderCityItem(54)}
                            {this.renderCityItem(119)}
                            {this.renderCityItem(317)}
                            {this.renderCityItem(380)}
                            {this.renderCityItem(402)}
                        </div>
                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.A })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">A</span>


                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">B</span>
                            {this.renderCityItems(30, 43)}
                            {this.renderCityItems(0, 1)}
                            {this.renderCityItems(44, 49)}
                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">C</span>
                            {this.renderCityItems(49, 71)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">D</span>
                            {this.renderCityItems(71, 86)}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.E })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">E</span>
                            {this.renderCityItems(86, 88)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">F</span>
                            {this.renderCityItems(88, 95)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">G</span>
                            {this.renderCityItems(95, 106)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">H</span>
                            {this.renderCityItems(106, 141)}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.J })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">J</span>
                            {this.renderCityItems(141, 164)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">K</span>
                            {this.renderCityItems(164, 168)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">L</span>
                            {this.renderCityItems(168, 199)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">M</span>
                            {this.renderCityItems(199, 206)}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.N })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">N</span>
                            {this.renderCityItems(206, 218)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">P</span>
                            {this.renderCityItems(218, 228)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">Q</span>
                            {this.renderCityItems(228, 242)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">R</span>
                            {this.renderCityItems(242, 244)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">S</span>
                            {this.renderCityItems(244, 271)}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.T })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">T</span>
                            {this.renderCityItems(271, 290)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">U</span>
                            {this.renderCityItems(290, 291)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">W</span>
                            {this.renderCityItems(291, 307)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">X</span>
                            {this.renderCityItems(307, 328)}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.Y })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">Y</span>
                            {this.renderCityItems(328, 352)}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">Z</span>
                            {this.renderCityItems(352, 373)}

                        </div>

                    </div>

                </div>
            </Animate>
        );
    }
}

CityPanel.propTypes = {
    open: PropTypes.bool,
    cities: PropTypes.instanceOf(List),
    onSelectCity: PropTypes.func,
    openCityPanel: PropTypes.func
};

export default CityPanel;
