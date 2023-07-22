
function setCoordinates(coordinates,id) {
    document.getElementById(id).style["grid-column-start"] = coordinates[0];
    document.getElementById(id).style["grid-row-start"] = coordinates[1];
    console.log("Coordinates set to X:"+coordinates[0]+" Y:"+coordinates[1])
    
}


function moveCell(coordinates, id, direction) {
    console.debug(`X:${coordinates[0]} Y:${coordinates[1]} id:${id} dir:${direction}`);
    switch (direction) {
        case 1:
            setCoordinates([coordinates[0], coordinates[1] - 1], id);
            console.log(id + " move up");
            break;
        case 2:
            setCoordinates([coordinates[0] + 1, coordinates[1]], id);
            console.log(id + " move right");
            break;
        case 3:
            setCoordinates([coordinates[0], coordinates[1] + 1], id);
            console.log(id + " move down");
            break;
        case 4:
            setCoordinates([coordinates[0] - 1, coordinates[1]], id);
            console.log(id + " move left");
            break;
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCoordinates(id){
    x=Number(document.getElementById(id).style["grid-column-start"])
    y=Number(document.getElementById(id).style["grid-row-start"])
    coordinates = [x,y]
    console.log(`Coordinates = ${coordinates}`)
    return coordinates
}

async function  startGame(){
    let alive = 1
    setCoordinates([1,4], "snakeHead")
    while (alive == 1){
        await sleep(1000)
        moveCell(getCoordinates('snakeHead'),'snakeHead',3)

    }
}
startGame()

