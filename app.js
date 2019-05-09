////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 3 - Get Elements by class or Tag ///////////////////
////////////////////////////////////////////////////////////////////////////////

// let titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//   console.log(item);
// })

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 4 - The Query Selector /////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// let books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
//console.log(books);

// books = document.querySelectorAll('#wrapper');
// console.log(books);

// Array.from(books).forEach(function(book){
  // console.log(book);
// })

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 5 - Changing Text & HTML Content////////////////////
////////////////////////////////////////////////////////////////////////////////

// let books = document.querySelectorAll('#book-list li .name');
//
// Array.from(books).forEach(function(book){
//   // console.log(book.textContent);   //This returns the text content within the span
//   book.textContent += " (book title)";
// })
//
// const bookList = document.querySelector('#book-list');
// // console.log(bookList.innerHTML);
// // bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML+= '<p>This is how you add HTML</p>';

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 6 - Nodes //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 7 - Traversing the DOM (Part 1) ////////////////////
////////////////////////////////////////////////////////////////////////////////

let result = 40/12;
console.log(result);










//