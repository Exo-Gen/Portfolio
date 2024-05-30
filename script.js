window.addEventListener("load", () => {
  
  const loader = document.querySelector(".loader");
  const mainContent = document.querySelector("main");
  const headerContent = document.querySelector("header");
  const footerContent = document.querySelector("footer");

  mainContent.classList.add("blur");
  headerContent.classList.add("blur");
  footerContent.classList.add("blur");

  setTimeout(() => {
    mainContent.classList.remove("blur");
    headerContent.classList.remove("blur");
    footerContent.classList.remove("blur");

    loader.parentNode.removeChild(loader);
  }, 1750);
});