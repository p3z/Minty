 // Gets a random integer between a min and max value
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Literally repeats a function (func) as many times as num
 function repeatIt(num, func){
     for(var i = 0; i < num; i++){
         func();
     }
 }


// Returns an rgb color as a string
// function buildColor(){
//     var one = getRandomInt(0, 255);
//     var two = getRandomInt(0, 255);
//     var three = getRandomInt(0, 255);
    
//     return `rgb(${one}, ${two}, ${three})`;
// }