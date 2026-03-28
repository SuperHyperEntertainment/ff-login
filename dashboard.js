window.renderDashboard = function(loggedInUsername) {
    // 1. Render "My Assignments"
    const myAssignmentsList = document.getElementById('my-assignments-list');
    myAssignmentsList.innerHTML = ''; 
    
    // Filter tasks based on whoever just logged in
    const myTasks = ASSIGNMENTS.filter(task => task.assignee === loggedInUsername);
    
    if (myTasks.length === 0) {
        myAssignmentsList.innerHTML = '<li><span style="color: var(--text-muted);">No active assignments! Take a breather. ☕</span></li>';
    } else {
        myTasks.forEach(task => {
            myAssignmentsList.innerHTML += `
                <li style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px;">
                    <div style="display: flex; justify-content: space-between; width: 100%;">
                        <strong>${task.title}</strong>
                        <span class="due-date" style="color: #f43f5e; font-size: 0.8rem; font-weight: 600;">Due: ${task.dueDate}</span>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">
                        ${task.description}
                    </span>
                </li>`;
        });
    }

    // 2. Render Activity Feed directly from data.js
    const activityFeed = document.getElementById('activity-feed');
    activityFeed.innerHTML = '';
    
    if (ACTIVITIES.length === 0) {
        activityFeed.innerHTML = '<li><span style="color: var(--text-muted);">No recent activity.</span></li>';
    } else {
        ACTIVITIES.forEach(act => {
            activityFeed.innerHTML += `<li>${act}</li>`;
        });
    }
};
