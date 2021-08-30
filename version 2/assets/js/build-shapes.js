function buildHTMLelement(element, type){
    // 
    
    // Ensure element is actually an accepted type of element
    for(var i = 0; i < elements.length; i++){

        if (elements[i] == element){

            // Build an element to the dimensions specified
            var el = document.createElement(element);
            var size = shapeSize.value * 3;

            el.style.background = shapeColor.value;
            el.style.width = size + "px";
            el.style.height = size + "px";
            el.classList.add(type) // Adds shape properties
            el.classList.add("pointer");
            
            virtualCanvas.appendChild(el);
        } // end if
        
    } // end loop
        

    

} // end function

function resetCanvas(){
    virtualCanvas.innerHTML = "";
}

function resizeShape(element){

    if(element == null){
        console.log("No elements have been created");
        return;
    }

    var size = shapeSize.value * 3;
    element.style.height = size + "px";
    element.style.width = size + "px";
}