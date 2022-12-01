// Adding burguer menu

const burguerIcon = document.querySelector("#burguer-icon");
burguerIcon.addEventListener('click', () => {
  const burguer = document.querySelector("#menu-burguer");
  burguer.classList.toggle("hidden")
} )

// API
async function callApi(param) {
  const res = await fetch('https://mockyard.herokuapp.com/products');
  const finalRes = await res.json(); 
  
  let i = Math.floor(Math.random() * (60 - 0 + 1) + 0);
  param.querySelector(".article-title").innerText = finalRes[i].name;
  param.querySelector(".article-summary").innerText = finalRes[i].description;
  param.querySelector(".timestamp").innerText = finalRes[i].createdAt;
  param.querySelector(".timestamp").setAttribute("dateTime", `${finalRes[i].createdAt}`);
}

async function callImg(param) {
  const imgCall = await fetch('https://dog.ceo/api/breeds/image/random');
  const finalImg = await imgCall.json();
  
  const image = finalImg.message;
  param.querySelector(".article-img").setAttribute("src", `${image}`);
}

const articles = document.querySelectorAll(".artic");
articles.forEach (e => {
  callApi(e);
  callImg(e);}
)


// FORM

const submit = document.querySelector("form");


submit.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.querySelectorAll("input");
    const valid = [];
    input.forEach(elem => valid.push(elem.validity.valid));
    console.log(valid);
    if (valid.includes("false")) {
      document.querySelector(".form-fail").classList.remove("hidden");
    } else
      document.querySelector(".form-done").classList.remove("hidden");
  })


// Learn more
// function learnMore (param) {
//   const parent = 
// document.querySelector("#main-title").innerText = param.querySelector(".article-title").innerText;
// document.querySelector("#main-summary").innerText = param.querySelector(".article-summary").innerText;
// document.querySelectorAll("#timestamp").innerText = param.querySelector(".timestamp").innerText;
// document.querySelectorAll("#main-img.src") = param.querySelector(".article-img.src")
// }
