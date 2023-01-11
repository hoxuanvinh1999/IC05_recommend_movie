document.addEventListener("DOMContentLoaded", function () {
  // Get the button and menu elements
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.querySelector(".menu");

  // Add a click event listener to the button
  menuBtn.addEventListener("click", function () {
    // Toggle the menu's visibility
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

  // Get the menu items
  var menuItems = document.querySelectorAll(".menu li");

  // Add a click event listener to each menu item
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Get the text of the menu item that was clicked
      var menuItemText = this.innerText.toLowerCase();

      // Check the text of the menu item and load the appropriate HTML file
      switch (menuItemText) {
        case "introduction":
          window.location.href = "main.html";
          break;
        case "recommend":
          window.location.href = "recommend.html";
          break;
        case "graph":
          window.location.href = "graph.html";
          break;
        case "network graph":
          window.location.href = "network_graph.html";
          break;
      }
    });
  });
})


