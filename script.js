// load Open Trivia Library
window.onload = getOpenTrivia

// Async Function to fetch API data
async function getOpenTrivia() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
    let data = await response.json()
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
    document.getElementById('question').innerHTML = results.question;
    document.getElementById('category').innerHTML = results.category;
    document.getElementById('difficulty').innerHTML = results.difficulty;
    const answers = [...results.incorrect_answers, results.correct_answer];
    shuffleAray(answers);
    for (let i = 0; i < 4; i++) { 
        let index = i + 1
        document.getElementById(`answer${index}`).innerHTML = answers[i]
    }
});

