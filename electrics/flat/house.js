function House() {
}
House.prototype = Object.create(Flat.prototype);
House.prototype.runFlat = function () {
    var bedroom = new Bedroom();
    bedroom.showWattage();
    bedroom.showDevicesInTheRoom();
    bedroom.showPlugedDevices();
    bedroom.showRoomName();
    var kitchen = new Kitchen();
    kitchen.showWattage();
    kitchen.showDevicesInTheRoom();
    kitchen.showPlugedDevices();
    var hall = new Hall();
    hall.showWattage();
    hall.showDevicesInTheRoom();
    hall.showPlugedDevices();
    Flat.call(this, [bedroom, kitchen, hall]);
};