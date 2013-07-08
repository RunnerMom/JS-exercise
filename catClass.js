//icyfenix.github.io/javascript_for_developers/
//The Cat exercise

var Cat = function(catName, catBreed, catColor) {

// create an instance of a cat
	this.catName = catName;
	this.catBreed = catBreed;
	this.catColor = catColor;

// create attributes of the cat
    this.tiredness= 20;
	this.hunger= 10;
	this.loneliness= 10;
	this.happiness= 40;

// create different functions for the cat
	this.sleep = function(mins) {
		for (var i=0; i<mins; i++) {
			console.log('z');
			this.tiredness-= 2;
		}
	};
    this.eat = function(food) {
		if (food ==="tuna"){
			console.log('mmmm.tuna');
			this.hunger -=5;
		} else if (food === "dog food"){
			console.log("yuck! I can't stand this crap.");
			this.hunger +=3;
			this.happiness -=2;
		} else{
		console.log('chomp');
		this.hunger--;
		}
	};
	this.play = function(mins, type) {
		for (var i=0; i<mins; i++) {
			if (type === "chasing mice"){
				console.log("I like to catch mice!!");
				this.happiness += 2;
				this.tiredness +=2;
			} else if (type === "scratching post"){
				console.log("scratching a post. whee!");
				this.loneliness++;
				this.hunger += 3;
			} else{
				console.log('whee!');
				this.happiness++;
				this.loneliness--;
				this.tiredness++;
				this.hunger++;
			}
		}
	};
	this.status = function() {
		console.log("tiredness; " + this.tiredness);
		console.log("hunger: " + this.hunger);
		console.log("loneliness: " + this.loneliness);
		console.log("happiness: " + this.happiness);
	};
};


var gowri = new Cat("Gowri", "Bengal", "Black");
var cassie =  new Cat("Cassie", "Savannah", "Gold");

