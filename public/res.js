let score=0;
let answeredQuestions=0;
const totalQuestions=5;

function checkanswer(questionId, selectedAnswer) {
    const questionContainer= document.getElementById(questionId);
  const buttons = questionContainer.querySelectorAll('.answer-button');

//DADFASD
if (questionId === 'q1' && selectedAnswer === 'c'){ 
 score++; 
}else if(questionId ==='q2' && selectedAnswer === 'b'){
  score++;
}else if(questionId === 'q3' && selectedAnswer === 'a'){
  score++;
}else if (questionId === 'q4' && selectedAnswer === 'b'){
  score++;
}else if (questionId === 'q5' && selectedAnswer === 'd'){
  score++;
}

 answeredQuestions++;
}


function showResults() {
    if (answeredQuestions === totalQuestions) {
        const percentageScore = Math.round((score / totalQuestions) * 100);
        alert(`Quiz completed!\nYou scored ${score} out of ${totalQuestions} (${percentageScore}%).`);
    } else {
        alert('Please answer all questions before submitting.');
    }
}

  
  
