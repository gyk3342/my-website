function submitQuiz() {
    const form = document.getElementById('quizForm');
    const playerName = form.playerName.value;
    let score = 0;
    const correctAnswers = [1, 1, 1, 2, 2, 1, 1, 1, 3, 2];

    correctAnswers.forEach((correctAnswer, index) => {
        const question = `q${index + 1}`;
        const selectedAnswer = form[question].value;
        score += parseInt(selectedAnswer, 10);
    });

    alert(`Hello ${playerName}, your score is ${score * 20}`);
}
