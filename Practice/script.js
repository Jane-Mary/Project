const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})


// form.addEventListener('submit', (e) => {
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('pw1').value;


//     let upperCase = /[A-Z]/;
//     let lowerCase = /[a-z]/;
//     let number = /[0-9]/;
//     // let number = /?=.*\d/;
//     let specialCharacter = /[^A-Za-z0-9]/;
//     // let specialCharacter = /?=.*\W/;


//     if (email.length == 0 && password.length == 0) {
//         alert('Please fill in email and password')
//     } else if (email.length == 0) {
//         alert('Please fill in email')
//     } else if (password.length == 0) {
//         alert('Please fill in password')
//     } else if (password.length < 8) {
//         alert('Password must be at least 8 characters')
//     } else if (!password.match(upperCase)) {
//         alert('Please add an uppercase character')
//     } else if (!password.match(lowerCase)) {
//         alert('Please add a lowercase character')
//     } else if (!password.match(number)) {
//         alert('Please add a number')
//     } else if (!password.match(specialCharacter)) {
//         alert('Please add a special character')
//     } else {
//         const hasrshedPas = CryptoJS.SHA256(password).toString();


//         // creating user object
//         let userData = {
//             email: email,
//             password: hasrshedPas,
//         }

//         //saving to localstorage
//         // if (email.match(localStorage.setItem('userData', JSON.stringify(userData)))) {
//         //     alert('Account already exist.')
//         //  }
//         localStorage.setItem('userData', JSON.stringify(userData));
//         alert('Your details have been successfully saved to our system. Thanks')
//     }
// })

// let retrievedData = localStorage.getItem('userData');
// let parsedData = JSON.parse(retrievedData);

// //ES5
// let email1 = parsedData.email;
// let pasword1 = parsedData.password;

// //ES6
// let { email, password } = parsedData;
// console.log('this is the data coming from our local storage', parsedData);



// let signup = document.getElementById('signup');

// signup.addEventListener('submit', (e) => {

//     // data from loin form
//     let signupemail = document.getElementById('email').value;
//     let signuppassword = document.getElementById('pw1').value;

//     // data fro local storage
//     let localretrievedData = localStorage.getItem('userData');
//     let localparsedData = JSON.parse(localretrievedData);

//     // destructuring localparsedData
//     let { email: localstorageemail, password: localstoragepassword } = localparsedData;

//     if (signupemail == localstorageemail && signuppassword == localstoragepassword) {
//         alert(' Successfully login, You are welcome to our system')
//     } else {
//         alert("Invalid Credentials");
//     }
// });



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
            let foundUser = users.find(user => user.email1 == email1.value);
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
    window.location.href = 'project.html';
})