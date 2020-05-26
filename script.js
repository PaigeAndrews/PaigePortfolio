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

// btn1.addEventListener("click", function(){
  
// })

arrIds = [
  pigButton,
  gamingButton,
  animalButton,
  hangmanButton
]

projectTitle = [
  "Dice Pige Game",
  "React Game Search",
  "Animal Compatibility",
  "Halloween Hangman"
]
projectImage =[]


let number = 0;

for (let h=0; h<4; h++){
  arrIds[h].addEventListener("click", function(){

    if (number > 0){
      projectDetailTitle.removeChild(projectDetailTitle.childNodes[0]);
      // animalParagraph.removeChild(animalParagraph.childNodes[0]);
      // animalParagraphRightImage.removeChild(animalParagraphRightImage.childNodes[0]);
    }
    
    // animalParagraph.style.display = "inline-block";
    // animalParagraphRightImage.style.display = "inline-block";

    let textnodeIds = document.createTextNode(arrIds[h])
    let textnodeTitle = document.createTextNode(projectTitle[h]);
    // let textnodeDes = document.createTextNode(arrDescription[h]);
    // let textnodeImage = document.createTextNode(descriptionImages[h]);

    // animalParagraphRightImage.src = descriptionImages[h];


    // arrIds[h].appendChild(textnodeIds);
    projectDetailTitle.appendChild(textnodeTitle);
    // animalParagraph.appendChild(textnodeDes);
    // animalParagraphRightImage.appendChild(textnodeImage);

    projectDetailTitle.scrollIntoView()
    number++

  })
} 