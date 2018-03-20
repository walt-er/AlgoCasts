// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const arr = [];

    // for (let i = 0; i < array.length; i++) {
    //     const subarray = Math.floor(i / size);
    //     arr[subarray] = (!arr[subarray]) ? [array[i]] : [...arr[subarray], array[i]];
    // }

    // // or

    // for (let element of array) {
    //     const last = arr[arr.length - 1];

    //     if (!last || last.length == size) {
    //         arr.push([element]);
    //     } else {
    //         last.push(element);
    //     }
    // }

    // // or

    let index = 0;

    while (index < array.length) {
        arr.push(array.slice(index, index + size));
        index = index + size;
    }

    return arr;
}

chunk([1,2,3,4,5,6,7,8,9], 4);

module.exports = chunk;
