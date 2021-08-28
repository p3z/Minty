function initGrid(){
    buildGrid(64);
    

    // Paint the rendered div with the data from the image
    var pixels = Array.from(document.querySelectorAll('.pixel')); // An array of literally every pixel in ascending order

    var final = pixelRows.flat(); // An array of all the rows flattened into one

    // Grab the data first
    final.forEach(function(el, i){ 
        var thisRow = final[i]; // A row
        
        thisRow.forEach(function(pixelData, j){
            var thisPixel = pixels[j];
            var color = `rbg(${thisRow[j]})`;
           
            thisPixel.style.background = color;
        })
        
    });
    
}


window.onload = readImg(64);