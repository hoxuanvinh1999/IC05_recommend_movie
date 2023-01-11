// Array of image file names
const imageFiles = ["difference_pie_action.png", "difference_plot.png", "plot_average_audience_rating_year.png", "plot_average_expert_rating_year.png", "plot_xy_2022.png", "plot_xy_20000102.png", "plot_xy_20202122.png", "plot_xy.png", "movie_by_year.png", "number_by_types.png", "all_number_by_types.png", "class_in_3_audience.png", "class_in_3_expert_.png"];

// Array of titles
const titles = ["Difference Pie Action", "Difference Plot", "Plot Average Audience Rating Year", "Plot Average Expert Rating Year",  "Plot XY 2022", "Plot XY 20000102", "Plot XY 20202122", "Plot XY", "Movie By Year", "Number By Types", "All Number By Types", "Class In 3 Audience", "Class In 3 Expert"];

// Array of descriptions
const descriptions = ["This graph shows the difference of audience rating and expert rating of Action movie", "This graph shows the difference of audience rating and expert rating", "This graph shows the average audience rating by year", "This graph shows the average expert rating by year", "This graph shows the rating of movie in 2022", "This graph shows the rating of movie in 2020/01/02", "This graph shows the rating of movie in 2020/21/22", "This graph shows the rating of movie", "This graph shows the number of movie by year", "This graph shows the number of movie by types", "This graph shows the number of all types of movie", "This graph shows the class of audience", "This graph shows the class of expert"];

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
    description.textContent = descriptions[currentIndex];
}

// Function to show next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= imageFiles.length) {
        currentIndex = 0;
    }
    image.src = `images/${imageFiles[currentIndex]}`;
    title.textContent = titles[currentIndex];
    description.textContent = descriptions[currentIndex];
}
