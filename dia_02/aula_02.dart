void main() {
  // Using variables
  String name = "Vitor";
  int age = 28;
  double height = 1.71;
  bool isStudent = true;

  print("Name: $name");
  print("Age: $age");
  print("Height: $height");
  print("Is Student: $isStudent");

  // Using a function
  sayHello();

  // Using a function with parameters
  great(name);

  // Using a function with parameters and return value
  int sum = add(10, 20);
  print("Sum: $sum");

  // Using a for loop
  var list = ["apples", "bananas", "oranges"];
  list.forEach((element) {
    print("Element: $element");
  });

  // Using arrow function
  int result = multiply(5, 3);
  print("Result: $result");

  // Using a class
  Person person = Person(name, age);
  person.introduce();
}

void sayHello() {
  print("Hello World!");
}

void great(String name) {
  print("Hello, $name!");
}

int add(int a, int b) {
  return a + b;
}

int multiply(int a, int b) => a * b;

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduce() {
    print("Hello, my name is $name and I am $age years old.");
  }
}
