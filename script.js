const input = document.querySelector("input");
const submit = document.querySelector("button");
//const quit = document.querySelectorAll(".quit");
const uList = document.getElementById("list");
//const li = document.querySelectorAll("li");
const deleteButton = document.querySelector(".delete");

    //adding task:
const addTask = function() {
  if (input.value === "") {
    alert("Please add some task...");
  } else {
    const taskToAdd = `<li>${input.value}<span class="quit">&#10008;</span></li>`;
    uList.insertAdjacentHTML("afterbegin", taskToAdd);
    const a = uList.firstChild;
    a.addEventListener("click",select);
    const b = a.lastChild;
    b.addEventListener("click", deleteTask);
    input.value = "";
  }
}

const addTask1 = function(event) {
  if (input.value === "") {
    alert("Please add some task...");
  } else if (event.keyCode === 13) {
    const taskToAdd = `<li>${input.value}<span class="quit">&#10008;</span></li>`;
    uList.insertAdjacentHTML("afterbegin", taskToAdd);
    const a = uList.firstChild;
    a.addEventListener("click",select);
    const b = a.lastChild;
    b.addEventListener("click", deleteTask);
    input.value = "";
  }
}

    //delete task:
const deleteTask = function() {
		event.target.parentElement.style.display = "none";
}

    //select items 
const select = function() {
  event.target.classList.toggle("checked");
  console.log("asd")
}

    //delete selected tasks
const deleteSelected = function() {
  const list = document.querySelectorAll("li");
  for (let i = 0; i < list.length; i++){
    if (list[i].classList.contains("checked")){
      list[i].remove();
    }
  }
}

submit.addEventListener("click", addTask);
deleteButton.addEventListener("click", deleteSelected);
//quit.forEach(e => e.addEventListener("click", deleteTask));
//li.forEach(e => e.addEventListener("click", select));
input.addEventListener("keyup", addTask1);


