const shoppingCart = [];

function addItem(item) {
  shoppingCart.push(item);
}

function removeItem(item) {
  const index = shoppingCart.findIndex((elem) => elem.name === item.name);
  if (index !== -1) {
    shoppingCart.splice(index, 1)[0];
  } else {
    console.log('Item não encontrado no carrinho.');
  }
}

function updateItem(item) {
  const index = shoppingCart.findIndex((elem) => elem.name === item.name);
  if (index !== -1) {
    shoppingCart[index] = item;
  }
}

function clear() {
  shoppingCart.length = 0;
}

function sumTotal() {
  let total = 0;
  for (let index = 0; index < shoppingCart.length; index++) {
    total += shoppingCart[index].price;
  }
  return total;
}

function viewItems() {
  if (shoppingCart.length === 0) {
    console.log('Carrinho vazio');
  }
  for (let index = 0; index < shoppingCart.length; index++) {
    console.log(shoppingCart[index]);
  }
}

addItem({ name: 'Camisa', price: 20 });
addItem({ name: 'Calça', price: 50 });
addItem({ name: 'Tenis', price: 150 });
addItem({ name: 'Meia', price: 10 });
viewItems();
console.log('Total: ' + sumTotal()); // 230
removeItem({ name: 'Calça', price: 50 }); // Removendo a calça
viewItems();
console.log('Total: ' + sumTotal()); // 180
updateItem({ name: 'Meia', price: 50 }); // Atualizando o preço da meia
viewItems();
console.log('Total: ' + sumTotal()); // 220
clear();
viewItems(); // Carrinho vazio