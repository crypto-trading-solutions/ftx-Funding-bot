const axios = require('axios');

const dayMilliseconds = 24 * 60 * 60 * 1000;

function getSymbols(futuresData) {
    let symbolsArr = [];
    futuresData.forEach(element => {
        symbolsArr.push(element.future)
    });

    return symbolsArr;
}

async function Main() {

    let futuresGet = await axios.get('https://ftx.com/api/funding_rates');
    if (futuresGet.data.success == true) {
        let listAllFuturesSymbols = getSymbols(futuresGet.data.result);

        console.log(listAllFuturesSymbols);

        setInterval(async () => {
        }, dayMilliseconds);
    }
}

Main();