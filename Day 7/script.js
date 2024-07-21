// Activity 1:
// Task 1:
const Book = {
    title: 'Programming With Java',
    author: 'E Balagurusamy',
    year: '2015',
};
console.log(Book);
// Task 2:
console.log('Title: ', Book.title);
console.log('Author: ', Book.author);
// Activity 2:
// Task 3:
const Book2 = {
    title: 'Programming With Java',
    author: 'E Balagurusamy',
    year: '2015',
    getTitleAuthor: () => {
        return `Title :- ${Book2.title} & Author :- ${Book2.author}`;
    }
};
console.log(Book2.getTitleAuthor());
// Task 4:
const Book3 = {
    title: 'Programming With Java',
    author: 'E Balagurusamy',
    year: '2015',
    upDateYear : (newYear) =>{
        Book3.year = newYear;
    }
};
Book3.upDateYear(2018);
console.log("UpDateYear is :- ",Book3.year)
// Activity 3:
// Task 5:
const library = {
    name:'Central library',
    book:[
        {
            title: 'Programming With Java',
            author: 'E Balagurusamy',
            year: '2015',
        },
        {
            title: 'Programming With JavaScript',
            author: 'E Balagurusamy',
            year: '2011',
        },
        {
            title: 'Programming With Python',
            author: 'E Balagurusamy',
            year: '2022',
        },
    ]
};
console.log(library);
//Task 6:
console.log(library.name);
// console.log(library.book[0].title);
// console.log(library.book[1].title);
// console.log(library.book[2].title);
library.book.map((ele) =>{
    console.log(ele.title)
})
// Activity 4:
// Task 7:
const book = {
    title: 'Programming With Java',
    author: 'E Balagurusamy',
    year: '2015',
    getTitleAuthor: () => {
        return `Title :- ${this.title} & Author :- ${this.author}`;
    }
};
console.log(book.getTitleAuthor());
// Activity 5:
// Task 8:
console.log("For in loop");
for(ele in Book){
    console.log(Book[ele])
}
//Task 9:
console.log(Object.keys(Book));
console.log(Object.values(Book));