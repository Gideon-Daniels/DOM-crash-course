let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  //  Get input value
  let newItem = document.getElementById("item").value;

  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  let deleteBtn = documentcreateElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-rigth delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("x"));

  // Append Button to li
  li.appendChild(deleteBtn);
}

// Remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName(li);
  // Convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.getElementsByClassName.display = "block";
    } else {
      item.getElementsByClassName.display = "none";
    }
  });
}
//////////////////////////// End OF 4th Video/////////////////
