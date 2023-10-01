module.exports = function toReadable (number) {
    let result = [];
    let numStr = number.toString();
    const numToRead = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const decToRead = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    
    if (!+numStr) return 'zero';

    switch (numStr.length) {
        case 3: {
            result.push(numToRead[numStr[0]], 'hundred');
            numStr = numStr.slice(1);
            if (!(+numStr)) {
                return result.join(' ');
            }
        }
        case 2: {
            if (decToRead[numStr]) {
                result.push(decToRead[numStr]);
                return result.join(' ')
            }
            if (+numStr[0]) {
                result.push(decToRead[(+numStr[0]*10).toString()]);
            }
            numStr = numStr.slice(1);
        }
        case 1: {
            result.push(numToRead[numStr]);
            return result.join(' ');
        }
    } 
}