document.getElementById("btn").addEventListener("click",changeColor);

function changeColor(button)
{
    let bg = document.getElementById("container");
    let idcolor = document.getElementById("id-color");
    let index = 1;

    switch(index)
    {
        case 1:
            bg.style.backgroundColor = "#0396FF";
            idcolor.textContent = "#0396FF";
            index = index+1;
            break;
        case 2:
            bg.style.backgroundColor = "#623AA2";
            idcolor.textContent = "#623AA2";
            index = index+1;
            break;
        default:
            bg.style.backgroundColor = "#000000";
            idcolor.textContent = "#000000";
            index = "#000000";
    }
}