import React, { Component, PropTypes } from 'react';
import { Select } from 'antd';
import CityInput from './CityInput';
import { fromJS } from 'immutable';

import CityPanel from './CityPanel';
import cities from './cities';
import './index.css';

class CityPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCityPanel: false,
            cities: fromJS(cities),
            open: false,
            searching: false
        };
    }

    componentWillReceiveProps(nextProps) {
        // if value updated
        if('value' in nextProps) {
            this.setSelectedCities(nextProps.value);
        }
    }

    setSelectedCities(cities) {
        cities = Object.prototype.toString.call(cities) === '[object Array]' ? cities : [cities];
        this.state.cities.map((item, index, iterate) => {
            let cityName = item.get('cityNameCn');
            cities.find((item, index)=>{
                return item === cityName;
            });
            iterate.updateIn([index, 'checked'], value => !value)
        });
    }

    getSelectedCities() {
        return this.state.cities
            .filter((item, index) => item.get('checked'))
            .map((item, index) => item.get('cityNameCn')).toJS();
    }

    onSelectCity(city, index){
        this.setState({
            cities: this.state.cities.updateIn([index, 'checked'], value => !value)
        }, () => {
            // trigger onChange event
            this.props.onChange(this.getSelectedCities());
        });
    }

    openCityPanel(open){
        this.setState({
            open
        });
    }

    openSearchPanel(searching){
        this.setState({
            searching
        });
    }

    onOuterBlur(){
        this.blurTimer = setTimeout(() => {
            this.openCityPanel(false);
            this.openSearchPanel(false);
        }, 10);
    }

    render() {
        return (
            <span style={{ position: 'relative' }} className={"city_select_root"}>
                <CityInput style={{ width: '100%' }}
                           value={this.getSelectedCities()}
                           disabled={this.props.disabled}
                           open={this.state.open}
                           openCityPanel={this.openCityPanel.bind(this)}
                           openSearchPanel={this.openSearchPanel.bind(this)}/>
                <CityPanel showCityPanel={this.state.showCityPanel}
                           cities={this.state.cities}
                           open={this.state.open}
                           openCityPanel={this.openCityPanel.bind(this)}
                           onSelectCity={this.onSelectCity.bind(this)}/>
            </span>
        );
    }
}

CityPicker.propTypes = {
    disabled: PropTypes.bool,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onChange: PropTypes.func
};

export default CityPicker;
