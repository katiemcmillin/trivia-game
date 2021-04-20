async function getQuestions() {
  const questionsURL = `https://opentdb.com/api.php?amount=10&category=${localStorage.categoryId}&difficulty=${localStorage.difficulty}`;
  try {
    let questionDataResponse = await axios.get(questionsURL);
    console.log(questionDataResponse.data);
    currentQuestion(questionDataResponse.data);
    //console.log(questionDataResponse.data.results[0].question)
  } catch (error) {
    console.error(error);
  }
}
getQuestions();

document.querySelector('#category').textContent = `Category: ${localStorage.categoryText}`;

function currentQuestion(data) {
  let question = `${data.results[0].question}`.replace(/&quot;/g, '"');
  question = question.replace(/ldquo;/g, '"');
  document.querySelector('#question').textContent = `Question: ${question.replace(/&#039;/g, '"')}`;


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