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
			this.tiredness--;
		}
	},
	
    eat: function() {
		console.log('chomp');
		this.hunger--;
	},

	play: function(mins) {
		for (var i=0; i<mins; i++) {
			console.log('whee!');
			this.happiness++;
			this.loneliness--;
			this.tiredness++;
			this.hunger++;
		}
	},
    
	status: function() {
		console.log("tiredness; " + this.tiredness);
		console.log("hunger: " + this.hunger);
		console.log("loneliness: " + this.loneliness);
		console.log("happiness: " + this.happiness);
	}
};