
const tasksDOM = document.querySelector(".tasks");
const fromDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
// /api/v1/tasksからタスクを読み込む
const showTasks = async () => {
    try {
        //　自作のAPIを呼び出す
        const { data: tasks } = await axios.get("/api/v1/tasks");
        console.log(tasks);

        // タスクを出力
        const allTasks = tasks.map((task) => {
            const { completed, _id, name } = task;
            return `<div class="single-task ${completed && "task-completed"}">
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">
            
            <!-- edit link -->
            <a href="task.html?id="${_id}"  class="edit-link">
            <i class="fas fa-edit"></i>
            </a>
            
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="${_id}">
              <i class="fas fa-trash"></i>
            </button>
            </div>
            </div>`;
        }).join("");
        tasksDOM.innerHTML = allTasks;
    } catch (error) {
        console.log(error);
    }
};

showTasks();

// タスクを新規作成する
fromDOM.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = taskInputDOM.value;

    try {
        await axios.post("/api/v1/tasks", {
            name: name
        });
        showTasks();
        taskInputDOM.value = "";
    } catch (error) {
        console.log(error);
    }
});

// タスクを削除する
tasksDOM.addEventListener("click", async (event) => {
    const element = event.target;
    console.log(element.parentElement);
    if(element.parentElement.classList.contains("delete-btn")) {
        const id = element.parentElement.dataset.id;
        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            showTasks();
        } catch (error) {
            console.log(error);
        }
    }
});