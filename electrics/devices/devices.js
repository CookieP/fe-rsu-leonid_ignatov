function Device(name, watt, plug) {
    this.name = name;
    this.watt = watt;
    this.plug = plug;
}

Device.prototype.getName = function() {
    return this.name;
};

Device.prototype.getWattage = function() {
    if (this.plug == true) {
        return this.watt;
    } else {
        return 0;
    }
};

Device.prototype.getPlug = function() {
    if (this.plug == true) {
        return this.name;
    } else {
        return null;
    }
};

Device.prototype.findDevice = function(what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info(what + 'has been found in ' + this.getName());
    }
};
