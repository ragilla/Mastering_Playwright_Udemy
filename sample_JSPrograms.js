class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummery() {
        return `${this.title} by ${this.author}, published in ${this.year}.`
    }
}
class Ebook extends Book {
    constructor(title, author, year, fileSize, price) {
        super(title, author, year)
        this.fileSize = fileSize;
        this.price = price;
    }
    getPrice() {
        return`The Price of ${this.title} is ${this.price}`
    }
    download() {
        return `${this.title} of size ${this.fileSize} MB`;
    }
}
const ebooks = [
    new Ebook(".Net", "Munindhar",  2025, 10, 100),
    new Ebook("Java", "Java", 1955, 5, 100) ,
    new Ebook("Oracle", "Ramu", 1965, 10, 100) ,
    new Ebook("My Sql", "Abhishek", 2025, 10, 100),
    new Ebook("Learning Python", "Mark Lutz", 2020, 15, 20)
];

ebooks.forEach(books => {
    console.log(books.download())
})
const largeEbooks = ebooks.filter(book => book.fileSize > 10);
largeEbooks.forEach(book => {
    console.log(book.download());
});
const titles = ebooks.map(book => book.title)
console.log(titles);

const pythonBook = ebooks.find(book => book.title === "Learning Python");
if (pythonBook) {
    console.log(pythonBook.download());
}