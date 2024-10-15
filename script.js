const words = ["javascript", "python", "java", "html", "css", "typescript", "react", "nodejs", "angular", "vue"];
let currentWord;
let startTime;
let timeoutId;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('user-input').addEventListener('input', checkInput);

function startGame() {
    document.getElementById('start-button').disabled = true;
    document.getElementById('user-input').disabled = false;
    document.getElementById('user-input').value = '';
    document.getElementById('message').textContent = '';
    currentWord = getRandomWord();
    document.getElementById('word-to-type').textContent = currentWord;
    startTime = new Date();
    timeoutId = setTimeout(endGame, 30000); // End the game after 30 seconds
}

function checkInput() {
    const userInput = document.getElementById('user-input').value;
    if (userInput === currentWord) {
        clearTimeout(timeoutId);
        const elapsedTime = (new Date() - startTime) / 1000;
        document.getElementById('message').textContent = `Congratulations! You typed the word in ${elapsedTime.toFixed(2)} seconds.`;
        endGame();
    }
}

function endGame() {
    document.getElementById('start-button').disabled = false;
    document.getElementById('user-input').disabled = true;
    document.getElementById('word-to-type').textContent = 'Press Start to begin';
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
