let input = 'a whale of a deal!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = []

for (let index = 0; index < input.length; index++) {
    // console.log('index is ' + input);
    for (let index2 = 0; index2 < vowels.length; index2++) {
        // console.log('index2 is '+ index2);
        if (input[index] === vowels[index2]) {
            if (input[index] === 'e') {
                resultArray.push('ee')
            }
            else if (input[index] === 'u') {
                resultArray.push('uu')
            }
            else {
                resultArray.push(input[index])
            }
        }
    }
}

console.log(resultArray.join('').toUpperCase())

