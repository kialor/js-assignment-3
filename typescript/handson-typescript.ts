interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
};

let books: Book[] = [
    {
        id:1234,
        title: "Goodnight Moon",
        author: "Margaret Wise Brown",
        published: new Date("1947-09-03"),
        available: true
    },

    {
        id:2435,
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        published: new Date("1969-06-03"),
        available: true
    },

    {
        id:3412,
        title: "The Giving Tree",
        author: "Shel Silverstein",
        published: new Date("1964-10-07"),
        available: false
    },

    {
        id:4564,
        title: "Green Eggs and Ham",
        author: "Dr. Seuss",
        published: new Date("1960-08-12"),
        available: false
    },
];

function addBook(book: Book): void {
    books.push(book);
};

// Test addBook

// let firstBook = {
//     id:5465,
//     title: "The Rainbow Fish",
//     author: "Marcus Pfister",
//     published: new Date("1992-01-01"),
//     available: true
// };

// addBook(firstBook);
// console.log(books);

function findBookById(id: number): Book | undefined {
    let selectedBook = books.find(book => book.id === id)
    return selectedBook;
};

// console.log(findBookById(1234)); 

function updateBook(book: Book): boolean {
   let bookIndex = books.findIndex((bookObject) => bookObject.id === book.id);
   if (bookIndex !== -1) {
    books[bookIndex] = book;
    return true;
   }else{
    return false;
    };
};

// test updateBook

// let updatedBook = {
//     id:3412,
//     title: "The Giving Tree",
//     author: "Shel Silverstein",
//     published: new Date("1964-10-07"),
//     available: true
// };

// let updatedBook2 = {
//     id:7689,
//     title: "Test",
//     author: "Test",
//     published: new Date("1999-11-05"),
//     available: true
// }

// console.log(updateBook(updatedBook));
// console.log(updateBook(updatedBook2));
// console.log(books);

function removeBook(id: number): boolean {
    let bookIndex = books.findIndex(book => book.id === id)
   if (bookIndex !== -1){
    books.splice(bookIndex, 1);
    return true;
   }else{
    return false;
   };
};

// console.log(removeBook(3412));
// console.log(removeBook(7868));
// console.log(removeBook(1234));
// console.log(books);