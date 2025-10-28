//---Gyda

// function saveEditedLog(){
//     const currentUserLogs = model.data.registeredLogs.findIndex(logs => logs.userID === model.app.currentUser);
//     let logIndex = model.data.registeredLogs[currentUserLogs].lists.findIndex(log => log.logID === Number(model.viewstate.selectedLog));
//     model.data.registeredLogs[currentUserLogs].lists[logIndex] = {
//             bedtime: model.viewstate.editLog.bedtime,
//             attemptedSleep: model.viewstate.editLog.attemptedSleep,
//             fellAsleep: model.viewstate.editLog.fellAsleep,
//             awoken: model.viewstate.editLog.awoken,
//             gotUp: model.viewstate.editLog.gotUp,
//             sleepDisturbed: model.viewstate.editLog.sleepDisturbed,
//             timeDisturbed: model.viewstate.editLog.timeDisturbed,
//             napTime: model.viewstate.editLog.napTime,
//             quality: model.viewstate.editLog.quality,
//             condition: model.viewstate.editLog.condition,
//             notes: model.viewstate.editLog.notes,
//         }
// }