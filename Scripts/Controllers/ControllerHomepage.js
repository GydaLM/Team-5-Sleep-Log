//----Gyda

function editOptimalBedtime(){
    model.viewstate.editBedtime = true;
    changeView()
}
function saveOptimalBedtime(){
    const currentUser = model.data.registeredUser.find(user => user.userID === model.app.currentUser);

    if(!model.viewstate.optimalBedtime){
        model.viewstate.editBedtime = false;
        changeView()
        return;
    }

    if(currentUser){
        currentUser.optimalBedtime = model.viewstate.optimalBedtime;
    }
    model.viewstate.editBedtime = false;
    emptyOptimalBedtime()
    changeView()
}
function emptyOptimalBedtime(){
    model.viewstate.optimalBedtime = '';
}

//average is the sum of the numbers divided on the amount of numbers

//functions to find average of sleep quality, sleep length and condition during the day
averageLength()
function averageLength(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    console.log(currentUserLogs)
    let count = 0;
    let sum = 0;
    //slice -7 takes the last 7 and makes sure it jumps out after that
    for(let log of currentUserLogs.lists.slice(-7)){
        console.log(log.timeSleptNum)
        if(log.timeSleptNum!=''){
            sum += log.timeSleptNum;
            count++
        }
        console.log('total sleep time:', sum)
    }
    let avg = sum/count;
    console.log('average sleep time in minutes:', avg);
    //finds the average in hours and then converts the remaining time into a round number
    const hours = Math.floor(avg/60);
    const minutes = Math.round(avg % 60);
    console.log(`Average sleep time ${hours}h ${minutes}min`);
    return {hours, minutes};
}
averageQuality()
function averageQuality(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    let count = 0;
    let sum = 0;
    for(let log of currentUserLogs.lists.slice(-7)){
        console.log(log.quality)
        if(log.quality!=''){
            sum += log.quality;
            count++
        }
    }
    let avg = sum/count;
    console.log('average quality:', avg);
    //Rounds the decimal to only be whole number or 0.5
    let avgRound = Math.round(avg*2)/2;
    return avgRound;
}
averageCondition()
function averageCondition(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    let count = 0;
    let sum = 0;
    for(let log of currentUserLogs.lists.slice(-7)){
        console.log(log.condition)
        if(log.condition!=''){
            sum += log.condition;
            count++
        }
    }
    let avg = sum/count;
    console.log('average condition:', avg);
    let avgRound = Math.round(avg*2)/2;
    return avgRound;
}

function getSleepColour(value){
    if(value >= 7 && value <= 9) return 'green';
    if(value >= 6 && value < 7 || value > 9 && value <= 10) return 'yellow';
    if(value < 6 || value > 10) return 'red';
}

//function to change current page to logInput
// function changeToLogInput(){
//     model.app.currentPage = 'logInput';
//     changeView();
// }

// // Hvis registeredLogs har flere instanser av userId: 1, så kommer den til å bare finne den første
// // Finner objektet og loggene til bruker som er "innlogget" med currentUser
// const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser)
// console.log(currentUserLogs)
// for(let log of currentUserLogs.lists){
//     console.log(log)
// }
