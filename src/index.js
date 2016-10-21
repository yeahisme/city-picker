import * as React from 'react';
import { Input } from 'antd';

import CityPanel from './CityPanel';

import './index.css';

class CityPicker extends React.Component<{}, {}> {
    render() {
        return (
            <span style={{ position: 'relative' }}>
                <Input onFocus={() => { console.log(111); } } />
                <CityPanel />
            </span>
        );
    }
}

export default CityPicker;
