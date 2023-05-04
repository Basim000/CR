console.log('hello!')

const header = document.querySelector('.header'); 

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top); 
}
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    let el = document.getElementById('threezerofour');
    let elcoordinates = el.getBoundingClientRect();
    let headcoordinates = header.getBoundingClientRect();
    const y = elcoordinates.top + window.pageYOffset;
    const headery = headcoordinates.bottom + window.pageYOffset;
    const productposition = document.querySelector('#products').offsetTop

    if (window.scrollY > 0){
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }

    if ((headery >= productposition) && (headery <= y)) {
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