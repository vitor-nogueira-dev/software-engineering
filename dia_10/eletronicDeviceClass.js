class EletronicDevice {
  constructor(name) {
    this.name = name;
    this.isOn = false;
  }

  turnOn() {
    if (this.isOn) {
      console.log(`${this.name} is already on.`);
      return;
    }
    this.isOn = true;
  }
}

class Smartphone extends EletronicDevice {
  constructor(name, color, model) {
    super(name);
    this.color = color;
    this.model = model;
  }
}

const smartphone = new Smartphone('iPhone', 'black', '12');
console.log(smartphone); // Smartphone { name: 'iPhone', isOn: false, color: 'black', model: '12' }
smartphone.turnOn();
smartphone.turnOn(); // iPhone is already on.
