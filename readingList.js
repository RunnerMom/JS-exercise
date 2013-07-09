// create a class through the constructor invocation pattern 
// BookList = function() {}

var BookList(){
	/* properties of BookList
	Number of books marked as read (eg, BookList.booksRead)
	Number of books marked not read yet
	Next book to read(book object)(eg, BookList.nextBook() - returns a Book)
	Current book being read (book object)
	Last book read(book object)
	An array of all the Books (eg BookList.bookShelf - is an array.)
	*/

	this.booksRead = 0;
	this.bookstoRead = 0;
	this.bookShelf = [];
	this.currentBook = currentBook;
	this.lastBookRead = lastBookRead;

	this.add = function(libro){
		this.bookShelf.push(libro);
		this.currentBook = libro;
		this.bookstoRead ++;
	};

	this.finishCurrentBook= function(libro){
		
	}

}

var Book = function(libro){
	this.title
	this.genre
	this.author
	this.read = false;
	this.readDate = " ";
}