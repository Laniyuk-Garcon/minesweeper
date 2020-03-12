document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
  cells: [{row:0, col:0, isMine: false, hidden: true}, 
          {row:0, col:1, isMine: true, hidden: true}, 
          {row:0, col:2, isMine: false, hidden: true}, 
          {row:1, col:0, isMine: true, hidden: true},
          {row:1, col:1, isMine: true, hidden: true},
          {row:1, col:2, isMine: false, hidden: true},
          {row:2, col:0, isMine: false, hidden: true},
          {row:2, col:1, isMine: false, hidden: true},
          {row:2, col:2, isMine: false, hidden: true}]
          
        

 }

function startGame () {
  cells = board.cells
  //console.log(cells)
  for (var i = 0; i < cells.length; i++) {
    cell = cells[i]
  //  console.log(cell)
    cell.surroundingMines = countSurroundingMines(cell)
   // console.log("startGame ", cell )
  }

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
 var cells = board.cells

 // var hiddenRemaining = true
 // var notRight = false

 for (var i = 0; i < cells.length; i++) {
   // console.log ("cells: " , cells)
   cell = cells[i]
   //console.log(cell)
   if (cell.isMine && !cell.isMarked ) {
     return 
   } else if (cell.isMarked && !cell.isMine){
     //notRight = true
     return
   } else { 
     console.log("HELLO FROM THE ELSE")
   }
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  count = 0
 // console.log(surroundingCells)
  for (var i = 0; i < surroundingCells.length; i++) { 
   // console.log(cell)
    cell = surroundingCells[i] 
   // console.log(cell)
    if (cell.isMine) {
     count += 1 
     //console.log(count)
    }
    //console.log(cell)
  } 
  return count
  
}


