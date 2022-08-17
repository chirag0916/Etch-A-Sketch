const container = document.getElementById("container");
const body = document.getElementById("body");

//reset grid button
const resetButton = document.createElement('button');
resetButton.textContent = "Reset Grid";
resetButton.id = 'resetButton';
resetButton.onclick = function () {
window.location.reload(false);

}
container.appendChild(resetButton).className='reset-button';

//random colour generator
const setBg = (cell) => {
  if(cell.style.backgroundColor === "") {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    cell.style.backgroundColor = "#" + randomColor;
  }
}

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      //cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener('mouseover', function(event) {
        setBg(event.target);
      });
      cell.addEventListener("mouseover", function( event ) {   
        // highlight the mouseover target
        let that = event.target;
        if(parseFloat(that.style.opacity)) {
          that.style.opacity = parseFloat(that.style.opacity) + 0.2;
        } else {
          that.style.opacity = 0.2;
        }
        
    
        // reset the color after a short delay
        setTimeout(function() {
          that.style.color = " ";
        }, 500);
      }, false);
    
     }
    }

  function userChoice() {
   let userRow = window.prompt("how many rows do you require?");
   let userCol = window.prompt ("how many columns do you require?");

   if (userRow <= 100 || userCol <= 100) {
    makeRows(userRow,userCol);
   }
   else if (userRow > 100 || userCol > 100) {
    window.alert("Exceeding limit of 100")
    userChoice();
   }
   else {
    window.alert("Incorrect Entry")
    userChoice();
   }
  }

userChoice();