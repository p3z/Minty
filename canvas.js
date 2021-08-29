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

    var swatch = swatchIt(colorsList, "rgb");
    
    console.log("Swatch is")
    console.log(swatch)
}// end function

/////////////////////////////////////////////////////////
//
//  Morph process
//
/////////////////////////////////////////////////////////
// Separate out the image data into it's unique colors (we'll mod these later)
function swatchIt(colorArr, type){
    // Loop through colour array and return a new array of unique colours
    var hexArr = [];
    var rgbArr = [];
    
    var uniqueHex = [];
    var uniqueRgb = [];
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
        
        rgbArr.push(thisColor);
    }


    switch(type){
        case "hex":
            hexArr.filter(color => {
                if(!uniqueHex.includes(color)){
                    uniqueHex.push(color);
                } // end if
                
            }); // end filter

            return uniqueHex;
            break;

        case "rgb":
            rgbArr.filter(color => {
                if(!uniqueRgb.includes(color)){
                    uniqueRgb.push(color);
                } // end if
                
            }); // end filter
            return uniqueRgb;
            break;
    } // end switch
    
} // end function

// Count the individual instances of each color
// Return these as an object keyed by the color value
function pixelCounter(pixels, colors){
     var countCatalog = {};
    
    // Loop through pixels, check the count catalog for an entry if one doesn't exist, create one, otherwise increment it
    for(var i = 0; i < pixels.length; i++){
        
    } // end loop
} // end function


btn.addEventListener("click", function(){
    console.log("Build started");
    build();
})