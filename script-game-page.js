async function getQuestions(valueArray) {
  const questionsURL = `https://opentdb.com/api.php?amount=10&category=${localStorage.categoryId}&difficulty=${localStorage.difficulty}`
  try {
    let questionDataResponse = await axios.get(questionsURL);
    console.log(questionDataResponse.data);
  } catch (error) {
    console.error(error);
  }
}