//-----------------Lene

//function sidebarToggle() {              // funskjon som åpner og lukker Sidebar-en
// sidebarOpen = !sidebarOpen;             // Toggler mellom False og true verdi
//if (sidebarOpen) {
//console.log("sidebar-en er åpen")
//} else {
//console.log("sidebar-en er stengt")
//}
//}

//--------------------------------onclick functions for sidebar buttons
function changeViewToHomepage() {
    model.app.currentPage = 'homepage';
    changeView();
}
function changeViewToLogList() {
    model.app.currentPage = 'logList';
    changeView();
}
//function changeViewToStatistics() {currentpage = 'statistics' changeView();}
function changeViewToLogIn() {
    //need some log out funtion?
    //current user = ''; ?
    model.app.currentPage = 'logIn';
    changeView();
}
