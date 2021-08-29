function build(){
    // Destroy the previous
    container.innerHTML = "";

    // Grab the data first
    var scannedImg = scanImg(64);
    var colorsList = [].concat(...scannedImg);

    buildRows(); // Build row infrastructure
    addPixels(); // Add 'pixels' to them

    var pixelContainers = document.getElementsByClassName('pixel'); // Grab the newly built 'pixels'
        
    // Now paint the rendered 'pixel' div with the color data from the image    
    for(var i = 0; i < pixelContainers.length; i++){
        var thisPixel = pixelContainers[i];
        var color = `rgb(${colorsList[i]})`;
        
        thisPixel.style.background = color; 

    } // End loop

    swatchIt(colorsList);
    
}// end function

/////////////////////////////////////////////////////////
//
//  Morph process
//
/////////////////////////////////////////////////////////
// Separate out the image data into it's unique colors (we'll mod these later)
function swatchIt(colorArr){
    // Loop through colour array and return a new array of unique colours
    var hexArr = [];
    var uniqueColors = [];
    // Transform all rgb arrays to strings
    for(var i = 0; i < colorArr.length; i++){
        var thisColor = colorArr[i].toString();

        // Translate them to hex for ease of comparison
        //Break it up
        var rgb = thisColor.split(",");

        var r = parseInt(rgb[0]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2]);

        var hexIt = rgbToHex(r, g, b);
        hexArr.push(hexIt);
    }



    hexArr.filter(color => {
        if(!uniqueColors.includes(color)){
            uniqueColors.push(color);
        } // end if    
    }); // end filter

    console.log(uniqueColors);
}

btn.addEventListener("click", function(){
    console.log("Build started");
    build();
})