function Conditioner(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Conditioner.prototype = Object.create(Device.prototype);