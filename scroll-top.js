// Get the button
let mybutton = document.getElementById("scroll-top-btn");

// Check if the initial scroll position is within the #home section
window.addEventListener("DOMContentLoaded", () => {
  if (isInHomeSection()) {
    mybutton.style.display = "none";
  } else {
    scrollFunction();
  }
});

// When the user scrolls, show/hide the button based on the scroll position
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "grid";
  } else {
    mybutton.style.display = "none";
  }
}

// Check if the current scroll position is within the #home section
function isInHomeSection() {
  const homeSection = document.getElementById("Home");
  const rect = homeSection.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
