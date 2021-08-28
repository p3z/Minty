// Returns a single instance of pixel data (depending on what was passed in)
// rowId -> used as another iterator
// totalSize -> used as a limit on a loop
function readRow(pixelY, totalSize){
    
    for(var pixelX = 0; pixelX < totalSize; pixelX++){     

        // Build an array of data for each row
        pixelData = pixelRowsToArr(getOnePixel(img, pixelX, pixelY));

        return pixelData;
    
    } // end for
}

// Loop through the base image and gets image data as pixel arrays
function readImg(size){
    
    
    for(var j = 0; j < size; j++){ // Loop through the potential rows (according to the image size)

        var rowData = []; // Use this to capture the row's pixel data
       
        // Read the row and capture it in array
        for(var i = 0; i < size; i++){
            var pixel = readRow(i, 64); // Here i is the Y value (x is set inside readRow)
            rowData.push(pixel);
        }

        pixelRows.push(rowData); // Creates an array of individual coordinates
    }
    
    
    initGrid();
    
} // end function