function Hall() {
    var hitachi = new Conditioner('Hitachi', 800, true);
    var lg = new Tv('LG', 60, true);
    Room.call(this, 'Hall', [hitachi, lg]);
}
Hall.prototype = Object.create(Room.prototype);