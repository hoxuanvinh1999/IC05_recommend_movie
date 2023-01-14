let frames = ["network_graph/graph_colored.html",
"network_graph/classed.html", 
"network_graph/p2.html"];
let currentFrame = 0;
// Array of titles
const titles = ["Network Graph 1", "Network Graph 2", "Network Graph 3", ]

// Array of descriptions
const descriptions = ["Ce graphique de réseau montre la connexion d'un groupe de films à un groupe de types de films.", 
"Ce Network Graph montre également la connexion d'un groupe d'action_movies à chaque classe d'évaluation (de 1 à 5)", 
"Ce graphique de réseau montre également la connexion d'un groupe de films à un groupe de types de films. Mais avec toutes nos données."
] 

const title = document.getElementById("title");
const description = document.getElementById("description");

function prevFrame() {
  if (currentFrame > 0) {
    currentFrame--;
    document.getElementById("iframe").src = frames[currentFrame];
    title.textContent = titles[currentFrame];
    // description.textContent = descriptions[currentFrame];

    description.innerHTML = ""
    var p = document.createElement("p");
    p.textContent = descriptions[currentFrame];
    description.appendChild(p);
  }
}

function nextFrame() {
  if (currentFrame < frames.length - 1) {
    currentFrame++;
    document.getElementById("iframe").src = frames[currentFrame];
    title.textContent = titles[currentFrame];
    // description.textContent = descriptions[currentFrame];

    description.innerHTML = ""
    var p = document.createElement("p");
    p.textContent = descriptions[currentFrame];
    description.appendChild(p);
  }
}