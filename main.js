var playerTurn = "red"
var difficultyChanger = "medium"
var difficultyDisplayer
var turnChecker = true
var grid
var modalRed = document.getElementById("winScreenRed")
var modalBlue = document.getElementById("winScreenBlue")
var modalTie = document.getElementById("tieScreen")
var numberSquaresClicked = 0
var tieDisplayer
var squares = {
    top:{
        left: null,
        middle: null,
        right: null
    },
    middle:{
        left: null,
        middle: null,
        right: null
    },
    bottom:{
        left: null,
        middle: null,
        right: null 
    }
}
function changeDifficulty(sendDifficulty)
{
    difficultyChanger = sendDifficulty
    difficultyDisplayer = document.getElementById("difficulty")
    difficultyDisplayer.innerText = "Current Difficulty: ".concat(sendDifficulty.charAt(0).toUpperCase() + sendDifficulty.slice(1))
    console.log(sendDifficulty)
}
createSquare()
function createSquare()
{
    grid = document.createElement('div');
    grid.id = "grid"
    document.body.append(grid)

    for(var rowIndex = 0; rowIndex < 3; rowIndex++)
    {
        var row = document.createElement("div")
        row.setAttribute("class", "row")
        grid.appendChild(row)
        for(var squareIndex = 0; squareIndex < 3; squareIndex++)
        {
            var square = document.createElement("div")
            square.setAttribute("class", "square")
            row.appendChild(square)
            let vertical;
            let horizontal;
            switch(rowIndex)
            {
                case 0: vertical = "top";
                break;
                case 1: vertical = "middle";
                break;
                case 2: vertical = "bottom";
            }
            switch(squareIndex)
            {
                case 0: horizontal = "left";
                break;
                case 1: horizontal = "middle";
                break;
                case 2: horizontal = "right";
            }

            squares[vertical][horizontal] = square

            square.setAttribute("onclick", "clickSquareChecker(this)" )
        }
    }
}
function clickSquare(square) 
{
    console.log(square)
    numberSquaresClicked++
    if(square.style.backgroundColor === "")
    {
        square.style.backgroundColor = playerTurn

        for(let row in squares) {
            for(let col in squares[row]) {
                if(square === squares[row][col])
                {
                    squares[row][col] = playerTurn
                }
            }
          }

        if(playerTurn === "red") 
        {
            playerTurn = "blue"
            turnChecker = false
        }
        else if(playerTurn === "blue") 
        {
            playerTurn = "red"
            turnChecker = true
        }
        if (checkWinRed() === true || checkWinBlue() === true || tieChecker()) 
        {
            turnChecker = false
            return
        }
        setTimeout(function() { 
            if(playerTurn === "blue")
            {
                playComputer(difficultyChanger)
            } 
        }, 500);
    }
}

function clickSquareChecker(passSquare) //Function that holds if statement that prevents player from clicking when its not their turn
{
    if (turnChecker === false) return
    clickSquare(passSquare)
}


