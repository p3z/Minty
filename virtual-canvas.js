function getPixel(img, x, y) {
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    
    return context.getImageData(x, y, 1, 1).data;
  }
  
  
  //var test = getPixel('https://shaypottle.com/wp-content/uploads/2021/08/Pez-px-1.png', 30, 2); // [255, 255, 255, 0];
 
  // Loop through and get image data as pixel arrays
function readRows(size){

    var captureArr = [];

    for(var i = 0; i < size; i++){
        // Read all contents of a row
        captureArr.push(getPixel(img, i, 5));
            
        // Update the contents of the pixels in the canvas with the image data
    
    } // end for
    
    console.log(captureArr);
    
} // end function

window.onload = readRows(64);