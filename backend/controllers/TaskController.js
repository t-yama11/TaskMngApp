import Task from './Task.js';

export default class TaskController {
    constructor()
    {
        this.tasks = [];
        this.currendId = 1;
    }

    addTask(content, priority = '中') {
        const task = new Task(this.currendId++, content, priority);
        this.tasks.push(task);
        return task;
    }

    removeTask(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      const removed = this.tasks.splice(index, 1)[0];
      return removed;
    } else {
      throw new Error(`ID: ${id} のタスクは存在しません。`);
    }
  }

  getAllTasks() {
    return [...this.tasks]; // コピーを返すことで外部からの直接操作を防ぐ
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id === id) || null;
  }
}