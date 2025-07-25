const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold On';

        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container shrink'
        }, holdTime);
        
    }, breatheTime);
}

// Call it once immediately
breathAnimation();
// Then repeat
setInterval(breathAnimation, totalTime);
