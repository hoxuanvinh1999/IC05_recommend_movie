// Array of image file names
const imageFiles = ["difference_pie_all.png", 
"plot_average_audience_rating_year.png", 
"plot_xy_20000102.png",  
"movie_by_year.png",  
"class_in_3_audience.png", 
];

// Array of titles
const titles = ["Divergence entre la classification des films par les experts et le public", 
"Graphique de la note d'audience moyenne et de la note moyenne des experts par an",   
"Plots de corrélation des notes d'audience expertes",   
"Le tableau du nombre de films par année", 
"Graphique de distribution des classements de films", 
];

// Array of descriptions
const descriptions = [
"Ce graphique illustre la différence entre les notes attribuées aux films par le public et les critiques. Cette divergence provient du nombre de points sur une échelle de 100 points que chaque groupe attribue à chaque film. Pour rendre le graphique plus compréhensible, nous avons classé les films en fonction du nombre de points attribués. Par exemple, dans la plage 1-20 est la classe 1, 21-40 est la classe 2, ..., 80-100 est la classe 5. La différence est calculée en utilisant la différence absolue entre les deux côtés. Une différence de 5 signifie que le film est très bien noté d'un côté mais sous-estimé de l'autre. Une différence de 0 signifie que le film est évalué de la même manière des deux côtés. Dans le graphique, nous pouvons également remarquer que les films qui ont une différence de 2 ou plus sont relativement peu nombreux par rapport aux autres films. Cela peut indiquer que les opinions des critiques et du public sont généralement similaires pour la plupart des films. Cependant, il est important de noter que cela dépendra également de la population cible et des films analysés. Il serait intéressant de comparer les résultats avec d'autres genres de films ou avec un échantillon de films plus large pour obtenir une image plus complète de la situation. Il est également important de noter que la différence ne donne pas nécessairement une indication de la qualité du film, mais plutôt de l'écart entre les deux côtés.", 
"Ces deux graphiques présentent la distribution des classements des films par année. L'axe Y représente le nombre de scores, l'axe X représente l'année et les points représentent les films. En examinant les deux graphiques, nous pouvons voir que la note moyenne des films diminue d'année en année. Cela peut indiquer que les évaluations des films deviennent plus strictes au fil des années. Cependant, il est important de noter que cela ne prouve pas nécessairement que la qualité des films diminue, il est nécessaire d'examiner d'autres informations sur les films, comme leur contenu, les commentaires, etc. En regardant les avis des critiques, ils sont plus concentrés autour de la ligne médiane, avec seulement une petite proportion de films sous-estimés (0) ou surestimés (100). Cependant, du côté du public, la distribution est plus étalée. Cela montre que ces évaluations sont basées sur les ressentis et les préférences de chacun, plutôt que sur des critères objectifs comme c'est le cas pour les critiques.", 
"Le graphique en question montre la corrélation entre les évaluations des experts et celles du public pour chaque film. Le graphique de gauche correspond aux années 2000 et celui de droite aux dernières années. Il est clair que la plupart des films ont des évaluations similaires des deux groupes, indiquant une certaine concordance dans les opinions. Cependant, il y a quelques films qui ont des évaluations significativement différentes des deux groupes, ce qui peut indiquer des différences dans les critères d'évaluation ou les préférences de chacun. En comparant avec les dernières années, on peut voir que le nombre de films avec des évaluations significativement différentes est plus élevé. Cela peut être dû à un certain nombre de raisons, comme des changements dans les tendances cinématographiques, les préférences des spectateurs ou les critères d'évaluation des experts. Il pourrait y avoir des différences dans les genres de films qui sont populaires, les sujets abordés dans les films et les technologies utilisées pour les produire. Il pourrait également y avoir des différences dans les critères d'évaluation utilisés par les experts, comme l'accent mis sur la réalisation, l'écriture, l'interprétation, etc... Il serait intéressant de mener une analyse plus approfondie pour comprendre les raisons de ces différences dans les évaluations.",  
"Ce graphique montre le nombre de films produits chaque année. En 2014, nous avons constaté une production de plus de 700 films. Ce nombre est resté stable jusqu'en 2020. Cependant, en raison de la pandémie de COVID-19 et des mesures d'isolement, ce nombre a nettement diminué, atteignant moins de 300 films.", 
"Ces deux graphiques représentent les scores de notation de chaque groupe. La plupart des films ont des notes moyennes ou supérieures. Il est important de noter que les avis négatifs sont très différents entre les deux groupes. Du côté des critiques, il y a proportionnellement plus de critiques négatives que du côté du public, ce qui montre que les critères d'évaluation et les points de vue des critiques sur les films sont différents de ceux du public. Du côté du public, les avis sont généralement plus favorables, il y a donc relativement peu de films sous-estimés. Il serait intéressant de comprendre les raisons de ces différences dans les scores de notation, en examinant par exemple les commentaires des films qui ont des scores de notation différents entre les deux groupes, ou en explorant les préférences générales entre les critiques et le public. Enfin, il est important de se rappeler que les scores de notation ne donnent pas nécessairement une indication de la qualité d'un film, mais plutôt de l'opinion des différents groupes sur le film. Cependant, cela pose le problème de récupérer et d'analyser les commentaires des deux groupes en raison de leur complexité textuelle."];

// Index of current image
let currentIndex = 0;

// Get references to the image, title and description elements
const image = document.getElementById("plot");
const title = document.getElementById("title");
const description = document.getElementById("description");

// Function to show previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imageFiles.length - 1;
    }
    image.src = `images/${imageFiles[currentIndex]}`;
    title.textContent = titles[currentIndex];
    description.innerHTML = ""
    var p = document.createElement("p");
    p.textContent = descriptions[currentIndex];
    description.appendChild(p);
}

// Function to show next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= imageFiles.length) {
        currentIndex = 0;
    }
    image.src = `images/${imageFiles[currentIndex]}`;
    title.textContent = titles[currentIndex];
    description.innerHTML = ""
    var p = document.createElement("p");
    p.textContent = descriptions[currentIndex];
    description.appendChild(p);
}
