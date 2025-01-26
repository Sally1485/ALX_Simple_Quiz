function checkAnswer () {
  const correctAnswer = '4';
  const selectedRadioButton = document.querySelector('input[name ="quiz"]:checked');
  const userAnswer = selectedRadioButton ? selectedRadioButton.value : null;
  const feedbackElement = document.getElementById('feedback');
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = 'Correct! Well done.';
  } else if(userAnswer) {
    feedbackElement.textContent = "That's incorrect. Try again!";
  } else {
    feedbackElement.textContent = "Please select an answer.";
}
}  

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);

