function Radiotelephone(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Radiotelephone.prototype = Object.create(Device.prototype);