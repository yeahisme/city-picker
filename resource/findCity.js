const fs = require('fs');

const dataString = fs.readFileSync('./data-all.js');

const arr = JSON.parse(dataString);
const options = process.argv;
const arg = options[2];

// PropTypes.arrayOf(PropTypes.shape({
//         cityNameEn: PropTypes.string.isRequired,
//         cityNameCn: PropTypes.string.isRequired,
//         cityCode: PropTypes.number.isRequired,
//         index: PropTypes.number.isRequired,
//         checked: PropTypes.bool.isRequired
//     })),
const finded = arr.find(item => {
    if (item.cityNameEn.toLowerCase() === arg) return true;
    else if (item.cityNameCn === arg) return true;
    return false;
});
console.log(finded);
