const colors = ["#0396FF", "#EA5455", "#7367F0", "#8C1BAB", "#F55555", "#9F44D3", "#3677FF", "#FA016D", "#002661", "#0E5CAD"];

document.getElementById("btn").addEventListener("click",changeColor);

function changeColor(button)
{
    let bg = document.getElementById("container");
    let idcolor = document.getElementById("id-color");
    const randomNumber = getRandomNumber();
    bg.style.backgroundColor = colors[randomNumber];
    idcolor.textContent = colors[randomNumber];
}

function getRandomNumber()
{
    return Math.floor(Math.random() * 10);
}