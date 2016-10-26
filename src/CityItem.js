const classnames = require('classnames');
import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

class CityItem extends Component {
    constructor(props) {
        super(props);
    }

    onSelectCity() {
        console.log('onSelectCity');
        this.props.onSelectCity(this.props.city, this.props.index);
    }
    render() {
        return (
            <a  data={this.props.city.get('cityNameEn') + '|'
                    + this.props.city.get('cityNameCn') + '|'
                    + this.props.city.get('cityCode')}
                className={classnames({selected: this.props.city.get('checked')})}
                onClick={this.onSelectCity.bind(this)}>
                {this.props.city.get('cityNameCn')}
            </a>
        );
    }
}
CityItem.propTypes = {
    city: PropTypes.instanceOf(Map).isRequired,
    onSelectCity: PropTypes.func.isRequired
};

export default CityItem;
