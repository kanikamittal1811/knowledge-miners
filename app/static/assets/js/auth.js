//listen for ayth status
// auth.onAuthStateChanged(user => {
//     console.log(user);
// });

const signupform = document.querySelector('#sign-up-form');
var credentials;
signupform.addEventListener('click', (e) => {
    e.preventDefault();

    //user info
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;


    console.log(email, password);

    //signing up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        credentials = cred;
        window.location.href = "/";

    });
})

//logout method
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     console.log(credentials);
//     e.preventDefault();
//     auth.signOut().then(() => {
//         console.log("user signed out");
//     });
// });

//signin form

// const loginform = document.querySelector("#login-form");
// loginform.addEventListener('submit', (e) => {
//     e.preventDefault();

//     //get user info
//     const email = loginform['login-email'].value;
//     const password = loginform['login-password'].value;

//     auth.signInWithEmailAndPassword(email, password).then(cred => {
//         console.log(cred);
//         const modal = document.querySelector('#modal-login');
//         M.Modal.getInstance(modal).close();
//         loginform.reset();
//     });

// });