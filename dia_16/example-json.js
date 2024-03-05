const person = {
  name: 'John',
  age: 30,
  profession: 'developer',
};

console.log(JSON.stringify(person));
// {"name":"John","age":30,"profession":"developer"}

const personString = '{"name":"John","age":30,"profession":"developer"}';

console.log(JSON.parse(personString));
// { name: 'John', age: 30, profession: 'developer' }
