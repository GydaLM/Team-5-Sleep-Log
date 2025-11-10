//-- Marius  (og Gyda)
function updateHomepage(){
    const qualityClass = getColour(averageQuality());
    const conditionClass = getColour(averageCondition());
    
    return /*HTML*/ `
    <div>${drawOptimalBedtime()}</div>
    <div id='mainHomepageDiv'>
        <h1>Gjennomsnitt de siste syv loggene</h1>
        <div id='statsHomepage'>
            <div class='avgDisplayHomepage ${qualityClass}'>Søvnkvalitet <br> ${averageQuality()}/5</div>
            <div class='avgDisplayHomepage'>Søvnlengde <br>${averageLength().hours}t ${averageLength().minutes}min</div>
            <div class='avgDisplayHomepage ${conditionClass}'>Dagsform <br> ${averageCondition()}/5</div>
        </div>
    </div>
    <button class="nyLoggBtn" onclick="goTo('logInput')">Ny logg</button>
`
}

function drawOptimalBedtime(){
    const currentUser = model.data.registeredUser.find(user => user.userID === model.app.currentUser);
    const optimalBedtime = currentUser?.optimalBedtime || "-";
    
    if(!model.viewstate.editBedtime){
        return /*HTML*/ `
        <label>Optimal leggetid: ${optimalBedtime}</label>
        <button class="optimalBedtimeBtn" onclick="editOptimalBedtime()">Edit</button>
        `
    }
    else{
        return /*HTML*/ `
        <label>Optimal leggetid: </label><input type="time" oninput="model.viewstate.optimalBedtime=this.value">
        <button class="optimalBedtimeBtn" onclick="saveOptimalBedtime()">Save</button>
        `
    }
}