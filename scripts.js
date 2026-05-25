const convertButton = document.querySelector('.convert-button');
const currencySelectToConvert = document.querySelector('.currency-select-to-convert');
const currencySelectToConverted = document.querySelector('.currency-select-to-converted');



function convertValues() {
   const inputCurrencyValues = document.querySelector('.input-currency').value
   const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
   const currencyValueToConverted = document.querySelector('.currency-value-to-converted');

   console.log(currencySelectToConverted.value)
   const dolarToday = 5.2;
   const euroToday = 6.3;
   const bitcoinToday = 0.0000047;

   if (currencySelectToConverted.value == 'dolar') {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD'
      }).format(inputCurrencyValues / dolarToday)
   }


   if (currencySelectToConverted.value == 'euro') {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
         style: 'currency',
         currency: 'EUR'
      }).format(inputCurrencyValues / euroToday)
   }


   if (currencySelectToConverted.value == 'bitcoin') {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'BTC'
      }).format(inputCurrencyValues / bitcoinToday)
   }

   if (currencySelectToConverted.value == 'real')
{      currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL'
      }).format(inputCurrencyValues)
   }


      currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
   }).format(inputCurrencyValues)
}



function changeCurrencyInput() {
   const currencyNameInput = document.getElementById('currency-to-convert-name');
   const currencyImgInput = document.querySelector('.currency-img-to-convert');

      //input de cima
  if (currencySelectToConvert.value == 'dolar') {
      currencyNameInput.innerHTML = 'Dolar';
      currencyImgInput.src = './assets/dolar.png';
   }

   if (currencySelectToConvert.value == 'euro') {
      currencyNameInput.innerHTML = 'Euro';
      currencyImgInput.src = './assets/euro.png';
   }

   if (currencySelectToConvert.value == 'bitcoin') {
      currencyNameInput.innerHTML = 'Bitcoin';
      currencyImgInput.src = './assets/bitcoin.png';
   }
   if (currencySelectToConvert.value == 'real') {
      currencyNameInput.innerHTML = 'Real';
      currencyImgInput.src = './assets/real.png';
   }


}
currencySelectToConvert.addEventListener('change', changeCurrencyInput)

function changeCurrency() {
   const currencyName = document.getElementById('currency-name');
   const currencyImg = document.querySelector('.currency-img');
 
   //input de baixo
   if (currencySelectToConverted.value == 'dolar') {
      currencyName.innerHTML = 'Dolar';
      currencyImg.src = './assets/dolar.png';
   }

   if (currencySelectToConverted.value == 'euro') {
      currencyName.innerHTML = 'Euro';
      currencyImg.src = './assets/euro.png';
   }

   if (currencySelectToConverted.value == 'bitcoin') {
      currencyName.innerHTML = 'Bitcoin';
      currencyImg.src = './assets/bitcoin.png';
   }
   if (currencySelectToConverted.value == 'real') {
      currencyName.innerHTML = 'Real';
      currencyImg.src = './assets/real.png';
   }

   convertValues()

}



currencySelectToConverted.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)