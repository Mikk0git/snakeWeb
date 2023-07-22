
function setCoordinates(x,y,id) {
    document.getElementById(id).style["grid-column-start"] = x;
    document.getElementById(id).style["grid-row-start"] = y;
    console.log("Coordinates set to X:"+x+" Y:"+y)
    
}


function moveCell(x,y,id,direction){
    console.debug(`X:${x} Y:${y} id:${id} dir:${direction}`)
    switch(direction){
        case 1:
            setCoordinates(x,y-1,id)
            console.log(id+"move up")
            break;
        case 2:
            setCoordinates(x+1,y,id)
            console.log(id+"move right")
            break;
        case 3:
            setCoordinates(x,y+1,id)
            console.log(id+"move down")
            break;
        case 4:
            setCoordinates(x-1,y,id)
            console.log(id+"move left")
            break;
        

    }

}



moveCell(5,1,'snakeHead',3)

