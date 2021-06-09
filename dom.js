// EXAMINE THE DOCUMENT OBJECT //

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//  document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// GETELEMENTBYID //
console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>";
headerTitle.style.borderBottom = "solid 3px #000";

// GETELEMENTSBYCLASSNAME //
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

// // Gives error
items.style.backgroundColor = "#f4f4f4";

// // Gives error
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}

// QUERYSELECTOR //
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "Hello World";

let sumbit = document.querySelector('input[type = "submit');
sumbit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");

/////////////////END OF VIDEO ONE/////////////////////////////////

// TRAVERSING THE DOM //
// let itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].backgroundColor = "yellow";

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1";

// lastChild
// console.log(itemList.lastchild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(itemList.nextElementSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousElementSibling);
// previousSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// createElement

// Create a div

// let newDiv = document.createElement("div");

// Add id
// newDiv.id = "hello1";

// Add attr
// newDiv.setAttribute("title", "Hello Div");

// // Create text node
// let newDivText = document.createTextNode("Hello World");

// Add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

////////////////////////END OF VIDEO TWO ///////////////////

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     console.log('Buton clicked');
//     document.getElementById('header-title').textContent = 'changed';
//     document.querySelector('main').style.backgroundColor = '#f4f4f4';
//     console.log(e);

//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.classname);
//     console.log(e.target.classname);
//     console.log(e.target.classList);
//     let output = docuemnt.getElementById('output');
//     output.innerHTML = '<h3>'+e.target.id+'</h3>';

//     console.log(e.type);

//     console.log(e.clientx);
//     console.log(e.clientx);

//     console.log(e.offsetx);
//     console.log(e.offsetx)

//     console.log(e.altkey);
//     console.log(e,ctrlkey);
//     console.log(e.shiftkey);
// }
// let button = document.getElementById("button");
// let box = document.getElementById("box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener("mousemove", runEvent);

let intemInput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");
let select = document.querySelector("select");

intemInput.addEventListener("keydown", runEvent);

intemInput.addEventListener("keydown", runEvent);
intemInput.addEventListener("keyup", runEvent);
intemInput.addEventListener("keypress", runEvent);

intemInput.addEventListener("focus", runEvent);
intemInput.addEventListener("blur", runEvent);

intemInput.addEventListener("cut", runEvent);
intemInput.addEventListener("paste", runEvent);

intemInput.addEventListener("input", runEvent);

select.addEventListener("change");

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);

  console.log(e.target.value);
  document.getElementById("output").innerHTML =
    "<h3>" + e.target.value + "</h3>";

  output.innerHTML =
    "<h3>Mousex: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";

  document.body.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
