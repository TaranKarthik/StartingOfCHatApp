const signIn = document.getElementById('SignIn'),
    oopsSignIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')






signIn.addEventListener('click', () => {
    if (document.getElementById("login_inputt").value == "") {
        document.getElementById("warning").innerHTML = "<i class='fas fa-exclamation-triangle'></i>Warning: Please enter a suitable name.";
    } else {
        var UserName = document.getElementById("login_inputt").value;
        localStorage.setItem("NameForChatApp", UserName);
        loginIn.classList.remove('none')
        loginUp.classList.remove('block')


        loginIn.classList.toggle('block')
        loginUp.classList.toggle('none')
    }

});
oopsSignIn.addEventListener('click', () => {

    loginIn.classList.remove('none')
    loginUp.classList.remove('block')


    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})