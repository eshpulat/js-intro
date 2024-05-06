// ------------- 1 ---------- swapFirstAndLast

var array1 = [1, 2, 3, 4];
array1.reverse();
console.log(array1);
// swapFirstAndLast(array1); // returns [4, 2, 3, 1]

// ----------- 2 ----------- swapArrayElements

function swapArrayElements(arr1, arr2) {
    if (arr1.length <= 1 || arr2.length <= 1) {
        var array = [];
        array.push(arr1);
        array.push(arr2);
        console.log(array);
    }
    if (arr1.length > 1 && arr2.length > 1) {
        var firstElement1 = arr1[0];
        var lastElement1 = arr1[arr1.length - 1];
        arr1[arr1.length - 1] = arr2[0];
        arr1[0] = arr2[arr2.length - 1];

        var firstElement2 = arr2[0];
        var lastElement2 = arr2[arr2.length - 1];
        arr2[arr2.length - 1] = firstElement1;
        arr2[0] = lastElement1;
        var array = [];
        array.push(arr1);
        array.push(arr2);
        console.log(array);
    }
}

// var array1 = [1, 2, 3, 4];
// var array2 = [5, 6, 7, 8];
swapArrayElements([1, 2, 3, 4], [5, 6, 7, 8]);
// console.log(result); // Outputs: [[8, 2, 3, 5], [4, 6, 7, 1]]

// var array1 = [1, 2];
// var array2 = [4, 5, 6, 7, 8];
swapArrayElements([1, 2], [4, 5, 6, 7, 8]);
// console.log(result); // Outputs: [[8, 4], [2, 5, 6, 7, 1]]

// var array1 = [1];
// var array2 = [3, 4, 5, 6];

// console.log(result); // Outputs: [[1], [3, 4, 5, 6]]
swapArrayElements([1], [3, 4, 5, 6]);

// ------------- 3 ------------ swapMiddleElements

function swapMiddleElements(arr) {
    if (arr.length % 2 === 0) {
        var middleNumber = arr[1];
        arr[1] = arr[arr.length - 2];
        arr[arr.length - 2] = middleNumber;
        return arr;
    }
    if (arr.length % 2 !== 0) {
        // var dviddedLengthOfNumber = arr[Math.floor(arr.length / 2 - 1)];
        var middleNumber = arr[Math.floor(arr.length / 2)];
        // return middleNumber;
        var sewapMiddleNumber = arr[0];
        arr[0] = arr[Math.floor(arr.length / 2)];
        arr[Math.floor(arr.length / 2)] = sewapMiddleNumber;
        return arr;
    }
}
// var array2 = [4, 5, 6, 7];

console.log(swapMiddleElements([4, 5, 6, 7])); // Outputs: [4, 6, 5, 7]
// var array1 = [1, 2, 3, 4, 5];
// swapMiddleElements(array1);
console.log(swapMiddleElements([1, 2, 3, 4, 5])); // Outputs: [3, 2, 1, 4, 5]

// ------------- 4 ------------ swapUndefinedWithLengths ????
