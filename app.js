function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: "",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
