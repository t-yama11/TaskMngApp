import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// frontend/src/main.js

// DOM要素の取得
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const taskList = document.getElementById('taskList');

const STORAGE_KEY = 'tasks';

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `priority-${task.priority}`;
    li.innerHTML = `
      <span>${task.text}（${task.priority}）</span>
      <button class="deleteBtn" data-index="${index}">削除</button>
    `;
    taskList.appendChild(li);
  });
}

function saveTask(text, priority) {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  tasks.push({ text, priority });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  tasks.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  loadTasks();
}

// イベント設定
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (text) {
    saveTask(text, priority);
    taskInput.value = '';
    loadTasks();
  }
});

taskList.addEventListener('click', e => {
  if (e.target.classList.contains('deleteBtn')) {
    const index = e.target.getAttribute('data-index');
    deleteTask(index);
  }
});

document.addEventListener('DOMContentLoaded', loadTasks);
