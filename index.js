// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(task="go to the office") {
    return `This Monday, I will ${task}.`
}

function wrapAdjective(flair="*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: (num1, num2) => (num1 + num2),
    subtract: (num1, num2) => (num1 - num2),
    multiply: (num1, num2) => (num1 * num2),
    divide: (num1, num2) => (num1 / num2)
}

function actionApplyer(start, aryOfFns) {
    if (aryOfFns.length == 0) {
        return start
    }
    else {
        let newValue = aryOfFns[0](start)
        let newAry = aryOfFns.slice(1)
        return actionApplyer(newValue, newAry)
    }
}

// console.log(wrapAdjective('+')("muy bueno"))
