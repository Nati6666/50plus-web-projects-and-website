const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', generateJoke);


generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json();
    jokeEl.innerHTML = data.joke;


        // Uncomment the following lines if you want to fetch a joke from an API
        

        // .then((res) => res.json())
        // .then((data) => {
        //     jokeEl.innerHTML = data.joke;
        // })
        // .catch((err) => {
        //     console.error('Error fetching joke:', err);
        //     jokeEl.innerHTML = 'Oops! Could not fetch a joke at this time.';
        // });
}   
