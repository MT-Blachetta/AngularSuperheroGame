const readline = require("readline");

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

//var currency = "USD";
//var euros = 0;



const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout,

});

 

 rl.question("How much money you have in EUR: ", function (euros) {

    console.log(`you have ${euros} EUR`);
    //euros = amount;
    rl.question("Where you want to travel: ", function (currency) {
        //currency = string;
        var rv = 0;
     
     switch(currency) {
         case "AUD":
             rv = euros * exchangeRates.rates.AUD;
             break;
             case "CHF":
                 rv = euros * exchangeRates.rates.CHF;
                 break;
                 case "GBP":
                     rv = euros * exchangeRates.rates.GBP;
                     break;
                 case "IDR":
                     rv = euros * exchangeRates.rates.IDR;
                     break;
                     case "JPY":
                         rv = euros * exchangeRates.rates.JPY;
                         break;
                         case "SEK":
                             rv = euros * exchangeRates.rates.SEK;
                             break;
                             case "USD":
                                 rv = euros * exchangeRates.rates.USD;
                                 break;
                                 default: 
                                 console.log("Using USD as default conversion currency => ");
                                 rv = euros * exchangeRates.rates.USD;
                                 currency = 'USD';
                                 break;
         
         
         }
     
         console.log("You have " + rv + " " + currency + " available !");
         rl.close();
       });

    //rl.close();

});
  

 
  



  /*

var rv;

switch(currency) {
    case "AUD":
        rv = euros * exchangeRates.rates.AUD;
        break;
        case "CHF":
            rv = euros * exchangeRates.rates.CHF;
            break;
            case "GBP":
                rv = euros * exchangeRates.rates.GBP;
                break;
            case "IDR":
                rv = euros * exchangeRates.rates.IDR;
                break;
                case "JPY":
                    rv = euros * exchangeRates.rates.JPY;
                    break;
                    case "SEK":
                        rv = euros * exchangeRates.rates.SEK;
                        break;
                        case "USD":
                            rv = euros * exchangeRates.rates.USD;
                            break;
                            default: 
                            console.log("Using USD as default conversion currency => ");
                            rv = euros * exchangeRates.rates.USD;
                            currency = 'USD';
                            break;
    
    
    }

    console.log("You have ${rv} ${currency} available");

*/
