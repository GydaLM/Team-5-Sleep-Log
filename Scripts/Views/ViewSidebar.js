//------Remy



model.app.main.innerHTML = SideBar();

function SideBar(){
    return /*HTML*/ `
    <section class="sidebar-container">
        <div>

            <button onclick="changeViewToHomepage()">
                <img src="Media/home.png" alt=""/>
            </button>

            <button onclick="changeViewToLogList()">
                <img src="Media/log.png" alt=""/>
            </button>

            <button onclick="changeViewToLogIn()">
                <img src="Media/logOff.png" alt=""/>
            </button>

        </div>
    </section> 
    `
}



/*
anbefaling: 
- Ha en updateView() som har if som sjekker hva current page er i modellen. 
- Ha en funksjon changePage() som har parameter på hvilken side den skal bytte til
*/