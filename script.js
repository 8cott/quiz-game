

// Functions
// start game
// generate question and answers
// click an answer button
// what happens if the answer is correct or incorrect
// display results
// log score +10 for each correct answer
// move on to next question
// if you get 3 incorrect you lose
// game over if lose
// if you reach score of 100 you win
// clicking start over restarts game
// 
// 
// need library of questions
// 
window.onload = getOpenTrivia

async function getOpenTrivia() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    let data = await response.json()
    return data;
}
 getOpenTrivia().then((data) => console.log(data.results));
// 
// 
// 
// 
// 
// 
// 
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple