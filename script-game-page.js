/*=====================================================
API Request with User Input
======================================================*/

let totalScore = 0;
let turn = 0;

/* Displays Score: 0 at Start of Game */
document.querySelector('#score').textContent = `Score: ${totalScore}`;

/* Pulls API and Stores to Local Storage */
async function getQuestions() {
  const questionsURL = `https://opentdb.com/api.php?amount=10&category=${localStorage.categoryId}&difficulty=${localStorage.difficulty}`;
  try {
    const questionDataResponse = await axios.get(questionsURL);
    localStorage.setItem('apiData', JSON.stringify(questionDataResponse.data));
    currentQuestion(JSON.parse(localStorage.getItem('apiData')), turn);

  } catch (error) {
    console.error(error);
  }
}
getQuestions();

/*=====================================================
Renders GamePlay Info
======================================================*/

/* Replaces special characters in Q&A Strings */
function makePrettyString(str) {
  str = str.replace(/&quot;/g, '"');
  str = str.replace(/&#039;/g, "'");
  str = str.replace(/&ldquo;/g, '"');
  str = str.replace(/&lsquo;/g, "'");
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&rdquo;/g, '"');
  str = str.replace(/&eacute;/g, 'é');
  str = str.replace(/&iacute;/g, 'í');
  str = str.replace(/&uuml;/g, 'ü');
  str = str.replace(/&ecirc;/g, 'î');
  str = str.replace(/&ntilde;/g, 'ñ');
  str = str.replace(/&ouml;/g, 'ö');
  str = str.replace(/&oacute;/g, 'ó');
  str = str.replace(/&aacute;/g, 'á');
  str = str.replace(/&uacute;/g, 'ú');
  str = str.replace(/&deg;/g, '°');
  str = str.replace(/&rsquo;/g, "'");
  str = str.replace(/&shy;/g, "");
  str = str.replace(/&Eacute;/g, 'É');
  str = str.replace(/&euml;/g, 'ë');
  return str;
}

/* Displays Question Number, Category, User Name at start of game */
document.querySelector('#question-number-text').textContent = `Question: ${turn + 1}/10`;
document.querySelector('#category').textContent = `Category: ${localStorage.categoryText}`;
document.querySelector('#answer-title').textContent = `${localStorage.name}, select the correct answer:`;



/* Renders Questions and Answers

Found syntax for radio buttons here:
https://www.tutorialspoint.com/how-to-dynamically-create-radio-buttons-using-an-array-in-javascript
https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/ */

function currentQuestion(data, turn) {
  try {
    /* Renders Question and Question Number*/
    let question = `${makePrettyString(data.results[turn].question)}`;
    document.querySelector('#question').textContent = `${question}`;
    document.querySelector('#question-number-text').textContent = `Question: ${turn + 1}/10`;
    /* Removes Previous Answer Choices from DOM */
    document.querySelectorAll('li').forEach(e => e.remove());
    
    /* Randomizes Answer Choices */
    let allAnswersArray = [];
    const correctAnswer = `${makePrettyString(data.results[turn].correct_answer)}`;
    let incorrectAnswersArray = data.results[turn].incorrect_answers;
    for (i = 0; i < incorrectAnswersArray.length; i++) {
      incorrectAnswersArray[i] = makePrettyString(incorrectAnswersArray[i]);
    };
    allAnswersArray = [correctAnswer, ...incorrectAnswersArray];
    allAnswersArray = allAnswersArray.sort(() => Math.random() - 0.5);
    
    /* Renders Answers and Radio Buttons */
    allAnswersArray.forEach(answer => {
      let answerLabel = document.createElement('label');
      let answerButton = document.createElement('input');
      answerLabel.setAttribute('for', answer);
      answerLabel.textContent = answer;
      answerButton.value = answer;
      answerButton.name = 'choice';
      answerButton.type = 'radio';
      if (answer === correctAnswer) {
        answerButton.classList = 'correct-answer';
      } else {
        answerButton.classList = 'wrong-answer';
      }
      let listElement = document.createElement('li');
      document.querySelector('#answer-list').append(listElement);
      listElement.append(answerButton);
      listElement.append(answerLabel);
    });

/* If user selects difficulty that category doesn't include, throws user an error
and asks them to go back to first page */
  } catch (error) {
    document.querySelector('#answer-title').textContent = "Please select another difficulty for this category.";
    let backLink = document.createElement('a');
    backLink.innerHTML = '<a href = "./index.html">back</a>';
    document.querySelector('#answer').append(backLink);
  }
}


/*=====================================================
Checks for Correct Answer and Keeps Score
======================================================*/

/* Handles User Answer Selection*/
const btn = document.querySelector('#btn');
btn.onclick = function selectAnswer() {
  const choices = document.querySelectorAll('input[name="choice"]');
  for (const choice of choices) {
    if (choice.checked) {
      turn++;
      scoreTracker(choice.classList.value);
      currentQuestion(JSON.parse(localStorage.getItem('apiData')), turn);
    }
  }
}


/* Increments score and ends game after 10 questions */
function scoreTracker(value) {

  if (value === 'correct-answer') {
    totalScore++;
    let correctSound = new Audio('./Correct-answer.mp3');
    correctSound.play();
    document.querySelector('#selection-message').textContent = `Correct!`;
    document.querySelector('#score').textContent = `Score: ${totalScore}`;
  } else {
    let incorrectSound = new Audio('./Error.mp3');
    incorrectSound.play();
    document.querySelector('#selection-message').textContent = `Incorrect!`;
  }
  if (turn > 9) {
    localStorage.setItem('finalScore', `${totalScore}`);
    window.location.replace("./final-score.html");
  }
}


