// Literally builds a pixel representation as a div
function buildPixel(color){
    //Build a div
    var div = document.createElement("div");
    div.classList.add("pixel")
    div.style.background = color;

    return div;
} // end build pixel

// Builds a virtual canvas with divs as pixels
// Adds as many rows as specified by size to the container div.
// Then calls paintRow
function buildGrid(size){
   
    for(var i = 0; i  < size; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("data-id", i)
        container.appendChild(row);
    }

    paintRow(size);
}

// Adds as many pixels specified by size to each row
// Colours them in
function paintRow(size){

    // Add as many pixels as specified by size
    for(var i = 0; i  < size; i++){
        var thisRow = document.querySelector(`[data-id = '${i}'`);

        // Paint the individual pixels
        repeatIt(size, function(){
            var pixel = buildPixel(buildColor());
            thisRow.appendChild(pixel);

        })
        
    }
    
}

buildGrid(64);

// Gets a specific pixel colour from a base image and spits it out as an array of colour data
function getOnePixel(img, x, y) {
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(x, y, 1, 1).data;
}

function readRow(rowId, totalSize){
    for(var i = 0; i < totalSize; i++){     

        // Build an array of data for each row
        pixelData = pixelRowsToArr(getOnePixel(img, i, rowId));

        return pixelData;

                   
        // Update the contents of the pixels in the canvas with the image data
    
    } // end for
}

// Loop through the base image and gets image data as pixel arrays
function readImg(size){
    
    for(var j = 0; j < size; j++){
        var rowData = [];
        // Read the row
        for(var i = 0; i < size; i++){
            var pixel = readRow(i, 64); 
            rowData.push(pixel);
        }
        pixelRows.push(rowData);
    }
    
    
    initGrid();
    
} // end function

function initGrid(){

    // Paint the rendered div with the data from the image
    var pixels = Array.from(document.querySelectorAll('.pixel')); // An array of literally every pixel in ascending order

    var final = pixelRows.flat(); // An array of all the rows flattened into one

    // Grab the data first
    final.forEach(function(el, i){ 
        var thisRow = final[i]; // A row
        
        thisRow.forEach(function(pixelData, j){
            var thisPixel = pixels[j];
            var color = `rbg(${thisRow[0]})`;
           // console.log(color)
            thisPixel.style.background = color;
        })
        // el.style.background = color;
    });
    
}


window.onload = readImg(64);