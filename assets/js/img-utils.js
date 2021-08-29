////////////////////////////////////////////
//
//   Contents
//
//   getPixelData: Gets specific pixel colour data from a base image and spits it out as an array of colour values
//   scanRow: Calls getPixelData to get a single instance of pixel data (depending on location). 
//   scanImg: Loop through the base image and gets image data as pixel arrays
////////////////////////////////////////////

// Is used inside scanRow (never called manually)
function getPixelData(img, x, y) {
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(x, y, 1, 1).data;
} // end function

// Is used inside scanImg (never called manually)
function scanRow(coordY){
    var pixelsInRow = [];

    for(var coordX = 0; coordX < GRID_SIZE; coordX++){     
        
        // Grab one pixel's data and put it into row array
        var pixelData = pixelRowsToArr(getPixelData(img, coordX, coordY)); // A single pixel color as an array
        pixelData.pop(); // Remove the alpha channel
        
        pixelsInRow.push(pixelData);
    
    } // end for
    
    return pixelsInRow; // An entire row's array (contains arrays of color values)
} // end function

// Is used to read to grab the base image's pixel data
function scanImg(){
    
    var rowData = []; // Use this to capture an entire row's pixel data
    
    // Read the row and capture it in array
    for(var i = 0; i < GRID_SIZE; i++){
        
        var row = scanRow(i);  // Here 'i' is the Y value (x is set inside scanRow)
        rowData.push(row);

    } // end loop

    //pixelRows.push(rowData); // Capture this entire row into the overarching array
    
    
    
    //return pixelRows;
    return rowData;
} // end function