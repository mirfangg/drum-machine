function play(str) {

    if (str === 'q' || str === 'Q') {
        document.querySelector("#display").innerText = "On Time"
    } else if (str === 'w' || str === 'W') {
        document.querySelector("#display").innerText = "Writing Adventure";
    } else if (str === 'e' || str === 'E') {
        document.querySelector("#display").innerText = "Alarm Experia";
    } else if (str === 'a' || str === 'A') {
        document.querySelector("#display").innerText = "On Timee";
    } else if (str === 's' || str === 'S') {
        document.querySelector("#display").innerText = "Writing Adventuree";
    } else if (str === 'd' || str === 'D') {
        document.querySelector("#display").innerText = "Alarm Experiaa";
    } else if (str === 'z' || str === 'Z') {
        document.querySelector("#display").innerText = "On Timeee";
    } else if (str === 'x' || str === 'X') {
        document.querySelector("#display").innerText = "Writing Adventureee";
    } else if (str === 'c' || str === 'C') {
        document.querySelector("#display").innerText = "Alarm Experiaaa";
    }

    var audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = event => {
    let keypress = event.key

    if (keypress === 'q' || keypress === 'Q') {
        play('Q')
    } else if (keypress === 'w' || keypress === 'W') {
        play('W')
    } else if (keypress === 'e' || keypress === 'E') {
        play('E')
    } else if (keypress === 'a' || keypress === 'A') {
        play('A')
    } else if (keypress === 's' || keypress === 'S') {
        play('S')
    } else if (keypress === 'd' || keypress === 'D') {
        play('D')
    } else if (keypress === 'z' || keypress === 'Z') {
        play('Z')
    } else if (keypress === 'x' || keypress === 'X') {
        play('X')
    } else if (keypress === 'c' || keypress === 'C') {
        play('C')
    }
}
