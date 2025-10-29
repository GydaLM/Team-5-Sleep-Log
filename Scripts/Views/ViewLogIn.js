function updateLogIn(){
    return /*HTML*/ `
    <div>This is the Log In!</div>
    
    <div>
    <input placeholder="Brukernavn" oninput="model.viewstate.logIn.name = this.value">
    <input type="password" id="passwordField" placeholder="Passord" oninput="model.viewstate.logIn.password = this.value">
    <button onclick="logIn()">Log in</button>


    </div>
`
}