"use strict";

const btnRight = document.querySelector("#right");
const btnLeft = document.querySelector("#left");
const btnRandom = document.querySelector("#random");
const photoEl = document.querySelector("#photo");
const nameEl = document.querySelector("#name");
const jobEl = document.querySelector("#job");
const descriptionEl = document.querySelector("#description");
let currentItem = 0;

const people = [
  {
    id: 1,
    name: "Marcelo Silva",
    job: "Designer",
    photo: "./assets/marcelo.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, modi ipsam molestiae cumque omnis nisi facere et voluptas iure sit.",
  },
  {
    id: 2,
    name: "Maria Joaquina",
    job: "Cantora",
    photo: "./assets/julia.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, modi ipsam molestiae cumque omnis nisi facere et voluptas iure sit.",
  },
  {
    id: 3,
    name: "Zé",
    job: "Analista",
    photo: "./assets/pedro.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, modi ipsam molestiae cumque omnis nisi facere et voluptas iure sit.",
  },
];

function setDisplay(index) {
  const item = people[index];
  photoEl.src = item.photo;
  nameEl.textContent = item.name;
  jobEl.textContent = item.job;
  descriptionEl.textContent = item.description;
}

window.addEventListener("DOMContentLoaded", () => {
  setDisplay(currentItem);
});

btnRight.addEventListener("click", () => {
  console.log(currentItem);
  if (currentItem < people.length - 1) {
    currentItem++;
    setDisplay(currentItem);
  } else {
    currentItem = 0;
    setDisplay(currentItem);
  }
});

btnLeft.addEventListener("click", () => {
  if (currentItem > 0) {
    currentItem--;
    setDisplay(currentItem);
  } else {
    currentItem = people.length - 1;
    setDisplay(currentItem);
  }
});

btnRandom.addEventListener("click", () => {
  let randomNum = Math.trunc(Math.random() * people.length);
  while (true) {
    if (randomNum != currentItem) {
      currentItem = randomNum;
      setDisplay(currentItem);
      break;
    } else {
      randomNum = Math.trunc(Math.random() * people.length);
    }
    console.log(randomNum);
  }
});
