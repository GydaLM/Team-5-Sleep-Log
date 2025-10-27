//---Gyda

function changeToSelectedLog(selectedLogID){
    model.viewstate.selectedLog = selectedLogID;
    model.app.currentPage = 'savedLog';

    changeView()
}