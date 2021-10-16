//concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//============================================================================//
//arr.copyWithin()
//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

//copyWithin
const arrtwo = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(arrtwo.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(arrtwo.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

//============================================================================//
//arr.every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;

const arr3 = [1, 30, 39, 29, 10, 13];

console.log(arr3.every(isBelowThreshold));
// expected output: true

//============================================================================//
// arr.fill()
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

const array4 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array4.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array4.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array4.fill(6));
// expected output: [6, 6, 6, 6]

//============================================================================//
//arr.find()
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const arr4 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

//============================================================================//
//arr.findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test
const arr5 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(arr5.findIndex(isLargeNumber));
// expected output: 3


//============================================================================//
//arr.flat()
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

//arr.flatMap()
let arr7 = [1, 2, 3, 4];

arr7.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr7.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr7.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

//============================================================================//
//Array.from()
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//============================================================================//
//arr.includes()
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const includeArr = [1, 2, 3];

console.log(includeArr.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

//============================================================================//
//arr.join()
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(' '));
// expected output: "Fire Air Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//============================================================================//

//arr.reduce()
//The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const array8 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array8.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array8.reduce(reducer, 5));
// expected output: 15

//============================================================================//

//arr.reverse()
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const arrReverse = ['one', 'two', 'three'];
console.log('array1:', arrReverse);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', arrReverse);
// expected output: "array1:" Array ["three", "two", "one"]