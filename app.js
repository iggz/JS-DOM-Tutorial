////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 3 - Get Elements by class or Tag ///////////////////
////////////////////////////////////////////////////////////////////////////////

// /** When using getElementByClassName or TagName, you have to convert into an Array using 'Array.from(parameter)' in order to loop through using forEach(). */

// let titles = document.getElementsByClassName('title');

// /* Array.isArray() - lets you know whether what we're passing in is an Array 
//  document.method('parameter'); <-- Formatting */
// console.log(Array.isArray(titles)); 

// /* This returns false because getElementsByClassName returns an HTMLCollection*/
// console.log(titles);


// /* Array.from(titles) puts titles into an Array, thus returning true */
// console.log(Array.isArray(Array.from(titles)));

// /* Lists each item with class name 'title' */
// Array.from(titles).forEach(function(item){
//   console.log(item);
// })

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 4 - The Query Selector /////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// /* querySelectorAll returns a NodeList which does not need to be converted into an Array in order to cylce through.  But if you use getElementByClassName or TagName then you do have to convert into an Array in order to cycle through using forEach().  */

// /* This is a lot like using ${'#wrapper'} but longer to type out */
// const wrapper = document.querySelector('#wrapper');
// console.log(wrapper);

// /* This is a css selector. Grabbing second child and class of name which is a <span> tag */
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log("wmf = ", wmf);

// /* Tried grabbing every single <span> tag within book-list. This did not work because querySelector only returns the first one it finds. */
// let books = document.querySelector('#book-list li .name');
// console.log("books using querySelector : ", books);

// /* Grabbing every single <span> tag within book-list. Returns a collection of elements */
// books = document.querySelectorAll('#book-list li .name');
// console.log("books using querySelectorAll : ", books);

// /* Even though only 1 wrapper in the HTML it will return as a collection */
// wrap = document.querySelectorAll('#wrapper');
// console.log(wrap);

// Array.from(books).forEach(function(book){
//   console.log('Array of books:', book);
// });

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 5 - Changing Text & HTML Content////////////////////
////////////////////////////////////////////////////////////////////////////////

// /* To work properly need to comment all the code out and uncomment one at a time */

// let books = document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach(function(book){
//   /*This returns the text content within the <span>*/
//   console.log(book.textContent);

//   /* This REPLACES the content of the text displayed on the webpage */
//   book.textContent = " (Replaced book title)";

//   /* This APPENDS to the content of the text displayed on the webpage */
//   book.textContent += " (Appended book title)";
// })

// const bookList = document.querySelector('#book-list');
// /* this displays all of the innerHTML in the console */
// console.log(bookList.innerHTML);
// /* This is how you replace everything within #book-list with an <h2> tag */
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// /* This is how you append additional html text */
// bookList.innerHTML += '<p>This is how you add HTML</p>';

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 6 - Nodes //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const banner = document.querySelector('#page-banner');

// /* This will give us the number "1"*/
// console.log('#page-banner node type is:', banner.nodeType);
// /* This will give us the name of the node which is "DIV" */
// console.log('#page-banner node name is:', banner.nodeName);
// /* This will let us know if the node has children */
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// /* This is how to clone a node. If 'true' it goes deeply into node and diplays all child nodes and nested content. */ 
// const clonedBannerTrue = banner.cloneNode(true);
// console.log("true:", clonedBannerTrue);

// /*If 'false' it disregards all children and nested content and only displays the one line */
// const clonedBannerFalse = banner.cloneNode(false);
// console.log("false:", clonedBannerFalse);


////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 7 - Traversing the DOM (Part 1) ////////////////////
////////////////////////////////////////////////////////////////////////////////

// const bookList = document.querySelector('#book-list');

// /* Grabs the parent node */
// console.log("the parent node is: ", bookList.parentNode);

// /* Grabs the parent element */
// console.log("the parent element is: ", bookList.parentElement);

// /* Goes up 2 levels */
// console.log("the parent element is: ", bookList.parentElement.parentElement);

// /* This returns childNodes but has BLANK TEXT between the children */
// console.log(bookList.childNodes); 

// /* This returns children WITHOUT text between the children */
// console.log(bookList.children);


////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 8 - Traversing the DOM (Part 2) ////////////////////
////////////////////////////////////////////////////////////////////////////////

// const bookList = document.querySelector('#book-list');

// /* gets blank list - "text" */
// console.log("book-list next sibling is:", bookList.nextSibling); 

// /* gets next element without empty text*/
// console.log("book-list next element sibling is:", bookList.nextElementSibling); 

// /* gets previous element with text*/
// console.log("book-list previous sibling is:", bookList.previousSibling); 

// /* get previous element without empty text */
// console.log("book-list previous element sibling is:", bookList.previousElementSibling); 

// /* Added in extra stuff by grabbing ref to the booklist and use previous element sibling property to get the header and use query selector to find the <p> and change the HTML of that. */
// bookList.previousElementSibling.querySelector('p').innerHTML +='<br />Too cool for everyone else!' //changes header text

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 9 - Events /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let h2 = document.querySelector('#book-list h2')

/* first parameter is the click event.  E is the event parameter */
h2.addEventListener('click', function(e){
  /* Tells us which element was clicked. What was the target of the event */
  console.log(e.target);  
  /* just the event object itself to browse through it */
  console.log(e);
  /* lets us know if the shift key was pressed down during the even */
  console.log(e.shiftKey);
})

/* The code below lets us delete */

let btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){

    const li = e.target.parentElement;

    li.parentNode.removeChild(li);
  })
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log("navigation to: ", e.target.textContent, "was prevented")
})

////////////////////////////////////////////////////////////////////////////////
//////////////////// Lesson 10 - Event Bubbling ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//   if (e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     // li.parentNode.removeChild(li);  // Can be written this way but list is already grabbing li.parentNode
//     list.removeChild(li);
//   }
// })




//
