 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function repeatIt(num, func){
     for(var i = 0; i < num; i++){
         func();
     }
 }

 function pixelRowsToArr(data){
    // Convert data to a readable array
    return [data[0], data[1], data[2], data[3]];
 }

 // Specify an object of potential colors
function buildColor(){
    var one = getRandomInt(0, 255);
    var two = getRandomInt(0, 255);
    var three = getRandomInt(0, 255);
    
    return `rgb(${one}, ${two}, ${three})`;
}

// Literally builds a pixel representation as a div
// Returns a div (to represent a pixel)
function buildPixel(color){
    //Build a div
    var div = document.createElement("div");
    div.classList.add("pixel")
    div.style.background = color;

    return div;
} // end build pixel

// Builds a virtual canvas with divs as pixels
// Adds as many rows as specified by size to the container div.
// Attaches a number of rows to the container
// Rows are numberered with data-id's
function buildGrid(size){
   
    for(var i = 0; i  < size; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("data-id", i)
        container.appendChild(row);
    } // end loop

} // end function

// Loops through a row and colours it in (literally attaches a a 'pixel' div to a 'row' div)
function paintRow(size){

    // Add as many pixels as specified by size
    for(var i = 0; i  < size; i++){
        var thisRow = document.querySelector(`[data-id = '${i}'`);

        // Paint the individual pixels
        repeatIt(size, function(){
            var pixel = buildPixel("red");
            thisRow.appendChild(pixel);

        })
        
    }
} // end function

// Gets a specific pixel colour from a base image and spits it out as an array of colour data
// Returns a single array of pixel data from the image
function getOnePixel(img, x, y) {
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(x, y, 1, 1).data;
} // end function


// BOOKMARK -- I THINK THERE'S A PROBLEM W/ NEXT 2 FUNCTIONS
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