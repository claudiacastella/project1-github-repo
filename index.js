// Adding burguer menu

const burguerIcon = document.querySelector("#burguer-icon");
burguerIcon.addEventListener('click', () => {
  const burguer = document.querySelector("#menu-burguer");
  burguer.classList.toggle("hidden")
} )

