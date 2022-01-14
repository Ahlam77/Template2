let stars = document.getElementById(`stars`);
let moon = document.getElementById(`moon`);
let mountains1 = document.getElementById(`mountains1`);
let mountains2 = document.getElementById(`mountains2`);
let river = document.getElementById(`river`);
let boat1 = document.getElementById(`boat1`);
let Ahlam = document.querySelector(`.Ahlam`);

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + `px`;
    moon.style.top = value * 4 + `px`;
    mountains1.style.top = value * 1.5 + `px`;
    mountains2.style.top = value * 1.2 + `px`;
    river.style.top = value + `px`;
    boat1.style.top = value + `px`;
    boat1.style.left = value * 3 + `px`;
    Ahlam.style.fontSize = value + `px`;
    if (scrollY >= 67) {
        Ahlam.style.fontSize = 67 + `px`;
        Ahlam.style.position = `fixed`;
        if (scrollY >= 390) {
            Ahlam.style.display = `none`;
        } else {
            Ahlam.style.display = `block`;
        }
        if (scrollY >= 127) {
            document.querySelector(`.main`).style.background = `linear-gradient( #376281, #10001f)`;
        } else {
            document.querySelector(`.main`).style.background = ` linear-gradient(#200016, #10001f)`
        }
    }
}