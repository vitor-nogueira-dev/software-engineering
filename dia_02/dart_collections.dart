void main() {
  // Using list
  list();

  // Using set
  set();

  // Using map
  map();

  // Remove item to list
  removeItemList();
}

void list() {
  List<String> fruits = ["apple", "banana", "orange"];

  print(fruits[0]);

  fruits.add("grape");

  print(fruits);
}

void set() {
  Set<int> numbers = {1, 2, 3, 4};

  print(numbers);
}

void map() {
  Map<String, String> capitals = {
    'USA': 'Whashington, D.C',
    'France': 'Paris',
    'Japan': 'Tokyo',
  };

  print(capitals);

  print(capitals['France']);
}

void removeItemList() {
  List<int> numbers = [0, 1, 2, 3];
  numbers.removeAt(0);
  print(numbers);
}
