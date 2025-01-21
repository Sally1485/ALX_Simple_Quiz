function  checkAnswer() {
    const correctAnswer = '4'
    console.log(correctAnswer);
}

const checkedRadio = document.querySelector("quiz");
if (checkedRadio) {
    console.log(`selected option : ${checkedRadio.value}`);
} else{
    console.log ('No option selected ');
}

const userAnswer = checkedRadio.value;
console.log(userAnswer);


if(userAnswer ===correctAnswer){
    feedbackElement.textContent = "Correct! Well done."; // Provide positive feedback
                } else {
                    feedbackElement.textContent = "That is incorrect. Try again later!"; // Provide negative feedback
                }

                const button = document.getElementById("submit-answer");
                button.addEventListener('click', checkAnswer); 
                    
             
          
