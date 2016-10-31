import React, { Component, PropTypes } from 'react';

import CityInput from './CityInput';
import CityPanel from './CityPanel';
import { immutableCityData, mapCityItem } from './util';
import './CityPicker.css';

class CityPicker extends Component {
    static defaultProps = {
        disabled: false,
        value: []
    };

    constructor(props) {
        super(props);
        this.state = {
            cities: immutableCityData,
            open: false,
            searching: false
        };
    }

    componentWillMount() {
        this.setSelectedCities(this.props.value);
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setSelectedCities(nextProps.value);
        }
        if ('disabled' in nextProps) {
            if (nextProps.disabled) {
                this.setState({
                    open: false
                });
            }
        }
    }

    /**
     * set selected cities
     * @param cities
     */
    setSelectedCities(cities, append = false) {
        if (cities === null || typeof cities === 'undefined') return;
        cities = Object.prototype.toString.call(cities) === '[object Array]' ? cities : [cities];
        // match property type
        if (!cities.every(item => (typeof item === 'object') && ('cityNameCn' in item)
            && ('cityNameEn' in item) && ('cityCode' in item) && ('index' in item))) {
            throw new Error('city item does not match shape of {cityNameCn, cityNameEn, cityCode, index, checked}');
        }
        const stateCities = this.state.cities.map((item) => {
            if (cities.find(elem => elem.cityCode === item.get('cityCode'))) {
                return item.set('checked', true);
            }
            if (!append) {
                return item.set('checked', false);
            }
            return item;
        });

        this.setState({
            cities: stateCities
        });
    }

    /**
     * on select city in city panel
     * @param city
     * @param index
     */
    onSelectCity(city, index) {
        this.setState({
            cities: this.state.cities.updateIn([index, 'checked'], value => !value)
        }, () => {
            // trigger onChange event
            this.props.onChange(this.getSelectedCities());
        });
    }

    /**
     * get selected cities from data source
     * @returns {any|*}
     */
    getSelectedCities() {
        return this.state.cities
            .filter(item => item.get('checked')).toJS();
        // .map(item => item.get('cityNameCn')).toJS();
    }


    /**
     * remove city tag from input form
     * @param city
     */
    onRemoveCity(city) {
        const entry = this.state.cities.findEntry(value => value.get('cityNameCn') === city.cityNameCn);

        if (entry) {
            const [index] = entry;
            this.setState({
                cities: this.state.cities.updateIn([index, 'checked'], () => false)
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
    openCityPanel(open) {
        this.setState({
            open
        });
    }

    /**
     * open search panel
     * @param searching
     */
    openSearchPanel(searching) {
        this.setState({
            searching
        });
    }

    onPanelBlur() {
        this.blurTimer = setTimeout(() => {
            this.openCityPanel(false);
            this.openSearchPanel(false);
        }, 10);
    }

    onPanelFocus() {
        if (this.blurTimer) {
            clearTimeout(this.blurTimer);
        }
    }

    render() {
        return (
            <span style={{ position: 'relative' }} className={"city_select_root"}>
                <CityInput
                    style={{ width: '100%' }}
                    value={this.getSelectedCities()}
                    disabled={this.props.disabled}
                    open={this.state.open}
                    onAddCity={this.setSelectedCities.bind(this)}
                    onRemoveCity={this.onRemoveCity.bind(this)}
                    openCityPanel={this.openCityPanel.bind(this)}
                    openSearchPanel={this.openSearchPanel.bind(this)}
                    />
                <CityPanel
                    cities={this.state.cities}
                    open={this.state.open}
                    openCityPanel={this.openCityPanel.bind(this)}
                    onSelectCity={this.onSelectCity.bind(this)}
                    />
            </span>
        );
    }
}
// {"cityNameEn":"Beijing","cityNameCn":"北京","cityCode":1,"index":1,"checked":false}
// PropTypes.arrayOf(PropTypes.shape({
//         cityNameEn: PropTypes.string.isRequired,
//         cityNameCn: PropTypes.string.isRequired,
//         cityCode: PropTypes.number.isRequired,
//         index: PropTypes.number.isRequired,
//         checked: PropTypes.bool.isRequired
//     })),
CityPicker.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape({
            cityNameEn: PropTypes.string,
            cityNameCn: PropTypes.string,
            cityCode: PropTypes.number,
            index: PropTypes.number,
            checked: PropTypes.bool
        })
    ])),
    onChange: PropTypes.func
};
CityPicker.mapCityItem = mapCityItem;

export default CityPicker;
