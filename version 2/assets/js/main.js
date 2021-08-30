UIsubmit.addEventListener("click", function(e){
    e.preventDefault();

    // Depending on the input chosen, select an appropriate html element
    var userChoice = shapeChoice.value;
    buildHTMLelement("div", userChoice);


    
});

resetCanvasBtn.addEventListener("click", resetCanvas)