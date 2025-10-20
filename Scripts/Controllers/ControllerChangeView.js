//-----------------Lene

function changeView(){
    if(currentpage == 'homepage'){
        model.app.main.innerHTML = updateHomepage();
    } else if(currentpage == 'loglist'){
        model.app.main.innerHTML = updateLogList();
    } else if(currentpage == 'logInput'){
        model.app.main.innerHTML = updateLogInput();
    }else if(currentpage == 'statistics'){
        model.app.main.innerHTML = updateStatistics();
    }else if(currentpage == 'logIn'){
        model.app.main.innerHTML = updateLogIn();
    } else {
        return /*HTML*/`
        <h1>Error: no currentpage</h1>
        `
    }
}

