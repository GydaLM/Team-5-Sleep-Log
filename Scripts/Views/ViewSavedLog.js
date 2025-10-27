function updateSavedLog(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);

    if(!currentUserLogs) return `<p>Ingen logger funnet</p>`
    
    const logToShow = currentUserLogs.lists.find(log => log.logID === Number(model.viewstate.selectedLog));

    if(!logToShow) return `<p>Fant ikke loggen!</p>`

    return /*HTML*/ `
    <h1>Søvnlogg for ${logToShow.date}</h1>
    <div>
        <div class="inputWrap">
            <p>Leggetid: ${logToShow.bedtime}</p>
            <p>Prøvde å sovne: ${logToShow.attemptedSleep}</p>
            <p>Sovnet: ${logToShow.fellAsleep}</p>
        </div>
    <br>
        <div class="inputWrap">
            <p>Våknet: ${logToShow.awoken}</p>
            <p>Stod opp: ${logToShow.gotUp}</p>
        </div>
    <br>
        <div class="inputWrap">
            <p>Våknet i natt: ${logToShow.sleepDisturbed}</p>
            <p>Tid våken: ${logToShow.timeDisturbed}</p>
            <p>Lur-tid: ${logToShow.napTime}</p>
        </div>
    <br>
        <div class="inputWrap">
            <p>Tid i seng: ${logToShow.timeInBed}</p>
            <p>Tid sovet: ${logToShow.timeSlept}</p>
            <p>Kvalitet: ${logToShow.quality}</p>
            <p>Dagsform: ${logToShow.condition}</p>
        </div>
    <br>
        <div class="notesWrap">
            <p>Notater: ${logToShow.notes}</p>
        </div>
    </div>
    <button onclick="changeViewToLogList()">Tilbake</button>
    `
}