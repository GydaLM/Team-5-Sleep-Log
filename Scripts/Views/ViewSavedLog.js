function updateSavedLog(){
    const currentUserLogs = model.data.registeredLogs.find(logs => logs.userID === model.app.currentUser);
    
    return /*HTML*/ `
    
    <h1>Here is your selected log</h1>
    `
}