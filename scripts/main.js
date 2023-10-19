
document.addEventListener("DOMContentLoaded", function () {
  /* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT && Image translation ----- */

// Define an array of image URLs corresponding to each text
const imageUrls = [
  "images/sensorview1.webp",
  "images/avatar2.jpg",
  "images/avatar3.jpg",
  "images/avatar4.webp",
  "images/avatar5.webp",
  "images/avatar6.jpg",
];

// Initialize the Typed.js typing effect
var typingEffect = new Typed(".typing-text", {
  strings: [
      "Accurate and timely data guiding their decisions",
      "Increased crop yield and quality",
      "Reduced use of fertilizers and pesticides",
      "Improved resilience to weather and other external factors",
      "Enhanced data-driven decision-making",
      "Farmers make informed choices about their crops"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 150,
  // Add a callback function to change the image based on the current text
  onStringTyped: function (arrayPos, self) {
      const currentText = self.strings[arrayPos];
      const currentIndex = self.arrayPos;

      // Check if the current index is within the range of image URLs
      if (currentIndex >= 0 && currentIndex < imageUrls.length) {
          const newImageUrl = imageUrls[currentIndex];

          // Update the featured image source with the new URL
          const featuredImage = document.querySelector(".featured-image img");
          featuredImage.src = newImageUrl;
      }
  }
});



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK AND UPDATE PAGE TITLE ----- */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
      document.title = "Agrisense360 | " + sectionId; // Update page title
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

scrollActive();


// Attach the scrollActive function to the scroll event listener
window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', scrollActive)




window.addEventListener('scroll', scrollActive);

});
function redirectToLogin() {
  // Replace "login.html" with the actual URL of your login page
  window.location.href = "login.html";
}