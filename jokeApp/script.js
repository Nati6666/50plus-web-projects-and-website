const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', generateJoke);


generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        })
        .catch((err) => {
            console.error('Error fetching joke:', err);
            jokeEl.innerHTML = 'Oops! Could not fetch a joke at this time.';
        });
}   
