function initGrid(){

    buildRows(); // Build the rows
    buildPixelGrid(); // Prepare the grid
    var pixelContainers = Array.from(document.querySelectorAll('.pixel')); // Grab the 'pixels'
    var pxContainerList = pixelContainers.flat(); // Flatten into a list
    
    // Now paint the rendered div with the data from the image

    // Grab the data first
    scanImg(64); // Scan the image
    var imgPixelList = pixelRows.flat();
    
    pxContainerList.forEach(function(px, i){ 

        var thisPixel = pixelContainers[i];
        var color = `rbg(${imgPixelList[i]})`;
        
        thisPixel.style.background = color + " !important";
        
    });
    
}


window.onload = initGrid();