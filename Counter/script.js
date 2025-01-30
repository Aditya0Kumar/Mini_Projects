let decrease = document.getElementById(`decrease`);
let reset = document.getElementById(`reset`);
let increase = document.getElementById(`increase`);
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