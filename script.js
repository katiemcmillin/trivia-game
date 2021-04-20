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
  const selectTag = document.querySelector('#select-category')
  list.forEach((category) => {
    //console.log(category)
    const optionTag = document.createElement('option')
    optionTag.textContent = category.name;
    optionTag.id = category.id;
    localStorage.setItem(`${category.name}`, category.id);
    selectTag.append(optionTag)
  })
  return null;
}

function getValues(e) {
  e.preventDefault()
  const name = document.querySelector('input').value;
  localStorage.setItem('name', name);
  const categoryText = document.querySelector('#select-category').value;
  localStorage.setItem('categoryText', categoryText);
  localStorage.setItem('categoryId', localStorage.getItem(categoryText));
  const difficultyLevel = document.querySelector("#select-difficulty").value;
  localStorage.setItem('difficulty', difficultyLevel);

  }
console.log(localStorage.categoryText);


const form = document.querySelector('form')
form.addEventListener("submit", getValues)



//Redirect input page to gamepage

function redirect() {
  window.location.replace("./game-page.html");
  return false;
}


//Display Info on GamePage



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



//Style with CSS/Flexbox

