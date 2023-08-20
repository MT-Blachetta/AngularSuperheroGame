const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
  
  });

  const inputValues = [
    '10.00 €',
    9.99,
    '12 Euro',
    '19,99',
    10,
    '8,99',
    99,
    '13.99',
    '13',
    9.9,
    '14.0 Euro',
    '15.8'
];

const exchangeRates = {
    rates: {
        AUD: 1.6359,
        CHF: 1.0736,
        GBP: 0.90575,
        IDR: 16925.87,
        JPY: 122.63,
        SEK: 10.301,
        USD: 1.1448,
    },
    base: 'EUR',
};

rl.question("Choose a currency for conversion: ", function (currency) { 

    convertedValues = inputValues.map(function(x){
        if(typeof x == 'string'){ x = Number(x.split(" ")[0].replace(',','.'))}
         return x;
    });
    
    var resultValues = [];
    
    switch(currency) {
    case "AUD":
        resultValues = convertedValues.map((x) => x * exchangeRates.rates.AUD );
        break;
        case "CHF":
            resultValues = convertedValues.map((x) => x * exchangeRates.rates.CHF );
            break;
            case "GBP":
                resultValues = convertedValues.map((x) => x * exchangeRates.rates.GBP );
                break;
            case "IDR":
                resultValues = convertedValues.map((x) => x * exchangeRates.rates.IDR );
                break;
                case "JPY":
                    resultValues = convertedValues.map((x) => x * exchangeRates.rates.JPY );
                    break;
                    case "SEK":
                        resultValues = convertedValues.map((x) => x * exchangeRates.rates.SEK );
                        break;
                        case "USD":
                            resultValues = convertedValues.map((x) => x * exchangeRates.rates.USD );
                            break;
                            default: 
                            console.log("Using USD as default conversion currency => ");
                            resultValues = convertedValues.map((x) => x * exchangeRates.rates.USD );
                            break;
    
    
    }
    
    //let resultValues = convertedValues.map((x) => x * exchangeRates.rates.AUD );
    //let CHF_values = convertedValues.map((x) => x * exchangeRates.rates.CHF );
    //let GBP_values = convertedValues.map((x) => x * exchangeRates.rates.GBP );
    //let IDR_values = convertedValues.map((x) => x * exchangeRates.rates.IDR );
    //let JPY_values = convertedValues.map((x) => x * exchangeRates.rates.JPY );
    //let SEK_values = convertedValues.map((x) => x * exchangeRates.rates.SEK );
    //let USD_values = convertedValues.map((x) => x * exchangeRates.rates.USD );
    
    console.log("converting currencies... \n")
    
    convertedValues.forEach(function (value, i) {
        console.log("%d EUR = %d %s", value, resultValues[i], currency);
    });

    rl.close();

});







