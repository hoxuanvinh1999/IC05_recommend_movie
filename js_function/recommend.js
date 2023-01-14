url = 'http://127.0.0.1:5000';
let pageNumber = 0;
const limitPerPage = 10;
let result = [];
var result_part = document.getElementById("result")

function showResult(result) {
  result.forEach((element, i) => {
    if (i >= (pageNumber + 1) * limitPerPage) {
      return;
    }
    var new_line = document.createElement("div");

    var data_film = []
    data_film.push(element["movie_name"], element["rating"], element["types"], element["year"], element["duration"], element["audience_rating"], element["expert_rating"]);

    var modifiedName = element["movie_name"].toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s/g, "_"); 
    var link = `https://www.rottentomatoes.com/m/${modifiedName}`;
    var aTag = document.createElement("a");
    aTag.href = link;
    aTag.innerHTML = element["movie_name"];
    var p_movie_name = document.createElement("div");
    p_movie_name.classList.add("movie_name");
    p_movie_name.appendChild(aTag)

    var p_movie_rating = document.createElement("div");
    p_movie_rating.textContent = element["rating"]
    p_movie_rating.classList.add("movie_rating");

    var p_movie_types = document.createElement("div");
    p_movie_types.textContent = element["types"]
    p_movie_types.classList.add("movie_types");

    var p_movie_year = document.createElement("div");
    p_movie_year.textContent = element["year"]
    p_movie_year.classList.add("movie_year");

    var p_movie_duration = document.createElement("div");
    p_movie_duration.textContent = element["duration"]
    p_movie_duration.classList.add("movie_duration");

    var p_movie_audience_rating = document.createElement("div");
    p_movie_audience_rating.textContent = element["audience_rating"]
    p_movie_audience_rating.classList.add("movie_audience_rating");

    var p_movie_expert_rating = document.createElement("div");
    p_movie_expert_rating.textContent = element["expert_rating"]
    p_movie_expert_rating.classList.add("movie_expert_rating");

    new_line.appendChild(p_movie_name);
    new_line.appendChild(p_movie_rating);
    new_line.appendChild(p_movie_types);
    new_line.appendChild(p_movie_year);
    new_line.appendChild(p_movie_duration);
    new_line.appendChild(p_movie_audience_rating);
    new_line.appendChild(p_movie_expert_rating);


    result_part.appendChild(new_line);

  });
}

function showNextPage() {
  pageNumber++;
  showResult(result);
}

async function recommendMovie() {
  // Get the input parameters from the form
  const name = document.getElementById("name").value;
  const types = document.getElementById("types").value;
  const year = document.getElementById("year").value;
  const audienceRating = document.getElementById("audienceRating").value;
  const expertRating = document.getElementById("expertRating").value;
  const rating = document.getElementById("rating").value;

  pageNumber = 0;
  result_part.innerHTML = "";


  // Build the query string
  const queryString = `name=${name}&types=${types}&year=${year}&audience_rating=${audienceRating}&expert_rating=${expertRating}&rating=${rating}`;

  // Make the GET request to the /recommend_movie endpoint
  console.log(`${url}/recommend_movie?${queryString}`);
  const response = await fetch(`${url}/recommend_movie?${queryString}`);
  result = await response.json();

  showResult(result);


  // // Display the result in the recommendation div
  // document.getElementById("recommendation").innerHTML = resultDiv;
}


const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.classList.toggle("dark");
});