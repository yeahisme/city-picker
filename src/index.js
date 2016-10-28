import React, { Component, PropTypes } from 'react';
import CityInput from './CityInput';
import { fromJS } from 'immutable';

import CityPanel from './CityPanel';
import cities from './cities';
import './index.css';

class CityPicker extends Component {
    static defaultProps = {
        disabled: false
    };

    constructor(props){
        super(props);
        this.state = {
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
        if('disabled' in nextProps){
            if(nextProps.disabled){
                this.setState({
                    open: false
                })
            }
        }
    }

    /**
     * set selected cities
     * @param cities
     */
    setSelectedCities(cities) {
        if(typeof cities === 'undefined') return;
        cities = Object.prototype.toString.call(cities) === '[object Array]' ? cities : [cities];
        // immutable list
        let stateCities = this.state.cities;
        cities.forEach( item => {
            let entry = stateCities.findEntry((value) => {
                return value.get('cityNameCn') === item
            });

            if(entry) {
                // the city in data source
                let [index] = entry;
                stateCities = stateCities.updateIn([index, 'checked'], value => true);
            } else {
                // not in data source
                stateCities = stateCities.push(fromJS({
                    checked: true,
                    cityNameCn: item,
                    cityCode: (new Date()).valueOf() // generate a random key
                }));
            }
        });
        this.setState({
            cities: stateCities
        });
    }

    /**
     * get selected cities from data source
     * @returns {any|*}
     */
    getSelectedCities(){
        return this.state.cities
            .filter((item, index) => item.get('checked'))
            .map((item, index) => item.get('cityNameCn')).toJS();
    }

    /**
     * on select city in city panel
     * @param city
     * @param index
     */
    onSelectCity(city, index){
        this.setState({
            cities: this.state.cities.updateIn([index, 'checked'], value => !value)
        }, () => {
            // trigger onChange event
            this.props.onChange(this.getSelectedCities());
        });
    }

    /**
     * remove city tag from input form
     * @param city
     */
    onRemoveCity(city) {
        let entry = this.state.cities.findEntry((value) => {
            return value.get('cityNameCn') === city
        });

        if(entry) {
            let [index] = entry;
            this.setState({
                cities: this.state.cities.updateIn([index, 'checked'], value => false)
            }, () => {
                // trigger onChange event
                this.props.onChange(this.getSelectedCities());
            });
        }

    }

    /**
     * open city panel
     * @param open
     */
    openCityPanel(open){
        this.setState({
            open
        });
    }

    /**
     * open search panel
     * @param searching
     */
    openSearchPanel(searching){
        this.setState({
            searching
        });
    }

    onPanelBlur(){
        this.blurTimer = setTimeout(() => {
            this.openCityPanel(false);
            this.openSearchPanel(false);
        }, 10);
    }

    onPanelFocus(){
        if(this.blurTimer){
            clearTimeout(this.blurTimer);
        }
    }

    render() {
        return (
            <span style={{ position: 'relative' }} className={"city_select_root"}>
                <CityInput style={{ width: '100%' }}
                           value={this.getSelectedCities()}
                           disabled={this.props.disabled}
                           open={this.state.open}
                           onAddCity={this.setSelectedCities.bind(this)}
                           onRemoveCity={this.onRemoveCity.bind(this)}
                           openCityPanel={this.openCityPanel.bind(this)}
                           openSearchPanel={this.openSearchPanel.bind(this)}/>
                <CityPanel cities={this.state.cities}
                           open={this.state.open}
                           openCityPanel={this.openCityPanel.bind(this)}
                           onSelectCity={this.onSelectCity.bind(this)}/>
            </span>
        );
    }
}

CityPicker.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.array,
    onChange: PropTypes.func
};

export default CityPicker;
