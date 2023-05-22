const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})


let form = document.getElementById('signup');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let uname = document.getElementById('uname');
    let email1 = document.getElementById('email1');
    let pw1 = document.getElementById('pw1');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let special = /\W/g;


    if (uname.value.length == 0) {
        alert('Please fill in username');
        return;
    }

    if (pw1.value.length == 0) {
        alert('Please fill in password');

    }


    else if (uname.value.length == 0 && pw1.value.length == 0) {
        alert('Please fill in username and password');

    } else if (pw1.value.length < 8) {
        alert('Password must be at least 8 characters');

    } else if (!pw1.value.match(numbers)) {
        alert('please add a number');

    } else if (!pw1.value.match(upperCaseLetters)) {
        alert('please add an uppercase letter');

    } else if (!pw1.value.match(lowerCaseLetters)) {
        alert('please add a lovercase letter');

    } else if (!pw1.value.match(special)) {
        alert('please add a special character');

    } else {


        if (localStorage.getItem("userData") == null) {
            let userData = [];
            const hasrshedPas = CryptoJS.SHA256(pw1).toString();
            let user = {
                username: uname.value,
                email: email1.value,
                password: hasrshedPas
            }

            userData.push(user)
            localStorage.setItem('userData', JSON.stringify(userData));
        }
        else {
            let data = localStorage.getItem("userData");
            let users = JSON.parse(data);
            let foundUser = users.find(user => user.email == email1.value);
            if (!foundUser) {
                // create user here
                const hasrshedPas = CryptoJS.SHA256(pw1).toString();
                let user = {
                    username: uname.value,
                    email: email1.value,
                    password: hasrshedPas
                }
                users.push(user)
                localStorage.setItem('userData', JSON.stringify(users));
                return;
            }
            alert('User already exists');

        }

        return;


    }
        window.location.href = 'project.html'
})


let form2 = document.getElementById('form');
form2.addEventListener('submit',(e) =>{
    e.preventDefault();
    let email = document.getElementById('email').value
    let pw = document.getElementById('pw').value;
    let data = localStorage.getItem("userData");
    let users = JSON.parse(data);
    const hasrshedPa = CryptoJS.SHA256(pw).toString();
   
    let foundUser = users.find(user => user.email == email && user.password == hasrshedPa);
    if (!foundUser) {
        console.log(pw);
        alert('invalid credentials');
        return;
    }
    window.location.href = "project.html";
})