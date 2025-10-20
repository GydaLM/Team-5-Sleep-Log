//average is the sum of the numbers divided on the amount of numbers
//functions to find average of sleep quality, sleep length and condition during the day

const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
console.log(currentUserLogs)
function averageQuality(){
    let sum = 0;
    for(let log of currentUserLogs.lists){
        console.log(log.timeSleptNum)
        sum += log.timeSleptNum;
        console.log('total sleep time:', sum)
    }
    let avg = sum/currentUserLogs.lists.length;
    console.log('average sleep time:', avg);
    return avg;
}
function averageLength(){

}
function averageCondition(){

}

// // Hvis registeredLogs har flere instanser av userId: 1, så kommer den til å bare finne den første
// // Finner objektet og loggene til bruker som er "innlogget" med currentUser
// const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser)
// console.log(currentUserLogs)
// for(let log of currentUserLogs.lists){
//     console.log(log)
// }
