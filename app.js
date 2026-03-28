// 1. Check if the file is even loading
alert("Step 1: The script file has loaded!");

const SB_URL = "https://your-id.supabase.co"; 
const SB_KEY = "eyJhbGci...your-long-key";
const supabase = window.supabase.createClient(SB_URL, SB_KEY);

let myProfile = null;

// 2. Test the button connection
window.onload = () => {
    const loginBtn = document.getElementById('btn-login');
    if (loginBtn) {
        alert("Step 2: The Login Button was found!");
        loginBtn.onclick = async () => {
            alert("Step 3: You clicked the button! Attempting login...");
            handleLogin();
        };
    } else {
        alert("ERROR: The button with ID 'btn-login' was NOT found in index.html");
    }
};

async function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        alert("Supabase Auth Error: " + error.message);
        return;
    }

    alert("Step 4: Login successful! Looking for your profile row...");

    const { data: profile, error: pError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

    if (pError || !profile) {
        alert("Step 5 ERROR: Login worked, but I couldn't find your ID in the 'profiles' table.");
        console.log(pError);
        return;
    }

    alert("Step 6: Profile found! Entering Studio...");
    myProfile = profile;
    enterStudio();
}

function enterStudio() {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('main-app').classList.add('active');
    document.getElementById('display-name').innerText = myProfile.username;
}
