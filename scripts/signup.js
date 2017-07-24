document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault()

    var email = document.getElementById("email-input").value
    var password = document.getElementById('password-input').value 

    var attributeList = []

    var dataEmail = {
        Name: 'email',
        Value: email
    }

    var dataName = {
        Name: 'name',
        Value: "Name"
    }

    attributeList.push(dataEmail)
    attributeList.push(dataName)

    userPool.signUp(email, 'password', attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });

})