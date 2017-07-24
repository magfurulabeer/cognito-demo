document.getElementById('confirm-submit').addEventListener('click', (e) => {
    e.preventDefault()

    var confirmationCode = document.getElementById('confirm-code').value 
    var email = document.getElementById('confirm-email').value 

    var userData = {
        Username: email,
        Pool: userPool
    }

    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData)

    cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
        if (err) {
            alert(err)
            return
        }

        console.log('call result ' + result)
    })

})