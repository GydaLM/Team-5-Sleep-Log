//model.app.main.innerHTML = SideBar();

function SideBar(){
    return /*HTML*/ `
    <section class="sidebar-container">
        <div>

            <button onclick="">
                <img src="" alt=""/>
            </button>

            <button onclick="">
                <img src="" alt=""/>
            </button>

            <button onclick="">
                <img src="" alt=""/>
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