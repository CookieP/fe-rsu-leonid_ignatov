function Toaster(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Toaster.prototype = Object.create(Device.prototype);