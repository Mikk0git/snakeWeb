
function setCoordinates(x,y,id) {
    document.getElementById(id).style["grid-column-start"] = x;
    document.getElementById(id).style["grid-row-start"] = y;
    
}

setCoordinates(7,9,"snakeHead")