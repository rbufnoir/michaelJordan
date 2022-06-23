function changeImage() {
  const img = document.getElementById("michaelJordan");
  const imgName = img.src.split('\\').pop().split('/').pop();

  if (imgName === "michaelJordan.jpg")
    img.src = "src/michael-jordan.jpg";
  else
    img.src = "src/michaelJordan.jpg";
}

function checkKonami(buffer) {
  const konami =  ["arrowup",
                    "arrowup",
                    "arrowdown",
                    "arrowdown",
                    "arrowleft",
                    "arrowright",
                    "arrowleft",
                    "arrowright",
                    "b",
                    "a"];

  if (konami.toString() === buffer.toString()) {
    document.getElementById("secret").showModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            buffer = [];
        }

        buffer.push(key);
        lastKeyTime = currentTime;

        if (buffer.length == 10)
          checkKonami(buffer);
    });
});
