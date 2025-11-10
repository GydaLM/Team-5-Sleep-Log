//---Gyda

function updateSavedLog(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);

    if(!currentUserLogs) return `<p>Ingen logger funnet</p>`
    
    const logToShow = currentUserLogs.lists.find(log => log.logID === Number(model.viewstate.selectedLog));

    if(!logToShow) return `<p>Fant ikke loggen!</p>`

    const timeInBed = logToShow.timeInBed || '-';
    const timeSlept = logToShow.timeSlept || '-';

    const qualityClass = getColour(logToShow.quality);
    const conditionClass = getColour(logToShow.condition);

    return /*HTML*/ `
    <h1>Søvnlogg for ${logToShow.date}</h1>
        <div class="inputWrap saved">
            <p>Leggetid: ${logToShow.bedtime}</p>
            <p>Prøvde å sovne: ${logToShow.attemptedSleep}</p>
            <p>Sovnet: ${logToShow.fellAsleep}</p>
        </div>

        <div class="inputWrap saved">
            <p>Våknet: ${logToShow.awoken}</p>
            <p>Stod opp: ${logToShow.gotUp}</p>
        </div>

        <div class="inputWrap saved">
            <p>Våknet i natt: ${logToShow.sleepDisturbed} gang(er)</p>
            <p>Tid våken: ${logToShow.timeDisturbed} minutter</p>
            <p>Lur-tid: ${logToShow.napTime} minutter</p>
        </div>

        <div class="inputWrap">
            <p>Tid i seng: ${timeInBed}</p>
            <p>Tid sovet: ${timeSlept}</p>
        </div>
        <div class="inputWrap">
            <p class="${qualityClass}">Kvalitet: ${logToShow.quality}</p>
            <p class="${conditionClass}">Dagsform: ${logToShow.condition}</p>
        </div>

        <div class="notesWrap">
            <p>Notater: <br> ${logToShow.notes}</p>
        </div>
    <button class="SaveInputBtn" onclick="changeToEditMode()">Rediger</button>
    <button class="SaveInputBtn" onclick="goTo('logList')">Tilbake</button>
    `
}