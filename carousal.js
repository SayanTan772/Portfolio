const slides = document.querySelectorAll(".carousal-img");
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
const goprev = () => {
    if(counter>0){
        counter--;
        slideimage();
    }
}
const gonext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideimage();
    }
}
const slideimage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

