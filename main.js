/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Specify an object of potential colors
function buildColor(){
     var one = getRandomInt(0, 255);
     var two = getRandomInt(0, 255);
     var three = getRandomInt(0, 255);
     
     return `rgb(${one}, ${two}, ${three})`;
}

var colors = [buildColor(), buildColor(), buildColor()];

// Loop through the specific pixels with a data attr. and apply those colours

var paintThese = Array.from(document.querySelectorAll("[data-paint='true']"));

// Apply all other colors with a default
paintThese.forEach(function(el, i){
    // Select a random color from the colors array
    var thisColor = getRandomInt(0, colors.length -1);
    console.log(thisColor)
    el.style.background = colors[thisColor];

 })