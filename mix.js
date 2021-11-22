const listContent = document.querySelector(".content");
const itemName = document.querySelector("#item-name");
const itemAge = document.querySelector("#item-age");
const addButton = document.querySelector(".add-btn");
let itemText;
let itemAge2;

let items = [];

addButton.addEventListener("click", function () {
  itemText = itemName.value;
  itemAge2 = itemAge.value;

  localStorage.setItem(itemText, itemAge2);
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const textValueLocal = localStorage.getItem(key);

    //list <li>
    const listEle = document.createElement("li");
    listEle.className = "item";
    //text <p>
    const pEle = document.createElement("p");
    const pText = document.createTextNode(textValueLocal);

    const deleteBtn = document.createElement("button"); // <button></button>
    deleteBtn.className = "delete-btn"; // <button class="delete-btn"></button>
    const btnText = document.createTextNode("Delete"); // Delete
    deleteBtn.appendChild(btnText); //button class="delete-btn">Delete</button>

    pEle.appendChild(pText);
    listEle.appendChild(pEle);

    listEle.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      localStorage.removeItem(textValueLocal);
      console.log(textValueLocal);
    });

    listContent.appendChild(listEle);
  }
});
