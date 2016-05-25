function Iron(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Iron.prototype = Object.create(Device.prototype);