import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'antd';

import CityPicker from './src/index';

class Wrapper extends Component {
    addCity(e) {
        const form = this.props.form;
        form.setFieldsValue({
            city: ['上海']
        });
    }

    render(){
        const form = this.props.form;
        const getFieldProps = form.getFieldProps;
        return (
            <div>
                <button onClick={this.addCity.bind(this)}>City</button>
                <CityPicker {...getFieldProps('city')} />
            </div>
        );
    }
}


Wrapper = Form.create({
    onFieldsChange(props, fields){
        console.log(fields);
    }
})(Wrapper);

ReactDOM.render(<Wrapper />, document.getElementById('root'));
