UIsubmit.addEventListener("click", function(e){
    e.preventDefault();

    // Depending on the input chosen, select an appropriate html element
    var userChoice = shapeChoice.value;
    buildHTMLelement("div", userChoice);


    
});

resetCanvasBtn.addEventListener("click", resetCanvas);

shapeSize.addEventListener("input", function(){

    var lastEl = null;
    // Get last element on canvas, pass this as an argument to resizeShape

    if(virtualCanvas.children.length != 0){
        lastEl = virtualCanvas.children[virtualCanvas.children.length - 1];
    }



    resizeShape(lastEl);
})