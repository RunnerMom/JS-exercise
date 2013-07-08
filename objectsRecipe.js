// Creating a recipe book

var mole = {
	title: "Mole",
	serving: 2,
	ingredients: ["cinnamon", "cumin", "cocoa"]
};

// for loop - for var in array not used on arrays. It can create problems


var salad = {
	title: "Avocado Tomato salad",
	serving: 4,
	ingredients: {avocados: "4 cups", grapeTomatoes: "2 cups", redOnion: "1 cup", freshCilantro: "4 tablespoons", freshGarlic: "2 teaspoons", limeJuice: "2 tablespoons", oliveOil: "1/4 cup"},

};

// function to print recipe

function printRecipe(recipe) {
    console.log("Title:", recipe.title);
	console.log("Serves:", recipe.serving);
	console.log("Ingredients:")
	for (var item in recipe.ingredients){
		console.log(recipe.ingredients[item]);
	}
}
