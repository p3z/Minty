function initGrid(){

    // Grab the data first (ensure it only updates the array once we've got it)
    var scannedImg = scanImg(64);
    var pixelsList = [].concat(...scannedImg);

    buildRows(); // Build all rows
    addPixels(); // Add pixels to them

    var pixelContainers = document.getElementsByClassName('pixel'); // Grab the newly built 'pixels'
    // pixelContainers[50].style.background = "red"; // This works as you'd expect
    
    // Now paint the rendered div with the data from the image    
    for(var i = 0; i < pixelContainers.length; i++){
        var thisPixel = pixelContainers[i];
        var color = `rgb(${pixelsList[i]})`;
        
        thisPixel.style.background = color; 

    } // End loop
    
}// end function

window.addEventListener('DOMContentLoaded', () => {
    
});

window.onload = function(){
   
}

btn.addEventListener("click", function(){
    console.log("Button pressed");
    initGrid();
})