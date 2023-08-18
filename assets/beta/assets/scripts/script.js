//Beta 3

//Creating Variables
let areCardinalDirectionsActive = localStorage.getItem('areCardinalDirectionsActive');
let areAlertNotificationsActive = localStorage.getItem('areAlertNotificationsActive');
let sendNotificationsToDiscord = localStorage.getItem('sendNotificationsToDiscord');
let sendLogingToDiscord = localStorage.getItem('sendLogingToDiscord');

function createVariables() {
    if (!(areCardinalDirectionsActive)){
        localStorage.setItem('areCardinalDirectionsActive', 'true')
    }
    if (!(areAlertNotificationsActive)){
        localStorage.setItem('areAlertNotificationsActive', 'true')
    }
    if (!(sendNotificationsToDiscord)){
        localStorage.setItem('sendNotificationsToDiscord', 'true')
    }
    if (!(sendLogingToDiscord)){
        localStorage.setItem('sendLogingToDiscord', 'true')
    }
    sessionStorage.setItem('doesTeam2Exist', 'false');
    sessionStorage.setItem('doesTeam3Exist', 'false');
    sessionStorage.setItem('doesTeam4Exist', 'false');
    sessionStorage.setItem('misterx-location', '0');
    sessionStorage.setItem('team1-location', '0');
    sessionStorage.setItem('team2-location', '0');
    sessionStorage.setItem('team3-location', '0');
    sessionStorage.setItem('team4-location', '0');
    sessionStorage.setItem('roundNumber', '0');
}
createVariables();

//Intro
function deleteIntroContainer() {
    let container = document.querySelector('.introContainer');
    container.remove();
    const mainDiv = document.querySelector('.main-div');
    mainDiv.classList.add('main-div-open');
}
setTimeout(() => {deleteIntroContainer()}, 6800);
//End Intro

//Menu
const openMenuBtn = document.getElementById('menu-toggle');
openMenuBtn.addEventListener('click', function() {
    const span = document.querySelectorAll('.menu-toggle-span');
    span.forEach((item)=>{
        item.classList.toggle('menu-toggle-open');
    })
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('menu-container-open')
})
//End Menu

//Settings
const menuSettingsSwitchContainerOne = document.getElementById('menu-settings-switch-container-one');
const menuSettingsSwitchBtnOne = document.getElementById('menu-settings-switch-btn-one');
const menuSettingsSwitchContainerTwo = document.getElementById('menu-settings-switch-container-two');
const menuSettingsSwitchBtnTwo = document.getElementById('menu-settings-switch-btn-two');
const menuSettingsSwitchContainerThree = document.getElementById('menu-settings-switch-container-three');
const menuSettingsSwitchBtnThree = document.getElementById('menu-settings-switch-btn-three');
const menuSettingsSwitchContainerFour = document.getElementById('menu-settings-switch-container-four');
const menuSettingsSwitchBtnFour = document.getElementById('menu-settings-switch-btn-four');

