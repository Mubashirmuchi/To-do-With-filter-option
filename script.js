let list =  [];
//let list = JSON.parse(localStorage.getItem("list")) || [];
let inputElement = document.getElementById("inputElement");
let listelement = document.getElementById("list-element");
let text;     /* for toggle button */
let completed;  /* for object is true or false */
let ocompleted1 = document.getElementById("slist"); /* for select options */

document.getElementById("addBtn").addEventListener("click", function () {
  console.log("option-completed", ocompleted1.value);

  if (inputElement.value === "") {
    alert("enter a input");
  } else {
    list.push({ taskvalue: inputElement.value, completed: true });
    inputElement.value = "";
    inputElement.focus();
    console.log("List-array", list);
    showlist(list);
    //localStorage.setItem("list", JSON.stringify(list));
  }
});

function showlist(listData) {
  console.log("Show list -list data", listData);
  listelement.innerHTML = "";

  listData.forEach(function (n, i) {  
    let ff = n.completed ? "completed" : "pending";  /*if n.value is completed == true inner text completed else false pending*/
    console.log("completed",n,"pending",ff);
    listelement.innerHTML +=
      "<li style='margin-bottom:10px;display: flex;justify-content: space-between;width:370px;height:30px;padding:5px;border: solid rgb(182, 213, 217);border-radius: 5px;'>" +
      `${i + 1 + "." + n.taskvalue}` +'<div></div>' +
      
      " <button style='background: rgb(0 192 131); width: 100px; height: 30px;border:none; border-radius: 5px; color: white;' onclick='status(this," +
      i +
      ")'>completed</button>  <button style='background:#ff9235;;border:none; width: 100px; height: 30px; border-radius: 5px; color: white;' onclick='edititem(" +
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
  console.log("Edit index", index);
  let newValue = prompt("Edit your text");
  console.log("Edited newvalue", newValue);
  // inputElement.value= list[index]
  // let newValue = inputElement.value
  list[index].taskvalue = newValue;
  console.log("updated list", list);
  showlist(list);
}

// function filtering (){
//     list.filter((value)=>value.complted=="true"){
//         console.log()
//     }
// }

function status(togle, i) {
    console.log("Togle",togle);
  //console.log("1111111gggg-", index, i);

  text = togle.innerText;

  if (text == "completed") {
    console.log("text completed");
    togle.innerHTML = "pending";
    list[i].completed = false;
    console.log("list[i].completed",list[i].completed);
  } else {
    console.log("text pending");
    togle.innerHTML = "completed";
    list[i].completed = true;
  }
  console.log("status button", text, "ggg-", list);

  completed = list.filter((item) => item.completed === true);
  console.log("jjjjj--", completed);
}

function ocompleted() {

  /* to show select option  */
 
const test = list.filter((item)=>item.completed === true)
const test1 = list.filter((item)=>item.completed == false)
console.log("meeeee",test);
//console.log("aaaaa",test1);


  if (ocompleted1.value === "Completed") {
    completed = list.filter((item) => item.completed === true);
  } else if (ocompleted1.value === "pending") {
    completed = list.filter((item) => item.completed === false);
  } else {
    completed = list;
  }

  //   console.log("ocompleteddd ",completed);
  //   listelement.innerHTML="" ;
  //   listelement.innerHTML += completed;
  showlist(completed);
}
