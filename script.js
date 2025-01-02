const USD = 4.87;
const EUR = 5.52;
const GBP = 6.08;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

form.onsubmit = (e) => {
  e.preventDefault();

  const hasCharactersRegex = /\D+/g;
  const amountValue = amount.value.replace(hasCharactersRegex, '');
  const currencyValue = currency.value;
  
  switch(currencyValue) {
    case 'USD':
      convertCurrency(amountValue, USD, '$');
      break;
    case 'EUR':
      convertCurrency(amountValue, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(amountValue, GBP, '£');
      break;
    default:
      console.log('Currency not found');
  }


};

function convertCurrency(amount, currency, simbol) {
  try {
    description.textContent = `${simbol} 1 = ${formatCurrencyBRL(currency)}`;
    let total = amount * currency;
    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`
    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    console.log(error);
    alert("Error, try again later");
  }
};

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });
}


