//gowri's attempt at Readinglist 
//http://icyfenix.github.io/javascript-for-python-developers/exercises/objects.htmlfinish

//creating a class through the constructor invocation pattern
var BookList = function() {
	this.booksRead = 0;		//number of books read in the list
	this.notReadyet = 0;	//number of books not read yet
	this.nextBook = false;	//this is a book object. initializing to false
	this.currentBook = false;	// ditto
	this.lastBookread = false; //ditto
	this.bookShelf = []; //this is an array containing book objects

	this.add = function(book){
		this.bookShelf.push(book);
		if (book.read ===false) {
			this.notReadyet +=1;
			if (!this.currentBook) {
				this.currentBook = book;
			}
		}

	};
	this.finishCurrentBook = function() {
		this.lastBookread = this.currentBook;
		this.lastBookread.readDate = new Date(Date.now());
		this.lastBookread.read = true;
		this.currentBook = this.nextBook();
	};
	this.nextBook = function(){
		for (var i=0; i<this.bookShelf.length; i++) {
			if (this.bookShelf[i].read === false) {
				return this.bookShelf[i];
			} else {
				console.log("no unread books");
			}
		}
	};
};

var Book = function(title, genre, author, read, readDate){
	this.title = title;
	this.genre = genre;
	this.author = author;
	this.read = read || false; //if read doesn't exist, set to false
	this.readDate = new Date(readDate) || false;

};

var leanIn = new Book("Lean In", "Business", "Sandberg");
var myList = new BookList();
myList.add(leanIn);