//gowri's attempt at Readinglist 
//also first try Julthon.org
//http://icyfenix.github.io/javascript-for-python-developers/exercises/objects.htmlfinish

//this code was tested using http://repl.it javascript interpreter

//creating a class through the constructor invocation pattern
//this is our list of books, including bookShelf and some attributes
var BookList = function() {
	this.booksRead = 0;		//number of books read in the list
	this.notReadyet = 0;	//number of books not read yet
	this.nextBook = false;	//this is a book object. initializing to false
	this.currentBook = false;	// ditto
	this.lastBookread = false; //ditto
	this.bookShelf = []; //this is an array containing book objects

	this.add = function(book){	//method to add a Book to BookList
		this.bookShelf.push(book);	//pushes the book object onto the bookShelf array
		if (book.read ===false) {	//checking that the added book has not been read
			this.notReadyet +=1; //increment the # of books that haven't been read
			if (!this.currentBook) { //if there is no currentBook
				this.currentBook = book; //set this added book to currentBook
			}
		}

	};
	this.finishCurrentBook = function() {	//method to finish the current book
		this.lastBookread = this.currentBook;	//moving currentBook to the lastBookRead
		this.lastBookread.readDate = new Date(Date.now()); //adding the readDate
		this.lastBookread.read = true; //setting the book.read parameter
		this.booksRead +=1;				//increments # books read in your bookList
		this.notReadyet -=1;			//decrements # books that you haven't read yet
		this.currentBook = this.nextBook(); //calls the nextBook function to return the currentBook
	};
	this.nextBook = function(){			//method to select the next book to read
		if (this.notReadyet ===0) {			//if there are no unread books
				console.log("no unread books");}	//error handling
		else {
		for (var i=0; i<this.bookShelf.length; i++) {	//look through the bookShelf
			if (this.bookShelf[i].read === false) {		//return the 1st book that hasn't been read
				console.log("next book will be: ", this.bookShelf[i].title);
				return this.bookShelf[i];
			}
			}
		}
	};
};

//creating a class through the constructro invocation pattern
//these are the books to put in our bookShelf

var Book = function(title, genre, author, read, readDate){
	this.title = title;
	this.genre = genre;
	this.author = author;
	this.read = read || false; //if read doesn't exist, set to false
	this.readDate = new Date(readDate) || false;

};
//creates 3 new instances of the Book class
var leanIn = new Book("Lean In", "Business", "Sandberg");
var gatsby = new Book("The Great Gatsby", "Classic", "Fitzgerald");
var python = new Book("Learn Python the Hard Way", "Tech", "Shaw");
//creates an instance of the BookList
var myList = new BookList();
//now, add the new books to the BookList
myList.add(leanIn);
myList.add(gatsby);
myList.add(python);