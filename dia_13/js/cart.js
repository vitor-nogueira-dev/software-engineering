const totalValue = [0, 0, 0];
const productValue = [30.0, 40.0, 50.0];
const quantityItems = [0, 0, 0];

function addItem(item) {
  const quantity = document.getElementById('quantidade' + item);
  const total = document.getElementById('total' + item);

  quantityItems[item] += 1;
  totalValue[item] =
    Number.parseFloat(productValue[item]) * quantityItems[item];

  quantity.innerHTML = quantityItems[item];
  total.innerHTML = totalValue[item].toFixed(2);
  totalValueItems();
}

function removeItem(item) {
  const quantity = document.getElementById('quantidade' + item);
  const total = document.getElementById('total' + item);

  if (quantityItems[item] > 0) {
    quantityItems[item] -= 1;
    totalValue[item] =
      Number.parseFloat(productValue[item]) * quantityItems[item];
    quantity.innerHTML = quantityItems[item];
    total.innerHTML = totalValue[item].toFixed(2);
    totalValueItems();
  }
}

function totalValueItems() {
  const total = document.getElementById('valorTotalCompra');
  let count = 0;
  totalValue.forEach((value) => {
    count += value;
  });
  total.innerHTML = count.toFixed(2);
}
