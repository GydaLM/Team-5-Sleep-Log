//---Gyda

function updateEditLog(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    const logToShow = currentUserLogs.lists.find(log => log.logID === Number(model.viewstate.selectedLog));
    model.viewstate.editLog.logID = logToShow.logID;

    return /*HTML*/ `
    <h1>Søvnlogg for ${logToShow.date}</h1>
        <div class="inputWrap">
            <p>Leggetid: <input type="time" value="${logToShow.bedtime}" oninput="model.viewstate.editLog.bedtime=this.value"></p>
            <p>Prøvde å sovne: <input type="time" value="${logToShow.attemptedSleep}" oninput="model.viewstate.editLog.attemptedSleep=this.value"></p>
            <p>Sovnet: <input type="time" value="${logToShow.fellAsleep}" oninput="model.viewstate.editLog.fellAsleep=this.value"></p>
        </div>
    <br>
        <div class="inputWrap">
            <p>Våknet: <input type="time" value="${logToShow.awoken}" oninput="model.viewstate.editLog.awoken=this.value"></p>
            <p>Stod opp: <input type="time" value="${logToShow.gotUp}" oninput="model.viewstate.editLog.gotUp=this.value"></p>
        </div>
    <br>
        <div class="inputWrap">
            <p>Våknet i natt: <input type="number" value="${logToShow.sleepDisturbed}" oninput="model.viewstate.editLog.sleepDisturbed=this.value"></p>
            <p>Tid våken: <input type="number" value="${logToShow.timeDisturbed}" oninput="model.viewstate.editLog.timeDisturbed=this.value"></p>
            <p>Lur-tid: <input type="number" value="${logToShow.napTime}" oninput="model.viewstate.editLog.napTime=this.value"></p>
        </div>
    <br>
        <div class="inputWrap">
            <p>Tid i seng: ${logToShow.timeInBed}</p>
            <p>Tid sovet: ${logToShow.timeSlept}</p>
            <p>Kvalitet: <input type="number" value="${logToShow.quality}" oninput="model.viewstate.editLog.quality=this.value"></p>
            <p>Dagsform: <input type="number" value="${logToShow.condition}" oninput="model.viewstate.editLog.condition=this.value"></p>
        </div>
    <br>
        <div class="notesWrap">
            <p>Notater: <input type="string" value="${logToShow.notes}" oninput="model.viewstate.editLog.notes=this.value"></p>
        </div>
    <button onclick="saveEditedLog()">Lagre</button>
    <button onclick="goTo('editLog')">Tilbake</button>
    `
}

function saveEditedLog(){
    const currentUserLogs = model.data.registeredLogs.findIndex(logs => logs.userID === model.app.currentUser);
    let logIndex = model.data.registeredLogs[currentUserLogs].lists.findIndex(log => log.logID === Number(model.viewstate.selectedLog));
    model.data.registeredLogs[currentUserLogs].lists[logIndex] = {
            bedtime: model.viewstate.editLog.bedtime,
            attemptedSleep: model.viewstate.editLog.attemptedSleep,
            fellAsleep: model.viewstate.editLog.fellAsleep,
            awoken: model.viewstate.editLog.awoken,
            gotUp: model.viewstate.editLog.gotUp,
            sleepDisturbed: model.viewstate.editLog.sleepDisturbed,
            timeDisturbed: model.viewstate.editLog.timeDisturbed,
            napTime: model.viewstate.editLog.napTime,
            quality: model.viewstate.editLog.quality,
            condition: model.viewstate.editLog.condition,
            notes: model.viewstate.editLog.notes,
        }
}