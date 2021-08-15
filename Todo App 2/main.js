//!Select
const todo = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");
const alert = document.querySelector(".alert");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const popUpContainer = document.querySelector(".popup-container");

//!Event listeners
submitBtn.addEventListener("click", addItems);
clearBtn.addEventListener("click", clearItems);
noBtn.addEventListener("click", () => {
  popUpContainer.style.display = "none";
});
//load
window.addEventListener("DOMContentLoaded", setupItems);

//!Functions
function addItems(e) {
  e.preventDefault();
  let value = todo.value;
  let valueArr = [];
  for (let i = 0; i <= value.length - 1; i++) {
    valueArr.push(value[i]);
  }
  let countSpaces = valueArr.every((val) => {
    return val === " ";
  });
  const id = new Date().getTime().toString();

  if (countSpaces) {
    displayAlert("Please Enter a Value", "red");
  } else if (!countSpaces && value) {
    createListItem(id, value);
    displayAlert("Item Added", "green");
    setToDefault();
    container.classList.add("show-container");
    addToLocalStorage(id, value);
  } else if (!value) {
    displayAlert("Please Enter a Value", "red");
  }
}

function displayAlert(text, color) {
  alert.textContent = text;
  alert.classList.add(`alert-${color}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${color}`);
  }, 1000);
}

function setToDefault() {
  todo.value = "";
}

function clearItems() {
  const items = document.querySelectorAll(".todo-item");
  popUpContainer.style.display = "block";
  yesBtn.addEventListener("click", () => {
    if (items.length > 0) {
      items.forEach((item) => {
        list.removeChild(item);
      });
    }
    container.classList.remove("show-container");
    displayAlert("Cleared", "red");
    setToDefault();
    popUpContainer.style.display = "none";
    localStorage.removeItem("list");
  });
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  popUpContainer.style.display = "block";

  yesBtn.addEventListener("click", () => {
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }
    displayAlert("Item removed", "red");
    setToDefault();
    popUpContainer.style.display = "none";
    removeFromLocalStorage(id);
  });
}

function addToLocalStorage(id, value) {
  const todo = { id, value };
  console.log(todo);
  let items = getFromLocalStorage();
  console.log(items);
  items.push(todo);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getFromLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getFromLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setupItems() {
  let items = getFromLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("todo-item");
  element.innerHTML = `<p class="title">${value}</p>
    <button class="delete-btn">
        <i class="fas fa-trash"></i>
    </button>`;
  list.appendChild(element);
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
}
