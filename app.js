

const dailyTasks = []
console.log(dailyTasks);
dailyTasks.push('laundry')
dailyTasks.push('Dishes');
dailyTasks.push('Dusting');
dailyTasks.push('Lawn care');

dailyTasks[0].laundry.push('name: "laundry", category: "", deadline: "", status: ""')
console.log(dailyTasks);










const textbox = document.getElementById('taskinput');
const button = document.getElementById('btn1');
const output = document.getElementById('output1');









        function display() {
            output.innerHTML = textbox.value;
            const formToReset = getElementById('output1');
            formToReset.addEventListener('submit', (e) => {
                e.preventDefault();
                formToReset.reset();
                output.innerHTML += "Submitted successfully."
            })
        }

        btn1.addEventListener('click',display);




    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText) {
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskname.value = '';
    };

    addTask.addEventListener('click', addTask);
    taskInput.addEventListener('keypress',(e) => {
        if(e.key === 'Enter') {
            addTask(e);
        }
    });

 
const taskInput = document.getElementById
('taskinput');

const addTaskBtn = document.getElementById
('btn1');

const taskList = document.getElementById('task-list');





