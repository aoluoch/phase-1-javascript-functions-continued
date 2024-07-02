// code your solution here 
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun())
console.log(saturdayFun("Watch Euros"))

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork()); 
console.log(mondayWork("work from home"));
console.log(mondayWork("attend meetings"));


function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}


const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("amazing")); 


