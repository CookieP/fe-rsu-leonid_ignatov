function Tv(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Tv.prototype = Object.create(Device.prototype);