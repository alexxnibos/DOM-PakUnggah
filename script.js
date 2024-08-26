document.addEventListener('DOMContentLoaded', function() {
    const taskinput = document.getElementById('taskinput');
    const addtaskbutton = document.getElementById('addtaskbutton');
    const tasklist = document.getElementById('tasklist');

    addtaskbutton.addEventListener('click', function() {
        const tasktext = taskinput.value.trim();
        if (tasktext !== '') {
            addtask(tasktext);
            taskinput.value = '';
        }
    });

    function addtask(text) {
        const taskitem = document.createElement('div');
        taskitem.className = 'task';

        const taskcontent = document.createElement('span');
        taskcontent.textContent ='text';
        
        const completebutton = document.createElement('button');
        completebutton.textContent = 'selesai';
        completebutton.addEventListener('click', function() {
            taskitem.classList.toggle('completed');
        });

        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'hapus';
        deletebutton.addEventListener('click', function() {
            tasklist.removeChild(taskitem);
        });

        taskitem.appendChild(taskcontent);
        taskitem.appendChild(completebutton);
        taskitem.appendChild(deletebutton);

        tasklist.appendChild(taskitem);
    }
});    

