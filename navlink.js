let sections = document.querySelectorAll('.section');
let navlinks = document.querySelectorAll('.nav ul .nav-elements a');

navlinks.forEach(link => {
  link.addEventListener('click', handleClick);
});

function handleClick(event) {
  event.preventDefault();

  // Remove the "active" class from all links
  navlinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add the "active" class to the clicked link
  event.target.classList.add('active');

  // Get the target section ID from the link's href attribute
  const targetId = event.target.getAttribute('href');

  // Find the corresponding section element
  const targetSection = document.querySelector(targetId);
  
  // Scroll to the target section
  if(targetId=='#Home'){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }else{
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}
