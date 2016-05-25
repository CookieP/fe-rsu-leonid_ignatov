function Kitchen() {
    var bosch = new Dishwasher('Bosch', 600, false);
    var vitek = new Toaster('Vitek', 900, true);
    var moulinex = new Mixer('Moulinex', 500, true);
    Room.call(this, 'Kitchen', [bosch, vitek, moulinex]);
}
Kitchen.prototype = Object.create(Room.prototype);