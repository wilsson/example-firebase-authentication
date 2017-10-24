import { CONFIG } from './config';
import * as firebase from 'firebase';

firebase.initializeApp(CONFIG);
// catchdom
const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnRegister = document.getElementById('register');
const btnLogin = document.getElementById('login');
const btnLogout = document.getElementById('logout');
const user = document.getElementById('user');
// register
btnRegister.addEventListener('click', () => {
    console.log('register');
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

//login
btnLogin.addEventListener('click', () => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

//logout
btnLogout.addEventListener('click', () => {
    firebase.auth().signOut();
});

// change state user
firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log('>>', firebaseUser);
    if(!firebaseUser){
        user.innerHTML = '';
        return
    }
    user.innerHTML = firebaseUser.email;
    btnLogout.classList.remove('hide');
});
console.log("entry app!!");