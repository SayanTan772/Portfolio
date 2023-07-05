const buttons = document.querySelectorAll(".btn-yellow");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.classList.add("btn-hover");
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove("btn-hover");
  });
});

const linkedin = document.querySelector("#linkedin");

linkedin.addEventListener("mouseover", () => {
  linkedin.classList.add("hover-linkedin");
});

linkedin.addEventListener("mouseout", () => {
  linkedin.classList.remove("hover-linkedin");
});

const twitter = document.querySelector("#twitter");

twitter.addEventListener("mouseover", () => {
  twitter.classList.add("hover-twitter");
});

twitter.addEventListener("mouseout", () => {
  twitter.classList.remove("hover-twitter");
});

const github = document.querySelector("#github");

github.addEventListener("mouseover", () => {
  github.classList.add("hover-github");
});

github.addEventListener("mouseout", () => {
  github.classList.remove("hover-github");
});

const navLinks = document.querySelectorAll(".footer-nav li a");

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('active-now');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('active-now');
  });
});
