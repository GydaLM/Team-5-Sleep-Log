//-- Marius
function updateHomepage(){
    return /*HTML*/ `
    <div>This is the Homepage!</div>
    <div id='mainHomepageDiv'>
        <div>Gjennomsnitt de siste syv loggene</div>
        <div id='statsHomepage'>
            <div class='avgDisplayHomepage'>Søvn Kvalitet <br> ${averageQuality()}/5</div>
            <div class='avgDisplayHomepage'>Søvn lengde <br>${averageLength().hours}t ${averageLength().minutes}min</div>
            <div class='avgDisplayHomepage'>Dagsform <br> ${averageCondition()}/5</div>
        </div>
    </div>
    <div id='newLogHomepage' onclick='changeViewToLogInput()'>Ny logg</div>
`
}