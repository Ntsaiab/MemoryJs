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
// const modal2 = document.querySelector(".modal2");
const playGame = document.querySelector(".play-game");
// const nGameBtn = document.querySelector("#ngame");
// const rLevelBtn = document.querySelector("#rlevel");
// const eGameBtn = document.querySelector("#egame");
const indivBoxes = document.querySelectorAll(".indivboxes");
const indiv1 = document.querySelector("#indiv1");
const currStatsCon = document.querySelector(".stats");

// ==============================
//     Create Game Board
// ==============================

//THIS WORKS CREATES GAME BOARD
// let num = 9;

// for (let i = 1; i < num; i++) {
//   let div = document.createElement("div");
//   div.classList.add("indivboxes");
//   mBoard.appendChild(div);
// }


// ==============================
//     Create Game Play
// ==============================
class GamePlay {
  constructor(level, uscore, cscore, time) {
    this.level = level;
    this.uscore = uscore;
    this.cscore = cscore;
    this.time = time;
  }
  updateStats() {
    currStatsCon.innerHTML = `
      <div class="Level"> Level: <span>${this.level}</span>
      </div>
      <div class="uScore"> Player Score: <span>${this.uscore}</span>
      </div>
      <div class="cScore"> Computer Score: <span>${this.cscore}</span>
      </div>
      <div class="time"> Time: <span>${this.time}</span>
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
    setInterval(() => {
      this.time--;
      this.updateStats();
    }, 5000);
    if (this.time === 0) {
      console.log("Time is up! You lose!")
    }
  }
  player1Score() {
    this.uscore++;
    this.updateStats();
  }
  player2Score() {
    this.cscore++;
    this.updateStats();
  }
}



// ==============================
//  Global Variables
// ==============================  

let beginStats = new GamePlay(10, 10, 10, 6);

// ==============================
//   Create Modal/EventLisFunc
// ==============================

// THIS WORKS TOGGLES MODAL BEGINBTN AND NEWGAME BTN
const toggleModal = () => {
  modal.classList.toggle("close");
  beginStats.updateStats();
}

// // THIS DOES NOT WORK. ONLY POPS UP IN THE BIGINNING DOES NOT
// // CLICK OFF.
// const toggleModal2 = () => {
//   // Maybe a modal as well saying thank you for Playing
//   modal2.classList.toggle("open");
// }

// ==============================
//   Data Source
// ==============================
// const dataSrc = [ // go with object look up methods. 
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

// // changed to object data source
// const dataSrc = {
//     gtUndefined: "let x = ;",
//     function1: "function x {};",
//     arrowFunction: "const x = () => {};", 
//     object1: "{}",
//     object2: "const x = {}",
//     array1: "[]",
//     array2: "const x = [];",
//     forLoop: "for(i = 0; i < 10; i++ {})",
//     whileLoop: "let i = 0; while(i < 10) {i++}" 
// };
const dataSrc = {
  indiv1: {
    displayText: "undefined",
    match: "indiv2",
  },
  indiv2: {
    displayText: "let x = ;",
    match: "indiv1",
  },
  indiv3: {
    displayText: "object1",
    match: "indiv4",
  },
  indiv4: {
    displayText: "let x = {};",
    match: "indiv3",
  },
  indiv5: {
    displayText: "let x = [];",
    match: "indiv6",
  },
  indiv6: {
    displayText: "array1",
    match: "indiv5",
  },
  indiv7: {
    displayText: "forLoop",
    match: "indiv8",
  },
  indiv8: {
    displayText: "for(i = 0; i < 10; i++ {});",
    match: "indiv7",
  },
  indiv9: {
    displayText: "let i = 0; while(i < 10) {i++};",
    match: "indiv10",
  },
  indiv10: {
    displayText: "whileLoop",
    match: "indiv9",

  }
};

// ==============================
//     Create Computer Variables
// ==============================




// ==============================
//      Functions/logic/Game Play
// ==============================

const gameTime = () => beginStats.timeUp();

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

// for (const [key, value] of Object.entries(dataSrc)) {
//   mBoard.addEventListener("click", (e) => {
//   console.log(`${(key)}`);
//   // console.log(`${value}`); 
// });
// }
// const keys = Object.keys(dataSrc);

// 1st click click counter outside of this scope increment inside clickcounter++
// 2nd click check for match, if match update score then reset counter


let clickCounter = 0;
 let matchArr = [];


// console.log(indivBoxes);
for (let indivBox of indivBoxes) {
  indivBox.addEventListener("click", (e) => {
    let word = dataSrc[indivBox.id].displayText;
    indivBox.textContent = word;
    clickCounter++;
    
    let match = dataSrc[indivBox.id].match;
      const checkMatch = () => { // NO ERRORS BUT CHECKMATCH AND MATCH ARE GREYED OUT
      matchArr.push(indivBox.id);
     if (matchArr[1] == dataSrc[matchArr[0]].match) {
      console.log("yay! a match!");
    }
  }

   

    gameTime();
    //TRYING TO MATCH THE VALUES
   
  console.log(matchArr);
    // console.log(indivBox.id);
    // console.log(match);
    // console.log(word);
    // // console.log(word);


    // if (indivBox === match ) {



    //   clickcounter = 0;
    // }
    console.log(clickCounter);
    // console.log(this.uscore);
  });
}





// ==============================
//     Event Listeners
// ==============================

playGame.addEventListener("click", toggleModal);
  // nGameBtn.addEventListener("click", toggleModal);
  // // rLevelBtn.addEventListener("click",);
  // eGameBtn.addEventListener("click", toggleModal2);