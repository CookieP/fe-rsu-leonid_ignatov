function Dishwasher(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Dishwasher.prototype = Object.create(Device.prototype);