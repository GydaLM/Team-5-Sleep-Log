//-- Marius
function updateHomepage(){
    const qualityClass = getColour(averageQuality());
    const conditionClass = getColour(averageCondition());
    
    return /*HTML*/ `
    <div id='mainHomepageDiv'>
        <div>Gjennomsnitt de siste syv loggene</div>
        <div id='statsHomepage'>
            <div class='avgDisplayHomepage ${qualityClass}'>Søvn Kvalitet <br> ${averageQuality()}/5</div>
            <div class='avgDisplayHomepage'>Søvn lengde <br>${averageLength().hours}t ${averageLength().minutes}min</div>
            <div class='avgDisplayHomepage ${conditionClass}'>Dagsform <br> ${averageCondition()}/5</div>
        </div>
    </div>
    <div id='newLogHomepage' onclick="goTo('logInput')">Ny logg</div>
`
}