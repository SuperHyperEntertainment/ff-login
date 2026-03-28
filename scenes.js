// Expose function globally so auth.js can trigger it on login
window.renderScenes = function() {
    const sceneList = document.getElementById('scene-list');
    sceneList.innerHTML = ''; // Clear existing

    SCENES.forEach(scene => {
        const row = document.createElement('tr');
        
        // Basic status coloring
        let statusColor = '#94a3b8';
        if(scene.status === 'Rendering') statusColor = '#f59e0b';
        if(scene.status === 'In Progress') statusColor = '#3b82f6';
        if(scene.status === 'Review') statusColor = '#8b5cf6';
        if(scene.status === 'Done') statusColor = '#10b981';

        row.innerHTML = `
            <td><strong>${scene.id}</strong></td>
            <td>${scene.title}</td>
            <td style="color: ${statusColor}; font-weight: 500;">${scene.status}</td>
            <td>@${scene.assignee}</td>
        `;
        sceneList.appendChild(row);
    });
};
