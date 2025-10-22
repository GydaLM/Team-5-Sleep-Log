//-----------------Lene

function updateLogInput(){
    return /*HTML*/ `
    <div>${SideBar()}</div>
    <div>This is the LogInput!</div>

    <input type="date" onchange="">

    <div class="inputWrap">
        <label for="bedtime">Leggetid:</label><input id="bedtime" type="time" oninput="saveRegisterLogBedtime(this.value)">
        <label for="attemptedSleep">Prøvde å sovne:</label><input id="attemptedSleep" type="time" oninput="saveAttemptedSleep(this.value)">
        <label for="fellAsleep">Sovnet:</label><input id="fellAsleep" type="time" oninput="saveFellAsleep(this.value)">
    </div>
<br>
    <div class="inputWrap">
        <label for="awoken">Våknet:</label><input id="awoken" type="time" oninput="saveAwoken(this.value)">
        <label for="gotUp">Sto opp:</label><input id="gotUp" type="time" oninput="saveGotUp(this.value)">
    </div>
<br>
    <div class="inputWrap">
        <label for="timeDisturbed">Våknet i natt:</label><input id="timeDisturbed" type="number" oninput="saveSleepDisturbed(this.value)">
        <label for="timeawaken">Tid våken:</label><input id="timeawaken" type="number" oninput="saveTimeDisturbed(this.value)">
        <label for="napTime">Lur-tid:</label><input id="napTime" type="number" oninput="saveNapTime(this.value)">
    </div>
<br>
    <div class="inputWrap">
        <label for="quality">Kvalitet</label><input id="quality" oninput="saveQuality(this.value)">
        <label for="condition">Dagsform</label><input id="condition" oninput="saveCondition(this.value)">
    </div>
<br>
    <div class="notesWrap">
        <label for="notes">Notater:</label><input id="notes" oninput="saveNotes(this.value)">
    </div>
<br>
    <button>Lagre</button>
`
}
