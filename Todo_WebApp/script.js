var store_local = localStorage.getItem("add");

if (store_local) {
  document.getElementById("list-items").innerHTML = store_local;
}

function add() {
  var inputValue = document.getElementById("input").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputValue));
  document.getElementById("list-items").appendChild(li);

  var checkbox = document.createElement("input"); 
  checkbox.type = "checkbox";
  li.appendChild(checkbox); 

  localStorage.setItem("add", document.getElementById("list-items").innerHTML);
  document.getElementById("input").value = "";
}

function remove()
{
const ul = document.getElementById("list-items");
while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
localStorage.setItem("add", document.getElementById("list-items").innerHTML);
}