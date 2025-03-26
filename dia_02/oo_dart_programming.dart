void main() {
  var car = Car('Toyota', 2020);
  car.displayInfo();
}

class Car {
  String model;
  int year;

  Car(this.model, this.year);

  void displayInfo() {
    print("Model: $model, Year: $year");
  }
}
