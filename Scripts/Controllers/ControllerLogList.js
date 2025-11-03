//---Gyda

function changeToSelectedLog(selectedLogID){
    model.viewstate.selectedLog = selectedLogID;
    model.app.currentPage = 'savedLog';

    changeView()
}

function getColour(value){
    if(value>4) return 'green';
    if(value>2) return 'yellow';
    else return 'red';
}