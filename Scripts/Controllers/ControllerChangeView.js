//-----------------Lene

changeView();

function goTo(page) {
    model.app.currentPage = page;
    changeView();
}


function changeView(){
    
    let content = "";
    let sidebar = "";
    if(model.app.currentPage == 'homepage'){
        content = updateHomepage();
    } else if(model.app.currentPage == 'logList'){
        content = updateLogList();
    } else if(model.app.currentPage == 'logInput'){
        content = updateLogInput();
    }else if(model.app.currentPage == 'sleepAdvice'){
        content = updateSleepAdvice();
    }else if(model.app.currentPage == 'logIn'){
        content = updateLogIn();
        model.app.currentUser = null;
    }else if(model.app.currentPage == 'savedLog'){
        content = updateSavedLog();
    }else if(model.app.currentPage == 'editLog'){
        content = updateEditLog();
    }
     else {
        content = /*HTML*/`
        <h1>Error: no currentpage</h1>
        `
    }

    if(model.app.currentUser != null){
        sidebar = SideBar();
    }

    model.app.main.innerHTML = /*HTML*/`
        <main>
            <header>${sidebar}</header>
            <section class="content">${content}</section>
        </main>
    `;
    if(model.app.currentUser != null){
        changeButtons();
    }
}






//------- 

// function changeView(){
//     if(model.app.currentPage == 'homepage'){
//         model.app.main.innerHTML = updateHomepage();
//     } else if(model.app.currentPage == 'logList'){
//         model.app.main.innerHTML = updateLogList();
//     } else if(model.app.currentPage == 'logInput'){
//         model.app.main.innerHTML = updateLogInput();
//     }else if(model.app.currentPage == 'statistics'){
//         model.app.main.innerHTML = updateStatistics();
//     }else if(model.app.currentPage == 'logIn'){
//         model.app.main.innerHTML = updateLogIn();
//         model.app.currentUser = null;
//     }else if(model.app.currentPage == 'savedLog'){
//         model.app.main.innerHTML = updateSavedLog();
//     }else if(model.app.currentPage == 'editLog'){
//         model.app.main.innerHTML = updateEditLog();
//     }
//      else {
//         return /*HTML*/`
//         <h1>Error: no currentpage</h1>
//         `
//     }
// }