var i = 0;
var txt = "Hello World";
var speed = 150;

(function typeWriter() {
    if (i < txt.length) {
        document.getElementsByClassName("blink_me")[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})();
