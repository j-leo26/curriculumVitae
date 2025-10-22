window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
