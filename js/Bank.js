document.getElementById('submit-btn').addEventListener
('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    console.log (userEmail);

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value ;
    if ( userEmail=='sontan@baap.com'&& userPassword == 'secret' ){
        console.log('valid user');
    }

})