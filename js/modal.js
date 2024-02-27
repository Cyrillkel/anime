const modal = () => {
  const modalSearch = document.querySelector(".search-model");
  const modalBtn = document.querySelector(".icon_search");
  const closeBtn = document.querySelector(".icon_close");
  const inputSearch = document.querySelector("#search-input");

  modalBtn.addEventListener("click", () => {
    modalSearch.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modalSearch.classList.remove("active");
  });

  inputSearch.addEventListener("input", () => {
    console.log(inputSearch.value);
  });
};

modal();
