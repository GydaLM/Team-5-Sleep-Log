//---Gyda

function updateEditLog(){
    const log = model.viewstate.editLog;

    return /*HTML*/ `
        <h1>Rediger søvnlogg for ${log.date}</h1>
        <div class="inputWrap">
            <label for="editDate">Dato:</label><input id="editDate" type="date" value="${log.date}" oninput="model.viewstate.editLog.date=this.value">
            <label for="editbedtime">Leggetid:</label><input id="editbedtime" type="time" value="${log.bedtime}" oninput="model.viewstate.editLog.bedtime=this.value">
            <label for="editAttemptedSleep">Prøvde å sovne:</label><input id="editAttemptedSleep" type="time" value="${log.attemptedSleep}" oninput="model.viewstate.editLog.attemptedSleep=this.value">
            <label for="editFellAsleep">Sovnet:</label><input id="editFellAsleep" type="time" value="${log.fellAsleep}" oninput="model.viewstate.editLog.fellAsleep=this.value">
        </div>

        <div class="inputWrap">
            <label for="editAwoken">Våknet:</label><input id="editAwoken" type="time" value="${log.awoken}" oninput="model.viewstate.editLog.awoken=this.value">
            <label for="editGotUp">Stod opp:</label><input id="editGotUp" type="time" value="${log.gotUp}" oninput="model.viewstate.editLog.gotUp=this.value">
        </div>

        <div class="inputWrap">
            <label for="editTimeDisturbed">Våknet i natt (antall):</label><input id="editTimeDisturbed" type="number" value="${log.sleepDisturbed}" oninput="model.viewstate.editLog.sleepDisturbed=this.value">
            <label for="editTimeawaken">Tid våken (minutter):</label><input id="editTimeawaken" type="number" value="${log.timeDisturbed}" oninput="model.viewstate.editLog.timeDisturbed=this.value">
            <label for="editNapTime">Lur-tid (minutter):</label><input id="editNapTime" type="number" value="${log.napTime}" oninput="model.viewstate.editLog.napTime=this.value">
        </div>

        <div class="inputWrap">
            <p>Tid i seng: ${log.timeInBed}</p>
            <p>Tid sovet: ${log.timeSlept}</p>
        </div>
        <div  class="inputWrap radio">
            <p>Kvalitet (5 er best):</p>
            <form>
                ${radioButtons('quality', log.quality)}
            </form>
        </div>
        <div  class="inputWrap radio">
            <p>Dagsform (5 er best):</p>
            <form>
                ${radioButtons('condition', log.condition)}
            </form>
        </div>

        <div class="notesWrap">
            <label for="editnotes">Notater:</label>
            <textarea id="editnotes" onchange="model.viewstate.editLog.notes=this.value">${log.notes}</textarea>
        </div>
        <button class="SaveInputBtn" onclick="saveEditedLog()">Lagre</button>
        <button class="SaveInputBtn" onclick="goTo('savedLog')">Avbryt</button>
    `
}

function radioButtons(type, value){
    let tempArray = ['very bad', 'bad', 'neutral', 'good', 'very good'];
    let html = '';
    for(let i=1; i<=5; i++){
        const checked = (Number(value) === i) ? 'checked' : '';
        const id = `${type}-${tempArray[i-1]}`;

        html += /*HTML*/`            
            <input type="radio" id="${id}" name="${type}" value="${i}" ${checked} 
                oninput="model.viewstate.editLog.${type}=Number(this.value)">
            <label for="${id}">${i}</label>
            `
    }
    return html;
}

// function updateEditLog(){
//     const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
//     const logToShow = currentUserLogs.lists.find(log => log.logID === Number(model.viewstate.selectedLog));
//     model.viewstate.editLog.logID = logToShow.logID;

//     return /*HTML*/ `
//     <h1>Søvnlogg for ${logToShow.date}</h1>
//         <div class="inputWrap">
//             <p>Leggetid: <input type="time" value="${logToShow.bedtime}" oninput="model.viewstate.editLog.bedtime=this.value"></p>
//             <p>Prøvde å sovne: <input type="time" value="${logToShow.attemptedSleep}" oninput="model.viewstate.editLog.attemptedSleep=this.value"></p>
//             <p>Sovnet: <input type="time" value="${logToShow.fellAsleep}" oninput="model.viewstate.editLog.fellAsleep=this.value"></p>
//         </div>
//     <br>
//         <div class="inputWrap">
//             <p>Våknet: <input type="time" value="${logToShow.awoken}" oninput="model.viewstate.editLog.awoken=this.value"></p>
//             <p>Stod opp: <input type="time" value="${logToShow.gotUp}" oninput="model.viewstate.editLog.gotUp=this.value"></p>
//         </div>
//     <br>
//         <div class="inputWrap">
//             <p>Våknet i natt: <input type="number" value="${logToShow.sleepDisturbed}" oninput="model.viewstate.editLog.sleepDisturbed=this.value"></p>
//             <p>Tid våken: <input type="number" value="${logToShow.timeDisturbed}" oninput="model.viewstate.editLog.timeDisturbed=this.value"></p>
//             <p>Lur-tid: <input type="number" value="${logToShow.napTime}" oninput="model.viewstate.editLog.napTime=this.value"></p>
//         </div>
//     <br>
//         <div class="inputWrap">
//             <p>Tid i seng: ${logToShow.timeInBed}</p>
//             <p>Tid sovet: ${logToShow.timeSlept}</p>
//             <p>Kvalitet: <input type="number" value="${logToShow.quality}" oninput="model.viewstate.editLog.quality=this.value"></p>
//             <p>Dagsform: <input type="number" value="${logToShow.condition}" oninput="model.viewstate.editLog.condition=this.value"></p>
//         </div>
//     <br>
//         <div class="notesWrap">
//             <p>Notater: <input type="string" value="${logToShow.notes}" oninput="model.viewstate.editLog.notes=this.value"></p>
//         </div>
//     <button onclick="saveEditedLog()">Lagre</button>
//     <button onclick="goTo('editLog')">Tilbake</button>
//     `
// }

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