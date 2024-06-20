function arrayToObject(arr) {
    const newObject = {
        country: arr[0],
        population: arr[1],
        language: arr[2],
        GDP: arr[3]
    };

    return newObject;
}

console.log(arrayToObject(["USA", 331000000, "English", 21433226]));
