function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                li.classList.add('allLists');
            } else {
                li.classList.remove('allLists');
            }
        });

        var taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}