const model = {
    app:{
        main: document.getElementById('main'),
        currentPage:'homepage',
        pages: ['homepage','loglist','logInput','statistics','logIn'],
        curretUser:'',
    },
    //Her kommer viewstate
    viewstate:{
        average:{
            averageQuality:'',
            averageLength:'', 
            averageCondition:'',
        },
        registerLog:{
            logID:'',
            date:'',
            bedtime:'',
            attemptedSleep:'',
            fellAsleep:'',
            awoken:'',
            gotUp:'',
            sleepDisturbed:'',
            timeDisturbed:'',
            napTime:'',
            quality:'',
            condition:'',
            notes:'',
        },
        optimalSleep:'',
    },
    //Her kommer data
    data:{
        registeredUser:[
            {userID: 1, name:'Kenneth', password:'herSkalDetSoves', optimalSleep: 7,},
            {userID: 2, name:'Bjarne', password:'007', optimalSleep: 10,},
        ],
        registeredLogs:[
            //et objekt på dette nivået per bruker
            //bruker 1    
            {
            userID: 1,
            lists:[
                    //første logg
                    {
                        logID: 1,
                        date: 2025-10-20,
                        bedtime:'22:00',
                        attemptedSleep:'22:30',
                        fellAsleep:'23:00',
                        awoken:'07:00',
                        gotUp:'07:15',
                        sleepDisturbed:'1',
                        timeDisturbed:'15',
                        timeSlept:'7t 45min',
                        timeInBed:'9t 15min',
                        napTime:'25',
                        quality: 3,
                        condition: 4,
                        notes:'Våknet bare en gang i natt! Dette er en forbedring fra i går :)',
                    },
                    //andre logg
                    {
                        logID: 2,   
                        date: 2025-10-20,
                        bedtime:'22:00',
                        attemptedSleep:'22:30',
                        fellAsleep:'23:00',
                        awoken:'07:00',
                        gotUp:'07:15',
                        sleepDisturbed:'1',
                        timeDisturbed:'15',
                        timeSlept:'7t 45min',
                        timeInBed:'9t 15min',
                        napTime:'25',
                        quality: 3,
                        condition: 4,
                        notes:'Veldig deilig søvn',
                    },
                ],
            },
            //bruker 2
            {
                userID: 2,
                lists:[
                    //første logg
                    {
                        logID: 1,
                        date: 2025-10-21,
                        bedtime:'22:00',
                        attemptedSleep:'22:30',
                        fellAsleep:'23:00',
                        awoken:'07:00',
                        gotUp:'07:15',
                        sleepDisturbed:'1',
                        timeDisturbed:'15',
                        timeSlept:'7t 45min',
                        timeInBed:'9t 15min',
                        napTime:'25',
                        quality: 3,
                        condition: 4,
                        notes:'Veldig dårlig søvn',
                    },
                ],
            },
        ],
    },
}
