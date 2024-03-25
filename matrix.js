const array_sample = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

highest = 0;

for (let i = 0; i < array_sample.length; i++) {
    for (let j = 0; j < array_sample[i].length; j++) {
        if (array_sample[i][j] > highest) {
            highest = array_sample[i][j];
        } else {
            pass;
        }
    }
}

console.log(`The highest number is ${highest}`);
