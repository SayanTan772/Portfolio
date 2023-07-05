document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");

    if(window.scrollY > 50){
        navbar.classList.add("scrolling");
    }else{
        navbar.classList.remove("scrolling");
    }
});
  