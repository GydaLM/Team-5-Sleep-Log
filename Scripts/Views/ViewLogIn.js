function updateLogIn(){
    return /*HTML*/ `
    <div>This is the Log In!</div>
    
    <div>
    <input oninput="model.viewstate.logIn.name = this.value">
    <input oninput="model.viewstate.logIn.password = this.value">
    <button onclick="logIn()">Log in</button>


    </div>
`
}