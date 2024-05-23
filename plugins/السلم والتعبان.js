const client = new Client();

let playerPosition = 0;
const snakesAndLadders = {
    3: 17,
    7: 11,
    12: 22,
    14: 4,
    19: 5,
    21: 9,
    25: 16,
    31: 20,
    35: 28,
    38: 1,
    41: 24,
    45: 6,
    47: 26,
    50: 33,
    53: 40,
    57: 36,
    60: 23,
    61: 42,
    66: 51,
    70: 53,
    73: 48,
    78: 39,
    84: 58,
    87: 70,
    91: 81,
    94: 75,
    98: 80
};

client.on('message', async (msg) => {
    const chat = await msg.getChat();
    const message = msg.body.trim().toLowerCase();
    if (message === 'السلم-الثعبان') {
        playerPosition = 0;
        await chat.sendMessage('تم بدء لعبة السلم والثعبان!');
    } else if (message === 'نرد') {
        const steps = rollDice();
        movePlayer(steps);
        await chat.sendMessage(`تم التحرك بـ ${steps} خانات. الموقع الحالي: ${playerPosition}`);
        if (playerPosition >= 100) {
            await chat.sendMessage('لقد فزت!');
            playerPosition = 0;
        }
    }
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function movePlayer(steps) {
    playerPosition += steps;
    if (snakesAndLadders[playerPosition]) {
        playerPosition = snakesAndLadders[playerPosition];
    }
    return playerPosition;
}

client.initialize();
