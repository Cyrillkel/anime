const scrollToTop = () => {
  const scrollTopBtn = document.querySelector("#scrollToTopButton");

  scrollTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};

scrollToTop();
