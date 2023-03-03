const burger = document.getElementById("burger");
const ul = document.getElementById("checked");
burger.addEventListener("click", function () {
    ul.classList.toggle("show")
});