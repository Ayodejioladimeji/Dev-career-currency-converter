// Global Variables

const addCurrencyBtn = document.querySelector(".add-currency-btn");  //------STRAT
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");


// THE EXCHANGE RATE API PASSING INTO A VARIABLE
// const dataURL = "https://api.exchangeratesapi.io/latest";
const dataURL = "http://data.fixer.io/api/latest?access_key=d4b01bf68d068fa93c2221b055105166&format=1";


// THE SECTION DISPLAYING THE DEFAULT CURRENCY
const initiallyDisplayedCurrencies = ["USD", "NGN", "EUR", "CAD", "RUB"];
let baseCurrency;
let baseCurrencyAmount;



// THE SECTION THAT DISPLAYS THE DATE

const dateElement = document.getElementById("date");

const options = {
  day:"numeric",
  month:"short",
  year:"numeric"
};

const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);



// The section that shows the time in 12 hours
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
      h = 12;
  }

  if (h > 12) {
      h = h - 12;
      session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + "" + session;
  document.getElementById("time").innerHTML = time;
  document.getElementById("time").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();




// DEFINING ALL CURRENCIES IN AN OBJECTS--------------------------##ONE
let currencies = [
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
  },
  {
    name: "Nigerian Naira",
    abbreviation: "NGN",
    symbol: "\u20A6",
    flagURL: "https://www.geonames.org/flags/x/ng.gif"
  },
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif"
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif"
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif"
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif"
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif"
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif"
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif"
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif"
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif"
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif"
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif"
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif"
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif"
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif"
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif"
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif"
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif"
  }
];




// ======================================================================================================##FOUR
// THE SECOND PAGE THAT ADDS CURRENCY TO THE LIST
// When you click it will add a currency from the list to the main page
addCurrencyList.addEventListener("click", addCurrencyListClick);


// THE FUNCTION OF THE ADD CURRENCY LIST----adds currency to the list
function addCurrencyListClick(event) {
  const clickedListItem = event.target.closest("li");
  if(!clickedListItem.classList.contains("disabled")) {
    const newCurrency = currencies.find(c => c.abbreviation===clickedListItem.getAttribute("data-currency"));
    if(newCurrency) newCurrenciesListItem(newCurrency);
  }
}
// ---------------------------------------------------------------------------------------------------------------




// =========================================================================================================#FIVE
// When you click the close button, it will delete or remove the currency from the main page.

// THE UL OF THE CURRENCIES LIST IN THE OBJECTS
currenciesList.addEventListener("click", currenciesListClick);


// THE FUNCTION OF THE CURRENCIES LIST
function currenciesListClick(event) {
  if(event.target.classList.contains("close")) {
    const parentNode = event.target.parentNode;
    parentNode.remove();
    addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove("disabled");

    //
    if(parentNode.classList.contains("base-currency")) {
      const newBaseCurrencyLI = currenciesList.querySelector(".currency");
      if(newBaseCurrencyLI) {
        setNewBaseCurrency(newBaseCurrencyLI);
        baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".input input").value);
      }
    }
  }
}
// --------------------------------------------------------------------------------------------------------------




// ===============================================================================================================

// THE FUNCTION THAT SET NEW BASE CURRENCY WHEN THE BASE CURRENCY IS REMOVED
function setNewBaseCurrency(newBaseCurrencyLI) {
  newBaseCurrencyLI.classList.add("base-currency");
  baseCurrency = newBaseCurrencyLI.id;
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
  currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
    const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
    const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(3);
    currencyLI.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
  });
}
// -----------------------------------------------------------------------------------------------------------------



// =======================================================================================================##SIX
// THE SECTION OF THE CURRENCY LIST INPUT CHANGE
currenciesList.addEventListener("input", currenciesListInputChange);


// THE FUNCTION OF THE CURRENCY LIST INPUT CHANGE
function currenciesListInputChange(event) {
  const isNewBaseCurrency = event.target.closest("li").id!==baseCurrency;
  if(isNewBaseCurrency) {
    currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
    setNewBaseCurrency(event.target.closest("li"));
  }

// CHANGE INPUT VALUES FOR OTHER CURRENCIES...

  const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value);
  if(baseCurrencyAmount!==newBaseCurrencyAmount || isNewBaseCurrency) {
    baseCurrencyAmount = newBaseCurrencyAmount;
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
      if(currencyLI.id!==baseCurrency) {
        const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
        const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(3);
        currencyLI.querySelector(".input input").value = exchangeRate*baseCurrencyAmount!==0 ?
        (exchangeRate*baseCurrencyAmount).toFixed(3) : "";
      }
    });
  }
}
// ------------------------------------------------------------------------------------------------------------



