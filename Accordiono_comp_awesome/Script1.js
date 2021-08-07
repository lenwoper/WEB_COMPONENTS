// JavaScript source code

// firts we have to getting the value of the button 
var get_button = document.getElementsByClassName("accordion_btn");


for (var i = 0; i < get_button.length; i++) {
    get_button[i].addEventListener("click", function () {

        this.classList.toggle("active");
        var paragraph = this.nextElementSibling;
        if (paragraph.style.display === "block") {
            paragraph.style.display = "none";
            
          
        }
        else {
            paragraph.style.display = "block";
            
        }
      


    }) }
