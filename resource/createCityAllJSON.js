/**
 * Created by q.chen on 2016/10/28.
 * create city json from city-all
 */

const fs = require('fs');
const cityFile = fs.readFileSync('./city-all.txt');
const cityString = cityFile.toString();

const cities = cityString.split('@').map((item, index) => {
    let [cityNameEn, cityNameCn, cityCode] = item.split('|');
    return {
        cityNameEn,
        cityNameCn,
        cityCode: parseInt(cityCode),
        index: index - 1,
        checked: false,
    };
}).slice(1, -1);
const json = JSON.stringify(cities);

const value = 'const cities = ' + json + '; export default cities;';
fs.writeFileSync('./data-all.js', value);
fs.writeFileSync('../src/cities.js', value);