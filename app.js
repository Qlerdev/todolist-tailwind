//เวลา
let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

const submit_btn = document.getElementById("submit-btn");
const task_box = document.getElementById("task-box");
const li = document.createElement("li");

submit_btn.addEventListener("click", function () {
  if (task_box.textContent === "") {
    alert("Add your task");
  } else {
  }
});