function updateSettingsSwitchBtn(){
    let areCardinalDirectionsActive = localStorage.getItem('areCardinalDirectionsActive');
    let areAlertNotificationsActive = localStorage.getItem('areAlertNotificationsActive');
    let sendNotificationsToDiscord = localStorage.getItem('sendNotificationsToDiscord');
    let sendLogingToDiscord = localStorage.getItem('sendLogingToDiscord');
    if(areCardinalDirectionsActive=='true'){
        menuSettingsSwitchContainerOne.classList.add('menu-settings-switch-container-true');
        menuSettingsSwitchBtnOne.classList.add('menu-settings-switch-btn-true');
    }else if(areCardinalDirectionsActive=='false'){
        menuSettingsSwitchContainerOne.classList.remove('menu-settings-switch-container-true');
        menuSettingsSwitchBtnOne.classList.remove('menu-settings-switch-btn-true');
    }
    if(areAlertNotificationsActive=='true'){
        menuSettingsSwitchContainerTwo.classList.add('menu-settings-switch-container-true');
        menuSettingsSwitchBtnTwo.classList.add('menu-settings-switch-btn-true');
    }else if(areAlertNotificationsActive=='false'){
        menuSettingsSwitchContainerTwo.classList.remove('menu-settings-switch-container-true');
        menuSettingsSwitchBtnTwo.classList.remove('menu-settings-switch-btn-true');
    }
    if(sendNotificationsToDiscord=='true'){
        menuSettingsSwitchContainerThree.classList.add('menu-settings-switch-container-true');
        menuSettingsSwitchBtnThree.classList.add('menu-settings-switch-btn-true');
    }else if(sendNotificationsToDiscord=='false'){
        menuSettingsSwitchContainerThree.classList.remove('menu-settings-switch-container-true');
        menuSettingsSwitchBtnThree.classList.remove('menu-settings-switch-btn-true');
    }
    if(sendLogingToDiscord=='true'){
        menuSettingsSwitchContainerFour.classList.add('menu-settings-switch-container-true');
        menuSettingsSwitchBtnFour.classList.add('menu-settings-switch-btn-true');
    }else if(sendLogingToDiscord=='false'){
        menuSettingsSwitchContainerFour.classList.remove('menu-settings-switch-container-true');
        menuSettingsSwitchBtnFour.classList.remove('menu-settings-switch-btn-true');
    }
}
updateSettingsSwitchBtn();

menuSettingsSwitchBtnOne.addEventListener('click', function(){
    let areCardinalDirectionsActive = localStorage.getItem('areCardinalDirectionsActive');
    if(areCardinalDirectionsActive=='true'){
        localStorage.setItem('areCardinalDirectionsActive', 'false')
        updateSettingsSwitchBtn();
    }else if(areCardinalDirectionsActive=='false'){
        localStorage.setItem('areCardinalDirectionsActive', 'true')
        updateSettingsSwitchBtn();
    }
})
menuSettingsSwitchBtnTwo.addEventListener('click', function(){
    let areAlertNotificationsActive = localStorage.getItem('areAlertNotificationsActive');
    if(areAlertNotificationsActive=='true'){
        localStorage.setItem('areAlertNotificationsActive', 'false')
        updateSettingsSwitchBtn();
    }else if(areAlertNotificationsActive=='false'){
        localStorage.setItem('areAlertNotificationsActive', 'true')
        updateSettingsSwitchBtn();
    }
})
menuSettingsSwitchBtnThree.addEventListener('click', function(){
    let sendNotificationsToDiscord = localStorage.getItem('sendNotificationsToDiscord');
    if(sendNotificationsToDiscord=='true'){
        localStorage.setItem('sendNotificationsToDiscord', 'false')
        updateSettingsSwitchBtn();
    }else if(sendNotificationsToDiscord=='false'){
        localStorage.setItem('sendNotificationsToDiscord', 'true')
        updateSettingsSwitchBtn();
    }
})
menuSettingsSwitchBtnFour.addEventListener('click', function(){
    let sendLogingToDiscord = localStorage.getItem('sendLogingToDiscord');
    if(sendLogingToDiscord=='true'){
        localStorage.setItem('sendLogingToDiscord', 'false')
        updateSettingsSwitchBtn();
    }else if(sendLogingToDiscord=='false'){
        localStorage.setItem('sendLogingToDiscord', 'true')
        updateSettingsSwitchBtn();
    }
})
//End Settings

//Loging
const menuSettingsBoxLoging = document.getElementById('menu-settings-box-loging');
const logingContainerCloseBtn = document.getElementById('loging-container-close');
const logingContainer = document.querySelector('.loging-container');
menuSettingsBoxLoging.addEventListener('click', function(){
    logingContainer.classList.toggle('loging-container-open');
})
logingContainerCloseBtn.addEventListener('click', function(){
    logingContainer.classList.toggle('loging-container-open');
})
//End Loging

