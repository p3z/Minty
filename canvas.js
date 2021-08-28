function buildPixel(color){
    //Build a div
    var div = document.createElement("div");
    div.classList.add("pixel")
    div.style.background = color;

    document.body.appendChild(div);
} // end build canvas

buildPixel(buildColor());