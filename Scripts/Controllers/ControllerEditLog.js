//---Gyda

function saveEditedLog(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    const logIndex = currentUserLogs.lists.findIndex(log => log.logID === Number(model.viewstate.selectedLog));

    currentUserLogs.lists[logIndex] = {
        ...currentUserLogs.lists[logIndex],
        ...model.viewstate.editLog,
    };
    model.app.currentPage = 'savedLog';
    changeView();
}