// Get price from binance
const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
const myJson = await response.json(); //extract JSON from the http response
const price = myJson.price;
console.log(price);

// Get price from Posi

// Check diffrerent between those price

// Call API telegram when different > xx 




