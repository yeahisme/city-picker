import React, { Component } from 'react';

class CityItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a data="Beijing|北京|1">北京</a>
        );
    }
}
CityItem.propTypes = {
};

export default CityItem;
