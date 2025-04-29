

const btn = document.querySelector(".btn");
const error = document.getElementById("error");
const email = document.getElementById("email");
const displayinterface = document.getElementById("display-interface");
const main = document.querySelector("main");
const thank = document.querySelector(".thank");
const form = document.querySelector("form");
const dismiss = document.querySelector(".dismiss");
var emailvalid = false;
thank.style.display = "none";

// ********************* Functions  **************************
function goodEmail() {
    error.style.opacity = "0";
}
function cleardata() {
    error.style.opacity = "0";
    email.style.backgroundColor = "white";
}
function badEmail() {
    error.style.opacity = "1";
    email.style.backgroundColor = "rgb(255 98 87 / 52%)";
}

form.addEventListener('click', (e) => {
    e.preventDefault();
});


//      *****************  Blur check    **************************
email.addEventListener('blur', () => {
    if (email.validity.valid && (email.value.indexOf('.') != -1) && (email.value.indexOf('@') < email.value.indexOf('.'))) {
        goodEmail();
        emailvalid = true;
    }
    else if (email.value == "") {
        cleardata();
        emailvalid = false;
    }
    else {
        badEmail();
        emailvalid = false;
    }
});
email.addEventListener('focus', () => {
    cleardata();

});

//  **********   Press botton  *****************
btn.addEventListener('click', (e) => {
    if (emailvalid) {

        displayinterface.textContent = email.value;
        displayinterface.style.fontWeight = "bold";
        main.style.animationName = "disAppear";
        main.style.animationDuration = ".5s";
        main.style.display = "none";

        setTimeout(() => {
            thank.style.display = "flex";
            thank.style.animationName = "appear";
            thank.style.animationDuration = ".5s";
        }, 525);
    }
    else {
        badEmail();
        e.preventDefault();
    }
});

// ************   Press Dismiss  ********************

dismiss.addEventListener('click', () => {
    cleardata();
    thank.style.display = "none";
    thank.style.animationName = "disAppear";
    thank.style.animationDuration = ".5s";

    setTimeout(() => {
        main.style.display = "flex";
        main.style.animationName = "appear";
        main.style.animationDuration = ".5s";

    }, 525);

    form.reset();
    emailvalid = false;
});

