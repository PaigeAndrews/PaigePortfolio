AOS.init({
  duration: 1200,
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


pigButton = document.getElementById("pigButton");
gamingButton = document.getElementById("gamingButton");
animalButton = document.getElementById("animalButton");
hangmanButton = document.getElementById("hangmanButton");
projectDetailContainer = document.getElementById("projectDetail");
projectDetailTitle = document.getElementById("projectDetailTitle");
projectDetailImage = document.getElementById("projectDetailImage");
gitProject = document.getElementById("gitProject");
sourceCodeLink = document.getElementById("sourceCode");
liveSiteLink = document.getElementById("liveSite");

// btn1.addEventListener("click", function(){
  
// })

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

let pigImages = ["images/pig2.png","images/pig3.png", "images/pig4.png"];
let reactGameImages = ["images/game2.png","images/game3.png","images/game4.png"];
let animalImages = ["images/animal2.png","images/animal3.png","images/animal4.png"];
let hangmanImages = ["images/hangman2.png","images/hangman3.png","images/hangman4.png"];


let number = 0;

for (let h=0; h<4; h++){
  arrIds[h].addEventListener("click", function(){

    if (number > 0){
      projectDetailTitle.removeChild(projectDetailTitle.childNodes[0]);
      // animalParagraph.removeChild(animalParagraph.childNodes[0]);
      projectDetailImage.removeChild(projectDetailImage.childNodes[0]);
    }
    
    gitProject.style.display = "block";
    // animalParagraphRightImage.style.display = "inline-block";

    // let textnodeIds = document.createTextNode(arrIds[h])
    let textnodeTitle = document.createTextNode(projectTitle[h]);
    // let textnodeDes = document.createTextNode(arrDescription[h]);
    let textnodeImage = document.createTextNode(projectImage[h]);

    projectDetailImage.src = projectImage[h];
    sourceCodeLink.href = sourceCodeLinkArray[h];
    liveSiteLink.href = liveSiteLinkArray[h];

    // arrIds[h].appendChild(textnodeIds);
    projectDetailTitle.appendChild(textnodeTitle);
    // animalParagraph.appendChild(textnodeDes);
    projectDetailImage.appendChild(textnodeImage);

    projectDetailTitle.scrollIntoView()
    number++

  })
} 


