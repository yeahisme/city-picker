import { fromJS } from 'immutable';
import cityData from './cities';

export const immutableCityData = fromJS(cityData);

export const mapCityItem = (cities) => {
    if (cities === null || typeof cities === 'undefined') return [];
    cities = Object.prototype.toString.call(cities) === '[object Array]' ? cities : [cities];

    return cities.map((item) => {
        let entry;

        if (typeof item === 'number') {
            // city code
            entry = immutableCityData.findEntry(value => value.get('cityCode') === item);
        } else if (typeof item === 'string') {
            // city name
            entry = immutableCityData.findEntry(value => value.get('cityNameEn').toLowerCase().indexOf(item.toLowerCase()) !== -1);
            if (!entry) {
                entry = immutableCityData.findEntry(value => value.get('cityNameCn').indexOf(item) !== -1);
            }
        } else if (typeof item === 'object') {
            // city object
            entry = immutableCityData.findEntry(value => value.get('cityCode') === item.cityCode);
        }

        if (entry) {
            // the city in data source
            const [index, value] = entry;
            return value.toJS();
        }
        window.alert('城市不在数据中。');
        return undefined;
    }).filter(item => item != null && typeof item !== 'undefined');
};
