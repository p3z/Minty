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
    
    for(var coordX = 0; coordX < GRID_SIZE; coordX++){     

        // Build an array of data for each row
        pixelData = pixelRowsToArr(getPixelData(img, coordX, coordY));
        pixelData.pop(); // Remove the alpha channel
        return pixelData;
    
    } // end for
} // end function

// Is used to read to grab the base image's pixel data
function scanImg(){
    
    for(var j = 0; j < GRID_SIZE; j++){ // Loop through rows

        var rowData = []; // Use this to capture an entire row's pixel data
       
        // Read the row and capture it in array
        for(var i = 0; i < GRID_SIZE; i++){
            var pixel = scanRow(i, 64); // Here 'i' is the Y value (x is set inside scanRow)
            rowData.push(pixel);
        } // end inner loop

        pixelRows.push(rowData); // Capture this entire row into the overarching array
    } // end outer loop
    
    return pixelRows;
} // end function