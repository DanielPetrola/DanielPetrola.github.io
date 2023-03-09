// scroll product cards animation
function scrollAppear() {
  var card = document.querySelector(".card-all");
  var cardPosition = card.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.7;

  if (cardPosition < screenPosition) {
    card.classList.add("card-appear");
  } else {
    card.classList.remove("card-appear");
  }
}

// scroll about us animation
function scrollAboutAppear() {
  var about = document.querySelector(".about-us");
  var aboutImg = document.querySelector(".about-us-img");
  var aboutPosition = about.getBoundingClientRect().top;
  var aboutImgPosition = aboutImg.getBoundingClientRect().top;
  var screenAboutPosition = window.innerHeight / 1.7;

  if (aboutPosition < screenAboutPosition) {
    about.classList.add("about-appear");
    aboutImg.classList.add("about-appear");
  } else {
    about.classList.remove("about-appear");
    aboutImg.classList.remove("about-appear");
  }
}
// scroll product cards animation
function scrollTestimonialsAppear() {
    var test1 = document.querySelector(".test1");
    var test2 = document.querySelector(".test2");
    var testPosition = test1.getBoundingClientRect().top;
    var screenTestPosition = window.innerHeight / 1.7;
  
    if (testPosition < screenTestPosition) {
      test1.classList.add("test1-appear");    
      test2.classList.add("test2-appear"); 
    } else {
      test1.classList.remove("test1-appear");
      test2.classList.remove("test2-appear");
    }
  }
// scroll product cards animation
function scrollContactAppear() {
    var form = document.querySelector(".contact-form");
    var contact = document.querySelector(".contact");
    var formPosition = contact.getBoundingClientRect().top;
    var screenFormPosition = window.innerHeight / 3;
  
    if (formPosition < screenFormPosition) {
      form.classList.add("contact-form-appear");
    } else {
      form.classList.remove("contact-form-appear");
    }
  }

window.addEventListener("scroll", scrollAppear);
window.addEventListener("scroll", scrollAboutAppear);
window.addEventListener("scroll", scrollTestimonialsAppear);
window.addEventListener("scroll", scrollContactAppear);
