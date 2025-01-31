// Selecting the constants
const bookContent = document.querySelector(".book-content");
const newBookbtn = document.querySelector(".create");
const dialogForm = document.querySelector(".my-dialog");
const cancelbtn = document.querySelector(".cancel");
const submitbtn = document.querySelector(".submit");

// Array to store books
let myLibrary = [];

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

// Push these books in librara
myLibrary.push(b1);
myLibrary.push(b2);
// Display these books
displayBook();

// Open dailog page when button is clicked
newBookbtn.addEventListener("click", () => {
  dialogForm.showModal();
});

// submit button
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Now select the form elements
  let imageFile = document.getElementById("image-input");
  let name = document.getElementById("book-name");
  let author = document.getElementById("book-author");
  let pages = document.getElementById("book-pages");
  let discription = document.getElementById("book-discription");

  // Create a book
  const newBook = new Book();
  newBook.bookimg = URL.createObjectURL(imageFile.files[0]);
  newBook.bookName = name.value;
  newBook.bookAuthor = author.value;
  newBook.bookPages = pages.value;
  newBook.bookDiscription = discription.value;

  // for (let key in newBook) {
  //   alert(newBook.key);
  // }

  myLibrary.push(newBook);
  displayBook();

  dialogForm.close();

  // update the borders
  updateBorderOutside();
});

// Close the dialog form
cancelbtn.addEventListener("click", () => {
  dialogForm.close();
});

// Creating a book constructor
function Book() {
  this.bookName;
  this.bookAuthor;
  this.bookPages;
  this.bookDiscription;
  this.bookimg;
}

// Funciton to display book
function displayBook() {
  // Clearing inner html so that books are not repeated
  bookContent.innerHTML = "";

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
              <b>Discription:-</b>
              <i>${b.bookDiscription}</i>
            </div>
            <div class="button">
              <label for="read"><b>Read</b></label>
              <input type="checkbox" id="read" />
              <button class="delete">Delete</button>
            </div>`;

    // Delete a book
    // Add event listener for delete button
    const deletebtn = bookCard.querySelector(".delete");

    deletebtn.addEventListener("click", () => {
      let delBookName = bookCard.querySelector(".name p").textContent;

      // Remove the book from the library array
      myLibrary = myLibrary.filter((book) => book.bookName !== delBookName);

      // Re-display books
      displayBook();
    });
  });
}

const bookImage = document.getElementById("book-image");
const inputImage = document.getElementById("image-input");

inputImage.addEventListener("change", () => {
  bookImage.setAttribute("src", URL.createObjectURL(inputImage.files[0]));
});

// Changing the border color based on read or not read
// Select each book card and run querryselector on that as we want to change that perticular image

function updateBorderOutside() {
  document.querySelectorAll(".book-card").forEach((bookCard) => {
    const checkbox = bookCard.querySelector("input[type='checkbox']");
    const bookImage = bookCard.querySelector("img");

    function updateBorder() {
      bookImage.style.border = checkbox.checked
        ? "4px solid #00fbff"
        : "4px solid #ef32d9";
    }

    updateBorder();

    checkbox.addEventListener("change", updateBorder);
  });
}
updateBorderOutside();
