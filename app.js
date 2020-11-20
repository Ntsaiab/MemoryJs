console.log("Yes I'm connected");
// create game board
// create modal to pop up over board when game loads
// user can read instructions
// click start game button.
// user clicks first tile, tile reveals data
    // start timer on first click
    // create storage for data
    // create a random generator to load data in tiles everytime page refreshes
    // or add new randomly generated data for next level play
    // display value of first tile
    // user clicks second tile, with first still visible
    // if 1st tile and 2nd tile matches stay on screen
    // if 1st tile and 2nd tile does not match return to base state after a specified time

// create computer generated turn
  // if 1st tile and 2nd tile matches stay on screen
  // if 1st tile and 2nd tile does not match return to base state after a specified time

// create a counter for when all the board is matched 
    // user counter
    // computer counter
      // display as score

// display You win message if user counter reaches x amount of points
// display Computer wins if computer counter reaches x amount of points

// 
//display you lose message if time runs out 2nd time

// ==============================
//     Cached Dom Notes
// ==============================
const mBoard = document.querySelector(".mBoard");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const playGame = document.querySelector(".play-game");
const nGameBtn = document.querySelector("#ngame");
const rLevelBtn = document.querySelector("#rlevel");
const eGameBtn = document.querySelector("#egame");



// ==============================
//     Create Game Board
// ==============================

//THIS WORKS CREATES GAME BOARD
let num = 11;

for (let i = 1; i < num; i++) {
  let div = document.createElement("div");
  div.classList.add("indivboxes");
  mBoard.appendChild(div);
}


// ==============================
//   Create Modal/EventLisFunc
// ==============================

// THIS WORKS TOGGLES MODAL BEGINBTN AND NEWGAME BTN
const toggleModal = () => {
  modal.classList.toggle("close");
}

// THIS DOES NOT WORK. ONLY POPS UP IN THE BIGINNING DOES NOT
// CLICK OFF.
const toggleModal2 = () => {
   // Maybe a modal as well saying thank you for Playing
   modal2.classList.toggle("open");
}




// ==============================
//     Create Game Play
// ==============================
class GamePlay {
  constructor(level, uscore, cscore, time) {
    this.level = level;
    this.uscore = uscore;
    this.cscore =  cscore;
    this.time = time;
  }
  updateStats() {
    currStatsCon.innerHTML = `
      <div class="stats"> Level: <span>${this.level}</span>
      </div>
      <div class="stats"> Player Score: <span>${this.uscore}</span>
      </div>
      <div class="stats"> Computer Score: <span>${this.cscore}</span>
      </div>
      <div class="stats"> Time: <span>${this.time}</span>
      </div>    
    `
  }
  // levelUp() {
  //   if() {

  //     this.level++;
  //     this.updateStats();
  //   }
  // }
  timeUp() {
    setInterval(()=> {
      this.time++;
      this.updateStats();
    }, 5000);
    if(time === 5) {
      console.log("Time is up! You lose!")
    }
  }
  playerScore() {

  }
}




// ==============================
//   Data Source
// ==============================
// const dataSrc = [ // go with object look up methods. 
//   // called seed data.
//   ['undefined', 'let x = ;'],
//   ['function1', 'function x { };'],
//   ['object1', '{ }'],
//   ['array1', '[ ]']
//   ['for loop', 'for(i = 0; i < 10; i++){}'],
//   ['while loop', 'let i = 0; while(i < 10){i++;}']
//   ['array2', 'const x = [];'],
//   ['object2', 'const x = {}'],
//   ['function2', 'const x = () => { };']
// ]

// changed to object data source
const dataSrc = {
    undefined: "let x = ;",
    function1: "function x {};",
    arrowFunction: "const x = () => {};", 
    object1: "{}",
    object2: "const x = {}",
    array1: "[]",
    array2: "const x = [];",
    forLoop: "for(i = 0; i < 10; i++ {})",
    whileLoop: "let i = 0; while(i < 10) {i++}" 
};



// ==============================
//     Create Computer Variables
// ==============================




// ==============================
//      Functions/logic/Game Play
// ==============================
// DECIDED TO LEAVE RANDOM OUT FOR NOW
//loop through random * element and sort. look up shuffle array
// const random = Math.floor(Math.random()*dataSrc.length);
// e.target.textContent = userInput;
 // if(random === random) {
  //   // mBoard.removeEventListener("click",)
  // }
  // let userInput = dataSrc[random];
  // e.target.textContent = userInput;



// Figured out how to split key value pairs.
for (const [key, value] of Object.entries(dataSrc)) {
  mBoard.addEventListener("click", (e) => {
  console.log(`${key}`);
  // console.log(`${value}`); 
});
}






// ==============================
//     Event Listeners
// ==============================

playGame.addEventListener("click", toggleModal);
nGameBtn.addEventListener("click", toggleModal);
// rLevelBtn.addEventListener("click",);
eGameBtn.addEventListener("click", toggleModal2);