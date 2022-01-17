# TEMP

## Showing Bookmarks

// _ ========== HTML Element Selectors ========== _ \\
const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

// _ ========== Function Declarations ========== _ \\
// FUNCTION: Creates a new Link when a URL is submitted
function createLink(e) {
// prevents the form from submitting
e.preventDefault();

// Grab info from input box
const url = input.value;

// Create a new bookmark
const linkContainer = document.createElement("li");
const newLink = document.createElement("a");
newLink.className = "link";
newLink.innerText = url;
newLink.href = url;
newLink.target = "\_blank";

// console.log("newLink:", newLink);

// Dynamically insert into HTML
linkContainer.appendChild(newLink);
linkList.appendChild(linkContainer);

// Reset the input box
form.reset();
}

// _ ========== Event Listeners ========== _ \\
// EVENT LISTENER: Listens for "submit" event on the "form" and runs the "createLink" function
form.addEventListener("submit", createLink);

HTML

1. create a location in HTML for the list to display

CSS

1. Style the location where the list will display
2. Style the list item (li) and link
3. Add Hover Styles
4. (Comment out the dummy links)

JS

1. Select the list, form
2. Add event listeners: on bookform to createBookmark ("submit")
3. Create the function (and prevent default)
4. Add the logic for creating the element and inserting into HTML and reset the form

---

---

## Local Storage

JS

1. Create a bookmarks array
   // _ ========== Global Variables ========== _ \\
   const allLinks = [];
2. Add a new bookmark everytime we create a bookmark
3. Refactor solution to loop over booksmarks
4. Save the new bookmarks list to localStorage
5. Pull from local storage on application load

// _ ========== HTML Element Selectors ========== _ \\
const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

// _ ========== Global Variables ========== _ \\
const allLinks = JSON.parse(localStorage.getItem("link_list")) || [];

// _ ========== Function Declarations ========== _ \\
// FUNCTION: Adds the "focus-form" class on the body when the form is in focus
function focusInput() {
body.classList.add("focus-form");
}

// FUNCTION: Removes the "focus-form" class on the body when the form is out of focus
function endFocus() {
if (body.classList.contains("focus-form"))
body.classList.remove("focus-form");
}

// FUNCTION: Creates a new Link when a URL is submitted
function createLink(e) {
// prevents the form from submitting
e.preventDefault();

// Grab info from input box
const url = input.value;

// Add new Link to allLinks array
allLinks.push(url);

// Repopulate HTML List
populateLinkList(allLinks);

// Save List to Local Storage
saveLinkListToLocalStorage(allLinks);

// Reset the input box
form.reset();
}

// FUNCTION: Populates HTML with a list of Bookmarks
function populateLinkList(links = []) {
// Loop over all links and create a new bookmark for each element
linkList.innerHTML = links
.map(
(link) => ` <li> <a class="link" href=${link} target="_blank" >${link}</a> </li>`
)
.join("");
}

// FUNCTION: Saves Link List in Local Storage
function saveLinkListToLocalStorage(links = []) {
localStorage.setItem("link_list", JSON.stringify(links));
}

// _ ========== Event Listeners ========== _ \\
// EVENT LISTENER: Listens for "focusin" event on the "input" and runs the "focusInput" function
input.addEventListener("focusin", focusInput);
// EVENT LISTENER: Listens for "focusout" event on the "input" and runs the "endFocus" function
input.addEventListener("focusout", endFocus);
// EVENT LISTENER: Listens for "click" event on the "overlay" and runs the "endFocus" function
overlay.addEventListener("click", endFocus);

// EVENT LISTENER: Listens for "submit" event on the "form" and runs the "createLink" function
form.addEventListener("submit", createLink);

// _ ========== On Application Start ========== _ \\
populateLinkList(allLinks);

---

---

## Deleting Bookmarks

JS

1. Add the close button when generating a link

CSS

1. Create Close Button Styles (add relative to the main li as well )

JS

1. Create an event listener on the linkList for "click"
2. Add the data-index attribute on the li when creating
3. Add the logic to remove the item at the array (removeLink funciton)
4. Add the local storage functionality

// _ ========== Function Declarations ========== _ \\

// FUNCTION: Removes a new Link when a link is deleted
function removeLink(e) {
// If we are not clicking on the "x"... don't run any more code
if (!e.target.matches(".close-btn")) return;

// Find the index
const idx = e.target.parentNode.dataset.index;

console.log("idx:", idx);

// remove the link from the list
allLinks.splice(idx, 1);

// refill the list
populateLinkList(allLinks);

// save to local storage
saveLinkListToLocalStorage(allLinks);
}

// _ ========== Event Listeners ========== _ \\

// EVENT LISTENER: Listens for "click" event on the "linkList" and runs the "removeLink" function
linkList.addEventListener("click", removeLink);

---

---

## Fetching Data

https://www.opengraph.io/

1.  Create an open graph api account
2.  Create the global variables for the url and the api key
3.  Create a fetch site data function that calls a fetch call to the api (asyn)
4.  Destructure the data we are receiving
5.  Refactor to put the fetch inside the create
6.  Add validation method if (!link . .. )

---

---
