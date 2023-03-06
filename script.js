let val=0;
const incrementbtn=document.getElementById("inc");
const decrementbtn=document.getElementById("dec");
const resetbtn=document.getElementById("reset");
incrementbtn.addEventListener('click',increment);
decrementbtn.addEventListener('click',decrement);
resetbtn.addEventListener('click',reset);
function increment(){
val=val+1;
document.getElementById('number').innerText=val;
}
function decrement(){
    val=val-1;
    document.getElementById('number').innerText=val;
}
function reset(){
    val=0;
    document.getElementById('number').innerText=val;
}
