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
                            {this.renderCityItem(0)/*北京*/}
                            {this.renderCityItem(1)/*上海*/}
                            {this.renderCityItem(2)/*天津*/}
                            {this.renderCityItem(3)/*重庆*/}
                            {this.renderCityItem(5)/*大连*/}
                            {this.renderCityItem(6)/*青岛*/}
                            {this.renderCityItem(7)/*西安*/}
                            {this.renderCityItem(9)/*南京*/}
                            {this.renderCityItem(11)/*苏州*/}
                            {this.renderCityItem(14)/*杭州*/}
                            {this.renderCityItem(22)/*厦门*/}
                            {this.renderCityItem(25)/*成都*/}
                            {this.renderCityItem(26)/*深圳*/}
                            {this.renderCityItem(28)/*广州*/}
                            {this.renderCityItem(39)/*三亚*/}
                            {this.renderCityItem(513)/*台北*/}
                            {this.renderCityItem(54)/*香港*/}
                            {this.renderCityItem(119)/*济南*/}
                            {this.renderCityItem(317)/*宁波*/}
                            {this.renderCityItem(380)/*沈阳*/}
                            {this.renderCityItem(402)/*武汉*/}
                        </div>
                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.A })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">A</span>
                            {this.renderCityItem(1125)/*阿坝*/}
                            {this.renderCityItem(136)/*阿克苏*/}
                            {this.renderCityItem(138)/*阿勒泰*/}
                            {this.renderCityItem(135)/*安康*/}
                            {this.renderCityItem(140)/*安庆*/}
                            {this.renderCityItem(141)/*鞍山*/}
                            {this.renderCityItem(142)/*安顺*/}
                            {this.renderCityItem(144)/*安阳*/}
                            {this.renderCityItem(55)/*澳门*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">B</span>
                            {this.renderCityItem(61706)/*白城*/}
                            {this.renderCityItem(61730)/*百色*/}
                            {this.renderCityItem(9323)/*白沙*/}
                            {this.renderCityItem(2958)/*白山*/}
                            {this.renderCityItem(837)/*白银*/}
                            {this.renderCityItem(147)/*保定*/}
                            {this.renderCityItem(95)/*宝鸡*/}
                            {this.renderCityItem(158)/*保山*/}
                            {this.renderCityItem(50)/*保亭*/}
                            {this.renderCityItem(116)/*包头*/}
                            {this.renderCityItem(2959)/*巴彦淖尔*/}
                            {this.renderCityItem(3025)/*巴中*/}
                            {this.renderCityItem(151)/*北海*/}
                            {this.renderCityItem(0)/*北京*/}
                            {this.renderCityItem(145)/*蚌埠*/}
                            {this.renderCityItem(61745)/*本溪*/}
                            {this.renderCityItem(10328)/*毕节*/}
                            {this.renderCityItem(1108)/*滨州*/}
                            {this.renderCityItem(9765)/*博尔塔拉*/}
                            {this.renderCityItem(61669)/*亳州*/}
                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">C</span>
                            {this.renderCityItem(52)/*昌江*/}
                            {this.renderCityItem(176)/*沧州*/}
                            {this.renderCityItem(128)/*长春*/}
                            {this.renderCityItem(161)/*常德*/}
                            {this.renderCityItem(485)/*昌都*/}
                            {this.renderCityItem(10329)/*昌吉*/}
                            {this.renderCityItem(166)/*长沙*/}
                            {this.renderCityItem(113)/*长治*/}
                            {this.renderCityItem(173)/*常州*/}
                            {this.renderCityItem(171)/*朝阳*/}
                            {this.renderCityItem(175)/*潮州*/}
                            {this.renderCityItem(481)/*承德*/}
                            {this.renderCityItem(25)/*成都*/}
                            {this.renderCityItem(9134)/*澄迈*/}
                            {this.renderCityItem(511)/*郴州*/}
                            {this.renderCityItem(4186)/*嘉义*/}
                            {this.renderCityItem(162)/*赤峰*/}
                            {this.renderCityItem(177)/*池州*/}
                            {this.renderCityItem(3)/*重庆*/}
                            {this.renderCityItem(1173)/*崇左*/}
                            {this.renderCityItem(174)/*滁州*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">D</span>
                            {this.renderCityItem(32)/*大理市*/}
                            {this.renderCityItem(5)/*大连*/}
                            {this.renderCityItem(180)/*丹东*/}
                            {this.renderCityItem(53)/*儋州*/}
                            {this.renderCityItem(189)/*大庆*/}
                            {this.renderCityItem(112)/*大同*/}
                            {this.renderCityItem(6605)/*大兴安岭*/}
                            {this.renderCityItem(61821)/*达州*/}
                            {this.renderCityItem(194)/*德阳*/}
                            {this.renderCityItem(668)/*德州*/}
                            {this.renderCityItem(46)/*定安*/}
                            {this.renderCityItem(61612)/*定西*/}
                            {this.renderCityItem(44)/*东方*/}
                            {this.renderCityItem(182)/*东莞*/}
                            {this.renderCityItem(193)/*东营*/}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.E })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">E</span>
                            {this.renderCityItem(3035)/*鄂尔多斯*/}
                            {this.renderCityItem(61583)/*鄂州*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">F</span>
                            {this.renderCityItem(971)/*防城港*/}
                            {this.renderCityItem(204)/*佛山*/}
                            {this.renderCityItem(205)/*抚顺*/}
                            {this.renderCityItem(207)/*阜新*/}
                            {this.renderCityItem(210)/*阜阳*/}
                            {this.renderCityItem(211)/*福州*/}
                            {this.renderCityItem(2956)/*抚州*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">G</span>
                            {this.renderCityItem(6742)/*甘南*/}
                            {this.renderCityItem(218)/*赣州*/}
                            {this.renderCityItem(3177)/*甘孜*/}
                            {this.renderCityItem(61323)/*高雄*/}
                            {this.renderCityItem(61691)/*广安*/}
                            {this.renderCityItem(217)/*广元*/}
                            {this.renderCityItem(28)/*广州*/}
                            {this.renderCityItem(814)/*贵港*/}
                            {this.renderCityItem(29)/*桂林*/}
                            {this.renderCityItem(34)/*贵阳*/}
                            {this.renderCityItem(266)/*固原*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">H</span>
                            {this.renderCityItem(4)/*哈尔滨*/}
                            {this.renderCityItem(6723)/*海北*/}
                            {this.renderCityItem(6689)/*海东*/}
                            {this.renderCityItem(38)/*海口*/}
                            {this.renderCityItem(6534)/*海西*/}
                            {this.renderCityItem(224)/*邯郸*/}
                            {this.renderCityItem(14)/*杭州*/}
                            {this.renderCityItem(105)/*汉中*/}
                            {this.renderCityItem(61542)/*鹤壁*/}
                            {this.renderCityItem(3028)/*河池*/}
                            {this.renderCityItem(226)/*合肥*/}
                            {this.renderCityItem(905)/*鹤岗*/}
                            {this.renderCityItem(229)/*黑河*/}
                            {this.renderCityItem(238)/*衡水*/}
                            {this.renderCityItem(245)/*衡阳*/}
                            {this.renderCityItem(61296)/*河源*/}
                            {this.renderCityItem(61665)/*菏泽*/}
                            {this.renderCityItem(3199)/*贺州*/}
                            {this.renderCityItem(54)/*香港*/}
                            {this.renderCityItem(642)/*红河*/}
                            {this.renderCityItem(2921)/*新竹*/}
                            {this.renderCityItem(487)/*淮安*/}
                            {this.renderCityItem(221)/*淮北*/}
                            {this.renderCityItem(230)/*怀化*/}
                            {this.renderCityItem(235)/*淮南*/}
                            {this.renderCityItem(5922)/*花莲*/}
                            {this.renderCityItem(2957)/*黄冈*/}
                            {this.renderCityItem(6718)/*黄南*/}
                            {this.renderCityItem(20)/*黄山*/}
                            {this.renderCityItem(240)/*黄石*/}
                            {this.renderCityItem(87)/*呼和浩特*/}
                            {this.renderCityItem(247)/*惠州*/}
                            {this.renderCityItem(61641)/*葫芦岛*/}
                            {this.renderCityItem(3302)/*呼伦贝尔*/}
                            {this.renderCityItem(74)/*湖州*/}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.J })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">J</span>
                            {this.renderCityItem(264)/*佳木斯*/}
                            {this.renderCityItem(249)/*吉安*/}
                            {this.renderCityItem(263)/*江门*/}
                            {this.renderCityItem(61684)/*焦作*/}
                            {this.renderCityItem(484)/*嘉兴*/}
                            {this.renderCityItem(269)/*嘉峪关*/}
                            {this.renderCityItem(61547)/*揭阳*/}
                            {this.renderCityItem(129)/*吉林*/}
                            {this.renderCityItem(6726)/*基隆*/}
                            {this.renderCityItem(119)/*济南*/}
                            {this.renderCityItem(61748)/*金昌*/}
                            {this.renderCityItem(61683)/*晋城*/}
                            {this.renderCityItem(252)/*景德镇*/}
                            {this.renderCityItem(61711)/*荆门*/}
                            {this.renderCityItem(271)/*荆州*/}
                            {this.renderCityItem(255)/*金华*/}
                            {this.renderCityItem(265)/*济宁*/}
                            {this.renderCityItem(750)/*晋中*/}
                            {this.renderCityItem(270)/*锦州*/}
                            {this.renderCityItem(21)/*九江*/}
                            {this.renderCityItem(547)/*酒泉*/}
                            {this.renderCityItem(127)/*鸡西*/}
                            {this.renderCityItem(751)/*济源*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">K</span>
                            {this.renderCityItem(274)/*开封*/}
                            {this.renderCityItem(61323)/*高雄*/}
                            {this.renderCityItem(133)/*克拉玛依*/}
                            {this.renderCityItem(30)/*昆明*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">L</span>
                            {this.renderCityItem(1169)/*来宾*/}
                            {this.renderCityItem(749)/*莱芜*/}
                            {this.renderCityItem(283)/*廊坊*/}
                            {this.renderCityItem(86)/*兰州*/}
                            {this.renderCityItem(37)/*拉萨*/}
                            {this.renderCityItem(45)/*乐东*/}
                            {this.renderCityItem(288)/*乐山*/}
                            {this.renderCityItem(6485)/*凉山*/}
                            {this.renderCityItem(296)/*连云港*/}
                            {this.renderCityItem(61662)/*聊城*/}
                            {this.renderCityItem(294)/*辽阳*/}
                            {this.renderCityItem(295)/*辽源*/}
                            {this.renderCityItem(33)/*丽江*/}
                            {this.renderCityItem(61824)/*临沧*/}
                            {this.renderCityItem(114)/*临汾*/}
                            {this.renderCityItem(9166)/*临高*/}
                            {this.renderCityItem(51)/*陵水*/}
                            {this.renderCityItem(10189)/*临夏*/}
                            {this.renderCityItem(482)/*临沂*/}
                            {this.renderCityItem(91)/*林芝*/}
                            {this.renderCityItem(289)/*丽水*/}
                            {this.renderCityItem(508)/*六盘水*/}
                            {this.renderCityItem(297)/*柳州*/}
                            {this.renderCityItem(6645)/*陇南*/}
                            {this.renderCityItem(291)/*龙岩*/}
                            {this.renderCityItem(61510)/*娄底*/}
                            {this.renderCityItem(998)/*六安*/}
                            {this.renderCityItem(61679)/*漯河*/}
                            {this.renderCityItem(293)/*洛阳*/}
                            {this.renderCityItem(298)/*泸州*/}
                            {this.renderCityItem(6573)/*吕梁*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">M</span>
                            {this.renderCityItem(61615)/*马鞍山*/}
                            {this.renderCityItem(55)/*澳门*/}
                            {this.renderCityItem(61695)/*茂名*/}
                            {this.renderCityItem(61738)/*眉山*/}
                            {this.renderCityItem(2292)/*梅州*/}
                            {this.renderCityItem(312)/*绵阳*/}
                            {this.renderCityItem(123)/*牡丹江*/}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.N })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">N</span>
                            {this.renderCityItem(318)/*南昌*/}
                            {this.renderCityItem(319)/*南充*/}
                            {this.renderCityItem(9)/*南京*/}
                            {this.renderCityItem(321)/*南宁*/}
                            {this.renderCityItem(509)/*南平*/}
                            {this.renderCityItem(70)/*南通*/}
                            {this.renderCityItem(323)/*南阳*/}
                            {this.renderCityItem(2915)/*那曲*/}
                            {this.renderCityItem(892)/*内江*/}
                            {this.renderCityItem(317)/*宁波*/}
                            {this.renderCityItem(320)/*宁德*/}
                            {this.renderCityItem(1095)/*怒江*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">P</span>
                            {this.renderCityItem(324)/*盘锦*/}
                            {this.renderCityItem(61688)/*攀枝花*/}
                            {this.renderCityItem(6721)/*澎湖*/}
                            {this.renderCityItem(2455)/*平顶山*/}
                            {this.renderCityItem(325)/*平凉*/}
                            {this.renderCityItem(4611)/*屏东*/}
                            {this.renderCityItem(1127)/*萍乡*/}
                            {this.renderCityItem(3054)/*普洱*/}
                            {this.renderCityItem(552)/*莆田*/}
                            {this.renderCityItem(61820)/*濮阳*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">Q</span>
                            {this.renderCityItem(10075)/*黔东南*/}
                            {this.renderCityItem(9477)/*黔南*/}
                            {this.renderCityItem(6)/*青岛*/}
                            {this.renderCityItem(337)/*庆阳*/}
                            {this.renderCityItem(720)/*清远*/}
                            {this.renderCityItem(121)/*秦皇岛*/}
                            {this.renderCityItem(1176)/*钦州*/}
                            {this.renderCityItem(48)/*琼海*/}
                            {this.renderCityItem(49)/*琼中*/}
                            {this.renderCityItem(122)/*齐齐哈尔*/}
                            {this.renderCityItem(894)/*七台河*/}
                            {this.renderCityItem(339)/*泉州*/}
                            {this.renderCityItem(61576)/*曲靖*/}
                            {this.renderCityItem(340)/*衢州*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">R</span>
                            {this.renderCityItem(78)/*日喀则*/}
                            {this.renderCityItem(61696)/*日照*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">S</span>
                            {this.renderCityItem(366)/*三门峡*/}
                            {this.renderCityItem(367)/*三明*/}
                            {this.renderCityItem(39)/*三亚*/}
                            {this.renderCityItem(1)/*上海*/}
                            {this.renderCityItem(6499)/*商洛*/}
                            {this.renderCityItem(370)/*商丘*/}
                            {this.renderCityItem(343)/*上饶*/}
                            {this.renderCityItem(376)/*汕头*/}
                            {this.renderCityItem(734)/*汕尾*/}
                            {this.renderCityItem(353)/*韶关*/}
                            {this.renderCityItem(19)/*绍兴*/}
                            {this.renderCityItem(61701)/*邵阳*/}
                            {this.renderCityItem(380)/*沈阳*/}
                            {this.renderCityItem(26)/*深圳*/}
                            {this.renderCityItem(358)/*石家庄*/}
                            {this.renderCityItem(381)/*十堰*/}
                            {this.renderCityItem(3265)/*石嘴山*/}
                            {this.renderCityItem(911)/*双鸭山*/}
                            {this.renderCityItem(619)/*朔州*/}
                            {this.renderCityItem(369)/*四平*/}
                            {this.renderCityItem(606)/*松原*/}
                            {this.renderCityItem(61718)/*绥化*/}
                            {this.renderCityItem(669)/*遂宁*/}
                            {this.renderCityItem(61707)/*随州*/}
                            {this.renderCityItem(768)/*宿迁*/}
                            {this.renderCityItem(442)/*宿州*/}
                            {this.renderCityItem(11)/*苏州*/}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.T })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">T</span>
                            {this.renderCityItem(383)/*塔城*/}
                            {this.renderCityItem(382)/*泰安*/}
                            {this.renderCityItem(2925)/*台中*/}
                            {this.renderCityItem(2923)/*台南*/}
                            {this.renderCityItem(513)/*台北*/}
                            {this.renderCityItem(89)/*太原*/}
                            {this.renderCityItem(489)/*泰州*/}
                            {this.renderCityItem(488)/*台州*/}
                            {this.renderCityItem(395)/*唐山*/}
                            {this.renderCityItem(1572)/*桃园*/}
                            {this.renderCityItem(2)/*天津*/}
                            {this.renderCityItem(391)/*天水*/}
                            {this.renderCityItem(61639)/*铁岭*/}
                            {this.renderCityItem(97)/*铜川*/}
                            {this.renderCityItem(384)/*通化*/}
                            {this.renderCityItem(385)/*通辽*/}
                            {this.renderCityItem(386)/*铜陵*/}
                            {this.renderCityItem(10330)/*铜仁*/}
                            {this.renderCityItem(43)/*屯昌*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">U</span>
                            {this.renderCityItem(6467)/*乌兰察布*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">W</span>
                            {this.renderCityItem(41)/*万宁*/}
                            {this.renderCityItem(400)/*潍坊*/}
                            {this.renderCityItem(404)/*威海*/}
                            {this.renderCityItem(61621)/*渭南*/}
                            {this.renderCityItem(40)/*文昌*/}
                            {this.renderCityItem(9261)/*文山*/}
                            {this.renderCityItem(414)/*温州*/}
                            {this.renderCityItem(61723)/*乌海*/}
                            {this.renderCityItem(402)/*武汉*/}
                            {this.renderCityItem(403)/*芜湖*/}
                            {this.renderCityItem(35)/*乌鲁木齐*/}
                            {this.renderCityItem(549)/*武威*/}
                            {this.renderCityItem(10)/*无锡*/}
                            {this.renderCityItem(42)/*五指山*/}
                            {this.renderCityItem(6532)/*吴忠*/}
                            {this.renderCityItem(415)/*梧州*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">X</span>
                            {this.renderCityItem(22)/*厦门*/}
                            {this.renderCityItem(7)/*西安*/}
                            {this.renderCityItem(54)/*香港*/}
                            {this.renderCityItem(503)/*湘潭*/}
                            {this.renderCityItem(2982)/*湘西*/}
                            {this.renderCityItem(419)/*襄阳*/}
                            {this.renderCityItem(61528)/*咸宁*/}
                            {this.renderCityItem(94)/*咸阳*/}
                            {this.renderCityItem(786)/*孝感*/}
                            {this.renderCityItem(6604)/*新北市*/}
                            {this.renderCityItem(9319)/*兴安盟*/}
                            {this.renderCityItem(61538)/*邢台*/}
                            {this.renderCityItem(100)/*西宁*/}
                            {this.renderCityItem(429)/*新乡*/}
                            {this.renderCityItem(431)/*信阳*/}
                            {this.renderCityItem(507)/*新余*/}
                            {this.renderCityItem(434)/*忻州*/}
                            {this.renderCityItem(61597)/*宣城*/}
                            {this.renderCityItem(61685)/*许昌*/}
                            {this.renderCityItem(433)/*徐州*/}

                        </div>

                    </div>

                    <div className={classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.Y })}>
                        <div className="city_item_in">
                            <span className="city_item_letter">Y</span>
                            {this.renderCityItem(2496)/*雅安*/}
                            {this.renderCityItem(93)/*延安*/}
                            {this.renderCityItem(9010)/*盐城*/}
                            {this.renderCityItem(61295)/*阳江*/}
                            {this.renderCityItem(61499)/*阳泉*/}
                            {this.renderCityItem(12)/*扬州*/}
                            {this.renderCityItem(453)/*烟台*/}
                            {this.renderCityItem(435)/*宜宾*/}
                            {this.renderCityItem(436)/*宜昌*/}
                            {this.renderCityItem(439)/*宜春*/}
                            {this.renderCityItem(438)/*伊春*/}
                            {this.renderCityItem(84)/*伊犁*/}
                            {this.renderCityItem(85)/*银川*/}
                            {this.renderCityItem(603)/*营口*/}
                            {this.renderCityItem(454)/*鹰潭*/}
                            {this.renderCityItem(61715)/*益阳*/}
                            {this.renderCityItem(61561)/*永州*/}
                            {this.renderCityItem(459)/*岳阳*/}
                            {this.renderCityItem(447)/*榆林*/}
                            {this.renderCityItem(61703)/*玉林*/}
                            {this.renderCityItem(115)/*运城*/}
                            {this.renderCityItem(3005)/*云浮*/}
                            {this.renderCityItem(6472)/*云林*/}
                            {this.renderCityItem(148)/*玉溪*/}

                        </div>


                        <div className="city_item_in">
                            <span className="city_item_letter">Z</span>
                            {this.renderCityItem(512)/*枣庄*/}
                            {this.renderCityItem(24)/*张家界*/}
                            {this.renderCityItem(470)/*张家口*/}
                            {this.renderCityItem(548)/*张掖*/}
                            {this.renderCityItem(479)/*漳州*/}
                            {this.renderCityItem(467)/*湛江*/}
                            {this.renderCityItem(472)/*肇庆*/}
                            {this.renderCityItem(474)/*昭通*/}
                            {this.renderCityItem(478)/*郑州*/}
                            {this.renderCityItem(13)/*镇江*/}
                            {this.renderCityItem(473)/*中山*/}
                            {this.renderCityItem(475)/*中卫*/}
                            {this.renderCityItem(2454)/*周口*/}
                            {this.renderCityItem(16)/*舟山*/}
                            {this.renderCityItem(27)/*珠海*/}
                            {this.renderCityItem(471)/*驻马店*/}
                            {this.renderCityItem(506)/*株洲*/}
                            {this.renderCityItem(462)/*淄博*/}
                            {this.renderCityItem(464)/*自贡*/}
                            {this.renderCityItem(856)/*资阳*/}
                            {this.renderCityItem(477)/*遵义*/}

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
