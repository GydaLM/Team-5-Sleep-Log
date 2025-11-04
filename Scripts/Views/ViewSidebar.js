//------Remy


function SideBar(){
    return /*HTML*/ `
    <section class="sidebar-container">
        <div>

            <button onclick="goTo('homepage')">
                <img src="Media/home.png" alt=""/>
            </button>

            <button onclick="goTo('logList')">
                <img src="Media/log.png" alt=""/>
            </button>

            <button onclick="goTo('statistics')">
                <img src="Media/statisticsBar.png" alt=""/>
            </button>

            <button onclick="goTo('logIn')">
                <img src="Media/logOff.png" alt=""/>
            </button>
        ${drawDarkLightButton()}
        </div>
    </section> 
    `
}

function drawDarkLightButton(){
    if(darkMode){
        return /*HTML*/`<button id="darkLightButton" onclick="toggleLightDark()">Lysmodus</button>`
    }
    else{
        return /*HTML*/`<button id="darkLightButton" onclick="toggleLightDark()">Mørkmodus</button>`
    }
}

/*
anbefaling: 
- Ha en updateView() som har if som sjekker hva current page er i modellen. 
- Ha en funksjon changePage() som har parameter på hvilken side den skal bytte til
*/