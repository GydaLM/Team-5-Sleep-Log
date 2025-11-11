function updateLogIn(){
    return /*HTML*/ `

    <section class="logInWrapper">
    
        <div class="logoLoginPage">
            <h1>ShutEye<h1>
        </div>
        
        <div>
            <div class="logInText">Logg inn med din bruker</div>
            <input placeholder="Brukernavn" oninput="model.viewstate.logIn.name = this.value">
            <input type="password" id="passwordField" placeholder="Passord" oninput="model.viewstate.logIn.password = this.value">
            <button class="logInBtn" onclick="logIn()">Log in</button>

        </div>
    </section>
`
}