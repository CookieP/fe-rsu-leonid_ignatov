function Laptop(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Laptop.prototype = Object.create(Device.prototype);