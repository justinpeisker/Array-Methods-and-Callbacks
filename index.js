const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
});
console.log(finals2014)
//(a) Home Team name for 2014 world cup final
// console.log('TASK 1A', finals2014[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
// console.log('TASK 1B', finals2014[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
// console.log('TASK 1C', finals2014[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
// console.log('TASK 1D', finals2014[0]['Win Conditions']);
//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
// data as a param- when you invoke the function you;l be passing fifaData as an argument
function getFinals(data){
    const allFinals = data.filter(function(item){
        return item.Stage === 'Final';
    })
    return allFinals;
}
console.log('TASK 2', getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/
// params are data which will be fifaData when you invoke it, param getFinalsCB, you will pass in getFinals when you invoke
// map over the getfinalsCB and return the years (item.year)

function getYears(getFinalsCB, data){
    
    const years = getFinalsCB.map(function(item){
        return item.Year;
    })
    return years;
}
console.log('TASK 3', getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 
// data which will be fifaData when the function is invoked, getFinalCB which will be GetFinals function when invoked


function getWinners(getFinalsCB,data) {
    const winners = getFinalsCB.map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        }else{
            return item['Away Team Name'];
        }   
    })
    return winners;
}

    console.log('TASK 4', getWinners(fifaData, getFinals));






        // map over the getFinals and return the winners using a conditional

    // dont worry about ties/ dont worry about overtime
    // just return the winner based on points scored in the game
    // if home team goals are greater than away team goals, return hometeam. else return awayteam




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
// 3 params data, getYearsCB, getWinners
  // store the results in a variable
    // use map with item and index
    // map over winners use index to refer to the year and use item to refer to the current value in winners
function getWinnersByYear(data, getYearsCB, getWinnersCB) {
    // const winner = getWinnerCB.map(function(item){

    // })
    const winYear = `In ${getYearsCB.Year}, ${getWinnersCB.item} won the world cup!`;
    return winYear;
}

console.log('TASK 5', getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
// getFinalsCB receive
//    reduce()- add up all the home and away team goals and the n divide by length of data set. 2 seperate steps
// hint if you want the 2nd decimal look up .toFixed(2);
// 
function getAverageGoals(array) {
    const goalSumAway = array.reduce(function(acc, item){
        return acc + item['Away Team Goals'];
    },0);
    const goalSumHome = array.reduce(function(acc, item){
        return acc + item['Home Team Goals'];
    },0);
    const goalSum = goalSumAway + goalSumHome;
    const goalAvg = goalSum / array.length;
    return goalAvg.toFixed(2);
}
console.log('TASK 6', getAverageGoals(fifaData));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
