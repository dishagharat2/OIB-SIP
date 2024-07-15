const users = [];

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        const userExists = users.some(user => user.username === username);

        if (!userExists) {
            users.push({ username, password });
            alert('Registration successful! Please login.');
            showLoginPage();
        } else {
            alert('Username already exists. Please choose another.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('user').textContent = username;
        showSecuredPage();
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    showLoginPage();
}

function showRegisterPage() {
    document.getElementById('register-page').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('secured-page').style.display = 'none';
}

function showLoginPage() {
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('secured-page').style.display = 'none';
}

function showSecuredPage() {
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('secured-page').style.display = 'block';
}
