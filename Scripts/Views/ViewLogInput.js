//-----------------Lene

function updateLogInput(){
    return /*HTML*/ `
    <div>${SideBar()}</div>
    <div>This is the LogInput!</div>

<input type="date">

    <div class="inputWrap">
        <label for="bedtime">Leggetid:</label><input id="bedtime" type="time">
        <label for="attemptedSleep">Prøvde å sovne:</label><input id="attemptedSleep" type="time">
        <label for="fellAsleep">Sovnet:</label><input id="fellAsleep" type="time">
    </div>
<br>
    <div class="inputWrap">
        <label for="awoken">Våknet:</label><input id="awoken" type="time">
        <label for="gotUp">Sto opp:</label><input id="gotUp" type="time">
    </div>
<br>
    <div class="inputWrap">
        <label for="timeDisturbed">Våknet i natt:</label><input id="timeDisturbed" type="number">
        <label for="timeawaken">Tid våken:</label><input id="timeawaken" type="number">
        <label for="napTime">Lur-tid:</label><input id="napTime" type="number">
    </div>
<br>
    <div class="inputWrap">
        <h3>Kvalitet</h3><input>
        <h3>Dagsform</h3><input>
    </div>
<br>
    <div class="inputWrap">
        <h3>Notater:</h3><input>
    </div>
<br>
    <button>Lagre</button>
`
}