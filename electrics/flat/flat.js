function Flat(rooms) {
    this.rooms = rooms;
}
Flat.prototype = Object.create(Room.prototype);
Flat.prototype.searchDevicesInRooms = function () {
    var searching = prompt('Введите название устройства');
    var roomsCount = searching;
    var result = '';
    if (searching === null) {
        alert('Поиск прекращен');
    } else {
        for (var i = 0; i < this.rooms.length; i += 1) {
            for (var j = 0; j < this.rooms[i].devices.length; j += 1) {
                if (roomsCount.toLowerCase() === this.rooms[i].devices[j].getName().toLowerCase()) {
                    result += this.rooms[i].getRoomName();
                }
            }
        }
        if (result === '') {
            alert('Устройство не найдено ' + result);
        } else {
            alert('Устройство найдено в ' + result);
        }
    }
};