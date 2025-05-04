/**
 * Task Manager for 404found.art
 */
class TaskManager {
    constructor() {
        this.tasks = [];
        this.taskContainer = document.getElementById('task-container');
        this.taskList = document.getElementById('task-list');
        this.toggleButton = document.getElementById('toggle-tasks');
        this.initEventListeners();
    }

    initEventListeners() {
        // Toggle task visibility
        this.toggleButton.addEventListener('click', () => {
            this.taskContainer.classList.toggle('hidden');
            const isHidden = this.taskContainer.classList.contains('hidden');
            this.toggleButton.querySelector('span').textContent = isHidden ? 'Show Tasks' : 'Hide Tasks';
            
            if (!isHidden && this.taskList.children.length === 0) {
                this.loadTasks();
            }
        });

        // Listen for keyboard shortcut (Alt+T) to toggle tasks
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 't') {
                this.toggleButton.click();
            }
        });
    }

    // Load tasks from JSON file
    loadTasks() {
        fetch('claude-task-master.json')
            .then(response => response.json())
            .then(data => {
                this.tasks = data.tasks;
                this.renderTasks();
            })
            .catch(error => {
                console.error('Error loading tasks:', error);
                this.taskList.innerHTML = '<li class="error">Error loading tasks. Check console for details.</li>';
            });
    }

    // Render tasks in the list
    renderTasks() {
        this.taskList.innerHTML = '';
        
        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            
            // Build task HTML with note if available
            let taskHTML = `
                <div class="task-name">${task.name}</div>
                <div class="task-command"><code>${task.command}</code></div>
                <div class="task-directory">${task.directory}</div>
            `;
            
            // Add note if available
            if (task.note) {
                taskHTML += `<div class="task-note"><i class="fas fa-info-circle"></i> ${task.note}</div>`;
            }
            
            // Add actions
            taskHTML += `
                <div class="task-actions">
                    <button class="run-task" data-index="${index}">
                        <i class="fas fa-play"></i> Run
                    </button>
                </div>
            `;
            
            li.innerHTML = taskHTML;
            this.taskList.appendChild(li);
            
            // Add click event for the run button
            const runButton = li.querySelector('.run-task');
            runButton.addEventListener('click', (e) => {
                this.simulateTaskExecution(index);
            });
        });
    }

    // Simulate task execution (since real execution requires backend)
    simulateTaskExecution(index) {
        const task = this.tasks[index];
        const taskElement = this.taskList.children[index];
        
        // Create or get status element
        let statusElement = taskElement.querySelector('.task-status');
        if (!statusElement) {
            statusElement = document.createElement('div');
            statusElement.className = 'task-status';
            taskElement.appendChild(statusElement);
        }
        
        // Update UI to show running state
        const runButton = taskElement.querySelector('.run-task');
        runButton.disabled = true;
        runButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running...';
        statusElement.innerHTML = '<div class="running">Executing command...</div>';
        
        // Simulate execution time (1-3 seconds)
        const executionTime = 1000 + Math.random() * 2000;
        
        setTimeout(() => {
            // Simulating successful completion
            const success = Math.random() > 0.2; // 80% success rate for demo
            
            if (success) {
                statusElement.innerHTML = '<div class="success">Task completed successfully!</div>';
                runButton.innerHTML = '<i class="fas fa-check"></i> Done';
                runButton.className = 'run-task success';
            } else {
                statusElement.innerHTML = '<div class="error">Task failed. See console for details.</div>';
                runButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed';
                runButton.className = 'run-task failed';
                console.error(`Simulated failure for task: ${task.name}`);
            }
            
            // Enable button after a delay
            setTimeout(() => {
                runButton.disabled = false;
                runButton.className = 'run-task';
                runButton.innerHTML = '<i class="fas fa-play"></i> Run';
            }, 3000);
        }, executionTime);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.taskManager = new TaskManager();
}); 