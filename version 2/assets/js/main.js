UIsubmit.addEventListener("click", function(e){
    e.preventDefault();

    // Depending on the input chosen, select an appropriate html element
    var userChoice = shapeChoice.value;

    switch(userChoice){
        case "circle":
        case "square":
            buildHTMLelement("div");
        
    }// end switch

    
});