//Live Locations
const openLiveLocationsBtn = document.getElementById('menu-locations-btn');
const liveLocationsTopBar = document.querySelector('.live-locations-div-topbar');
const liveLocationsContainerDiv = document.querySelector('.live-locations-div');
openLiveLocationsBtn.addEventListener('click', function() {
    liveLocationsContainerDiv.classList.toggle('live-locations-div-open');
})
liveLocationsTopBar.addEventListener('click', function() {
    liveLocationsContainerDiv.classList.toggle('live-locations-div-open');
})

const liveLocationsElementOne = document.getElementById('live-locations-element-one');
const liveLocationsElementTwo = document.getElementById('live-locations-element-two');
const liveLocationsElementThree = document.getElementById('live-locations-element-three');
const liveLocationsElementFour = document.getElementById('live-locations-element-four');
const liveLocationsElementFive = document.getElementById('live-locations-element-five');
function updateLiveLocations(){
    let loc1 = sessionStorage.getItem('misterx-location');
    let loc2 = sessionStorage.getItem('team1-location');
    let loc3 = sessionStorage.getItem('team2-location');
    let loc4 = sessionStorage.getItem('team3-location');
    let loc5 = sessionStorage.getItem('team4-location');
    liveLocationsElementOne.innerText = loc1;
    liveLocationsElementTwo.innerText = loc2;
    liveLocationsElementThree.innerText = loc3;
    liveLocationsElementFour.innerText = loc4;
    liveLocationsElementFive.innerText = loc5;
    if(loc1==loc2 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementTwo.style.backgroundColor = `var(--dark-green)`;
        gameWon("team1");
    }
    if(loc1==loc3 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementThree.style.backgroundColor = `var(--dark-green)`;
        gameWon("team2");
    }
    if(loc1==loc4 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementFour.style.backgroundColor = `var(--dark-green)`;
        gameWon("team3");
    }
    if(loc1==loc5 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementFive.style.backgroundColor = `var(--dark-green)`;
        gameWon("team4");
    }
}
updateLiveLocations()
//End Live Locations

//Main 
let mainHTMLElements = [
    [
        `<div class="main-container-frame-div">
        <p>Bienvenue sur le Tableau de Bord du Mister X IRL, cliquez sur le bouton ci-dessous pour commencer.<br><br>Pour votre informations, voici le nombre d'équipes selon le nombre de joueurs (en comptant Mister X et le gérant):<br>4 joueurs (minimum) → 1 équipe de 2<br>5 joueurs → 1 équipe de 3<br>6 joueurs → 2 équipes de 2<br>7 joueurs → 1 équipe de 2 et 1 équipe de 3<br>8 joueurs → 3 équipes de 2<br>9 joueurs → 3 équipes de 2 et 1 équipe de 3<br>10 joueurs → 4 équipes de 2</p>
        <button id="btn-blue" class="main-container-frame-btn" onclick="mainBtnFunction(1)">Continuer</button>
        </div>`,
        `<div class="main-container-frame-div">
        <p>Pour commencer sélectionnez le nombre d'équipes de chercheurs:</p>
        <select name="numberOfTeam" class="main-container-frame-select" id="numberOfTeamSelect">
            <option value="oneTeam">1 équipe</option>
            <option value="twoTeams">2 équipes</option>
            <option value="threeTeams">3 équipes</option>
            <option value="fourTeams">4 équipes</option>
        </select><br>
        <button id="btn-green" class="main-container-frame-btn" onclick="selectNumberOfTeam(); mainBtnFunction(2)">Valider</button>
        </div>`,
        `<div class="main-container-frame-div">
        <p>Équipe 1:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p>
        <input type="text" class="main-container-frame-input" id="playerNameSelectT1P1">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT1P2">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT1P3"><br>
        <button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(1)">Valider</button>
        </div>`,
        `<div class="main-container-frame-div">
        <p>Équipe 2:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p>
        <input type="text" class="main-container-frame-input" id="playerNameSelectT2P1">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT2P2">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT2P3"><br>
        <button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(2)">Valider</button>
        </div>`,
        `<div class="main-container-frame-div">
        <p>Équipe 3:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p>
        <input type="text" class="main-container-frame-input" id="playerNameSelectT3P1">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT3P2">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT3P3"><br>
        <button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(3)">Valider</button>
        </div>`,
        `<div class="main-container-frame-div">
        <p>Équipe 4:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p>
        <input type="text" class="main-container-frame-input" id="playerNameSelectT4P1">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT4P2">
        <input type="text" class="main-container-frame-input" id="playerNameSelectT4P3"><br>
        <button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(4)">Valider</button>
        </div>`,
        ``, //Page 6 Generated by the page6GetPlayersNames() function
        ``, //Page 7 Generated by the generateLocations() function
    ]
];

