//Function #1: Array Slice


var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function arraySlice(foods, start, end) {
    return foods.slice(start, end)
}

arraySlice(foods, 1, 4)


//Function #2: Array Splice
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function arraySplice(foods, pos, noOfitems, nwData) {
    foods.splice(pos, noOfitems, nwData)
    return foods
}

arraySplice(foods, 2, 0, "icecream", "noodles")
arraySplice(foods, 3, 0, "noodles")

//Function #3: Filter

var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
console.log(numberArray.filter(value => value % 2 == 0))



//Function #4: Reject
function isPrime(num) {
    if (num <= 1)
        return false;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

numberArray = [4, 6, 7, 13, 17, 20, 10]
console.log(numberArray.filter(isPrime))

//Function #5: Lambda
var even = function (x) {
    return x % 2 == 0
}


console.log(even(4))



//Function #6: Map
var myArray = [11, 34, 20, 5, 53, 16]
console.log(myArray.map(element => element * element))



//Function #7: Reduce
var myArray = [2, 2, 2, 5, 2, 2]
console.log(myArray.reduce((accumulator, currentValue) => accumulator * currentValue))