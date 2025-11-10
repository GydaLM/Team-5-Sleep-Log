//-----------------Lene

function updateLogInput(){
    const currentUser = model.data.registeredUser.find(user => user.userID === model.app.currentUser);
    const optimalBedtime = currentUser?.optimalBedtime || "-";
    return /*HTML*/ `
<form class="boxwrap">
    <input class="dateinput" type="date" onchange="saveDate(this.value)">

    <div class="inputWrap">
        <p>Optimal leggetid:</p>
        <p>${optimalBedtime}</p>
    </div>
    <div class="inputWrap">
        <label for="bedtime">Leggetid:</label><input id="bedtime" type="time" oninput="saveRegisterLogBedtime(this.value)">
        <label for="attemptedSleep">Prøvde å sovne:</label><input id="attemptedSleep" type="time" oninput="saveAttemptedSleep(this.value)">
        <label for="fellAsleep">Sovnet:</label><input id="fellAsleep" type="time" oninput="saveFellAsleep(this.value)">
    </div>

    <div class="inputWrap">
        <label for="awoken">Våknet:</label><input id="awoken" type="time" oninput="saveAwoken(this.value)">
        <label for="gotUp">Sto opp:</label><input id="gotUp" type="time" oninput="saveGotUp(this.value)">
    </div>

    <div class="inputWrap">
        <label for="timeDisturbed">Våknet i natt (antall):</label><input id="timeDisturbed" type="number" oninput="saveSleepDisturbed(parse = Number(this.value))">
        <label for="timeawaken">Tid våken (minutter):</label><input id="timeawaken" type="number" oninput="saveTimeDisturbed(parse = Number(this.value))">
        <label for="napTime">Lur-tid (minutter):</label><input id="napTime" type="number" oninput="saveNapTime(parse = Number(this.value))">
    </div>

    <div  class="inputWrap radio">
        <p>Kvalitet (5 er best):</p>
        <div>
            <!-- 1 -->
            <input type="radio" id="quality-verybad" name="quality" value="1" oninput="saveQuality(parse = Number(this.value))">
            <label for="quality-verybad">1</label>
            <!-- 2 -->
            <input type="radio" id="quality-bad" name="quality" value="2" oninput="saveQuality(parse = Number(this.value))">
            <label for="quality-bad">2</label>
            <!-- 3 -->
            <input type="radio" id="quality-neutral" name="quality" value="3" oninput="saveQuality(parse = Number(this.value))">
            <label for="quality-neutral">3</label>
            <!-- 4 -->
            <input type="radio" id="quality-good" name="quality" value="4" oninput="saveQuality(parse = Number(this.value))">
            <label for="quality-good">4</label>
            <!-- 5 -->
            <input type="radio" id="quality-verygood" name="quality" value="5" oninput="saveQuality(parse = Number(this.value))">
            <label for="quality-very good">5</label>
        </div>
    </div>
    <div  class="inputWrap radio">
        <p>Dagsform (5 er best):</p>
        <div>
            <!-- 1 -->
            <input type="radio" id="condition-verybad" name="condition" value="1" oninput="saveCondition(parse = Number(this.value))">
            <label for="condition-verybad">1</label>
            <!-- 2 -->
            <input type="radio" id="condition-bad" name="condition" value="2" oninput="saveCondition(parse = Number(this.value))">
            <label for="condition-bad">2</label>
            <!-- 3 -->
            <input type="radio" id="condition-neutral" name="condition" value="3" oninput="saveCondition(parse = Number(this.value))">
            <label for="condition-neutral">3</label>
            <!-- 4 -->
            <input type="radio" id="condition-good" name="condition" value="4" oninput="saveCondition(parse = Number(this.value))">
            <label for="condition-good">4</label>
            <!-- 5 -->
            <input type="radio" id="condition-verygood" name="condition" value="5" oninput="saveCondition(parse = Number(this.value))">
            <label for="condition-verygood">5</label>
        </div>
    </div>
    <div class="notesWrap">
    <label for="notes">Notater:</label>
    <textarea id="notes" oninput="saveNotes(this.value)"></textarea>
    </div>
<form>
    <button class="SaveInputBtn" onclick="saveNewLog()">Lagre</button>
`
}

//-----------------------SKJEKK DET MED AT TING BLIR STRING (Number) Parse var svaret :)
