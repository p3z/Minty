function initGrid(){

    // Grab the data first (ensure it only updates the array once we've got it)
    scanImg(64).onload = function(){
        
        var imgColorList = pixelRows.flat();
        //console.log(imgColorList)
    }()

    buildRows(); // Build all rows
    addPixels("blue"); // Add pixels to them

    


    var pixelContainers = Array.from(document.getElementsByClassName('pixel')); // Grab the newly built 'pixels'
    var pxContainerList = pixelContainers.flat(); // Flatten into a list
    
    // Now paint the rendered div with the data from the image
    
    
    pxContainerList.forEach(function(px, i){ 

        var thisPixel = pxContainerList[i];
       // var color = `rbg(${imgColorList[i]})`;
        
       // pxContainerList[i].style.background = color + " !important"; // Don't think this is working because it's references not the actualy elements we're trying to update

        
    });
    
}// end function

window.addEventListener('DOMContentLoaded', () => {
    
});

window.onload = function(){
    initGrid();
}