const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const editTaskForm = document.querySelector(".single-task-form");
const formAlertDOM = document.querySelector(".form-alert");
const taskCompletedDOM = document.querySelector(".task-edit-completed");

const params = window.location.search;
const id = new URLSearchParams(params).get("id");

console.log(id);

// 特定のタスクを表示する
const showTask = async () => {
    try {
        const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
        const {_id, completed, name} = task;
        taskIDDOM.textContent = _id;
        taskNameDOM.value = name;
        if (completed){
            taskCompletedDOM.checked = true;
        }
    } catch (error) {
        console.log(error);
    }
}

showTask();

// タスクの編集
editTaskForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const taskName = taskNameDOM.value;
        taskCompleted = taskCompletedDOM.checked;
        const { data: task } = await axios.patch(`/api/v1/tasks/${id}`, {
            name: taskName,
            completed: taskCompleted,
        });
        formAlertDOM.style.display = "block";
        formAlertDOM.textContent = "編集に成功しました";
        formAlertDOM.classList.add("text-success");
    } catch (error) {
        console.log(error);
    }
    setTimeout(() => {
        formAlertDOM.style.display = "none";
        formAlertDOM.classList.remove("text-success");
    }, 3000);
});
