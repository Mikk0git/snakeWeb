let alive = 1

function setCoordinates(coordinates,id) {
    document.getElementById(id).style["grid-column-start"] = coordinates[0];
    document.getElementById(id).style["grid-row-start"] = coordinates[1];
    console.log("Coordinates set to X:"+coordinates[0]+" Y:"+coordinates[1])


    if (coordinates[0]>10 ||
    coordinates[1]>10 ||
    coordinates[0]<1 ||
    coordinates[1]<1 ){
        return alive = 0
    }
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
    console.log(`${id} Coordinates = ${coordinates}`)
    return coordinates
}

function randomNumber(max){
    return Math.floor(Math.random() * max) + 1
}

function spawnPoint(){
    const gameMap =  document.getElementById('gameMap')
    // Delete old point
    gameMap.innerHTML = gameMap.innerHTML.replace(/<div id="point" style="grid-column-start: \d+; grid-row-start: \d+;"><\/div>/, '');

    // Add new Point
    gameMap.innerHTML = gameMap.innerHTML  + `<div id="point" ></div>`
    
    document.getElementById(`point`).style["grid-column-start"] = randomNumber(10);
    document.getElementById(`point`).style["grid-row-start"] = randomNumber(10);

    
}



async function  startGame(){
    let direction = randomNumber(4)
    let score = 0
    setCoordinates([5,4], "snakeHead")
    spawnPoint()

    while (alive == 1){
        await sleep(500)

        document.addEventListener('keypress', (event) => {
            let code = event.code;
            
            switch(code){
                case "KeyW":
                    direction = 1
                    
                    break;
                case "KeyD":
                    direction = 2
                    
                    break;
                case "KeyS":
                    direction = 3
                    
                    break;
                case "KeyA":
                    direction = 4
                    
                    break;
            }
          }, false);

        moveCell(getCoordinates('snakeHead'),'snakeHead',direction)
        

        if (getCoordinates('snakeHead')[0] === getCoordinates("point")[0] 
        && getCoordinates('snakeHead')[1] === getCoordinates("point")[1] ) {
            console.error("Point scored")
            score++
            spawnPoint()

        }

    }
    console.log("Game over")
    console.log(`Score: ${score}`)

}
startGame()

