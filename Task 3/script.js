const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 6, title: "1984", author: "George Orwell", year: 1949 },
    { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 8, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 9, title: "1984", author: "George Orwell", year: 1949 },
    { id: 10, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 11, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 12, title: "1984", author: "George Orwell", year: 1949 },
    { id: 13, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 14, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 15, title: "1984", author: "George Orwell", year: 1949 },
  ];

  
  let searchInput = document.getElementById("searchInput");
  
  function highlightText(text, term) {
    const startIndex = text.toLowerCase().indexOf(term.toLowerCase());
    if (startIndex === -1) return text;
    const endIndex = startIndex + term.length;
    return (
      text.substring(0, startIndex) +
      "<span class='highlight'>" +
      text.substring(startIndex, endIndex) +
      "</span>" +
      text.substring(endIndex)
    );
  }
  
  function render(books) {
    let result = document.getElementById("result");
    result.innerHTML = '';
    if (books.length === 0) {
      result.innerHTML = '<p>No books found.</p>';
      return;
    }
    books.forEach(book => {
      let searchResult = document.createElement("div");
      let highlightedTitle = highlightText(book.title, searchInput.value);
      let highlightedAuthor = highlightText(book.author, searchInput.value);
      searchResult.innerHTML =`
      <h3>N : ${book.id}</h3>
      <p>Author : ${highlightedAuthor}</p>
      <p>Title : ${highlightedTitle}</p>
      <p>Year : ${book.year}</p>
      `;
      result.appendChild(searchResult);
    });
  }
  
  render(books);
  
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    render(filteredBooks);
  });
  