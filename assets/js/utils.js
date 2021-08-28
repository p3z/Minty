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