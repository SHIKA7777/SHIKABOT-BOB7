// متغير يحفظ مواقع السلالم والثعابين
const snakesAndLadders = {
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  16: 6,
  21: 42,
  28: 84,
  36: 44,
  46: 25,
  49: 11,
  51: 67,
  62: 19,
  64: 60,
  71: 91,
  74: 53,
  78: 98,
  87: 94,
  89: 68,
  92: 88,
  95: 75,
  99: 80
};

// متغير يحفظ موقع اللاعبين
let player1Position = 0;
let player2Position = 0;

// دالة للتحقق من وجود سلم أو ثعبان
function checkSnakesAndLadders(position) {
  return snakesAndLadders[position] || position;
}

// دالة للتحرك لاعب
function movePlayer(player, steps) {
  if (player === 1) {
    player1Position += steps;
    player1Position = checkSnakesAndLadders(player1Position);
  } else {
    player2Position += steps;
    player2Position = checkSnakesAndLadders(player2Position);
  }
}

// دالة للعب الدور
function playTurn(player) {
  const steps = Math.floor(Math.random() * 6) + 1;
  movePlayer(player, steps);
}

// دالة للتحقق من فوز لاعب
function checkWin(player) {
  if (player === 1 && player1Position >= 100) {
    return true;
  } else if (player === 2 && player2Position >= 100) {
    return true;
  }
  return false;
}

// دالة لبدء اللعبة
function startGame() {
  while (true) {
    playTurn(1);
    console.log("Player 1 moved to", player1Position);
    if (checkWin(1)) {
      console.log("Player 1 wins!");
      break;
    }
    
    playTurn(2);
    console.log("Player 2 moved to", player2Position);
    if (checkWin(2)) {
      console.log("Player 2 wins!");
      break;
    }
  }
}

// بدء اللعبة
startGame();