function gameWon(team){
    console.log(team)
}

function mainBtnFunction(index){
    let nextHTMLElements = mainHTMLElements[0][index];
    let actualHTMLElements = document.querySelector('.main-container-frame-div');
    let frame = document.querySelector('.main-container-frame');
    actualHTMLElements.remove();
    frame.innerHTML = nextHTMLElements;
}
function selectNumberOfTeam(){
    let dropdown = document.getElementById('numberOfTeamSelect');
    if(dropdown.value == "oneTeam"){
        sessionStorage.setItem('doesTeam2Exist', 'false');
        sessionStorage.setItem('doesTeam3Exist', 'false');
        sessionStorage.setItem('doesTeam4Exist', 'false');
    }else if (dropdown.value == "twoTeams"){
        sessionStorage.setItem('doesTeam2Exist', 'true');
        sessionStorage.setItem('doesTeam3Exist', 'false');
        sessionStorage.setItem('doesTeam4Exist', 'false');
    }
    else if (dropdown.value == "threeTeams"){
        sessionStorage.setItem('doesTeam2Exist', 'true');
        sessionStorage.setItem('doesTeam3Exist', 'true');
        sessionStorage.setItem('doesTeam4Exist', 'false');
    }
    else if (dropdown.value == "fourTeams"){
        sessionStorage.setItem('doesTeam2Exist', 'true');
        sessionStorage.setItem('doesTeam3Exist', 'true');
        sessionStorage.setItem('doesTeam4Exist', 'true');
    }
}
function selectPlayersNames(index){
    let doesTeam2Exist = sessionStorage.getItem('doesTeam2Exist');
    let doesTeam3Exist = sessionStorage.getItem('doesTeam3Exist');
    let doesTeam4Exist = sessionStorage.getItem('doesTeam4Exist');
    if(index==1){
        let name1 = document.getElementById('playerNameSelectT1P1').value;
        let name2 = document.getElementById('playerNameSelectT1P2').value;
        let name3 = document.getElementById('playerNameSelectT1P3').value;
        if(name3==""){
            sessionStorage.setItem('team1PlayerName1', name1);
            sessionStorage.setItem('team1PlayerName2', name2);
            sessionStorage.setItem('team1PlayerName3', 'false');
        }else {
            sessionStorage.setItem('team1PlayerName1', name1);
            sessionStorage.setItem('team1PlayerName2', name2);
            sessionStorage.setItem('team1PlayerName3', name3);
        }
        if(doesTeam2Exist=="true"){
            mainBtnFunction(3);
        }else if(doesTeam2Exist=="false"){
            page6GetPlayersNames();
            mainBtnFunction(6);
        }
    }
    if(index==2){
        let name1 = document.getElementById('playerNameSelectT2P1').value;
        let name2 = document.getElementById('playerNameSelectT2P2').value;
        let name3 = document.getElementById('playerNameSelectT2P3').value;
        if(name3==""){
            sessionStorage.setItem('team2PlayerName1', name1);
            sessionStorage.setItem('team2PlayerName2', name2);
            sessionStorage.setItem('team2PlayerName3', 'false');
        }else {
            sessionStorage.setItem('team2PlayerName1', name1);
            sessionStorage.setItem('team2PlayerName2', name2);
            sessionStorage.setItem('team2PlayerName3', name3);
        }
        if(doesTeam3Exist=="true"){
            mainBtnFunction(4);
        }else if(doesTeam3Exist=="false"){
            page6GetPlayersNames();
            mainBtnFunction(6);
        }
    }
    if(index==3){
        let name1 = document.getElementById('playerNameSelectT3P1').value;
        let name2 = document.getElementById('playerNameSelectT3P2').value;
        let name3 = document.getElementById('playerNameSelectT3P3').value;
        if(name3==""){
            sessionStorage.setItem('team3PlayerName1', name1);
            sessionStorage.setItem('team3PlayerName2', name2);
            sessionStorage.setItem('team3PlayerName3', 'false');
        }else {
            sessionStorage.setItem('team3PlayerName1', name1);
            sessionStorage.setItem('team3PlayerName2', name2);
            sessionStorage.setItem('team3PlayerName3', name3);
        }
        if(doesTeam4Exist=="true"){
            mainBtnFunction(5);
        }else if(doesTeam4Exist=="false"){
            page6GetPlayersNames();
            mainBtnFunction(6);
        }
    }
    if(index==4){
        let name1 = document.getElementById('playerNameSelectT4P1').value;
        let name2 = document.getElementById('playerNameSelectT4P2').value;
        let name3 = document.getElementById('playerNameSelectT4P3').value;
        if(name3==""){
            sessionStorage.setItem('team4PlayerName1', name1);
            sessionStorage.setItem('team4PlayerName2', name2);
            sessionStorage.setItem('team4PlayerName3', 'false');
        }else {
            sessionStorage.setItem('team4PlayerName1', name1);
            sessionStorage.setItem('team4PlayerName2', name2);
            sessionStorage.setItem('team4PlayerName3', name3);
        }
        page6GetPlayersNames();
        mainBtnFunction(6);
    }
}
function page6GetPlayersNames(){
    let doesTeam2Exist = sessionStorage.getItem('doesTeam2Exist');
    let doesTeam3Exist = sessionStorage.getItem('doesTeam3Exist');
    let doesTeam4Exist = sessionStorage.getItem('doesTeam4Exist');
    let T1P1 = sessionStorage.getItem('team1PlayerName1');
    let T1P2 = sessionStorage.getItem('team1PlayerName2');
    let T1P3 = sessionStorage.getItem('team1PlayerName3');
    let T2P1 = sessionStorage.getItem('team2PlayerName1');
    let T2P2 = sessionStorage.getItem('team2PlayerName2');
    let T2P3 = sessionStorage.getItem('team2PlayerName3');
    let T3P1 = sessionStorage.getItem('team3PlayerName1');
    let T3P2 = sessionStorage.getItem('team3PlayerName2');
    let T3P3 = sessionStorage.getItem('team3PlayerName3');
    let T4P1 = sessionStorage.getItem('team4PlayerName1');
    let T4P2 = sessionStorage.getItem('team4PlayerName2');
    let T4P3 = sessionStorage.getItem('team4PlayerName3');
    let T1 =``;
    let T2 = ``;
    let T3 = ``;
    let T4 = ``;
    if(T1P3=="false"){
        T1 = `${T1P1}, ${T1P2}`;
    }else {
        T1 = `${T1P1}, ${T1P2}, ${T1P3}`;
    }
    if(doesTeam2Exist=="true"){
        if(T2P3=="false"){
            T2 = `<p>Équipe 2: ${T2P1}, ${T2P2}</p>`;
        }else {
            T2 = `<p>Équipe 2: ${T2P1}, ${T2P2}, ${T2P3}</p>`;
        }
    }
    if(doesTeam3Exist=="true"){
        if(T3P3=="false"){
            T3 = `<p>Équipe 3: ${T3P1}, ${T3P2}</p>`;
        }else {
            T3 = `<p>Équipe 3: ${T3P1}, ${T3P2}, ${T3P3}</p>`;
        }
    }
    if(doesTeam4Exist=="true"){
        if(T4P3=="false"){
            T4 = `<p>Équipe 4: ${T4P1}, ${T4P2}</p>`;
        }else {
            T4 = `<p>Équipe 4: ${T4P1}, ${T4P2}, ${T4P3}</p>`;
        }
    }

    mainHTMLElements[0][6] = `
        <div class="main-container-frame-div">
        <p>Voici les équipes:</p>
        <p>Équipe 1: ${T1}</p>
        ${T2}
        ${T3}
        ${T4}
        <button id="btn-purple" class="main-container-frame-btn" onclick="generateLocations()">Continuer</button>
        </div>`;
}
function generateLocations() {
    let locations = [
        `4`,
        `6`,
        `11`,
        `13`,
        `16`,
        `19`,
        `26`,
        `28`,
        `30`,
        `34`,
        `39`,
        `44`,
        `49`,
        `58`,
        `62`,
        `65`,
        `68`,
        `72`,
        `75`,
        `77`,
        `79`,
        `84`,
        `86`,
        `90`,
        `96`,
        `102`,
        `106`,
        `111`,
    ];
    let doesTeam2Exist = sessionStorage.getItem('doesTeam2Exist');
    let doesTeam3Exist = sessionStorage.getItem('doesTeam3Exist');
    let doesTeam4Exist = sessionStorage.getItem('doesTeam4Exist');
    let T2 = ``;
    let T3 = ``;
    let T4 = ``;

    let mxLocation = locations[(Math.floor(Math.random() * locations.length))];
    const indexmx = locations.indexOf(mxLocation);
    locations.splice(indexmx, 1);
    sessionStorage.setItem('misterx-location', mxLocation);
    let t1Location = locations[(Math.floor(Math.random() * locations.length))];
    const indext1 = locations.indexOf(t1Location);
    locations.splice(indext1, 1);
    sessionStorage.setItem('team1-location', t1Location);
    if(doesTeam2Exist=="true"){
        let t2Location = locations[(Math.floor(Math.random() * locations.length))];
        const indext2 = locations.indexOf(t1Location);
        locations.splice(indext2, 1);
        sessionStorage.setItem('team2-location', t2Location);
        T2 = `<p>Équipe 2: ${t2Location}</p>`;
    }
    if(doesTeam3Exist=="true"){
        let t3Location = locations[(Math.floor(Math.random() * locations.length))];
        const indext3 = locations.indexOf(t3Location);
        locations.splice(indext3, 1);
        sessionStorage.setItem('team3-location', t3Location);
        T3 = `<p>Équipe 3: ${t3Location}</p>`;
    }
    if(doesTeam4Exist=="true"){
        let t4Location = locations[(Math.floor(Math.random() * locations.length))];
        const indext4 = locations.indexOf(t4Location);
        locations.splice(indext4, 1);
        sessionStorage.setItem('team4-location', t4Location);
        T4 = `<p>Équipe 4: ${t4Location}</p>`;
    }
    mainHTMLElements[0][7] = `
        <div class="main-container-frame-div">
        <p>Voici les positions de base qui ont été générées:</p>
        <p>Mister X: ${mxLocation}</p>
        <p>Équipe 1: ${t1Location}</p>
        ${T2}
        ${T3}
        ${T4}
        <p>Lorsque toutes les équipes se seront déplacées vers leur point de départ, cliquez sur le bouton ci-dessous:</p>
        <button id="btn-green" class="main-container-frame-btn" onclick="startGame()">Commencer la partie</button>
        </div>`;
    mainBtnFunction(7);
    updateLiveLocations()
}
function startGame(){
    let liveAnimationBtn = document.querySelector('.menu-locations-span-two');
    liveAnimationBtn.classList.toggle('menu-locations-span-two-start');
    sessionStorage.setItem('roundNumber', '1')
    updateRoundNumber()
    mainBtnFunction(8)
}
function updateRoundNumber(){
    let roundNumber = sessionStorage.getItem('roundNumber');
    let roundNumberTitle = document.getElementById('roundTitle');
    roundNumberTitle.innerHTML = "Tour N°" + roundNumber;
}
//End Main
