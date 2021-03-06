AOS.init({
  duration: 1200,
})



let pigButton = document.getElementById("pigButton");
let gamingButton = document.getElementById("gamingButton");
let animalButton = document.getElementById("animalButton");
let hangmanButton = document.getElementById("hangmanButton");
let projectDetailContainer = document.getElementById("projectDetail");
let projectDetailTitle = document.getElementById("projectDetailTitle");
let projectDetailImage = document.getElementById("projectDetailImage");
let gitProject = document.getElementById("gitProject");
let sourceCodeLink = document.getElementById("sourceCode");
let liveSiteLink = document.getElementById("liveSite");
let projectParagraph = document.getElementById("projectParagraph");
let backToProjectsButton = document.getElementById("backToProjectsButton");
let sectionContact = document.getElementById("sectionContact");
let sectionSkills = document.getElementById("sectionSkills");
let sectionAbout = document.getElementById("sectionAbout");
let sectionProjects = document.getElementById("sectionProject");
let navContact = document.getElementsByClassName("navContact");
let navSkills = document.getElementsByClassName("navSkills");
let navAbout = document.getElementsByClassName("navAbout");
let navProjects = document.getElementsByClassName("navProjects");
let projectDetailView = document.getElementById("projectDetailView");

for(let element of navContact){
  element.addEventListener("click", function(){
  sectionContact.scrollIntoView();
})}

for(let element of navSkills){
  element.addEventListener("click", function(){
  sectionSkills.scrollIntoView();
})}

for(let element of navAbout){
  element.addEventListener("click", function(){
  sectionAbout.scrollIntoView();
})}

for(let element of navProjects){
  element.addEventListener("click", function(){
  sectionProjects.scrollIntoView();
})}


let arrIds = [
  pigButton,
  gamingButton,
  animalButton,
  hangmanButton
]

let projectTitle = [
  "Dice Pige Game",
  "React Game Search",
  "Animal Compatibility",
  "Halloween Hangman"
]
let projectImage =[
  "images/pigFullImage.png", 
  "images/gameScreenShot.png", 
  "images/animalscreenShot.png",
  "images/hangmanScreenshot.png"
];
let sourceCodeLinkArray = [
  "https://github.com/PaigeAndrews/Pig-Game", 
  "https://github.com/PaigeAndrews/React-Games-Search",
  "https://github.com/PaigeAndrews/Animal-Compatibility",
  "https://github.com/PaigeAndrews/Halloween-Hangman"
  ]; 
let liveSiteLinkArray = [
  "https://paigeandrews.github.io/Pig-Game/", 
  "https://paigeandrews.github.io/React-Games-Search/",
  "https://paigeandrews.github.io/Animal-Compatibility/",
  "https://paigeandrews.github.io/Halloween-Hangman/"
 ];

 let projectParagraphArray = [
  "Made in HTML, CSS, and JavaScript, this allows the user to play the classic dice game 'Pig' against the computer. When the user takes their turn, the score is calculated and displayed on screen. During the computer's turn, all the dice images are on a timer to help the player better visualize what the computer had rolled for that turn.",
  "Built using React technologies; Hooks, Router, Slideshow, and Reveal. Uses the RAWG API to fetch JSON data on over 355,000 games. This site allows users to search for games and view information about each, including: title, a brief description, developer, genres, platforms available, and a video trailer.",
  "Made in HTML, CSS, and JavaScript, this site helps users decide which sort of animals to adopt to best suit their lifestyle needs by filling out a colorful form. All text questions, choices, and color schemes are stored in different arrays that change the form after each question is answered. After completion, this displays specific information about the animals you may be compatible with.",
  "A Halloween themed hangman game made in HTML, CSS, and Javascript. The user selects either easy, medium or hard. A word of appropriate difficulty is chosen randomly. The user has 6 lives to guess the word, with each correct guess filling out blanks and each incorrect guess decrementing remaining lives."
 ];

let pigImages = ["images/pig2.png","images/pig3.png", "images/pig4.png"];
let reactGameImages = ["images/game2.png","images/game3.png","images/game4.png"];
let animalImages = ["images/animal2.png","images/animal3.png","images/animal4.png"];
let hangmanImages = ["images/hangman2.png","images/hangman3.png","images/hangman4.png"];


let number = 0;

for (let h=0; h<4; h++){
  arrIds[h].addEventListener("click", function(){

    if (number > 0){
      projectDetailTitle.removeChild(projectDetailTitle.childNodes[0]);
      projectParagraph.removeChild(projectParagraph.childNodes[0]);
      projectDetailImage.removeChild(projectDetailImage.childNodes[0]);
    }
    gitProject.style.display = "block";

    let textnodeTitle = document.createTextNode(projectTitle[h]);
    let textnodePara = document.createTextNode(projectParagraphArray[h]);
    let textnodeImage = document.createTextNode(projectImage[h]);

    projectDetailImage.src = projectImage[h];
    sourceCodeLink.href = sourceCodeLinkArray[h];
    liveSiteLink.href = liveSiteLinkArray[h];

    projectDetailTitle.appendChild(textnodeTitle);
    projectParagraph.appendChild(textnodePara);
    projectDetailImage.appendChild(textnodeImage);

    projectDetailView.scrollIntoView()
    number++
  })
} 

backToProjectsButton.addEventListener("click", function(){
  sectionProject.scrollIntoView()
  setTimeout(function(){ gitProject.style.display = "none" }, 1000);
})

