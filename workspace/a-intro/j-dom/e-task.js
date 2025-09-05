const button = document.getElementById("button");
console.log(button);
const kid = document.getElementsByClassName("kid");
// console.log(kid);
// kid[0].style.backgroundColor = "red";
const youth = document.getElementsByClassName("youth");
const adult = document.getElementsByClassName("adult");
// console.log(youth, adult);
const input = document.getElementById("input");
console.log(input);
const allElements = document.querySelectorAll(".kid, .youth, .adult");
// const all = [kid, youth, adult];
console.log(input);
const person = document.getElementsByClassName("person");
// const all = [kid, youth, adult];
// NodeList.prototype.forEach = Array.prototype.forEach;
// person.forEach((person) => (person.style.backgroundColor = "white"));
button.addEventListener("click", (e) => {
    allElements.forEach((all) => {
        all.style.backgroundColor = "white";
    });
    kid[0].textContent = "아동";
    youth[0].textContent = "청소년";
    adult[0].textContent = "성인";
    if (input.value === "아동") {
        kid[0].style.backgroundColor = "red";
        kid[1].style.backgroundColor = "red";
        kid[0].textContent = "*아동";
    } else if (input.value === "청소년") {
        youth[0].style.backgroundColor = "red";
        youth[1].style.backgroundColor = "red";
        youth[0].textContent = "*청소년";
    } else if (input.value === "성인") {
        adult[0].style.backgroundColor = "red";
        adult[1].style.backgroundColor = "red";
        adult[0].textContent = "*성인";
    } else {
        alert("다시 시도해주세요");
    }
});
