function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || "topnav.scrolled") {
        x.className += ' responsive'; 
    } else {
        x.className = "topnav" || "topnav.scrolled";
    }
}

function autoClose() {
    var element = document.getElementById("myTopnav");
    element.classList.remove("responsive");
}

document.addEventListener('click', () => {
  const remove = document.querySelector(".topnav.responsive a.icon");
    remove.classList.remove("responsive");
})


document.addEventListener('scroll', () => {
    const header = document.querySelector('.topnav');

    if (((window.scrollY > 0)))  {
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

  const navLinks = document.querySelectorAll('.topnav a');
  navLinks.forEach(a => {
    a.classList.remove('highlight');
  });

  navLinks[currentSectionIndex].classList.add('highlight');
})