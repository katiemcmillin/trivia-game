let totalScore = 0;
let turn = 0;

document.querySelector('#score').textContent = `Score: ${totalScore}`;

async function getQuestions() {
  const questionsURL = `https://opentdb.com/api.php?amount=10&category=${localStorage.categoryId}&difficulty=${localStorage.difficulty}`;
  try {
    let questionDataResponse = await axios.get(questionsURL);
    localStorage.setItem('apiData', JSON.stringify(questionDataResponse.data));
    currentQuestion(JSON.parse(localStorage.getItem('apiData')), turn);

  } catch (error) {
    console.error(error);
  }
}
getQuestions();
function makePrettyString(str) {
  str = str.replace(/&quot;/g, '"');
  str = str.replace(/&#039;/g, "'");
  str = str.replace(/&ldquo;/g, '"');
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&rdquo;/g, '"');
  str = str.replace(/&eacute;/g, 'è');
  str = str.replace(/&iacute;/g, 'ì');
  str = str.replace(/&uuml;/g, 'ü');
  str = str.replace(/&ecirc;/g, 'î');
  str = str.replace(/&ntilde;/g, 'ñ');
  str = str.replace(/ouml;/g, 'ö')
  return str;
}

document.querySelector('#category').textContent = `Category: ${localStorage.categoryText}`;
document.querySelector('#answerTitle').textContent = `${localStorage.name}, select the correct answer`

function currentQuestion(data, turn) {
  let question = `${makePrettyString(data.results[turn].question)}`
  document.querySelector('#question').textContent = `Question: ${question}`;
  document.querySelectorAll('input[type=radio').forEach(e => e.remove());
  document.querySelectorAll('label').forEach(e => e.remove());
  let allAnswersArray = [];
  const correctAnswer = `${makePrettyString(data.results[turn].correct_answer)}`;
  let incorrectAnswersArray = data.results[turn].incorrect_answers;
  for (i = 0; i < incorrectAnswersArray.length; i++) {
    incorrectAnswersArray[i] = makePrettyString(incorrectAnswersArray[i]);
  };
  allAnswersArray = [correctAnswer, ...incorrectAnswersArray];
  allAnswersArray = allAnswersArray.sort(() => Math.random() - 0.5);
  // Found syntax for radio buttons here: https://www.tutorialspoint.com/how-to-dynamically-create-radio-buttons-using-an-array-in-javascript
  //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
  allAnswersArray.forEach(answer => {
    let answerLabel = document.createElement('label');
    let answerButton = document.createElement('input');
    answerLabel.setAttribute('for', answer)
    answerLabel.textContent = answer;
    answerButton.value = answer;
    answerButton.name = 'choice';
    answerButton.type = 'radio';
    if (answer === correctAnswer) {
      answerButton.classList = 'correct-answer';
    } else {
      answerButton.classList = 'wrong-answer';
    }
    document.querySelector('#answer').append(answerLabel);
    document.querySelector('#answer').append(answerButton);
  });


}

const btn = document.querySelector('#btn');
// handle click button
  btn.onclick = function selectAnswer() {
    const choices = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const choice of choices) {
      if (choice.checked) {
        selectedValue = choice.value;
        turn++
        console.log(turn)
        scoreTracker(choice.classList.value);
        currentQuestion(JSON.parse(localStorage.getItem('apiData')), turn)
        //scoreTracker(selectedValue);
        break
      }
    }
  }



function scoreTracker(value) {
  
  if (value === 'correct-answer') {
    totalScore++;
    
    document.querySelector('#selection-message').textContent = `Correct!`
    document.querySelector('#score').textContent = `Score: ${totalScore}`;
    console.log(totalScore)
    


  } else {
    document.querySelector('#selection-message').textContent = `Incorrect!`
    console.log(totalScore)
   
  }
  if (turn > 9) {
    localStorage.setItem('finalScore', `${totalScore}/10`)
    window.location.replace("./final-score.html");
    
    }
}






//Create interactive game with JavaScript
  //Get user input for name
  //Create dropdown menus for Category and Difficulty
  //Go to game and display question 1 with Category, Question and possible answers
  //User clicks on one question 
    //If correct, background changes to green and score goes up by one
      //else, background changed to red and score stays the same
  //Goes to next question and repeats
  //Games ends after 10 questions
    //shows final score