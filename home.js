console.log('hello!')

const header = document.querySelector('.header'); 

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top); 
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (((window.scrollY > 0) && (window.scrollY < 1500)))  {
     header.classList.add('scrolled')
    } else  if (window.scrollY > 1620) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

window.addEventListener('scroll', function() {

    const scrollPosition = window.scrollY;

    const headerHeight = document.querySelector('header').offsetHeight;

    const sectionPositions = [
      document.querySelector('#aboutus').offsetTop,
      document.querySelector('#products').offsetTop,
      document.querySelector('#contactus').offsetTop,
    ];

    let currentSectionIndex = 0;
    for (let i = 0; i < sectionPositions.length; i++) {
      if (scrollPosition >= sectionPositions[i] - headerHeight) {
        currentSectionIndex = i + 1;
      }
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.classList.remove('highlight');
    });

    navLinks[currentSectionIndex].classList.add('highlight');
  });


const hamburger = document.querySelectorAll(".hamburger");
const navMenu = document.querySelectorAll(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))