let $ = document;

function _querySelectorAll(query_name) {
  return $.querySelectorAll(query_name);
}

function _querySelector(query_name) {
  return $.querySelector(query_name);
}

function _Element(Element_name) {
  return $.createElement(Element_name);
}

let list = _querySelector("#list");
let paragraphList = _querySelector(".paragraph__list");
let form = _querySelector("form");
let addTodo = _querySelector("input");

function addNewTodo(newValue) {
  let liElem = _Element("li");
  liElem.className = "list__item";

  let spanElem = _Element("span");

  let iconBin = _Element("img");

  iconBin.src = "./assets/images/bin.svg";
  iconBin.className = "list__bin--icon";

  iconBin.addEventListener("click", (event) => {
    event.target.parentElement.remove();

    if (list.childElementCount <= 0) {
      paragraphList.style.display = "block";
    } else {
      paragraphList.style.display = "none";
    }
  });

  spanElem.innerHTML = newValue;

  liElem.append(spanElem, iconBin);
  list.appendChild(liElem);

  if (list.childElementCount <= 0) {
    paragraphList.style.display = "block";
  } else {
    paragraphList.style.display = "none";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

addTodo.addEventListener("keydown", (event) => {
  let newValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newValue) {
      event.target.value = "";
      addNewTodo(newValue);
    }
  }
});
