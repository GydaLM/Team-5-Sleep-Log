//------ Remy (og Lene♥)

//


function saveRegisterLogBedtime(value){
    model.viewstate.registerLog.bedtime = value;
    console.log(value);
}

function saveDate(value){
    model.viewstate.registerLog.date = value;
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

        let bedtime = convertToMinutes(model.viewstate.registerLog.bedtime);
        let fellAsleep = convertToMinutes(model.viewstate.registerLog.fellAsleep);
        let awoken = convertToMinutes(model.viewstate.registerLog.awoken);
        let gotUp = convertToMinutes(model.viewstate.registerLog.gotUp);

        //check if we fall asleep after midnight
        if (bedtime > fellAsleep){
            //move forward one day
            fellAsleep += 24 * 60;
        }
        //repeat with the other variables

        if (bedtime > awoken){
            awoken += 24 * 60;
        }
        if (bedtime > gotUp){
            gotUp += 24 * 60;
        }

        let timeSleptNum = awoken - fellAsleep - model.viewstate.registerLog.timeDisturbed;
        let timeInBedNum = gotUp - bedtime;



        model.data.registeredLogs[i].lists.push(
            {
                logID: 10,
                date: model.viewstate.registerLog.date,
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
                timeSleptNum: timeSleptNum,
                timeSlept: `${Math.floor(timeSleptNum / 60)}t ${Math.round(timeSleptNum % 60)}min`,
                timeInBed: `${Math.floor(timeInBedNum / 60)}t ${Math.round(timeInBedNum % 60)}min`,
            }
        )
      }  
    } 
    emptyRegisterLog()
    model.app.currentPage = 'logList';
    changeView()
}

function emptyRegisterLog(){
    model.viewstate.registerLog.notes = '';

}


//converting the timeinput stirngs to minutes since midnight ----Lene
function convertToMinutes(value){
    let [hours,minutes] = value.split(":").map((x) => Number(x));
    return hours * 60 + minutes;
}

//function generateRandomID(){                
//    return Math.floor(Math.random() * 999)
//}