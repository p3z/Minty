function build(){
    // Destroy the previous
    container.innerHTML = "";

    // Grab the data first
    var scannedImg = scanImg(64);
    var colorsList = [].concat(...scannedImg);

    buildRows(); // Build row infrastructure
    addPixels(); // Add 'pixels' to them

    var pixelContainers = document.getElementsByClassName('pixel'); // Grab the newly built 'pixels'

    
    var uniqueColors = []; // Use this to capture every single unique color (We don't actually use this presently)
        
    // Now paint the rendered 'pixel' div with the color data from the image    
    for(var i = 0; i < pixelContainers.length; i++){
        var thisPixel = pixelContainers[i];
        var color = `rgb(${colorsList[i]})`;
        
        thisPixel.style.background = color; // Color it in
        
        // Build an array of unique colours
        if(!uniqueColors.includes(color)){
            uniqueColors.push(color);
        } // end if
            
        if(!Object.keys(countCatalog).includes(color)){
            countCatalog[color] = 1;
        } else{
            countCatalog[color]++;
        }


    } // End loop

    divCanvasData.divs = pixelContainers;
    
}// end function

/////////////////////////////////////////////////////////
//
//  Morph process
//
/////////////////////////////////////////////////////////
// Separate out the image data into it's unique colors (we'll mod these later)
// function swatchIt(colorArr, type){
//     // Loop through colour array and return a new array of unique colours
//     var hexArr = [];
//     var rgbArr = [];
    
//     var uniqueHex = [];
//     var uniqueRgb = [];
//     // Transform all rgb arrays to strings
//     for(var i = 0; i < colorArr.length; i++){
//         var thisColor = colorArr[i].toString();

//         // Translate them to hex for ease of comparison
//         //Break it up
//         var rgb = thisColor.split(",");

//         var r = parseInt(rgb[0]);
//         var g = parseInt(rgb[1]);
//         var b = parseInt(rgb[2]);

//         var hexIt = rgbToHex(r, g, b);
//         hexArr.push(hexIt);
        
//         rgbArr.push(thisColor);
//     }


//     switch(type){
//         case "hex":
//             hexArr.filter(color => {
//                 if(!uniqueHex.includes(color)){
//                     uniqueHex.push(color);
//                 } // end if
                
//             }); // end filter

//             return uniqueHex;
//             break;

//         case "rgb":
//             rgbArr.filter(color => {
//                 if(!uniqueRgb.includes(color)){
//                     uniqueRgb.push(color);
//                 } // end if
                
//             }); // end filter
//             return uniqueRgb;
//             break;
//     } // end switch
    
// } // end function

// Count the individual instances of each color
// Return these as an object keyed by the color value
// function pixelCounter(pixels, colors){
//      var countCatalog = {};
    
//     // // Loop through colors, check the count catalog for an entry if one doesn't exist, create one, otherwise increment it
//     for(var i = 0; i < colors.length; i++){

//         pixels.forEach((pixel) => {
//             // Convert pixel to a string for comparison against colors
//             var thisPixel = pixel.toString(); // String of pixel data (actual pixels)
//             if(colors.includes(thisPixel)){

//             } // 
//         });

        
//     } // color loop
        
//     // } // end loop

//     return countCatalog;
// } // end function

function getColorByFreq(obj, position){

    var sorted = Object.values(obj).sort(function(a, b){return a - b}).reverse(); // All the values of countCatalog in descending order

    var color;
    

    Object.keys(obj).some(function(k) {
        if(obj[k] === sorted[position]){
            color =  k;
        }
        
    });
    return color;
}

initBtn.addEventListener("click", function(){
    console.log("Build started");
    build();
    modBtn.classList.remove("hide");
})

// Change the colours
modBtn.addEventListener("click", function(){
    
    var pixels = divCanvasData.divs; // Literally every 'pixel' in the 'canvas'


  console.log(getColorByFreq(countCatalog, 0)) // the most frequent
   
   
    

    // Get the pixels with the highest count -- this is the background
    //var background = Object.
       
    // Get all pixels with a specific colour
    for(var i = 0; i < pixels.length; i++){
        //pixels[i].style.background = "red";
        var thisPixelColor = pixels[i].style.background;
        
        // Find the pixels with the most background
      // if(thisPixelColor ==)

     
        
        

    } // end loop

}); // end function