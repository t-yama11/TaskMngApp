import TaskController from '../backend/TaskController.js';

const controller = new TaskController();

controller.addTask('あああ', '低');
controller.addTask('いいい', '中');

const tasks = controller.getAllTasks();

tasks.forEach(task =>{
    console.log(`ID: ${task.id}, 内容: ${task.content}, 優先度: ${task.priority}`);
})