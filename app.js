const john = document.getElementById("john");
const daniel = document.getElementById("daniel");
const petrola = document.getElementById("petrola");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  john.style.transform =
    "translate(" + offset * 0.3 + "px, -" + offset * 0.05 + "px)";
  daniel.style.transform =
    "translate(-" + offset * 0.4 + "px, -" + offset * 0.25 + "px)";
  petrola.style.transform =
    "translate(" + offset * 0.5 + "px, -" + offset * 0.5 + "px)";
});

// scroll details animation

function scrollIntro() {
  var headText = document.querySelector(".head-text-intro");
  var introLeft = document.querySelector(".intro-left");
  var introRight = document.querySelector(".intro-right");
  var headTextPosition = headText.getBoundingClientRect().top;
  if(screen.width < 1000){
    var screenPosition = 9999;
  }else{
  screenPosition = window.innerHeight / 2.4};

  if (headTextPosition < screenPosition) {
    headText.classList.add("head-text-appear");
    introLeft.classList.add("intro-left-appear");
    introRight.classList.add("intro-right-appear");
  } else {
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
  if(screen.width < 1000){
    var screenDetailsPosition = 99999;
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
  if(screen.width < 1000){
    var screenSkillsPosition = 99999;
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
  if(screen.width < 1000){
    var screenProjectsPosition = 99999;
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