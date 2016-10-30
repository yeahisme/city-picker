const cheerio = require('cheerio');
const fs = require('fs');

const cities = JSON.parse(fs.readFileSync('./data-all.js'));
const cityHtml = fs.readFileSync('./ctrip.html');
const $ = cheerio.load(cityHtml);

const $links = $('a[data]');
const cityArr = $links.map((index, item) => {
    const [cityNameEn,cityNameCn] = $(item).attr('data').split('|');
    const findedCity = cities.find(element => element.cityNameCn === cityNameCn);
    return findedCity;
}).get();
const value = cityArr.map(elem => `{this.renderCityItem(${elem.index})/*${elem.cityNameCn}*/}`).join('\n');

fs.writeFileSync('./city-panel-data.txt', value);
console.log('OK');