function playComputer(difficulty)
{
    var topLeft = 3
    var topMiddle = 2
    var topRight = 3
    var middleLeft = 2
    var middleMiddle = 4
    var middleRight = 2
    var bottomLeft = 3
    var bottomMiddle = 2
    var bottomRight = 3

    
    var possibleMoves = []

    if(typeof squares.top.left === "string") 
    {
        topLeft = 0
        topMiddle--
        middleLeft--
        topRight--
        middleMiddle--
        bottomLeft--
        bottomRight--
    }
    else
    {
        possibleMoves.push(squares.top.left)
    }
    if(typeof squares.top.middle === "string") 
    {
        topMiddle = 0
        topLeft--
        topRight--
        middleMiddle--
        bottomMiddle--
    }
    else
    {
        possibleMoves.push(squares.top.middle)

    }
    if(typeof squares.top.right === "string") 
    {
        topRight = 0
        topLeft--
        topMiddle--
        middleMiddle--
        middleRight--
        bottomLeft--
        bottomRight--
    }
    else
    {
        possibleMoves.push(squares.top.right)

    }
    if(typeof squares.middle.left === "string") 
    {
        middleLeft = 0
        topLeft--
        middleMiddle--
        middleRight--
        bottomLeft--
    }
    else
    {
        possibleMoves.push(squares.middle.left)

    }
    if(typeof squares.middle.middle === "string") 
    {
        middleMiddle = 0
        topLeft--
        topMiddle--
        topRight--
        middleLeft--
        middleRight--
        bottomLeft--
        bottomMiddle--
        bottomRight--
    }
    else
    {
        possibleMoves.push(squares.middle.middle)

    }
    if(typeof squares.middle.right === "string") 
    {
        middleRight = 0
        topRight--
        middleLeft--
        middleMiddle--
        bottomRight--
    }
    else
    {
        possibleMoves.push(squares.middle.right)

    }
    if(typeof squares.bottom.left === "string") 
    {
        bottomLeft = 0
        topLeft--
        topRight--
        middleLeft--
        middleMiddle--
        bottomMiddle--
        bottomRight--
    }
    else
    {
        possibleMoves.push(squares.bottom.left)

    }
    if(typeof squares.bottom.middle === "string") 
    {
        bottomMiddle = 0
        bottomLeft--
        bottomRight--
        middleMiddle--
        topMiddle--
    }
    else
    {
        possibleMoves.push(squares.bottom.middle)

    }
    if(typeof squares.bottom.right === "string") 
    {
        bottomRight = 0
        topLeft--
        topRight--
        middleMiddle--
        middleRight--
        bottomLeft--
        bottomMiddle--
    }
    else
    {
        possibleMoves.push(squares.bottom.right)

    }

    // console.log(possibleMoves)

    // if (topLeft < 0) topLeft = 0
    // if (topMiddle < 0) topMiddle = 0
    // if (topRight < 0) topRight = 0
    // if (middleRight < 0) middleRight = 0
    // if (middleMiddle < 0) middleMiddle = 0
    // if (middleLeft < 0) middleLeft = 0
    // if (bottomRight < 0) bottomRight = 0
    // if (bottomMiddle < 0) bottomMiddle = 0
    // if (bottomLeft < 0) bottomLeft = 0

    topLeft /= 3
    topMiddle /= 2
    topRight /= 3
    middleLeft /= 2
    middleMiddle /= 4
    middleRight /= 2
    bottomLeft /= 3
    bottomMiddle /= 2
    bottomRight /= 3

    topLeft *= 12
    topMiddle *= 12
    topRight *= 12
    middleLeft *= 12
    middleMiddle *= 12
    middleRight *= 12
    bottomLeft *= 12
    bottomMiddle *= 12
    bottomRight *= 12

    // console.log(topLeft,
    // topMiddle,
    // topRight,
    // middleLeft,
    // middleMiddle,
    // middleRight,
    // bottomLeft,
    // bottomMiddle,
    // bottomRight)

    let highestNumber = topLeft
    checkHighestNumber(topMiddle)
    checkHighestNumber(topRight)
    checkHighestNumber(middleLeft)
    checkHighestNumber(middleMiddle)
    checkHighestNumber(middleRight)
    checkHighestNumber(bottomLeft)
    checkHighestNumber(bottomMiddle)
    checkHighestNumber(bottomRight)

    if (difficulty === 'dumb' || difficulty === 'medium') //Winning when the chance is available
    {
        console.log('Winning when the chance is available')
        let { top, middle, bottom } = squares 
        if((top.left === "blue" && top.middle === "blue") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((top.right === "blue" && top.middle === "blue") && (possibleMoves.includes(squares.top.left)))
        {
            clickSquare(squares.top.left)
            return
        }
        if((middle.left === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.middle.right)))
        {
            clickSquare(squares.middle.right)
            return
        }
        if((middle.right === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.middle.left)))
        {
            clickSquare(squares.middle.left)
            return
        }
        if((bottom.left === "blue" && bottom.middle === "blue") && (possibleMoves.includes(squares.bottom.right)))
        {
            clickSquare(squares.bottom.right)
            return
        }
        if((bottom.right === "blue" && bottom.middle === "blue") && (possibleMoves.includes(squares.bottom.left)))
        {
            clickSquare(squares.bottom.left)
            return
        }
        if((top.left === "blue" && middle.left === "blue") && (possibleMoves.includes(squares.bottom.left)))
        {
            clickSquare(squares.bottom.left)
            return
        }
        if((bottom.left === "blue" && middle.left === "blue") && (possibleMoves.includes(squares.top.left)))
        {
            clickSquare(squares.top.left)
            return
        }
        if((top.middle === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.bottom.middle)))
        {
            clickSquare(squares.bottom.middle)
            return
        }
        if((bottom.middle === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.top.middle)))
        {
            clickSquare(squares.top.middle)
            return
        }
        if((top.right === "blue" && middle.right === "blue") && (possibleMoves.includes(squares.bottom.right)))
        {
            clickSquare(squares.bottom.right)
            return
        }
        if((bottom.right === "blue" && middle.right === "blue") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((bottom.right === "blue" && middle.right === "blue") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((bottom.right === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.top.left)))
        {
            clickSquare(squares.top.left)
            return
        }
        if((top.left === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.bottom.right)))
        {
            clickSquare(squares.bottom.right)
            return
        }
        if((bottom.left === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((top.right === "blue" && middle.middle === "blue") && (possibleMoves.includes(squares.bottom.left)))
        {
            clickSquare(squares.bottom.left)
            return
        }
    }

    if (difficulty === 'medium') //Preventing player from winning
    {
        console.log('Preventing player from winning')
        let { top, middle, bottom } = squares 
        if((top.left === "red" && top.middle === "red") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((top.right === "red" && top.middle === "red") && (possibleMoves.includes(squares.top.left)))
        {
            clickSquare(squares.top.left)
            return
        }
        if((middle.left === "red" && middle.middle === "red") && (possibleMoves.includes(squares.middle.right)))
        {
            clickSquare(squares.middle.right)
            return
        }
        if((middle.right === "red" && middle.middle === "red") && (possibleMoves.includes(squares.middle.left)))
        {
            clickSquare(squares.middle.left)
            return
        }
        if((bottom.left === "red" && bottom.middle === "red") && (possibleMoves.includes(squares.bottom.right)))
        {
            clickSquare(squares.bottom.right)
            return
        }
        if((bottom.right === "red" && bottom.middle === "red") && (possibleMoves.includes(squares.bottom.left)))
        {
            clickSquare(squares.bottom.left)
            return
        }
        if((top.left === "red" && middle.left === "red") && (possibleMoves.includes(squares.bottom.left)))
        {
            clickSquare(squares.bottom.left)
            return
        }
        if((bottom.left === "red" && middle.left === "red") && (possibleMoves.includes(squares.top.left)))
        {
            clickSquare(squares.top.left)
            return
        }
        if((top.middle === "red" && middle.middle === "red") && (possibleMoves.includes(squares.bottom.middle)))
        {
            clickSquare(squares.bottom.middle)
            return
        }
        if((bottom.middle === "red" && middle.middle === "red") && (possibleMoves.includes(squares.top.middle)))
        {
            clickSquare(squares.top.middle)
            return
        }
        if((top.right === "red" && middle.right === "red") && (possibleMoves.includes(squares.bottom.right)))
        {
            clickSquare(squares.bottom.right)
            return
        }
        if((bottom.right === "red" && middle.right === "red") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((bottom.right === "red" && middle.right === "red") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((bottom.right === "red" && middle.middle === "red") && (possibleMoves.includes(squares.top.left)))
        {
            clickSquare(squares.top.left)
            return
        }
        if((top.left === "red" && middle.middle === "red") && (possibleMoves.includes(squares.bottom.right)))
        {
            clickSquare(squares.bottom.right)
            return
        }
        if((bottom.left === "red" && middle.middle === "red") && (possibleMoves.includes(squares.top.right)))
        {
            clickSquare(squares.top.right)
            return
        }
        if((top.right === "red" && middle.middle === "red") && (possibleMoves.includes(squares.bottom.left)))
        {
            clickSquare(squares.bottom.left)
            return
        }
    }

    if((highestNumber === 0) && (possibleMoves.length != 0))    // if not possible to win
    {
        var emptySquare
        emptySquare = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
        clickSquare(emptySquare)
        return
    }
    if(possibleMoves.length === 0)
    {
        setTimeout(function(){resetBoard()}, 1000);
        return
    }

    let bestMoves = [] // Choosing moves via probility and rng
    if (topLeft === highestNumber) bestMoves.push('topLeft')
    if (topMiddle === highestNumber) bestMoves.push('topMiddle')
    if (topRight === highestNumber) bestMoves.push('topRight')
    if (middleLeft === highestNumber) bestMoves.push('middleLeft')
    if (middleMiddle === highestNumber) bestMoves.push('middleMiddle')
    if (middleRight === highestNumber) bestMoves.push('middleRight')
    if (bottomLeft === highestNumber) bestMoves.push('bottomLeft')
    if (bottomMiddle === highestNumber) bestMoves.push('bottomMiddle')
    if (bottomRight === highestNumber) bestMoves.push('bottomRight')
    
    // console.log({bestMoves})

    var selectedMove

    selectedMove = bestMoves[Math.floor(Math.random() * bestMoves.length)] 

    // console.log(selectedMove)

    var rowString

    rowString = selectedMove.slice(0, 3)
    if (rowString === "top")
    {
        let squareString
        squareString = selectedMove.split('')
        squareString.splice(0,3)
        squareString = squareString.join('')
        squareString = squareString.toLowerCase()
        console.log(`squares[${rowString}][${squareString}]`,squares[rowString][squareString])
         clickSquare(squares[rowString][squareString])
    }
    // console.log({string})
    rowString = selectedMove.slice(0,6)
    if (rowString === "bottom" || rowString === "middle")
    {
        let squareString
        squareString = selectedMove.split('')
        squareString.splice(0,6)
        squareString = squareString.join('')
        squareString = squareString.toLowerCase()
        console.log(`squares[${rowString}][${squareString}]`,squares[rowString][squareString])
         clickSquare(squares[rowString][squareString])
    }


    function checkHighestNumber(value)
    {
        if (value > highestNumber)
        {
            highestNumber = value
        }
    }
    // console.log({
    //     topLeft,
    //     topMiddle,
    //     topRight,
    //     middleLeft,
    //     middleMiddle,
    //     middleRight,
    //     bottomLeft,
    //     bottomMiddle,
    //     bottomRight
    // })


}

function resetBoard()
{
    if(playerTurn === "red")
    {
        console.log("Blue wins")
    }
    if(playerTurn === "blue")
    {
        console.log("red wins")
    }
    setTimeout(function(){
    grid.remove();
    createSquare()
    playerTurn = "red"
    turnChecker = true
    numberSquaresClicked = 0
    }, 1000);
}

function winScreenRed()
{
    console.log("winScreenRed")
    modalRed.style.display = "block"
}

function winScreenBlue()
{
    console.log("winScreenBlue")
    modalBlue.style.display = "block"
}

function tie()
{
    console.log("tie")
    modalTie.style.display = "block"
    tieDisplayer = document.getElementById("customTieText")
    tieDisplayer.innerText = "I can't believe that you got a tie on " + difficultyChanger + " difficulty"
}

function closeModal()
{
    resetBoard()
    modalRed.style.display = "none";
    modalBlue.style.display = "none";
    modalTie.style.display = "none"
}

function checkWinRed()
{

    let { top, middle, bottom } = squares
        // console.log('delay')
        if(top.left === "red" && top.middle === "red" && top.right === "red") {
            winScreenRed()
            return true
        }
        else if(middle.left === "red" && middle.middle === "red" && middle.right === "red") {
            winScreenRed()
            return true
        }
        else if(bottom.left === "red" && bottom.middle === "red" && bottom.right === "red") {
            winScreenRed()
            return true
        }
        else if(top.left === "red" && middle.left === "red" && bottom.left === "red") {
            winScreenRed()
            return true
        }
        else if(top.middle === "red" && middle.middle === "red" && bottom.middle === "red") {
            winScreenRed()
            return true
        }
        else if(top.right === "red" && middle.right === "red" && bottom.right === "red") {
            winScreenRed()
            return true
        }
        else if(top.left === "red" && middle.middle === "red" && bottom.right === "red") {
            winScreenRed()
            return true
        }
        else if(top.right === "red" && middle.middle === "red" && bottom.left === "red") {
            winScreenRed()
            return true
        }
        else return false
}
function checkWinBlue()
{
    let { top, middle, bottom } = squares
    {
        if(top.left === "blue" && top.middle === "blue" && top.right === "blue") {
            winScreenBlue()
            return true
        }
        else if(middle.left === "blue" && middle.middle === "blue" && middle.right === "blue") {
            winScreenBlue()
            return true
        }
        else if(bottom.left === "blue" && bottom.middle === "blue" && bottom.right === "blue") {
            winScreenBlue()
            return true
        }
        else if(top.left === "blue" && middle.left === "blue" && bottom.left === "blue") {
            winScreenBlue()
            return true
        }
        else if(top.middle === "blue" && middle.middle === "blue" && bottom.middle === "blue") {
            winScreenBlue()
            return true
        }
        else if(top.right === "blue" && middle.right === "blue" && bottom.right === "blue") {
            winScreenBlue()
            return true
        }
        else if(top.left === "blue" && middle.middle === "blue" && bottom.right === "blue") {
            winScreenBlue()
            return true
        }
        else if(top.right === "blue" && middle.middle === "blue" && bottom.left === "blue") {
            winScreenBlue()
            return true
        }
        else return false
    }  
}

function tieChecker()
{
    if(checkWinRed() === false && checkWinBlue() === false)
    {
        console.log(numberSquaresClicked)
        if(numberSquaresClicked === 9)
        {
            tie()
        }

    }
}