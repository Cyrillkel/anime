const modal = document.querySelector(".search-model");
const modalBtn = document.querySelector(".icon_search");
const closeBtn = document.querySelector(".icon_close");
const inputSearch = document.querySelector("#search-input");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

inputSearch.oninput = () => {
  const result = inputSearch.value;
  console.log(result);
};
