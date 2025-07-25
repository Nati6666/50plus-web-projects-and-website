const container = document.querySelector(".container");
const singUpbtn = document.querySelector(".green-bg button");
singUpbtn.addEventListener("click", () => {
    container.classList.toggle("active");
})