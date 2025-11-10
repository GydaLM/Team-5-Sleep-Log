//-- Marius  (og Gyda)
function updateHomepage(){
    const qualityClass = getColour(averageQuality());
    const conditionClass = getColour(averageCondition());
    
    return /*HTML*/ `
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
    
    if(!model.viewstate.editBedtime){
        return /*HTML*/ `
        <p>Optimal leggetid: ${model.data.registeredUser.optimalBedtime}</p>
        <button onclick="editOptimalBedtime()">Edit</button>
        `
    }
    else{
        return /*HTML*/ `
        <p>Optimal leggetid: <input type="time" oninput="model.viewstate.optimalBedtime=this.value"></p>
        <button onclick="saveOptimalBedtime()">Edit</button>
        `
    }
}