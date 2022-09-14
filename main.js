async function main() {
// Get price from binance
const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
const myJson = await response.json(); //extract JSON from the http response
const price_of_binance = Math.round(myJson.price*100)/100;
console.log(price_of_binance);

// Get price from Posi
var x = document.title.toString();
var doan_dau = x.slice(0,2);
var doan_sau = x.slice(3,10);
var price_of_posi_string = doan_dau + doan_sau;
var price_of_posi = parseFloat(price_of_posi_string);
console.log(price_of_posi);

// Check diffrerent between those price
var different = Math.abs(price_of_binance - price_of_posi);
var different = Math.round(different*100)/100;
// Call API telegram when different > xx 
var token = "5665439717:AAGPEnkul6JLNBa1BssjlgGK0CMPFilyiw0";
var chat_id = 1354543512;
if (different > 100) {
    const response2 = await fetch('https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='+'gia binance:'+price_of_binance+'--gia posi:'+price_of_posi+'--different:'+different, {
        method: 'POST',
        body: "123", // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
}

setInterval(main,10000);
