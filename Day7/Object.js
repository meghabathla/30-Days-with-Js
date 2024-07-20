//ACtivity1: Object and access
const book = {
  title: "Literature",
  author: "Himanshu",
  year: "2012 - 2023",
  age: 34,
};
console.log(book);
console.log(
  `Title:, ${book.title} and author ${book.author} in year ${book.year}`
);

//Activity2: Object Method //Activity4: this keyword

const Book = {
  title: "Literature",
  author: "Himanshu",
  age: 34,
  year: "2012 - 2023",
  method: function () {
    return `${this.title} and author ${this.author}`;
  },
  getYear: function (year) {
    this.year = year;
    console.log(`${this.year}`);
  },
};
console.log(Book.method());
Book.getYear("2024-2026");

//Activity3: Nested

const library = {
  name: "Arvind Kaushikh",
  books: [
    {
      title: "Hello",
      notebook: "Ajanta",
    },
    {
      title: "World map",
      notebook: "Classic",
    },
  ],
};

console.log(library);

console.log(library.name);
console.log(library.books[0].title);

library.books.forEach((book) => console.log(book.title));

//Activity5: Object iteration

for (const index in library.books) {
  console.log(library.books[index].notebook);
}
