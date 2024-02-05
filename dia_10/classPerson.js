class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  speak() {
    return `Hello, my name is ${this.name} ${this.lastName}.`;
  }

  get fullName() {
    return this.name + ' ' + this.lastName;
  }

  set fullName(value) {
    this.name = value.name;
    this.lastName = value.lastName;
  }
}

const person = new Person('John', 'Doe');
console.log(person.speak()); // Hello, my name is John Doe.
console.log(person.fullName); // John Doe
person.fullName = { name: 'Jane', lastName: 'Doe' };
console.log(person.fullName); // Jane Doe
