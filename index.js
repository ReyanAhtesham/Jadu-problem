const listContent = document.querySelector(".content");
const itemName = document.querySelector("#item-name");
const itemAge = document.querySelector("#item-age");
const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", newElement);

function newElement(event) {
  //list <li>
  const listEle = document.createElement("li");
  listEle.className = "item";
  //text <p>
  const pEle = document.createElement("p");
  const pEle2 = document.createElement("p");
  const pText = document.createTextNode(itemName.value);
  const pAge = document.createTextNode(itemAge.value);

  const deleteBtn = document.createElement("button"); // <button></button>
  deleteBtn.className = "delete-btn"; // <button class="delete-btn"></button>
  const btnText = document.createTextNode("Delete"); // Delete
  deleteBtn.appendChild(btnText); //button class="delete-btn">Delete</button>

  pEle.appendChild(pText);
  pEle2.appendChild(pAge);
  listEle.appendChild(pEle);
  listEle.appendChild(pEle2);

  deleteBtn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
  listEle.appendChild(deleteBtn);

  listContent.appendChild(listEle);

  addToLocal(itemName.value);

  itemName.value = " ";
  itemAge.value = " ";
}

function addToLocal(name) {
  //debugger;
  const aro = localStorage.getItem("todo");
  if (aro != null) {
    //    var arr = JSON.parse("132,456");
  }
  //  localStorage.setItem("todo", ["asdfsadf", "asdf", "ghjgh"]);

  console.log(JSON.parse("1,2,3"));
}
