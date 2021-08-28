////////////////////////////////////////////
//
//  Contents
//
//  pixelRowsToArr:  Takes an image object, returns an array of color values (each one representing rgba format)
//  onePixelDiv: takes a color, returns a div (to represent a pixel)
//  buildRow: Builds a row with divs as pixels (according to size passed in). These are all attached to the container element.
//  createRow
//  getOnePixel
//  readRow
//  readImg
////////////////////////////////////////////

function pixelRowsToArr(data){
    // Convert data to a readable array
    return [data[0], data[1], data[2], data[3]];
 } // end function


function onePixelDiv(color){
   
    var div = document.createElement("div");
    div.classList.add("pixel"); // Give it 'pixel' properties
    div.style.background = color; // Give it the passed in color

    return div;
} // end function

function buildRow(size){
   // Create as many rows as determined by size
    for(var i = 0; i  < size; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("data-id", i)
        container.appendChild(row);
    } // end loop

    // Now create some pixels and attach them to these rows
    buildPixelGrid(size);

} // end function

// Loops through a row and colours it in (literally attaches a a 'pixel' div to a 'row' div)
function buildPixelGrid(size){

    // Add as many pixels as specified by size
    for(var i = 0; i  < size; i++){
        var thisRow = document.querySelector(`[data-id = '${i}'`);

        // Paint the individual pixels
        repeatIt(size, function(){
            var pixel = onePixelDiv("blue");
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
