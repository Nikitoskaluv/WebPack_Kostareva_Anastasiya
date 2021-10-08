
const formSwitch = document.querySelector('#formSwitch');

const switchFunc = (firstdiv, seconddiv) => {
    formSwitch.onchange = function (e) {
        if (e.target.value == "calc") {
            firstdiv.style.display = "block";
            seconddiv.style.display = "none";
        } else {
            firstdiv.style.display = "none";
            seconddiv.style.display = "block";
        }
    };
};

export {
    switchFunc
};



