function Room(name, devices) {
    this.name = name;
    this.devices = devices;
    Device.call(this, name);
}

Room.prototype = Object.create(Device.prototype);

Room.prototype.getRoomName = function () {
    return this.name;
};

Room.prototype.showRoomName = function () {
    console.info(this.getRoomName());
};

Room.prototype.getWattage = function () {
    var totalWattage = 0;
    for (var i = 0; i < this.devices.length; i += 1) {
        totalWattage += this.devices[i].getWattage();
    }
    return totalWattage;
};
Room.prototype.getNames = function () {
    var allDevices = [];
    for (var i = 0; i < this.devices.length; i += 1) {
        allDevices.push(this.devices[i].getName());
    }
    return allDevices;
};

Room.prototype.showWattage = function () {
    console.info('Wattage of ' + this.getName() + ' is ' + this.getWattage());
};

Room.prototype.search = function (what) {
    this.findDevice(what);

    this.devices.forEach(function (device) {
        device.findDevice(what);
    });
};

Room.prototype.getPlugedDevices = function () {
    var plugedDevices = [];
    for (var i = 0; i < this.devices.length; i += 1) {
        plugedDevices.push(this.devices[i].getPlug());
    }
    return plugedDevices;
};

Room.prototype.showDevicesInTheRoom = function () {
    console.info('Devices in the ' + this.getName() + ' are ' + this.getNames().toString());
};

Room.prototype.showPlugedDevices = function () {
    var str = '';
    for (var i = 0; i < this.getPlugedDevices().length; i += 1) {
        if (this.getPlugedDevices()[i] === null) {
            str += '';
        } else {
            str += this.getPlugedDevices()[i] + ',';
        }

    }
    str = str.slice(0, -1);
    console.info('Connected devices in the ' + this.getName() + ' are ' + str + '.');
};