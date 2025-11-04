//---Gyda

function saveEditedLog(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    const logIndex = currentUserLogs.lists.findIndex(log => log.logID === Number(model.viewstate.selectedLog));

    let bedtime = convertToMinutes(model.viewstate.editLog.bedtime);
    let fellAsleep = convertToMinutes(model.viewstate.editLog.fellAsleep);
    let awoken = convertToMinutes(model.viewstate.editLog.awoken);
    let gotUp = convertToMinutes(model.viewstate.editLog.gotUp);

    if (bedtime > fellAsleep){
        fellAsleep += 24 * 60;
    }
    if (bedtime > awoken){
        awoken += 24 * 60;
    }
    if (bedtime > gotUp){
        gotUp += 24 * 60;
    }

    let timeSleptNum = awoken - fellAsleep - model.viewstate.editLog.timeDisturbed;
    let timeInBedNum = gotUp - bedtime;

    currentUserLogs.lists[logIndex] = {
        ...currentUserLogs.lists[logIndex],
        ...model.viewstate.editLog,
        timeSleptNum: timeSleptNum,
        timeSlept: `${Math.floor(timeSleptNum / 60)}t ${Math.round(timeSleptNum % 60)}min`,
        timeInBed: `${Math.floor(timeInBedNum / 60)}t ${Math.round(timeInBedNum % 60)}min`,
    };
    model.app.currentPage = 'savedLog';
    changeView();
}