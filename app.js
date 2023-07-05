const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-left');
      } else {
        entry.target.classList.remove('show-left');
      }
    });
  });
  
  const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
  hiddenElementsLeft.forEach((el) => leftObserver.observe(el));
  
  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-right');
      } else {
        entry.target.classList.remove('show-right');
      }
    });
  });
  
  const hiddenElementsRight = document.querySelectorAll('.hidden-right');
  hiddenElementsRight.forEach((el) => rightObserver.observe(el));

  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  const invisible = document.querySelectorAll('.invisible');
  invisible.forEach((el) => observer1.observe(el));
  