function buildPixel(color){
    //Build a div
    var div = document.createElement("div");
    div.classList.add("pixel")
    div.style.background = color;

    return div;
} // end build pixel

 
// Adds as many rows as specified by size to the container div.
// Then calls paintRows
function buildRow(size){
   
    for(var i = 0; i  < size; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("data-id", i)
        container.appendChild(row);
    }

    paintRow(size);
}

function paintRow(size){

    // Add as many pixels as specified by size
    for(var i = 0; i  < size; i++){
        var thisRow = document.querySelector(`[data-id = '${i}'`);

        // Paing the individual pixels
        repeatIt(size, function(){
            var pixel = buildPixel(buildColor());
            thisRow.appendChild(pixel);

        })
        
    }
    
}

buildRow(64);

function getOnePixel(img, x, y) {
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(x, y, 1, 1).data;
}

// Loop through and get image data as pixel arrays
function readRows(size){

    var captureArr = [];

    for(var i = 0; i < size; i++){
        // Read all contents of a row
        captureArr.push(getOnePixel(img, i, 5));
            
        // Update the contents of the pixels in the canvas with the image data
    
    } // end for
    
    console.log(captureArr);
    
} // end function

window.onload = readRows(64);