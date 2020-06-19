// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bath my dog')

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}
mondayWork()

let wrapAdjective = function (string='*') {
    return function(param='special'){
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a/b;
    },

}

let actionApplyer = function(startInt, arr) {
    let a = startInt

    for(let i = 0; i<arr.length; i++) {
        a = arr[i](a)
    }
    return a;
}