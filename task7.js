var f=prompt("Введите число");
function factorial(f){
    var fact=f;
    while (f!=1){
        fact=fact*(f-1);
        f--;
    }
    return fact;
}
alert("Факториал числа "+f+" равен "+factorial(f));