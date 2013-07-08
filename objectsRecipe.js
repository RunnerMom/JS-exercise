// Creating a recipe book

var mole = {
	title: "Mole",
	serving: 2,
	ingredients: ["cinnamon", "cumin", "cocoa"]
};



var salad = {
	title: "Avocado Tomato salad",
	serving: 4,
	ingredients: ["avocados", "grape tomatoes", "red onion", "fresh cilantro", "fresh garlic", "lime juice", "olive oil"]
};


// function to print recipe

function printRecipe(recipe) {
    console.log("Title:", recipe.title);
	console.log("Serves:", recipe.serving);
	console.log("Ingredients:")
	for (item in recipe.ingredients){
		console.log(recipe.ingredients[item]);
	}
}
