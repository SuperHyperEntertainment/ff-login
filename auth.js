document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const userInp = document.getElementById('login-username');
    const passInp = document.getElementById('login-password');
    const errorMsg = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');

    loginBtn.addEventListener('click', attemptLogin);

    function attemptLogin() {
        const username = userInp.value.trim();
        const password = passInp.value.trim();

        // Include your Master Key logic here if you have one, otherwise just check USERS
        const validUser = USERS.find(u => u.username === username && u.password === password);

        if (validUser) {
            loginSuccess(validUser);
        } else {
            errorMsg.textContent = "Invalid username or password.";
            errorMsg.style.display = "block";
        }
    }

    function loginSuccess(user) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('app-screen').classList.add('active');
        
        const displayName = user.name || user.username;
        document.getElementById('user-greeting').textContent = `Hi, ${displayName}`;
        document.getElementById('dash-greeting').textContent = `Welcome back, ${displayName}!`;
        
        document.getElementById('stat-team').textContent = USERS.length;
        document.getElementById('stat-scenes').textContent = SCENES.length;
        
        // TRIGGERS - This is where we pass the username to the dashboard!
        if(window.renderScenes) window.renderScenes();
        if(window.renderTeam) window.renderTeam();
        if(window.renderDashboard) window.renderDashboard(user.username);
    }

    logoutBtn.addEventListener('click', () => {
        document.getElementById('app-screen').classList.remove('active');
        document.getElementById('login-screen').classList.add('active');
        userInp.value = '';
        passInp.value = '';
        errorMsg.style.display = "none";
    });
});
