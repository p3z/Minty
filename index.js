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

function getUserImage(e){
    e.preventDefault();
    imgStr = userImg.value;
    img.src = imgStr;
    build();
}

initBtn.addEventListener("click", function(){
    console.log("Build started");
    form.classList.remove("hide");
   // build();
    modBtn.classList.remove("hide");
})

// Change the colours
modBtn.addEventListener("click", function(){
    console.log("Change registered");
    var pixels = divCanvasData.divs; // Literally every 'pixel' in the 'canvas'


    var freq0 = getColorByFreq(countCatalog, 0); // Bg
    var freq1 = getColorByFreq(countCatalog, 1); // Most fur
    var freq2 = getColorByFreq(countCatalog, 2); // Outline
    var freq3 = getColorByFreq(countCatalog, 3); // Ears
    var freq4 = getColorByFreq(countCatalog, 4); // Shadow on right
    var freq5 = getColorByFreq(countCatalog, 5); // Tie color 1
    
    var newBg = buildColor();
    var newFur = buildColor();
    var newOutline = buildColor();
    var newEars = buildColor();
    var newShadow = buildColor();
    var newTie1 = buildColor();

    
    // Get all pixels with a specific colour
    for(var i = 0; i < pixels.length; i++){
        //
        var thisPixelColor = pixels[i].style.background;
        var spacesRemoved = thisPixelColor.replace(/\s/g, "");
        
        // Find the pixels with the most background
       if(spacesRemoved == freq0){
           pixels[i].style.background = buildColor();
       }
       
       if(spacesRemoved == freq1){
        pixels[i].style.background = newFur;
       }

       if(spacesRemoved == freq2){
        //pixels[i].style.background = newOutline;
       }

       if(spacesRemoved == freq3){
        pixels[i].style.background = newEars;
       }

       if(spacesRemoved == freq4){ 
        pixels[i].style.background = newShadow;
       }

       if(spacesRemoved == freq5){
        pixels[i].style.background = newTie1;
       }
        
        

    } // end loop

}); // end function

// Get the user colour
saveuserImg.addEventListener("click", getUserImage);