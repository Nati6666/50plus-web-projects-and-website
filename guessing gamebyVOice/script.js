const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();
console.log(randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();

recognition.start();

// Capture the user speaking
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
}

// Write what the user said
function writeMessage(msg) {
    msgEl.innerHTML = `
        <div>You said:</div>
        <span class="box">${msg}</span>
    `;
}

// Check the message against the number
function checkNumber(msg) {
    const num = +msg;

    if (Number.isNaN(num)) {
        msgEl.innerHTML += `<div>That is not a valid number</div>`;
        return;
    }

    if (num < 1 || num > 100) {
        msgEl.innerHTML += `<div>Number must be between 1 and 100</div>`;
        return;
    }

    if (num === randomNum) {
        document.body.innerHTML = `
            <h2>Congrats! You have guessed the correct number!<br><br>
            It was ${num}</h2> 
            <button class="play-again" id="play-again">Play Again</button>
        `;
    } else if (num > randomNum) {
        msgEl.innerHTML += `<div>GO Lower</div>`;
    } else {
        msgEl.innerHTML += `<div>GO Higher</div>`;
    }
}

// Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Listen for result
recognition.addEventListener('result', onSpeak);

// Restart recognition service
recognition.addEventListener('end', () => recognition.start());

// Reload page when "Play Again" is clicked
document.body.addEventListener('click', e => {
    if (e.target.id === 'play-again') {
        window.location.reload(); // <- FIX: add () to reload
    }
});
