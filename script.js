// load Open Trivia Library
window.onload = newQuestion()

// score
let score = 0;

// increase score
function increaseScore() {
  score += 10;
  document.getElementById('score').innerHTML = score
}

// reset score
function resetScore() {
  score = 0;
}

// question number
let questionNumber = 1;

// increase question number
function increaseQuestionNum() {
  questionNumber += 1;
  document.getElementById('questionNum').innerHTML = questionNumber
}

// reset questions asked
function resetQuestions() {
  questionNumber = 0;
}

// clear CSS from buttons and results
function clearCorrect() {
  document.getElementById('answer1').classList.remove('correctClass');
  document.getElementById('answer2').classList.remove('correctClass');
  document.getElementById('answer3').classList.remove('correctClass');
  document.getElementById('answer4').classList.remove('correctClass');
  document.getElementById('results').innerHTML = '';
}

function clearIncorrect() {
  document.getElementById('answer1').classList.remove('incorrectClass');
  document.getElementById('answer2').classList.remove('incorrectClass');
  document.getElementById('answer3').classList.remove('incorrectClass');
  document.getElementById('answer4').classList.remove('incorrectClass');
  document.getElementById('results').innerHTML = '';
}

// Modal Functions
function openModal() {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
}

// function to open 'gameOver' modal
function gameOver() {
  document.getElementById('modal-gameOver').classList.remove('hidden');
  document.getElementById('overlay2').classList.remove('hidden');
  document.getElementById('finalScore').innerHTML = `Final Score: ${score}/10`;
}

// function to ask a new question
function newQ() {
    clearCorrect();
    clearIncorrect();
    newQuestion();
    increaseQuestionNum();
    closeModal();
}

// generates new question
function newQuestion() {
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
 
  // click button 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  const clickButton1 = document.getElementById('answer1');
  clickButton1.addEventListener('click', () => {
    if (clickButton1.value === results.correct_answer) {
      document.getElementById('answer1').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      increaseScore();
      if (questionNumber === 10) {
      setTimeout(function() {
        gameOver();
        }, 750)} else {
      setTimeout(function() {
        openModal();
        }, 750)}
    } else {
      document.getElementById('answer1').classList.add('incorrectClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is: ${results.correct_answer}`;
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 750)} else {
        setTimeout(function() {
          openModal();
          }, 750)}
    }
  });

  // click button 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  const clickButton2 = document.getElementById('answer2');
  clickButton2.addEventListener('click', () => {
    if (clickButton2.value === results.correct_answer) {
      document.getElementById('answer2').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      increaseScore();
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 750)} else {
        setTimeout(function() {
          openModal();
          }, 750)}
    } else {
      document.getElementById('answer2').classList.add('incorrectClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is ${results.correct_answer}`;
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 750)} else {
        setTimeout(function() {
          openModal();
          }, 750)}
    }
  });

  // click button 3 - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  const clickButton3 = document.getElementById('answer3');
  clickButton3.addEventListener('click', () => {
    if (clickButton3.value === results.correct_answer) {
      document.getElementById('answer3').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      increaseScore();
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 750)} else {
        setTimeout(function() {
          openModal();
          }, 750)}
    } else {
      document.getElementById('answer3').classList.add('incorrectClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is ${results.correct_answer}`;
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 750)} else {
        setTimeout(function() {
          openModal();
          }, 750)}
    }
  });

  // click button 4 - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  const clickButton4 = document.getElementById('answer4');
  clickButton4.addEventListener('click', () => {
    if (clickButton4.value === results.correct_answer) {
      document.getElementById('answer4').classList.add('correctClass');
      document.getElementById('results').innerHTML = 'Correct! 😀';
      increaseScore();
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 500)} else {
        setTimeout(function() {
          openModal();
          }, 500)}
    } else {
      document.getElementById('answer4').classList.add('incorrectClass');
      document.getElementById('results').innerHTML = `Incorrect! 🤨 The correct answer is ${results.correct_answer}`;
      if (questionNumber === 10) {
        setTimeout(function() {
          gameOver();
          }, 500)} else {
        setTimeout(function() {
          openModal();
          }, 500)}
    }
  });
});
}

 