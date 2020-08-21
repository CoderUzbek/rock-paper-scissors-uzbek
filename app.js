// Shoxrux Rustamaliyev
// 2020, Avg 21

let usr_score = 0;
let comp_score = 0;

const USR_SPAN = document.querySelector("#usr-score");
const COMP_SPAN = document.querySelector("#comp-score");

const SCORE_BOARD_DIV = document.querySelector("#scoreBoard");
const RESULT_DIV = document.querySelector("#result p");

const ROCK_DIV = document.querySelector("#r");
const PAPER_DIV = document.querySelector("#p");
const SCISSORS_DIV = document.querySelector("#s");

const CHOICES = ['r', 'p', 's'];

// Kompyuter yurishi taminlash uchun Randomdan foydalaniladi
function getCOMP_CHOICE() {
    const RANDOM_NUM = Math.floor(Math.random() * 3)
    return CHOICES[RANDOM_NUM]
}

// So'z qaytarish uchun harfni tekshiradi
function convertToWord(char) {
    switch (char) {
        case "r":
            return "Tosh"
        case "s":
            return "Qaychi";
    }
    return "Qog'oz";
}

// Natijani ko'rsatish uchun so'z va animatsiya qo'shadi 
function win(usrChoice) {
    usr_score++;
    RESULT_DIV.innerText += " Siz yutdingiz! :)";
    document.getElementById(usrChoice).classList.add("green-glow");
}

// ^--/
function lose(usrChoice) {
    comp_score++;
    RESULT_DIV.innerText += " Siz yutqazdingiz! :(";
    document.getElementById(usrChoice).classList.add("red-glow");
}

// ^--/
function draw(usrChoice) {
    RESULT_DIV.innerText += " Durang! ;)";
    document.getElementById(usrChoice).classList.add("gray-glow");
}

// Animatsiyani o'chirish uchun har bir elementni tekshirib chiqadi
function deleteAnimation() {
    CHOICES.forEach(el => {
        const CLASSES = document.getElementById(el).classList;
        
        if (CLASSES.length > 1) {
            CLASSES.remove(CLASSES[1])
        }
    })
}

// Ishoralarni va natijani ko'rsatish uchun barcha yo'llarni tekshirib chiqadi
// va ballarni yozadi
function game(usrChoice) {
    deleteAnimation();
    const COMP_CHOICE = getCOMP_CHOICE();
    RESULT_DIV.innerText = `${convertToWord(usrChoice)} va ${convertToWord(COMP_CHOICE)}.`;

    switch (usrChoice + COMP_CHOICE) {
        case "pr":
        case "sp":
        case "rs":
            win(usrChoice);
            break
        case "rp":
        case "ps":
        case "sr":
            lose(usrChoice);
            break
        default:
            draw(usrChoice)
    }

    USR_SPAN.innerHTML = usr_score;
    COMP_SPAN.innerHTML = comp_score;
}

// Elementlarga hodisa qo'shadi
function main() {
    ROCK_DIV.addEventListener("click", _ => game("r"));
    PAPER_DIV.addEventListener("click", _ => game("p"));
    SCISSORS_DIV.addEventListener("click", _ => game("s"))
}

main()