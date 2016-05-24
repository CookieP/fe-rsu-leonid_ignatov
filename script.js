//CalculatorV1
function CalculatorV1(leftOperand) {
    this.leftOperand = leftOperand;
    this.multiply = function (value) {
        return leftOperand * value;
    };
    this.add = function (value) {
        return leftOperand + value;
    };
    this.subtract = function (value) {
        return leftOperand - value;
    };
    this.divide = function (value) {
        return leftOperand / value;
    };
}
var calc1 = new CalculatorV1(12);
console.log(calc1.multiply(2)); //24
console.log(calc1.add(3)); //15
console.log(calc1.subtract(1)); //11
console.log(calc1.divide(2)); //6

//CalculatorV2
function CalculatorV2(leftOperand) {
    this.leftOperand = leftOperand;
    this.multiply = function (value) {
        leftOperand *= value;
        return this;
    };
    this.add = function (value) {
        leftOperand += value;
        return this;
    };
    this.subtract = function (value) {
        leftOperand -= value;
        return this;
    };
    this.divide = function (value) {
        leftOperand /= value;
        return this;
    };
    this.toString = function () {
        return leftOperand;
    }
}
var calc2 = new CalculatorV2(12);
alert(calc2.multiply(2).add(3)); // 27

//CalculatorV3
function CalculatorV3(leftOperand) {
    this.leftOperand = leftOperand;
    this.multiply = function () {
        var args = 1;
        for (var i = 0; i < arguments.length; i++) {
            args = args * arguments[i];
        }
        return args * leftOperand;
    };

    this.add = function () {
        var args = 0;
        for (var i = 0; i < arguments.length; i++) {
            args = args + arguments[i];
        }
        return args + leftOperand;
    };

    this.subtract = function () {
        var args = 0;
        for (var i = 0; i < arguments.length; i++) {
            args = args + arguments[i];
        }
        return leftOperand - args;
    };

    this.divide = function () {
        var args = 1;
        for (var i = 0; i < arguments.length; i++) {
            args = args * arguments[i];
        }
        return leftOperand / args;
    };
}
var calc3 = new CalculatorV3(12);
console.log(calc3.multiply(2, 2, 4, 5));//960
console.log(calc3.add(3, 1, 2));//18
console.log(calc3.subtract(1, 4, 2, 1));//4
console.log(calc3.divide(2, 6));//1