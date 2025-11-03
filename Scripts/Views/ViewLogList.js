//---Gyda

function updateLogList(){
    return /*HTML*/ `
    <h1>Din søvnlogg</h1>
    <table style="width:75%">
        <tr>
        <th>Dato</th>
        <th>Dagsform</th>
        <th>Kvalitet</th>
        <th>Lengde</th>
        </tr>
        ${drawLogTable()}
    </table>
    <br>
    <button onclick="goTo('logInput')">Ny logg</button>
`
}

function drawLogTable(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    let html='';
    for(let log of currentUserLogs.lists){
        const date = log.date || '-';
        const quality = log.quality || '-';
        const condition = log.condition || '-';
        const timeSlept = log.timeSlept || '-';

        const qualityClass = getColour(quality);
        const conditionClass = getColour(condition);
        html+=/*HTML*/`
        <tr onclick='changeToSelectedLog(${log.logID})'>
            <td>${date}</td>
            <td class="${qualityClass}">${quality}</td>
            <td class="${conditionClass}">${condition}</td>
            <td>${timeSlept}</td>
        </tr>
        `
    }
    return html;
}