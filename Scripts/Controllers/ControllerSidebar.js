//---Gyda

function toggleLightDark(){
    model.app.darkMode = !model.app.darkMode;
    if(model.app.darkMode){
        document.body.style.backgroundColor = '#2c2d31';
        //document.getElementById('darkLightButton').textContent = 'Lysmodus';
    }
    else{
        document.body.style.backgroundColor = '';
        //document.getElementById('darkLightButton').textContent = 'Mørkmodus';
    }
    changeView()
}


//-----------------Lene

//function sidebarToggle() {              // funskjon som åpner og lukker Sidebar-en
// sidebarOpen = !sidebarOpen;             // Toggler mellom False og true verdi
//if (sidebarOpen) {
//console.log("sidebar-en er åpen")
//} else {
//console.log("sidebar-en er stengt")
//}
//}

//--------------------------------onclick functions for sidebar buttons


//---------------------------------Chosen button

// function chosenView() {
// if (currentPage == 'homepage'){
//     color button backgrond
// }

// }

// changeView(medParameter)