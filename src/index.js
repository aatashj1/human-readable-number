module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    if (number <= 9) {
        return Get0(number);
    }
    if (number <= 19) {
        return Get1(+(number.toString()[1]));
    }
    if (number <= 99) {
        let x10 = Get10(+(number.toString()[0]));
        let x1 = Get0(+(number.toString()[1]));
        if (number % 10 === 0) {
            return x10;
        }
        return x10 + " " + x1;
    }
    if (number <= 999) {
        let x100 = Get0(+(number.toString()[0]));
        let x10andx1 = toReadable(number % 100);
        if (number % 100 === 0) {
            return x100 + " hundred";
        }
        return x100 + " hundred " + x10andx1;
    }
};

let simpleNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let strongNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let rareNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


function Get0(number) {
    if (number <= 9) {
        return simpleNumbers[number];
    }
}

function Get1(number) {
    return strongNumbers[number];
}

function Get10(number) {
    return rareNumbers[number]
}

