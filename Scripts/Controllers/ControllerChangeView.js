//-----------------Lene

changeView()
function changeView(){
    if(currentPage == 'homepage'){
        model.app.main.innerHTML = updateHomepage();
    } else if(currentPage == 'loglist'){
        model.app.main.innerHTML = updateLogList();
    } else if(currentPage == 'logInput'){
        model.app.main.innerHTML = updateLogInput();
    }else if(currentPage == 'statistics'){
        model.app.main.innerHTML = updateStatistics();
    }else if(currentPage == 'logIn'){
        model.app.main.innerHTML = updateLogIn();
    } else {
        return /*HTML*/`
        <h1>Error: no currentpage</h1>
        `
    }
}

