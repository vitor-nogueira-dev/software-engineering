// Criando um objeto
const person = {
  name: 'John',
  age: 30,
  weight: 88.6,
  isAdmin: true,
};

console.log(person.name); // John
console.log(person.age); // 30
console.log(person['weight']); // 88.6
console.log(person['isAdmin']); // true

// Criando com a função construtora Object
const person2 = new Object();
person2.name = 'John';
person2.age = 30;
person2.weight = 88.6;
person2.isAdmin = true;
console.log(person2); // { name: 'John', age: 30, weight: 88.6, isAdmin: true }

// Criando com uma função
function createPerson(name, age, weight, isAdmin) {
  return {
    name: name,
    age: age,
    weight: weight,
    isAdmin: isAdmin,
  };
}

const person3 = createPerson('John', 30, 88.6, true);
console.log(person3); // { name: 'John', age: 30, weight: 88.6, isAdmin: true }