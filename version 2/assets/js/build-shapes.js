function buildHTMLelement(element, type){
    // 
    
    // Ensure element is actually an accepted type of element
    for(var i = 0; i < elements.length; i++){

        if (elements[i] == element){

            var el = document.createElement(element);
            el.style.background = "red";
            el.classList.add(type)
            console.log("Class was " + type)
            
            virtualCanvas.appendChild(el);
        } // end if
        
    } // end loop
        

    

} // end function

function resetCanvas(){
    virtualCanvas.innerHTML = "";
}