// ======================================================================================================##SEVEN
// THIS WILL DISABLE IF THE INPUT VALUE IS EMPTY...IF WE ALSO HAVE AN INVALID VALUE....PLACEHOLDER WILL SHOW
// THE SECTION OF THE CURRENCIES LIST FOCUS OUT
currenciesList.addEventListener("focusout", currenciesListFocusOut);


// THE FUNCTION OF THE CURRENCIES LIST FOCUS OUT
function currenciesListFocusOut(event) {
  const inputValue = event.target.value;
  if(isNaN(inputValue) || Number(inputValue)===0) event.target.value="";
  else event.target.value = Number(inputValue).toFixed(3);
}
// ---------------------------------------------------------------------------------------------------------------




// ======================================================================================================##EIGHT
// Calling the blur method to remove the focus from an element when the Enter is clicked.
// THE SECTION OF THE CURRENCY LIST KEY DOWN
currenciesList.addEventListener("keydown", currenciesListKeyDown);


// THE FUNCTION OF THE CURRENCY LIST KEY DOWN
function currenciesListKeyDown(event) {
  if(event.key==="Enter") event.target.blur();
}
// ---------------------------------------------------------------------------------------------------------------



// ===================================================================================================##TWO
// Auxiliary Functions

// THE FUNCTION THAT POPULATE/DISPLAY ADD CURRENCYLIST
function populateAddCyrrencyList() {
  for(let i=0; i<currencies.length; i++) {
    addCurrencyList.insertAdjacentHTML(
      "beforeend",
      `<li data-currency=${currencies[i].abbreviation}>
        <img src=${currencies[i].flagURL} class="flag">
        <span>${currencies[i].abbreviation} - ${currencies[i].symbol}</span>
        <p>${currencies[i].name}</p>
      </li>`
    );
  }
}
// ------------------------------------------------------------------------------------------------------------------



// ======================================================================================================##THREE
// THE FUNCTION THAT POPULATE/DISPLAY CURRENCY LIST
function populateCurrenciesList() {
  for(let i=0; i<initiallyDisplayedCurrencies.length; i++) {
    const currency = currencies.find(c => c.abbreviation===initiallyDisplayedCurrencies[i]);
    if(currency) newCurrenciesListItem(currency);
  }
}
// ------------------------------------------------------------------------------------------------------------



// ==========================================================================================================#THREE
// THE FUNCTION OF THE NEW CURRENCY LIST ITEMS
function newCurrenciesListItem(currency) {
  if(currenciesList.childElementCount===0) {
    baseCurrency = currency.abbreviation;
    baseCurrencyAmount = 0;
  }


  // DISABLE THE ADDED CURRENCIES IN THE ADD CURRENCY
  addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
  const baseCurrencyRate = currencies.find(c => c.abbreviation===baseCurrency).rate;
  const exchangeRate = currency.abbreviation===baseCurrency ? 1 : (currency.rate/baseCurrencyRate).toFixed(3);
  const inputValue = baseCurrencyAmount ? (baseCurrencyAmount * exchangeRate).toFixed(3) : "";

  currenciesList.insertAdjacentHTML(
    "beforeend",
    `<li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
      <div class="left">
        <img src=${currency.flagURL} class="flag">
      </div>

      <div class="info">
        <p class="input"><span class="currency-symbol">${currency.symbol}</span>
        <input placeholder="0.0000" value=${inputValue}></p>
        <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
        <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
      </div>

      <i class="close fa fa-times-circle" id="close"></i>

    </li>`
  );
}
// -------------------------------------------------------------------------------------------------------------



// THE SECTION THAT FETCHES DATA FROM THE API
fetch(dataURL)
  .then(res => res.json())
  .then(data => {
    // document.querySelector(".date").textContent = data.date;
    data.rates["EUR"] = 1;
    currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
    currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);

    // console.log(data);

    // CALLING THE TWO FUNCTIONS HERE
    populateAddCyrrencyList();
    populateCurrenciesList();
  })
  .catch(err => console.log(err));