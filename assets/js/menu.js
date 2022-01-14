function menuActive(active) {
  if (active) {
    document.querySelector("#menuIcon").classList.add("inactive");
    document.querySelector("#menuCloseIcon").classList.add("active");
    document.querySelector("#menu__mobile").classList.add("active");
  } else {
    document.querySelector("#menu__mobile").classList.remove("active");
    document.querySelector("#menuCloseIcon").classList.remove("active");
    document.querySelector("#menuIcon").classList.remove("inactive");
  }
}

document.querySelector("#menuIcon").addEventListener('click', () => {
  menuActive(true);
});

document.querySelector("#menuCloseIcon").addEventListener('click', () => {
  menuActive(false);
});