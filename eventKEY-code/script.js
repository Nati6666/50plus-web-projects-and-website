const insert = document.querySelector('.insert');


window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class="key">
        ${e.key === ' ' ? 'Space' : e.key}
    

        <span class="key">${e.code}</span>
        <span class="key">${e.location}</span>
        <span class="key">${e.repeat}</span>       </div>`;
   
})