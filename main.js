var playerTurn = "red"
var grid = document.getElementById("grid")
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

        square.setAttribute("onclick", "clickSquare(this)" )
    }
}

console.log(grid)
function clickSquare(square)
{
    console.dir(square)
    if(square.style.backgroundColor === "")
    {
        square.style.backgroundColor = playerTurn
        console.log(squares)

        for(let row in squares) {
            for(let col in squares[row]) {
                if(square === squares[row][col])
                {
                    squares[row][col] = playerTurn
                }
            }
          }

        if(playerTurn === "red") playerTurn = "blue"
        else if(playerTurn === "blue") playerTurn = "red"
        
        console.log(playerTurn)

        checkWin()
    }
}

function checkWin()
{
    let { top, middle, bottom } = squares

    if(top.left == top.middle && top.middle == top.right)
    {
        console.log("win")
    }
    if(middle.left == middle.middle && middle.middle == middle.right)
    {
        console.log("win")
    }
    if(bottom.left == bottom.middle && bottom.middle == bottom.right)
    {
        console.log("win")
    }
    if(top.left == middle.left && middle.left == bottom.left)
    {
        console.log("win")
    }
    if(top.middle == middle.middle && middle.middle == bottom.middle)
    {
        console.log("win")
    }
    if(top.right == middle.right && middle.right == bottom.right)
    {
        console.log("win")
    }
    if(top.left == middle.middle && middle.middle == bottom.right)
    {
        console.log("win")
    }
    if(top.right == middle.middle && middle.middle == bottom.left)
    {
        console.log("win")
    }
}