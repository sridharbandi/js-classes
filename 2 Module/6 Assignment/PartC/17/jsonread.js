import json from './example.json';

let books = json.store.book

/*
for (let bk of books){
    console.log(`Author is ${bk.author} and Book title is ${bk.title}`)
}
*/

for( let i = 0; i < books.length; i++){
    console.log(`Author is ${books[i].author} and Book title is ${books[i].title}`)
}