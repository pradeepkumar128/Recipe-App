$(document).ready(function () {
  $("#searchbtn").on("click", function () {
    let searchInput = $("#searchInput").val();
    let apiKey = "n1Yq0Xoa+BZWQfFoqtUVtw==UmkSW5IFkA9p9E8V";

    // Fetch API request
    fetch("https://api.api-ninjas.com/v1/recipe?query=" + searchInput, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Process the data
        displayRecipeCards(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

function displayRecipeCards(recipes) {
  $("#recipeCards").empty(); // Clear previous cards
  recipes.forEach((recipe) => {
    let card = `
             <div class="recipeData">
                 <h2 class="product_title">${recipe.title}</h2>
                 <p class="product_savings">${recipe.servings}</p>
                 <p class="product_instructions">${recipe.instructions}</p>
                 <p class="product_ingredients">${recipe.ingredients}</p>
             </div>
         `;
    $("#recipeCards").append(card);
  });
}
