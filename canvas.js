function buildPixel(color){
    //Build a div
    var div = document.createElement("div");
    div.classList.add("pixel")
    div.style.background = color;

    return div;
} // end build pixel

 

function buildRow(size){
    
    // Add as many rows as specified by size
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

        repeatIt(size, function(){
            var pixel = buildPixel(buildColor()); // need to repeat this numerous times
            thisRow.appendChild(pixel);

        })

        //console.log(thisRow)
        
    }
    
}

buildRow(64);