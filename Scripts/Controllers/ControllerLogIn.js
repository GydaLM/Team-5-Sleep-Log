//------ Remy

function logIn(){

     var userFound = false
     const userNameInput = model.viewstate.logIn.name
     const userPassword = model.viewstate.logIn.password


    for(let user of model.data.registeredUser){
        if (userNameInput == user.name && userPassword == user.password){
            model.app.currentUser = user.userID
            goTo('homepage')
            userFound = true


            // her kommer alt som fører bruker til homepage
            break
            } 
        }
        
    if(!userFound) alert('Wrong Username or Password')
}
