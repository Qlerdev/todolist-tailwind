//เวลา
let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

const submit_btn = document.getElementById("submit-btn");
const doneBtn = document.getElementById("done");
const deleteBtn = document.getElementById("delete");
const task_box = document.getElementById("task-box");
const task_list = document.getElementById("task-list");

/*เพิ่มข้อมูลลง task*/
submit_btn.addEventListener("click", function () {
  if (task_box.textContent === "" && task_box.value === "") {
    alert("Add your task");
  } else {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
    <span>${task_box.value}</span>
    <div>
      <button class="done" id="done"><i class="fa-solid fa-check"></i></button>
      <button class="delete" id="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    task_list.appendChild(li);
    task_box.value = "";
  }
});

doneBtn.addEventListener("click", function () {});
deleteBtn.addEventListener("click", function () {});
