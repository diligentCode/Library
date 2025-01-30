// Selecting the constants
const bookContent = document.querySelector(".book-content");

const myLibrary = [];

// Creating some default books
// Default book1
const b1 = new Book();
b1.bookName = "Rich Dad Poor Dad";
b1.bookAuthor = "Robert Kiyosaki";
b1.bookPages = 155;
b1.bookDiscription = "Difference in thinking of rich and poor people";
b1.bookimg = "Assets/Book1.jpg";
// Default book2
const b2 = new Book();
b2.bookName = "Autobiography of a Yogi";
b2.bookAuthor = "Paramahansa Yogananda";
b2.bookPages = 213;
b2.bookDiscription = "Book based on sprituality";
b2.bookimg = "Assets/book2.jpg";

myLibrary.push(b1);
myLibrary.push(b2);
// Display these books
displayBook();

// Creating a book constructor
function Book() {
  this.bookName;
  this.bookAuthor;
  this.bookPages;
  this.bookDiscription;
  this.bookimg;
}

// Function to add books to libray
function addBookToLibrary(myLibrary) {}

// Funciton to display book
function displayBook() {
  myLibrary.forEach((b) => {
    //Create element and append in the html for books
    // book-card
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookContent.appendChild(bookCard);

    // Appending content
    bookCard.innerHTML = `
    <img src="${b.bookimg}" alt="book image" />
          <div class="book-info">
            <div class="name">
              <b>Name:-</b>
              <p>${b.bookName}</p>
            </div>
            <div class="author">
              <b>Author:-</b>
              <p>${b.bookAuthor}</p>
            </div>
            <div class="pages">
              <b>No of pages:-</b>
              <p>${b.bookPages}</p>
            </div>
            <div class="discription">
              <b>Discription</b>
              <i>${b.bookDiscription}</i>
            </div>
            <div class="button">
              <label for="read"><b>Read</b></label>
              <input type="checkbox" id="read" />
              <button class="delte">Delete</button>
            </div>`;
  });
}

const bookImage = document.getElementById("book-image");
const inputImage = document.getElementById("image-input");

inputImage.addEventListener("change", () => {
  bookImage.setAttribute("src", URL.createObjectURL(inputImage.files[0]));
});
