//Task1
var name="Leonid";
var lastname="Ignatov";
console.log(name);
console.log(lastname);

//Task2
function trArea(a,b,c){
    var p=(a+b+c)/2;
    var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return s;
}
console.log(trArea(14,6,10));

//Task3
var arr=['one','two','three','four','five','six','seven','eight','nine','ten'];

function reverseArray1(){
    var newarr=Array;
    var j=0;
    for (i=arr.length; i>0; i--) {
        newarr[j]=arr[i-1];
        j++;
    }
    return newarr;
}
console.log(reverseArray1());

function reverseArray2(){
    var newarr=Array;
    var i=arr.length;
    var j=0;
    while (i>0){
        newarr[j]=arr[i-1];
        j++;
        i--;
    }
    return newarr;
}
console.log(reverseArray2());

function reverseArray3(){
    var newarr=Array;
    var i=arr.length;
    var j=0;
    do {
        newarr[j]=arr[i-1];
        j++;
        i--;
    } while (i>0);
    return newarr;
}
console.log(reverseArray3());

/* Task4
Постфиксная форма i++ отличается от префиксной ++i тем, что возвращает старое значение, бывшее до увеличения.
*/
var incr=1;
console.log(incr++);    //возвращает старое значение
console.log(++incr);    //результат incr++ и возврат нового значения

//Task5
function isPositive(k){
    if (k>0){
        console.log("Число положительное");
    }
    else if (k=0){
        console.log("Число равно нулю");
    }
    else{
        console.log("Число отрицательное");
    }
}
isPositive(-8);