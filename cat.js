//icyfenix.github.io/javascript_for_developers/
//The Cat exercise

var cat = {
    tiredness: 20,
	hunger: 10,
	loneliness: 10,
	happiness: 40,

	sleep: function(mins) {
		for (var i=0; i<mins; i++) {
			console.log('z');
			this.tiredness-= 2;
		}
	},
    eat: function(food) {
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
	},

	play: function(mins, type) {
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
	},
	status: function() {
		console.log("tiredness; " + this.tiredness);
		console.log("hunger: " + this.hunger);
		console.log("loneliness: " + this.loneliness);
		console.log("happiness: " + this.happiness);
	}
};