// Question 2
const resultEl = document.querySelector("#results");
const loadingEl = document.querySelector("#loading-indicator");
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

// starts the loading-indicator
loadingEl.classList.add("start-loading-indicator");

fetch(url)
  .then((response) => response.json())
  .then((dataJSON) => dataJSON.results)
  .then((results) => {
    let html = "";
    
    html += "<ul>";
    for (let i = 0; i < 8; i++) {
      html += `<li>${results[i].name}, Rating: ${results[i].rating}, Number of Tags: ${results[i].tags.length} </li>`;
    }
    html += "</ul>";
    resultEl.innerHTML = html;

    // stops the loading-indicator and removes the text
    loadingEl.innerHTML = "";
    loadingEl.classList.remove("start-loading-indicator");
  })
  .catch((error) => console.log("Error: ", error));
