//------ Remy

//


function saveRegisterLogBedtime(value){
    model.viewstate.registerLog.bedtime = value;
}

function saveAttemptedSleep(value){
    model.viewstate.registerLog.attemptedSleep = value;
}

function saveFellAsleep(value){
    model.viewstate.registerLog.fellAsleep = value;
}

function saveAwoken(value){
    model.viewstate.registerLog.awoken = value;
}

function saveGotUp(value){
    model.viewstate.registerLog.gotUp = value;
}

function saveSleepDisturbed(value){
    model.viewstate.registerLog.sleepDisturbed = value;
}

function saveTimeDisturbed(value){
    model.viewstate.registerLog.timeDisturbed = value;
}

function saveNapTime(value){
    model.viewstate.registerLog.napTime = value;
}

function saveQuality(value){
    model.viewstate.registerLog.quality = value;
}

function saveCondition(value){
    model.viewstate.registerLog.condition = value;
}

function saveNotes(value){
    model.viewstate.registerLog.notes = value;
}


function saveNewLog(){
    for(let i = 0; i < model.data.registeredLogs.length; i++){
      if(model.data.registeredLogs[i].userID == model.app.currentUser){
        model.data.registeredLogs[i].lists.push(
            {
                logID: generateRandomID(),
                date:'', //litt usikker på om noe skal legges inn i Date
                bedtime: model.viewstate.registerLog.bedtime,
                attemptedSleep: model.viewstate.registerLog.attemptedSleep,
                fellAsleep: model.viewstate.registerLog.fellAsleep,
                awoken: model.viewstate.registerLog.awoken,
                gotUp: model.viewstate.registerLog.gotUp,
                sleepDisturbed: model.viewstate.registerLog.sleepDisturbed,
                timeDisturbed: model.viewstate.registerLog.timeDisturbed,
                napTime: model.viewstate.registerLog.napTime,
                quality: model.viewstate.registerLog.quality,
                condition: model.viewstate.registerLog.condition,
                notes: model.viewstate.registerLog.notes,
            }
        )
      }  
    } 
    emptyRegisterLog()
}

function emptyRegisterLog(){
    model.viewstate.registerLog.notes = '';

}

function generateRandomID(){
    return Math.floor(Math.random() * 999)
}