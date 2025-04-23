const icon = document.getElementById("icon-share");
const ballon = document.getElementById("ballon");
const infoBox = document.querySelector(".personal-info");
const container = document.querySelector(".container-info");
var state = -1;
icon.addEventListener('click', () => {
    if (state === -1) {
        icon.style.backgroundColor = "hsl(214, 17%, 51%)";
        icon.style.color = "white";
        ballon.style.display = "block";
        infoBox.classList.add("handle");
        container.classList.add("color-container");
        state = -state;
    }
    else if (state === 1) {
        icon.style.backgroundColor = "hsl(210, 46%, 95%)";
        icon.style.color = "hsl(217, 19%, 35%)";
        ballon.style.display = "none";
        container.classList.remove("color-container");
        infoBox.classList.remove("handle");
        state = -state;
    }

});



















// var state = -1 ;
// console.log(share);
// icon.onclick = function (state) {
// if (state =-1)
//     share.style.color = "yellow";
//     icon.style.backgroundColor = "black";
//     ballon.style.display = "block";
//     state*=-1 ;
//     if (state =1)
//         share.style.color = "yellow";
//         icon.style.backgroundColor = "yellow";
//         ballon.style.display = "none";
// }
