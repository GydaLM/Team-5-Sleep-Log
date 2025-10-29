//-----------------Lene

function updateLogInput(){
    return /*HTML*/ `

    <input type="date" onchange="saveDate(this.value)">

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
        <label for="timeDisturbed">Våknet i natt (antall):</label><input id="timeDisturbed" type="number" oninput="saveSleepDisturbed(parse = Number(this.value))">
        <label for="timeawaken">Tid våken (minutter):</label><input id="timeawaken" type="number" oninput="saveTimeDisturbed(parse = Number(this.value))">
        <label for="napTime">Lur-tid (minutter):</label><input id="napTime" type="number" oninput="saveNapTime(parse = Number(this.value))">
    </div>
<br>
    <div  class="inputWrap">
        <p>Kvalitet (5 er best):</p>
        <form>
            <!-- 1 -->
            <input type="radio" id="very bad" name="quality" value="1" oninput="saveQuality(this.value)">
            <label for="very bad">1</label>
            <!-- 2 -->
            <input type="radio" id="bad" name="quality" value="2" oninput="saveQuality(this.value)">
            <label for="bad">2</label>
            <!-- 3 -->
            <input type="radio" id="neutral" name="quality" value="3" oninput="saveQuality(this.value)">
            <label for="neutral">3</label>
            <!-- 4 -->
            <input type="radio" id="good" name="quality" value="4" oninput="saveQuality(this.value)">
            <label for="good">4</label>
            <!-- 5 -->
            <input type="radio" id="very good" name="quality" value="5" oninput="saveQuality(this.value)">
            <label for="very good">5</label>
        </form>
    </div>
    <div  class="inputWrap">
        <p>Dagsform (5 er best):</p>
        <form>
            <!-- 1 -->
            <input type="radio" id="very bad" name="quality" value="1" class="hide" oninput="saveCondition(this.value)">
            <label for="very bad">1</label>
            <!-- 2 -->
            <input type="radio" id="bad" name="quality" value="2" oninput="saveCondition(this.value)">
            <label for="bad">2</label>
            <!-- 3 -->
            <input type="radio" id="neutral" name="quality" value="3" oninput="saveCondition(this.value)">
            <label for="neutral">3</label>
            <!-- 4 -->
            <input type="radio" id="good" name="quality" value="4" oninput="saveCondition(this.value)">
            <label for="good">4</label>
            <!-- 5 -->
            <input type="radio" id="very good" name="quality" value="5" oninput="saveCondition(this.value)">
            <label for="very good">5</label>
        </form>
    </div>
<br>
    <div class="notesWrap">
        <label for="notes">Notater:</label><input id="notes" oninput="saveNotes(this.value)">
    </div>
<br>
    <button onclick="saveNewLog()">Lagre</button>
`
}

//-----------------------SKJEKK DET MED AT TING BLIR STRING (Number) Parse var svaret :)
