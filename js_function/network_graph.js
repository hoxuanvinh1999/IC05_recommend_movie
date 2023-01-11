let frames = ["network_graph/classed.html", "network_graph/graph_colored.html", "network_graph/p2.html", "network_graph/comedy.html"];
let currentFrame = 0;
// Array of titles
const titles = ["Difference Pie Action", "Difference Plot", "Plot Average Audience Rating Year", "Plot Average Expert Rating Year"]

// Array of descriptions
const descriptions = ["This graph shows the difference of audience rating and expert rating of Action movie", "This graph shows the difference of audience rating and expert rating", "This graph shows the average audience rating by year", "This graph shows the average expert rating by year"] 

const title = document.getElementById("title");
const description = document.getElementById("description");

function prevFrame() {
  if (currentFrame > 0) {
    currentFrame--;
    document.getElementById("iframe").src = frames[currentFrame];
    title.textContent = titles[currentFrame];
    description.textContent = descriptions[currentFrame];
  }
}

function nextFrame() {
  if (currentFrame < frames.length - 1) {
    currentFrame++;
    document.getElementById("iframe").src = frames[currentFrame];
    title.textContent = titles[currentFrame];
    description.textContent = descriptions[currentFrame];
  }
}