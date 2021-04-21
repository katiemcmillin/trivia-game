let totalScore = 0;
let turn = 0;
document.querySelector('#score').textContent = `Score: ${totalScore}`;

async function getQuestions() {
  const questionsURL = `https://opentdb.com/api.php?amount=10&category=${localStorage.categoryId}&difficulty=${localStorage.difficulty}`;
  try {
    let questionDataResponse = await axios.get(questionsURL);
    //console.log(questionDataResponse.data);
      currentQuestion(questionDataResponse.data);
    //console.log(questionDataResponse.data.results[0].question)
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
  return str;
}

document.querySelector('#category').textContent = `Category: ${localStorage.categoryText}`;

function currentQuestion(data) {
  let question = `${makePrettyString(data.results[turn].question)}`
    document.querySelector('#question').textContent = `Question: ${question}`;
    let allAnswersArray = [];
    const correctAnswer = `${makePrettyString(data.results[0].correct_answer)}`;
    let incorrectAnswersArray = data.results[0].incorrect_answers;

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
    const btn = document.querySelector('#btn');
    // handle click button
    btn.onclick = function () {
      const choices = document.querySelectorAll('input[name="choice"]');
      let selectedValue;
      for (const choice of choices) {
        if (choice.checked) {
          selectedValue = choice.value;
          turn++
          scoreTracker(choice.classList.value);
          //scoreTracker(selectedValue);
          window.location.reload;
          break
        }
      }
    }

}
function scoreTracker(value) {
      if (value === 'correct-answer') {
      totalScore++;
        document.querySelector('#score').textContent = `Score: ${totalScore}`;
      //alert(`You chose wisely! Score: ${totalScore}`);
    
    
      } else {
      //alert(`You chose poorly! Score: ${totalScore}`);
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