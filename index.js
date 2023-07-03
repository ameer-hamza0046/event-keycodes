const eventKey = document.querySelector("#event-key")
const eventKeyCode = document.querySelector("#event-key-code")
const eventCode = document.querySelector("#event-code")
document.addEventListener("keydown", (e) => {
    eventKey.innerHTML = e.key;
    eventKeyCode.innerHTML = e.keyCode;
    eventCode.innerHTML = e.code;
})