
/*  ====================================== Counter ==============================   */

let decrease = document.getElementById(`decreasebttn`);
let reset = document.getElementById(`resetbttn`);
let increase = document.getElementById(`increasebttn`);
let counterlabel = document.getElementById(`counterlabel`);

let count = 0;

decrease.onclick = function(){
    count--;
    counterlabel.textContent = count;
}

increase.onclick = function(){
    count++;
    counterlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counterlabel.textContent = count;
}

/*  ====================================== DICE ROLL ==============================   */

let roll = document.getElementById(`dicerollbttn`);
let mynum = document.getElementById(`dicerollnum`);

let randomnum;

roll.onclick = function(){
    console.log("CLicked");
    randomnum = Math.floor(Math.random() * 6) + 1;
    mynum.textContent = randomnum;

}