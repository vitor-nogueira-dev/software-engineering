function calculateBodyMassIndex(weight, height) {
  return +(weight / height ** 2).toFixed(2);
}

function checkBMI(bmi) {
  let status;
  switch (true) {
    case bmi < 18.5:
      status = 'Abaixo do peso';
      break;
    case bmi >= 18.5 && bmi < 24.9:
      status = 'Peso normal';
      break;
    case bmi >= 25 && bmi < 29.9:
      status = 'Acima do peso (sobrepeso)';
      break;
    case bmi >= 30 && bmi < 34.9:
      status = 'Obesidade grau I';
      break;
    case bmi >= 35 && bmi < 39.9:
      status = 'Obesidade grau II';
      break;
    default:
      status = 'Obesidade grau III';
      break;
  }
  return status;
}

function createPerson(name, age, weight, height) {
  const bmi = calculateBodyMassIndex(weight, height);
  const status = checkBMI(bmi);
  return {
    name: name,
    age: age,
    weight: weight,
    height: height,
    bmi: bmi,
    status: status,
  };
}

const person = createPerson('John', 30, 88.6, 1.7);
console.log(person); // { name: 'John', age: 30, weight: 88.6, height: 1.7, bmi: 30.62200956937799, status: 'Obesity' }

