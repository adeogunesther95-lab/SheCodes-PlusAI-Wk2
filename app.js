function displayPoem(response) {
  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let themeInputElement = document.querySelector("#theme-input");
  let theme = themeInputElement.value;

  let apiKey = "bf602aabco34t729377499af62121a7a";
  let prompt = `Write a short poem about ${theme}.`;
  let context =
    "The poem should be creative, engaging and based on specific theme inputted by the user. Please write the output in basic HTML format. Please include poem source where available.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
