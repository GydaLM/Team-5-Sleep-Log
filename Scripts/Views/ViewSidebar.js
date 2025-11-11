//------Remy


function SideBar(){
    return /*HTML*/ `
    <section class="sidebar-container">
        
        <div class="username-container">
            <h3>Velkommen ${getUserName()}!</h3>
        </div>

        <div>
            <h1 class="logoSidebar" onclick="goTo('homepage')">ShutEye</h1>
        </div>


        <div class="sidebar-button-container">

            <button onclick="goTo('homepage')">
                <img src="Media/home.png" alt=""/>
            </button>

            <button onclick="goTo('logList')">
                <img src="Media/log.png" alt=""/>
            </button>

            <button onclick="goTo('sleepAdvice')">
                <img src="Media/sleepiconthick.png" alt=""/>
            </button>

            <button onclick="goTo('logIn')">
                <img src="Media/logOff.png" alt=""/>
            </button>

            ${drawDarkLightButton()}

        </div>
    </section> 
    `
}

function getUserName(){
    for(let i = 0; i < model.data.registeredUser.length; i++){
        if(model.data.registeredUser[i].userID === model.app.currentUser){
            return model.data.registeredUser[i].name;
        }
    }
    return "gjest";
}


// function logo(){
//      return /*HTML*/ `
//      <section>

//             <button id="logo" onclick="goTo('homepage')">
//                 <img src="Media/ShutEye_1.png" alt=""/>
//             </button>

//         </section>`
// }



function drawDarkLightButton(){
    if(model.app.darkMode){
        return /*HTML*/`<button id="darkLightButton" class="dark-mode-button-img img-sun" onclick="toggleLightDark()"></button>`
    }
    else{
        return /*HTML*/`<button id="darkLightButton" class="dark-mode-button-img img-moon" onclick="toggleLightDark()"></button>`
    }
}

/*
anbefaling: 
- Ha en updateView() som har if som sjekker hva current page er i modellen. 
- Ha en funksjon changePage() som har parameter på hvilken side den skal bytte til
*/