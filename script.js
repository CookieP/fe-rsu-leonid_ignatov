var worker = (function () {
    var library = [
        {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

    //1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
    function is_array(value) {
        return Array.isArray(value);
    }

    //2. Write a JavaScript function to deep clone an array using recursion
    function cloneArray(array) {
        var newArr = [];
        if (array.constructor === Array) {
            newArr = array.slice(0);
            for (var i = 0; i < newArr.length; i++) {
                newArr[i] = cloneArray(newArr[i]);
            }
            return newArr;
        } else {
            return array;
        }
    }

    //3. Write a JavaScript function to find the most frequent item of an array.
    function mostFrequentItem(array) {
        var items = Array;
        var mostFrequency = 0;
        var mostFrequent;
        for (var i = 0; i < array.length; i++) {
            items[array[i]] = (items[array[i]] || 0) + 1;
            if (items[array[i]] > mostFrequency) {
                mostFrequency = items[array[i]];
                mostFrequent = array[i];
            }
        }
        return mostFrequent;
    }

    //4. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
    function removeDuplicate(array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    array.splice(j, 1);
                }
            }
        }
        return array;
    }

    //5. Write a JavaScript program to shuffle an array
    function shuffleArray(array) {
        var compareRandom = function () {
            return Math.random() - 0.5
        };
        return array.sort(compareRandom);
    }

    //6. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
    function sortLibrary() {
        var librarySort = function (x, y) {
            if (x.title < y.title)
                return -1;
            if (x.title > y.title)
                return 1;
            return 0;
        };
        return library.sort(librarySort);
    }

    //7. Write a JavaScript function to merge two arrays and removes all duplicates elements
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

    //8. Write a JavaScript function to remove a specific element from an array
    function removeElement(arr, element) {
        var i = arr.indexOf(element);
        if (i != -1) {
            arr.splice(i, 1);
        }
        return arr;
    }

    //9. Write a JavaScript function to get a random item from an array
    function getRandomItem(arr) {
        var i = Math.floor(Math.random() * arr.length);
        return arr[i];
    }

    //10. Write a JavaScript function to move an array element from one position to another
    function moveArrayElement(arr, element, position) {
        var i = arr.indexOf(element);
        arr.splice(i, 1);
        arr.splice(position, 0, element);
        return arr;
    }

    //11. Write a JavaScript function to split a string and convert it into an array of words
    function strToArr(str) {
        return str.split(' ');
    }

    //12. Write a JavaScript function to capitalize the first letter of a string
    function capitalizeFirst(str) {
        str = str[0].toUpperCase() + str.slice(1);
        return str;
    }

    //13. Write a JavaScript function to convert a string into camel case
    function camelize(str) {
        for (var i = 0; i < str.length; i++) {
            if (str[i] == '-' || str[i] == ' ') {
                str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2);
            }
        }
        return str;
    }

    /* 14. Write a JavaScript function that accepts two arguments: array and function. The function iterate the entire
     array and calls the given function with the current array element.*/
    function iterateArray(array, callback) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }

    //15. Write a JavaScript program to get the length of an JavaScript object
    function bookLength(obj) {
        return Object.keys(obj).length;
    }

    return {
        is_array: is_array,
        cloneArray: cloneArray,
        mostFrequentItem: mostFrequentItem,
        removeDuplicate: removeDuplicate,
        shuffleArray: shuffleArray,
        sortLibrary: sortLibrary,
        merge2Arr: merge2Arr,
        removeElement: removeElement,
        getRandomItem: getRandomItem,
        moveArrayElement: moveArrayElement,
        strToArr: strToArr,
        capitalizeFirst: capitalizeFirst,
        camelize: camelize,
        iterateArray: iterateArray,
        bookLength: bookLength
    }
})();
var result=0;

console.log(worker.is_array('qwe'));
console.log(worker.is_array([1,2,4,0]));
console.log(worker.cloneArray([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(worker.mostFrequentItem(['d', 'c', 'c', 'c', 'a', 'd', 'd', 'b', 'f', 'd']));
console.log(worker.removeDuplicate(['a', 'aa', 'aaa', 'aa', 'a', 'aaaa', 'b', 'bbb', 'bbb', 'b', 'aaa', 'aa', 'bb']));
console.log(worker.shuffleArray([1, 2, 3, 4, 5]));
console.log(worker.sortLibrary());
console.log(worker.merge2Arr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]));
console.log(worker.removeElement([1, 2, 3, 4, 5], 4));
console.log(worker.getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(worker.moveArrayElement([1, 2, 3, 4, 5, 6, 7, 8], 5, 2));
console.log(worker.strToArr("Write a JavaScript function to split a string and convert it into an array of words"));
console.log(worker.capitalizeFirst("скачать бесплатно без регистрации и смс"));
console.log(worker.camelize("Java Script"));
console.log(worker.camelize("java-script"));
console.log(worker.camelize("Java Script Exercises"));
console.log(worker.iterateArray([2,4,1,2,4], function(el){result += el;}), result);
console.log(worker.bookLength({author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}));