const listContent = document.querySelector(".content");
const itemName = document.querySelector("#item-name");
const addButton = document.querySelector(".add-btn");

console.log(listContent);
console.log(itemName);
console.log(addButton);

// Arrays
var items = [];
debugger;
const localStorageItems = localStorage.getItem("items");
if (localStorageItems != null) {
  // !=  is ! = (without spacing)
  // Local Storage has some content
  items = JSON.parse(localStorageItems);
}
console.log(items);

/*
<li class="item">
          <p>Dog Food</p>
          <button class="delete-btn">Delete</button>
        </li>
        */
function deleteBtnFn(e) {
  e.target.parentElement.remove();
}

function addButtonFn() {
  const itemNameValue = itemName.value;
  items.push(itemNameValue);

  const JSONItems = JSON.stringify(items);
  localStorage.setItem("items", JSONItems);

  itemName.value = "";
  // List Item
  const liItem = document.createElement("li"); // <li></li>
  liItem.className = "item"; // <li class="item"></li>

  // P tag
  const pItem = document.createElement("p"); // <p></p>
  const pText = document.createTextNode(itemNameValue); // Cat Food
  pItem.appendChild(pText); //<p>Cat Food</p>

  const deleteBtn = document.createElement("button"); // <button></button>
  deleteBtn.className = "delete-btn"; // <button class="delete-btn"></button>
  const btnText = document.createTextNode("Delete"); // Delete
  deleteBtn.appendChild(btnText); //button class="delete-btn">Delete</button>

  liItem.appendChild(pItem);
  liItem.appendChild(deleteBtn);

  listContent.appendChild(liItem);

  deleteBtn.addEventListener("click", deleteBtnFn);
}

addButton.addEventListener("click", addButtonFn);

// addButtonFn("Arsalan", 21);
// addButtonFn("Ahmed", 22);
// addButtonFn("Hannan", 23);
