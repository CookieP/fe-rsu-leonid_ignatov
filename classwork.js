(function () {
    var shape = {
        type: '',
        getType: function () {
            return this.type;
        },
        getPerimeter: function () {
            var figure = this.getType();
            if (figure == 'Triangle') {
                return this.a + this.b + this.c;
            } else if (figure == 'Square') {
                return this.a + this.b + this.c + this.d;
            } else if (figure == 'Rectangle') {
                return (this.a + this.b) * 2;
            } else {
                return 'Unknown figure';
            }
        },
        draw: function () {
            return this.getType();
        }
    };

    function Triangle(a, b, c) {
        this.type = 'Triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    function Square(a, b, c, d) {
        this.type = 'Square';
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    function Rectangle(sideA, sideB) {
        this.type = 'Rectangle';
        this.a = sideA;
        this.b = sideB;
    }

    Triangle.prototype = shape;
    Square.prototype = shape;
    Rectangle.prototype = shape;
    Rectangle.prototype = Object.create(Square.prototype);
    Rectangle.prototype.constructor = Rectangle;
    Rectangle.prototype.getArea = function () {
        return this.a * this.b;
    };

    var triangle = new Triangle(12, 4, 9);
    var square = new Square(8, 8, 8, 8);
    var rectangle = new Rectangle(10, 12);

    console.log('Type: ' + triangle.getType());
    console.log('Perimeter: ' + triangle.getPerimeter());
    console.log(triangle.draw() + ' is drawn');
    console.log('Type: ' + square.getType());
    console.log('Perimeter: ' + square.getPerimeter());
    console.log(square.draw() + ' is drawn');
    console.log('Type: ' + rectangle.getType());
    console.log('Perimeter: ', rectangle.getPerimeter());
    console.log('Area: ', rectangle.getArea());
    console.log(rectangle.draw() + ' is drawn');
}());