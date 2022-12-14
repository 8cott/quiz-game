// load Open Trivia Library
// window.onload = getOpenTrivia

const api = ('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
// Async Function to fetch API data
async function getOpenTrivia() {
    let response = await fetch(api);
    let data = await response.json();
    return data;
}

// randomize array
function shuffleAray(arr) {
    for (let i = arr.length -1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }  
}

 

 // get specific items from API array
getOpenTrivia().then((data) => {
    const results = data.results[0];
    console.log(results);
    document.getElementById('question').innerHTML = results.question; // QUESTION
    document.getElementById('category').innerHTML = results.category; // CATEGORY
    document.getElementById('difficulty').innerHTML = results.difficulty; // DIFFICULTY
    const answers = [...results.incorrect_answers, results.correct_answer]; // ANSWERS
    shuffleAray(answers);
    for (let i = 0; i < 4; i++) { 
        let index = i + 1
        document.getElementById(`answer${index}`).innerHTML = answers[i]; // INCORRECT ANSWERS
        document.getElementById(`answer${index}`).value = answers[i];
    } 
    const clickButton = document.getElementById('answer1')
    clickButton.addEventListener('click', () => {
        if (clickButton.value === results.correct_answer) {
            console.log('correct');
            document.getElementById('answer1').style.backgroundColor = 'green'
            document.getElementById('answer1').style.color = 'white'
            document.getElementById('results').innerHTML = 'Correct'
            document.getElementById('results').style.color = 'green'
        } else {
            console.log('incorrect');
            document.getElementById('answer1').style.backgroundColor = 'red'
            document.getElementById('answer1').style.color = 'white'
            document.getElementById('results').innerHTML = 'Incorrect'
            document.getElementById('results').style.color = 'red'
        }
  
    
    })
     
});

