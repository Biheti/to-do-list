
let taskToDoLog = [];
document.getElementById("btn").onclick = function () {
    let taskToDo = document.getElementById("taskToDo").value;
    const unorderedList = document.getElementById("unorderedList");
    let html = `<li >${taskToDo}<input type="checkbox" id="btn2"></li>`;
    unorderedList.insertAdjacentHTML("beforeend", html);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
            if (event.target.checked) {
                event.target.parentNode.style.textDecoration = `line-through`;
            } else {
                event.target.parentNode.style.textDecoration = `none`;
            }
        });
    });


    let tasks = {
        name: taskToDo,
    };
    taskToDoLog.push(tasks)
    console.log(taskToDoLog);
};



