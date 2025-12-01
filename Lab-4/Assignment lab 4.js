// Step 1: Quiz Questions Array (5+ questions)
const quizQuestions = [
    { question: "What does AI stand for?", answer: "artificial intelligence" },
    { question: "Capital of India?", answer: "new delhi" },
    { question: "Largest planet in solar system?", answer: "jupiter" },
    { question: "Python file extension?", answer: ".py" },
    { question: "HTML stands for?", answer: "hypertext markup language" },
    { question: "TCS CodeVita registration site?", answer: "codevita.tcsapps.com" }
];

// Step 2: runQuiz Function
function runQuiz() {
    let score = 0;  // Step 3: Score initialization
    
    // Step 4: Loop through questions
    for (let i = 0; i < quizQuestions.length; i++) {
        // Step 5: Prompt user input
        let userAnswer = prompt(`Q${i+1}: ${quizQuestions[i].question}`);
        
        // Step 6: Normalize input
        userAnswer = userAnswer ? userAnswer.toLowerCase().trim() : "";
        let correctAnswer = quizQuestions[i].answer.toLowerCase().trim();
        
        // Step 7: Check answer
        if (userAnswer === correctAnswer) {
            score++;  // Increment score
            alert("✅ Correct!");  // Step 8: Feedback
        } else {
            alert(`❌ Wrong! Correct: ${quizQuestions[i].answer}`);
        }
    }
    
    // Step 9: Final score
    alert(`🎉 Quiz Complete! Score: ${score}/${quizQuestions.length} (${Math.round(score/quizQuestions.length*100)}%)`);
}

// Step 10: Run the quiz
runQuiz();
