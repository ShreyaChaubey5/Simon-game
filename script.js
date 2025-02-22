function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">delete</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}
