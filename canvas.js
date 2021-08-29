function build(){
    // Destroy the previous
    container.innerHTML = "";

    // Grab the data first
    var scannedImg = scanImg(64);
    var pixelsList = [].concat(...scannedImg);

    buildRows(); // Build row infrastructure
    addPixels(); // Add 'pixels' to them

    var pixelContainers = document.getElementsByClassName('pixel'); // Grab the newly built 'pixels'
        
    // Now paint the rendered 'pixel' div with the color data from the image    
    for(var i = 0; i < pixelContainers.length; i++){
        var thisPixel = pixelContainers[i];
        var color = `rgb(${pixelsList[i]})`;
        
        thisPixel.style.background = color; 

    } // End loop
    
}// end function




btn.addEventListener("click", function(){
    console.log("Build started");
    build();
})