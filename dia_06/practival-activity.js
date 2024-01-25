let drink = 'chá';

const COFFEE_PRICE = 5;
const MILK_PRICE = 3;
const TEA_PRICE = 4;

function formatPrice(price) {
  return price.toFixed(2);
}

function formatResult(drink, price) {
  return console.log(
    `Você escolheu ${drink} e o valor a ser pago é R$ ${formatPrice(price)}`
  );
}

switch (drink) {
  case 'café':
    formatResult(drink, COFFEE_PRICE);
    break;
  case 'leite':
    formatResult(drink, MILK_PRICE);
    break;
  case 'chá':
    formatResult(drink, TEA_PRICE);
    break;
  default:
    console.log('Escolha uma opção válida: café, leite ou chá.');
}
