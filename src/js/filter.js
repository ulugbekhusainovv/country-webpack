const serachEl = document.querySelector(".search");

serachEl.search.addEventListener("input", () => {
  let searchValue = serachEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].classList.remove("hidden");
    } else {
      cardsItem[i].classList.add("hidden");
    }
  });
});

import request from "./request";
import { createCountries } from "./updateUI";

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

searchSelect.forEach((li) => {
  let filterAPI;

  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    if (li.textContent == "All") {
      filterAPI = `https://restcountries.com/v3.1/all`;
    } else {
      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }

    request(filterAPI)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        alert(err);
      });
  });
});
