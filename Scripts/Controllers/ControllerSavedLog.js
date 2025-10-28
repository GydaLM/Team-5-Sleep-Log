//---Gyda

function changeToEditMode(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    const logToEdit = currentUserLogs.lists.find(log => log.logID === Number(model.viewstate.selectedLog));

    model.viewstate.editLog = {...logToEdit};
    model.app.currentPage = 'editLog';
    changeView()
}



// function changeViewToEditLog(){
//     model.app.currentPage = 'editLog';
//     changeView();
// }