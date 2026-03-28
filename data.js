// Central Data Configuration

const USERS = [
    { username: 'HexxedDev', password: '326214Green?', name: 'Patrick Kaiser', role: 'Project Director' },
    { username: 'AVERAGE_', password: 'Yourmomlmao:3', name: 'Lukas', role: 'Voice Actor' },
    { username: 'lighter2', password: 'lightpass', name: 'Jordan Lee', role: 'Lighting Artist' },
    { username: 'voiceactor1', password: 'miccheck', name: 'Casey Smith', role: 'Voice Talent' }
];

const SCENES = [
    { id: 'SCN-001', title: 'Scene 1', status: 'To Do', assignee: 'HexxedDev' }
];

// Universal Assignments Array (Edit this to give team members tasks)
const ASSIGNMENTS = [
    { 
        id: 'TSK-001', 
        title: 'Record Cafe Lines (Take 2)', 
        description: 'Need more energy on the reaction line. Use the updated script attached in Discord.', 
        dueDate: 'Apr 2nd', 
        assignee: 'voiceactor1' 
    },
    { 
        id: 'TSK-002', 
        title: 'Block out Chase Scene', 
        description: 'Rough timing for the alleyway sequence. Ignore lighting for now.', 
        dueDate: 'Apr 4th', 
        assignee: 'animator1' 
    },
    { 
        id: 'TSK-003', 
        title: 'Review Audio Mix', 
        description: 'Listen to the latest Foley pass for SCN-001 and approve.', 
        dueDate: 'Apr 1st', 
        assignee: 'director' 
    }
];

// Recent Activity Feed (Edit this to show what the studio is up to)
const ACTIVITIES = [
    "HexxedDev added the website! Welcome in!"
];
