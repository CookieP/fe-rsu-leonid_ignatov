/*1. Write a JavaScript program to display the current day and time in the following format.
 Sample Output: Today is: Friday.*/
var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + days[now.getDay()]);

//2. Write a JavaScript program to get the current date.
var now2 = new Date();
console.log(now2.getDate() + "." + (now2.getMonth() + 1) + "." + now2.getFullYear());

//3. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
for (var year = 2014; year < 2050; year++) {
    var date = new Date(year, 0, 1);
    var day = date.getDay();
    if (day === 0) {
        console.log(year);
    }
}

//4. Write a JavaScript program to calculate days left until next New Year.
var now4 = new Date();
var newYear = new Date(now4.getFullYear(), 11, 31);
var daysToNewYear = Math.ceil((newYear.getTime() - now4.getTime()) / (24 * 60 * 60 * 1000));
console.log("До Нового Года осталось " + daysToNewYear + " дней");

//5. Write a JavaScript function to check whether an `input` is an array or not.
function is_array(value) {
    return Array.isArray(value);
}
var qwe = 25;
console.log(is_array(qwe));
console.log(is_array([1, 2, 4, 0]));

//6. Write a JavaScript function to clone an array
function cloneArray(array) {
    return array.slice();
}
var array6 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(cloneArray(array6));

//7. Write a JavaScript function to find the most frequent item of an array.
function mostFrequentItem(array) {
    var items = Array;
    var mostFrequency = 0;
    var mostFrequent;
    for (i = 0; i < array.length; i++) {
        items[array[i]] = (items[array[i]] || 0) + 1;
        if (items[array[i]] > mostFrequency) {
            mostFrequency = items[array[i]];
            mostFrequent = array[i];
        }
    }
    return mostFrequent;
}
var array7 = ['d', 'c', 'c', 'c', 'a', 'd', 'd', 'b', 'f', 'd'];
console.log(mostFrequentItem(array7));

//8. Write a JavaScript function that inverts the case of the letters of the given string and returns new string
function invertCase(input) {
    var inverted = '';
    var symbol = '';
    for (var i = 0; i < input.length; i++) {
        symbol = input.charAt(i);
        if (symbol == symbol.toUpperCase()) {
            inverted += symbol.toLowerCase();
        } else if (symbol == symbol.toLowerCase()) {
            inverted += symbol.toUpperCase();
        }
    }
    return inverted;
}
console.log(invertCase("ПриФфетики,как ДелиФфки? Я ПрынцеФфка ф КедиКаффф"));

//9. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
var arr9 = ['a', 'aa', 'aaa', 'aa', 'a', 'aaaa', 'b', 'bbb', 'bbb', 'b', 'aaa', 'aa', 'bb'];
for (var i = 0; i < arr9.length; i++) {
    for (var j = i + 1; j < arr9.length; j++) {
        if (arr9[i] == arr9[j]) {
            arr9.splice(j, 1);
        }
    }
}
console.log(arr9);

//10. Write a JavaScript program to shuffle an array
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
var arr = [1, 2, 3, 4, 5];
console.log(arr.sort(compareRandom));

//11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function removeNothing(arr) {
    return arr.filter(Boolean);
}
console.log(removeNothing([null, "something", 0, "", 234, false, undefined, NaN, -24]));

//12. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
];
function librarySort(x, y) {
    if (x.title < y.title)
        return -1;
    if (x.title > y.title)
        return 1;
    return 0;
}
console.log(library.sort(librarySort));

//13. Write a JavaScript function to merge two arrays and removes all duplicates elements
function merge2Arr(arr1, arr2) {
    var mergedArr = arr1.concat(arr2);
    mergedArr.sort();
    for (var i = mergedArr.length - 1; i > 0; i--) {
        if (mergedArr[i] === mergedArr[i - 1]) {
            mergedArr.splice(i, 1);
        }
    }
    return mergedArr;
}
console.log(merge2Arr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]));

//14. Write a JavaScript function to remove a specific element from an array
function removeElement(arr, element) {
    var i = arr.indexOf(element);
    if (i != -1) {
        arr.splice(i, 1);
    }
    return arr;
}
console.log(removeElement([1, 2, 3, 4, 5], 4));

//15. Write a JavaScript function to get a random item from an array
function getRandomItem(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//16. Write a JavaScript function to move an array element from one position to another
function moveArrayElement(arr, element, position) {
    var i = arr.indexOf(element);
    arr.splice(i, 1);
    arr.splice(position, 0, element);
    return arr;
}
console.log(moveArrayElement([1, 2, 3, 4, 5, 6, 7, 8], 5, 2));

//17. Write a JavaScript function to get difference between two dates in days
function diff2Days(d1, d2) {
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    var diff = Math.abs(date2.getTime() - date1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff;
}
console.log(diff2Days("Feb 19 2012", "Nov 16 2014"));

//18. Write a JavaScript function to get the maximum date from an array of dates
function maxDate(arr) {
    arr.sort();
    return arr[arr.length - 1];
}
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));

//19. Write a JavaScript function to split a string and convert it into an array of words
function strToArr(str) {
    return str.split(' ');
}
console.log(strToArr("Write a JavaScript function to split a string and convert it into an array of words"));

//20. Write a JavaScript function to capitalize the first letter of a string
function capitalizeFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}
console.log(capitalizeFirst("скачать бесплатно без регистрации и смс"));

//21. Write a JavaScript function to convert a string into camel case
function camelize(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '-' || str[i] == ' ') {
            str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2);
        }
    }
    return str;
}
console.log(camelize("Java Script"));
console.log(camelize("java-script"));
console.log(camelize("Java Script Exercises"));

//22. Write a JavaScript function to find the highest value in an array
function findHighest(arr) {
    max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findHighest([0, 1, 2, 8, -302, -54, 8, 9, 15, 15.896]));

//23. Write a JavaScript function to find the lowest value in an array
function findLowest(arr) {
    min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findLowest([0, 1, 2, 8, -302, -54, 8, 9, 15, 15.896]));

//24. Write a JavaScript function to check to check whether a variable is numeric or not
function isNumber(value) {
    if (typeof value == "number"){
        return "Number";
    }
    return "Not a number";
}
console.log(isNumber("24"));

//25. Write a JavaScript function to calculate the sum of values in an array
function sumOfArray(arr) {
    res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
console.log(sumOfArray([4, 8, 15, 16, 23, 42]));

//26. Write a JavaScript program to get the length of a JavaScript object
function bookLength(obj){
    return Object.keys(obj).length;
}
console.log(bookLength({author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}));

//27. Write a JavaScript program to list the properties of a JavaScript object
function listOfProperties(obj){
    var list = '';
    for (var key in obj){
        list += key + ": " + obj[key] + '\n';
    }
    return list;
}
console.log(listOfProperties({author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}));