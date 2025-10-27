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
    <button onclick='changeViewToLogInput()'>Ny logg</button>
`
}

function drawLogTable(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    let html='';
    for(let log of currentUserLogs.lists){
        html+=/*HTML*/`
        <tr onclick='changeToSelectedLog(${log.logID})'>
            <td>${log.date}</td>
            <td>${log.quality}</td>
            <td>${log.condition}</td>
            <td>${log.timeSlept}</td>
        </tr>
        `
    }
    return html;
}