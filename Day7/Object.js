//ACtivity1: Object and access

const book = {
  title: "Literature",
  author: "Himanshu",
  age: 34,
};
console.log(book);
console.log(`Title:, ${book.title} and author ${book.author}`);

//Activity2: Object Method

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
      name: "Hello",
      notebook: "Ajanta",
    },
    {
      name: "World map",
      notebook: "Classic",
    },
  ],
};
