document.getElementById('submit-btn').addEventListener
('click', function(){
    //ger user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    console.log (userEmail);

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value ;
   
    //check user info
    if ( userEmail=='sontan@baap.com'&& userPassword =='secret'){
        console.log('valid user');
        window.location.href='banking.html';
    }

})

//handle deposit button event
document.getElementById('deposit-btn').addEventListener
('click', function (){
    console.log('button clicked')
})