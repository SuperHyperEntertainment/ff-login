window.renderDashboard = function(loggedInUsername) {
    // 1. Render "My Assignments"
    const myAssignmentsList = document.getElementById('my-assignments-list');
    myAssignmentsList.innerHTML = ''; 
    
    // Filter tasks based on whoever just logged in
    const myTasks = ASSIGNMENTS.filter(task => task.assignee === loggedInUsername);
    
    if (myTasks.length === 0) {
        myAssignmentsList.innerHTML = '<li><span class="task-desc">No active assignments! Take a breather. ☕</span></li>';
    } else {
        myTasks.forEach(task => {
            myAssignmentsList.innerHTML += `
                <li>
                    <div class="task-header">
                        <strong>${task.title}</strong>
                        <span class="due-date">Due: ${task.dueDate}</span>
                    </div>
                    <span class="task-desc">${task.description}</span>
                </li>`;
        });
    }

    // 2. Render Activity Feed directly from data.js
    const activityFeed = document.getElementById('activity-feed');
    activityFeed.innerHTML = '';
    
    if (ACTIVITIES.length === 0) {
        activityFeed.innerHTML = '<li><span class="task-desc">No recent activity.</span></li>';
    } else {
        ACTIVITIES.forEach(act => {
            activityFeed.innerHTML += `<li><span class="task-desc">${act}</span></li>`;
        });
    }
};
