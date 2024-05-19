// تعريف الأوامر الممكنة للعبة
const choices = ['ملك', 'كتابة'];

// توليد اختيار عشوائي للبوت
function botChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// التحقق من فوز المستخدم
function checkWinner(userChoice, botChoice) {
    if (userChoice === botChoice) {
        return 'لقد فزت!';
    } else {
        return 'لقد خسرت!';
    }
}

// مثال على استخدام اللعبة
const userChoice = 'ملك'; // يمكنك استبدال هذا بإدخال المستخدم الفعلي
const bot = botChoice();
const result = checkWinner(userChoice, bot);

console.log('اختيار البوت:', bot);
console.log(result);
