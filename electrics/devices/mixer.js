function Mixer(name, watt, plug) {
    this.name = name;
    Device.call(this, name, watt, plug);
}
Mixer.prototype = Object.create(Device.prototype);