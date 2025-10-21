//-----------------Lene

changeView();
function changeView(){
    if(model.app.currentPage == 'homepage'){
        model.app.main.innerHTML = updateHomepage();
    } else if(model.app.currentPage == 'loglist'){
        model.app.main.innerHTML = updateLogList();
    } else if(model.app.currentPage == 'logInput'){
        model.app.main.innerHTML = updateLogInput();
    }else if(model.app.currentPage == 'statistics'){
        model.app.main.innerHTML = updateStatistics();
    }else if(model.app.currentPage == 'logIn'){
        model.app.main.innerHTML = updateLogIn();
    } else {
        return /*HTML*/`
        <h1>Error: no currentpage</h1>
        `
    }
}

function changeViewToLogInput(){
    model.app.currentPage = 'logInput';
    changeView();
}
