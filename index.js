// Adding burguer menu

const burguerIcon = document.querySelector("#burguer-icon");
burguerIcon.addEventListener('click', () => {
  const burguer = document.querySelector("#menu-burguer");
  burguer.classList.toggle("hidden")
} )

// API
async function callApi() {
  const res = await fetch('https://mockyard.herokuapp.com/products');
  const finalRes = await res.json(); 
  
  let i = Math.floor(Math.random() * (60 - 0 + 1) + 0);
  document.querySelector(".article-title").innerText = finalRes[i].name;
  document.querySelector(".article-summary").innerText = finalRes[i].description;
  document.querySelector(".timestamp").innerText = finalRes[i].createdAt;
  document.querySelector(".timestamp").setAttribute("dateTime", `${finalRes[i].createdAt}`);
}

async function callImg() {
  const imgCall = await fetch('https://dog.ceo/api/breeds/image/random');
  const finalImg = await imgCall.json();

  const image = finalImg.message;
  document.querySelector(".article-img").setAttribute("src", `${image}`);
}

const articles = document.querySelectorAll(".artic");

articles.forEach (e => {
  callApi(e);
  callImg(e);}
)

// Averiguar cómo hacer que se repita en las 3 cards, y no que me printe solo la primera. 



// FORM

const submit = document.querySelector("#submit-btn");


submit.addEventListener("click",() =>{
  const input = document.querySelectorAll("input");
  const valid = [];
  input.forEach(elem => valid.push(elem.validity.valid));
  console.log(valid);
  if (valid.includes("false")){
    document.querySelector(".form-fail").classList.remove("hidden")
  } else document.querySelector(".form-done").classList.remove("hidden")

})
