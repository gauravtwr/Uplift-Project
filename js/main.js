const menuBtn = document.getElementById("menuBtn");
const bar1 = document.getElementById("barr1");
const bar2 = document.getElementById("barr2");
const bar3 = document.getElementById("barr3");
const list = document.getElementById("list-container");

menuBtn.addEventListener("click",() => {
    bar1.classList.toggle("change");
    bar2.classList.toggle("change");
    bar3.classList.toggle("change");
    list.classList.toggle("hide");
})