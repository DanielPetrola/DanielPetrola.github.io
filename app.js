const john = document.getElementById("john");
const daniel = document.getElementById("daniel");
const petrola = document.getElementById("petrola");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  john.style.transform =
    "translate(" + offset * 0.5 + "px, -" + offset * 0 + "px)";
  daniel.style.transform =
    "translate(-" + offset * 0.1 + "px, -" + offset * 0.1 + "px)";
  petrola.style.transform =
    "translate(" + offset * 0.7 + "px, -" + offset * 0.2 + "px)";
});

// scroll details animation
//if on mobile device


function scrollIntro() {
  var headText = document.querySelector(".head-text-intro");
  var introLeft = document.querySelector(".intro-left");
  var introRight = document.querySelector(".intro-right");
  var introBody = document.querySelector(".intro");
  var headTextPosition = headText.getBoundingClientRect().top;
  if(window.innerWidth < 1000){
    var screenPosition = headTextPosition + 1;
  }else{
  screenPosition = window.innerHeight / 10};

  if (headTextPosition < screenPosition) {
    introBody.classList.add("intro-appear");
    headText.classList.add("head-text-appear");
    introLeft.classList.add("intro-left-appear");
    introRight.classList.add("intro-right-appear");
  } else {
    introBody.classList.remove("intro-appear");
    headText.classList.remove("head-text-appear");
    introLeft.classList.remove("intro-left-appear");
    introRight.classList.remove("intro-right-appear");
  }
}

function scrollDetails() {
  var headTextDetails = document.querySelector(".head-text-details");
  var detailsLeft = document.querySelector(".details-left");
  var DetailsRight = document.querySelector(".details-right");
  var headTextDetailsPosition = headTextDetails.getBoundingClientRect().top;
  if(window.innerWidth < 1000){
    var screenDetailsPosition = headTextDetailsPosition + 1;
  }else{
  screenDetailsPosition = window.innerHeight / 2.4;}

  if (headTextDetailsPosition < screenDetailsPosition) {
    headTextDetails.classList.add("head-text-details-appear");
    detailsLeft.classList.add("details-left-appear");
    DetailsRight.classList.add("details-right-appear");
  } else {
    headTextDetails.classList.remove("head-text-details-appear");
    detailsLeft.classList.remove("details-left-appear");
    DetailsRight.classList.remove("details-right-appear");
  }
}

function scrollSkills() {
  var headTextSkills = document.querySelector(".head-skills");
  var skillsLeft = document.querySelector(".skills-left");
  var skillsRight = document.querySelector(".skills-right");
  var headTextSkillsPosition = headTextSkills.getBoundingClientRect().top;
  if(window.innerWidth < 1000){
    var screenSkillsPosition = headTextSkillsPosition + 1;
  }else{
  screenSkillsPosition = window.innerHeight / 2.4;}

  if (headTextSkillsPosition < screenSkillsPosition) {
    headTextSkills.classList.add("head-skills-appear");
    skillsLeft.classList.add("skills-left-appear");
    skillsRight.classList.add("skills-right-appear");
  } else {
    headTextSkills.classList.remove("head-skills-appear");
    skillsLeft.classList.remove("skills-left-appear");
    skillsRight.classList.remove("skills-right-appear");
  }
}

function scrollProjects() {
  var headTextprojects = document.querySelector(".head-projects");
  var projectsLeft = document.querySelector(".projects-left");
  var projectsRight = document.querySelector(".projects-right");
  var contactLeft = document.querySelector(".contact-left");
  var headTextprojectsPosition = headTextprojects.getBoundingClientRect().top;
  if(window.innerWidth < 1000){
    var screenProjectsPosition = headTextprojectsPosition+ 1;
  }else{
  screenProjectsPosition = window.innerHeight / 2.4;}

  if (headTextprojectsPosition < screenProjectsPosition) {
    headTextprojects.classList.add("head-projects-appear");
    projectsLeft.classList.add("projects-left-appear");
    projectsRight.classList.add("projects-right-appear");
    contactLeft.classList.add("contact-left-appear");
  } else {
    headTextprojects.classList.remove("head-projects-appear");
    projectsLeft.classList.remove("projects-left-appear");
    projectsRight.classList.remove("projects-right-appear");
    contactLeft.classList.remove("contact-left-appear");
  }
}


window.addEventListener("scroll", scrollIntro);
window.addEventListener("scroll", scrollDetails);
window.addEventListener("scroll", scrollSkills);
window.addEventListener("scroll", scrollProjects);

//scroll line
const scrollline = document.querySelector('.scroll-line');

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };

      window.addEventListener('scroll', fillscrollline);

//landing page 
document.getElementById("landingPage").onclick = function () {
  location.href = "/sampleLandingPage/index.html";
};