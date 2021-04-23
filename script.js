/*=====================================================
API Request for Categories
======================================================*/

async function getCategories() {
  try {
    const categoryURL = 'https://opentdb.com/api_category.php';
    const categoryResponse = await axios.get(categoryURL);
    setOptions(categoryResponse.data.trivia_categories);
    return categoryResponse.data.trivia_categories;
  } catch (error) {
    console.error(error);
  }
}
getCategories();

//Append Categories to DOM
function setOptions(list) {
  const selectTag = document.querySelector('#select-category');
  list.forEach((category) => {
    const optionTag = document.createElement('option');
    optionTag.textContent = category.name;
    optionTag.id = category.id;
    localStorage.setItem(`${category.name}`, category.id);
    selectTag.append(optionTag);
  })
  return null;
}
/*=====================================================
Get User Input
======================================================*/

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

const form = document.querySelector('form')
form.addEventListener("submit", getValues)


/*=====================================================
Redirect First Page to Game Page
======================================================*/


function redirect() {
  window.location.replace("./game-page.html");
  return false;
}


