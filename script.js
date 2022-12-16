
// load Open Trivia Library

// window.onload = getOpenTrivia

const api =
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
// Async Function to fetch API data
async function getOpenTrivia() {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

// randomize array
function shuffleAray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// get specific items from API array
getOpenTrivia().then((data) => {
  const results = data.results[0];
  document.getElementById('question').innerHTML = results.question; // QUESTION
  document.getElementById('category').innerHTML = `Category: ${results.category}`; // CATEGORY
  document.getElementById('difficulty').innerHTML = `Difficulty: ${results.difficulty}`; // DIFFICULTY
  const answers = [...results.incorrect_answers, results.correct_answer]; // ANSWERS
  shuffleAray(answers);
  for (let i = 0; i < 4; i++) {
    let index = i + 1;
    document.getElementById(`answer${index}`).innerHTML = answers[i]; // INCORRECT ANSWERS
    document.getElementById(`answer${index}`).value = answers[i];

  }
 
  // click button 1
  const clickButton1 = document.getElementById('answer1');
  clickButton1.addEventListener('click', () => {
    if (clickButton1.value === results.correct_answer) {
      document.getElementById('answer1').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      document.getElementById('results').classList.add('correctResClass');
    } else {
      document.getElementById('answer1').classList.add('incorrectClass');
      document.getElementById('results').classList.add('incorrectResClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is: ${results.correct_answer}`;
    }
  });

  // click button 2
  const clickButton2 = document.getElementById('answer2');
  clickButton2.addEventListener('click', () => {
    if (clickButton2.value === results.correct_answer) {
      document.getElementById('answer2').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      document.getElementById('results').classList.add('correctResClass');
    } else {
      document.getElementById('answer2').classList.add('incorrectClass');
      document.getElementById('results').classList.add('incorrectResClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is ${results.correct_answer}`;
    }
  });

  // click button 3
  const clickButton3 = document.getElementById('answer3');
  clickButton3.addEventListener('click', () => {
    if (clickButton3.value === results.correct_answer) {
      document.getElementById('answer3').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      document.getElementById('results').classList.add('correctResClass');
    } else {
      document.getElementById('answer3').classList.add('incorrectClass');
      document.getElementById('results').classList.add('incorrectResClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is ${results.correct_answer}`;
    }
  });

  // click button 4
  const clickButton4 = document.getElementById('answer4');
  clickButton4.addEventListener('click', () => {
    if (clickButton4.value === results.correct_answer) {
      document.getElementById('answer4').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      document.getElementById('results').classList.add('correctResClass');
    } else {
      document.getElementById('answer4').classList.add('incorrectClass');
      document.getElementById('results').classList.add('incorrectResClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is ${results.correct_answer}`;
    }
  });
});
