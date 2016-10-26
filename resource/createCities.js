/**
 * Created by q.chen on 2016/10/26.
 * create cities data
 */

const fs = require('fs');
const cheerio = require('cheerio');
const file = fs.readFileSync('./ctrip.html');

const $ = cheerio.load(file);

let $link = $('a[data]');
let data = [];
$link.each((index, element) => {
    let citySplit = $(element).attr('data').split('|');
    let cityItem = {
        cityNameEn: citySplit[0],
        cityNameCn: citySplit[1],
        cityCode: parseInt(citySplit[2]),
        checked: false
    };
    data.push(cityItem);
});
let json = JSON.stringify(data, null, 4);

fs.writeFileSync('./data.json', json);