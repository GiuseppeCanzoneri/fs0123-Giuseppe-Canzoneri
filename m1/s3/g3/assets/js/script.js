let taskInput = document.getElementById("task");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value;
    if (taskText !== "") {
        let taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });
        taskItem.appendChild(deleteButton);
    }
}
