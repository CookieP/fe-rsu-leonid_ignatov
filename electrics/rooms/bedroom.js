function Bedroom() {
    var bork = new Iron('Bork', 1800, true);
    var asus = new Laptop('Asus', 90, true);
    Room.call(this, 'Bedroom', [bork, asus]);
}
Bedroom.prototype = Object.create(Room.prototype);