function Application() {
}

Application.prototype.start = function () {
    var flat = new House();
    flat.runFlat();
    flat.searchDevicesInRooms();
};