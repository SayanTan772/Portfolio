function startAnimations() {
    let progressbar = document.querySelector(".circular-progress");
    let valuecontainer = document.querySelector(".value-container");
  
    let progressValue = 0;
    let progressendvalue = 88;
    let speed = 25;
  
    let progress = setInterval(() => {
      progressValue++;
      valuecontainer.textContent = `${progressValue}%`;
      progressbar.style.background = `conic-gradient(#4d5bf9 ${progressValue * 3.6}deg, #cadcff ${progressValue * 3.6}deg)`;
  
      if (progressValue === progressendvalue) {
        clearInterval(progress);
      }
    }, speed);
  
    let progressbar2 = document.querySelector(".circular-progress.second");
    let valuecontainer2 = document.querySelector(".value-container.second");
  
    let progressValue2 = 0;
    let progressendvalue2 = 75;
    let speed2 = 25;
  
    let progress2 = setInterval(() => {
      progressValue2++;
      valuecontainer2.textContent = `${progressValue2}%`;
      progressbar2.style.background = `conic-gradient(#fca61f ${progressValue2 * 3.6}deg, #fadeb1 ${progressValue2 * 3.6}deg)`;
  
      if (progressValue2 === progressendvalue2) {
        clearInterval(progress2);
      }
    }, speed2);
  
    let progressbar3 = document.querySelector(".circular-progress.third");
    let valuecontainer3 = document.querySelector(".value-container.third");
  
    let progressValue3 = 0;
    let progressendvalue3 = 56;
    let speed3 = 25;
  
    let progress3 = setInterval(() => {
      progressValue3++;
      valuecontainer3.textContent = `${progressValue3}%`;
      progressbar3.style.background = `conic-gradient(#20b2aa ${progressValue3 * 3.6}deg, hsl(176, 86%, 80%) ${progressValue3 * 3.6}deg)`;
  
      if (progressValue3 === progressendvalue3) {
        clearInterval(progress3);
      }
    }, speed3);
  
    let progressbar4 = document.querySelector(".circular-progress.fourth");
    let valuecontainer4 = document.querySelector(".value-container.fourth");
  
    let progressValue4 = 0;
    let progressendvalue4 = 82;
    let speed4 = 25;
  
    let progress4 = setInterval(() => {
      progressValue4++;
      valuecontainer4.textContent = `${progressValue4}%`;
      progressbar4.style.background = `conic-gradient(#6f34fe ${progressValue4 * 3.6}deg, hsl(250,94%,80%) ${progressValue4 * 3.6}deg)`;
  
      if (progressValue4 === progressendvalue4) {
        clearInterval(progress4);
      }
    }, speed4);
  }

  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimations();
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.skills');
  hiddenElements.forEach((el) => Observer.observe(el));
  