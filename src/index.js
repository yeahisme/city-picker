import React, { Component } from 'react';
import { Input, Select } from 'antd';
import { fromJS, List } from 'immutable';

import CityPanel from './CityPanel';
import cities from './cities';
import './index.css';

class CityPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCityPanel: false,
            cities: fromJS(cities)
        };
    }

    onSelectCity(city, index){
        this.setState({
            cities: this.state.cities.updateIn([index, 'checked'], value => !value)
        });
    }

    render() {
        return (
            <span style={{ position: 'relative' }}>
                <Select multiple={true} onFocus={() => { console.log(111); } } />
                <CityPanel showCityPanel={this.state.showCityPanel}
                           cities={this.state.cities}
                           onSelectCity={this.onSelectCity.bind(this)}/>
            </span>
        );
    }
}

export default CityPicker;
