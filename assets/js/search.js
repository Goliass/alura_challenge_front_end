function searchActive(active) {
  if (active) {
    document.querySelector(".containerMobile .containerLogo").classList.add("inactive"); 
    document.querySelector(".containerMobile .searchIcon").classList.add("inactive");
    document.querySelector(".containerMobile .menuIcon").classList.add("inactive"); 


    document.querySelector(".containerMobile .containerIcons").classList.add("searchActive");

    document.querySelector(".containerMobile .searchBar").classList.add("active");
    document.querySelector(".containerMobile .searchCloseIcon").classList.add("active");
  } else {
    document.querySelector(".containerMobile .searchBar").classList.remove("active");
    document.querySelector(".containerMobile .searchCloseIcon").classList.remove("active");

    document.querySelector(".containerMobile .containerIcons").classList.remove("searchActive");

    document.querySelector(".containerMobile .containerLogo").classList.remove("inactive"); 
    document.querySelector(".containerMobile .searchIcon").classList.remove("inactive");
    document.querySelector(".containerMobile .menuIcon").classList.remove("inactive"); 
  }
}

document.querySelector(".containerMobile .searchIcon").addEventListener('click', () => {
  searchActive(true);
});

document.querySelector(".containerMobile .searchCloseIcon").addEventListener('click', () => {
  searchActive(false);
});