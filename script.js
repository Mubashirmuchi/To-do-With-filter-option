let list = [];
let inputElement = document.getElementById("inputElement");
let listelement = document.getElementById("list-element");
let filtereditems;
let selected = document.getElementById("slist"); 

document.getElementById("addBtn").addEventListener("click", function () {
  if (inputElement.value === "") {
    alert("Enter a Input");
  } else {
    list.push({ taskvalue: inputElement.value, completed: false });
    inputElement.value = "";
    inputElement.focus();
    showlist(list);
  }
});

function showlist(listData) {
  listelement.innerHTML = "";
  listData.forEach(function (n, i) {
    let statusbtn = n.completed
      ? "completed"
      : "pending"; 
    listelement.innerHTML +=
      "<li style='margin-bottom:10px;display: flex;justify-content: space-between;width:370px;height:30px;padding:5px;border: solid rgb(182, 213, 217);border-radius: 5px;'>" +
      `${i + 1 + "." + n.taskvalue}` +
      "<div></div>" +
      " <button style='background: rgb(0 192 131); width: 100px; height: 30px;border:none; border-radius: 5px; color: white;' onclick='status(this," +
      i +
      ")'>" +
      statusbtn +
      "</button>  <button style='background:#ff9235;;border:none; width: 100px; height: 30px; border-radius: 5px; color: white;' onclick='edititem(" +
      i +
      ")'>edit</button> <button style='border:none; background:rgb(255 64 64); width: 100px; height: 30px; border-radius: 5px; color: white;' onclick='deleteItem(" +
      i +
      ")'>del</button></li>";
  });
}

function deleteItem(index) {
  list.splice(index, 1);
  showlist(list);
}

function edititem(index) {
  let newValue = prompt("Edit your text");
  list[index].taskvalue = newValue;
  showlist(list);
}

function status(togle, i) {
  if (togle.innerText == "completed") {
    togle.innerHTML = "pending";
    list[i].completed = false;
  } else {
    togle.innerHTML = "completed";
    list[i].completed = true;
  }
}

function selectOpt() {
  if (selected.value === "completed") {
    filtereditems = list.filter((item) => item.completed === true);
  } else if (selected.value === "pending") {
    filtereditems = list.filter((item) => item.completed === false);
  } else {
    filtereditems = list;
  }
  showlist(filtereditems);
}
