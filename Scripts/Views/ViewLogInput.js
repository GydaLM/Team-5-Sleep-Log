//-----------------Lene

function updateLogInput(){
    return /*HTML*/ `
    <div>${SideBar()}</div>
    <div>This is the LogInput!</div>

<input type="date">

    <div class="inputWrap">
        <h3>Leggetid:</h3><input>
        <h3>Prøvde å sovne:</h3><input>
        <h3>Sovnet:</h3><input>
    </div>
<br>
    <div class="inputWrap">
        <h3>Våknet:</h3><input>
        <h3>Sto på:</h3><input>
    </div>
<br>
    <div class="inputWrap">
        <h3>Våknet i natt:</h3><input>
        <h3>Tid våken:</h3><input>
        <h3>Lur-tid:</h3><input>
    </div>
    
`
}