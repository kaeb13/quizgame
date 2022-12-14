// Create penguin parts
var monkey = document.createElement("div");
var monkey_bottom = document.createElement("div");
var monkey_top = document.createElement("div");
var right_hand = document.createElement("div");
var left_hand = document.createElement("div");
var right_feet = document.createElement("div");
var left_feet = document.createElement("div");
var monkey_top = document.createElement("div");
var right_cheek = document.createElement("div");
var left_cheek = document.createElement("div");
var belly = document.createElement("div");
var right_eye = document.createElement("div");
var left_eye = document.createElement("div");
var sparkle1 = document.createElement("div");
var sparkle2 = document.createElement("div");
var blush_right = document.createElement("div");
var blush_left = document.createElement("div");
var mouth_top = document.createElement("div");
var mouth_bottom = document.createElement("div");

// Add classes to monkey parts
monkey.classList.add('monkey');
monkey_bottom.classList.add('monkey-bottom');
monkey_top.classList.add('monkey-top');
right_hand.classList.add('right-hand');
left_hand.classList.add('left-hand');
right_feet.classList.add('right-feet');
left_feet.classList.add('left-feet');
right_cheek.classList.add('right-cheek');
left_cheek.classList.add('left-cheek');
belly.classList.add('belly');
right_eye.classList.add('right-eye');
left_eye.classList.add('left-eye');
sparkle1.classList.add('sparkle');
sparkle2.classList.add('sparkle');
blush_right.classList.add('blush-right');
blush_left.classList.add('blush-left');
mouth_top.classList.add('mouth-top');
mouth_bottom.classList.add('mouth-bottom');

// Add penguin parts
monkey.appendChild(monkey_bottom);
monkey_bottom.appendChild(right_hand);
monkey_bottom.appendChild(left_hand);
monkey_bottom.appendChild(right_feet);
monkey_bottom.appendChild(left_feet);
monkey_top.appendChild(right_cheek);
monkey_top.appendChild(left_cheek);
monkey_top.appendChild(belly);
monkey_top.appendChild(right_eye);
monkey_top.appendChild(left_eye);
right_eye.appendChild(sparkle1);
left_eye.appendChild(sparkle2);
monkey_top.appendChild(blush_right);
monkey_top.appendChild(blush_left);
monkey_top.appendChild(monkey_bottom);
document.querySelector(".empty-monkey").appendChild(monkey);

// Create questions - and answers
var q_a = document.querySelector(".q-a");
var question = document.createElement("h1");
var score = 0;
var btn = document.createElement("button");
btn.innerHTML = "Check Your Answer";

console.log("hi")