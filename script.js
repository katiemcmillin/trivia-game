//Link API
//Get Categories from API
async function getCategories() {
  try {
    const categoryURL = 'https://opentdb.com/api_category.php';
    let categoryResponse = await axios.get(categoryURL);
    //console.log(categoryResponse.data.trivia_categories);
    setOptions(categoryResponse.data.trivia_categories);
    return categoryResponse.data.trivia_categories;
  } catch (error) {
    console.error(error);
  }
}
getCategories();
//Append to DOM
function setOptions(list) {
  //console.log(list)
  const selectTag = document.querySelector('.select-category')
  list.forEach((category) => {
    //console.log(category)
    const optionTag = document.createElement('option')
    optionTag.textContent = category.name;
    optionTag.value = category.id;
    selectTag.append(optionTag)
  })
  return null;
}

function getValues(e) {
  e.preventDefault()
  //console.log(e.target);
  const name = document.querySelector('input').value;
  //console.log(name);
  const categoryValue = document.querySelector('.select-category').value;
  //console.log(categoryValue)
  const difficultyLevel = document.querySelector("#select-difficulty").value;
  //console.log(difficultyLevel)
  let valueArray = [name, categoryValue, difficultyLevel];
  getQuestions(valueArray);
  }



const form = document.querySelector('form')
form.addEventListener("submit", getValues)

//Display Info on GamePage
async function getQuestions(valueArray) {
  const questionsURL = `https://opentdb.com/api.php?amount=10&category=${valueArray[1]}&difficulty=${valueArray[2]}`
  try {
    let questionDataResponse = await axios.get(questionsURL);
    console.log(questionDataResponse.data);
  } catch (error) {
    console.error(error);
  }
}

// function displayDifficulty (){
//   let categoryH2 = document.selectElementById('category');
//   categoryH2.innerText = `Category: ${categoryValue}`;
//   console.log(categoryH2);

//Append Category to GamePage



//Build out HTML elements/structure
  //Create first page that asks for User Name, Category, and Difficulty
  //Create interface for game
    //Create Title
    //Create box for questions
    //Create inner box
    //Create Category box
    //Create question box
    //Create score box
    //Insert Image at bottom

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

//Style with CSS/Flexbox

