//V.1.1

//Creating Variables
let areCardinalDirectionsActive = localStorage.getItem('areCardinalDirectionsActive');
let sendNotificationsToDiscord = localStorage.getItem('sendNotificationsToDiscord');
let sendLogingToDiscord = localStorage.getItem('sendLogingToDiscord');
let lastGameData = localStorage.getItem('lastGameData');

function createVariables() {
    if (!(areCardinalDirectionsActive)){
        localStorage.setItem('areCardinalDirectionsActive', 'true')
    }
    if (!(sendNotificationsToDiscord)){
        localStorage.setItem('sendNotificationsToDiscord', 'true')
    }
    if (!(sendLogingToDiscord)){
        localStorage.setItem('sendLogingToDiscord', 'true')
    }
    if (!(lastGameData)){
        localStorage.setItem('lastGameData', '0')
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
    let sendNotificationsToDiscord = localStorage.getItem('sendNotificationsToDiscord');
    let sendLogingToDiscord = localStorage.getItem('sendLogingToDiscord');
    if(areCardinalDirectionsActive=='true'){
        menuSettingsSwitchContainerOne.classList.add('menu-settings-switch-container-true');
        menuSettingsSwitchBtnOne.classList.add('menu-settings-switch-btn-true');
    }else if(areCardinalDirectionsActive=='false'){
        menuSettingsSwitchContainerOne.classList.remove('menu-settings-switch-container-true');
        menuSettingsSwitchBtnOne.classList.remove('menu-settings-switch-btn-true');
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
    let team1PlayerName1 = sessionStorage.getItem('team1PlayerName1');
    let team1PlayerName2 = sessionStorage.getItem('team1PlayerName2');
    let team1PlayerName3 = sessionStorage.getItem('team1PlayerName3');
    let team2PlayerName1 = sessionStorage.getItem('team2PlayerName1');
    let team2PlayerName2 = sessionStorage.getItem('team2PlayerName2');
    let team2PlayerName3 = sessionStorage.getItem('team2PlayerName3');
    let team3PlayerName1 = sessionStorage.getItem('team3PlayerName1');
    let team3PlayerName2 = sessionStorage.getItem('team3PlayerName2');
    let team3PlayerName3 = sessionStorage.getItem('team3PlayerName3');
    let team4PlayerName1 = sessionStorage.getItem('team4PlayerName1');
    let team4PlayerName2 = sessionStorage.getItem('team4PlayerName2');
    let team4PlayerName3 = sessionStorage.getItem('team4PlayerName3');
    if(loc1==loc2 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementTwo.style.backgroundColor = `var(--dark-green)`;
        if(team1PlayerName3=="false"){
            gameWon(1, `Équipe 1 [${team1PlayerName1}, ${team1PlayerName2}]`);
        }else {
            gameWon(1, `Équipe 1 [${team1PlayerName1}, ${team1PlayerName2}, ${team1PlayerName3}]`);
        }
        setGameData(2);
    }
    if(loc1==loc3 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementThree.style.backgroundColor = `var(--dark-green)`;
        if(team2PlayerName3=="false"){
            gameWon(1, `Équipe 2 [${team2PlayerName1}, ${team2PlayerName2}]`);
        }else {
            gameWon(1, `Équipe 2 [${team2PlayerName1}, ${team2PlayerName2}, ${team2PlayerName3}]`);
        }
        setGameData(2);
    }
    if(loc1==loc4 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementFour.style.backgroundColor = `var(--dark-green)`;
        if(team3PlayerName3=="false"){
            gameWon(1, `Équipe 3 [${team3PlayerName1}, ${team3PlayerName2}]`);
        }else {
            gameWon(1, `Équipe 3 [${team3PlayerName1}, ${team3PlayerName2}, ${team3PlayerName3}]`);
        }
        setGameData(2);
    }
    if(loc1==loc5 && !(loc1==0)){
        liveLocationsElementOne.style.backgroundColor = `var(--dark-green)`;
        liveLocationsElementFive.style.backgroundColor = `var(--dark-green)`;
        if(team4PlayerName3=="false"){
            gameWon(1, `Équipe 4 [${team4PlayerName1}, ${team4PlayerName2}]`);
        }else {
            gameWon(1, `Équipe 4 [${team4PlayerName1}, ${team4PlayerName2}, ${team4PlayerName3}]`);
        }
        setGameData(2);
    }
}
updateLiveLocations()
//End Live Locations

//Main 
let mainHTMLElements = [
    [
        `<div class="main-container-frame-div"><p>Bienvenue sur le Tableau de Bord du Mister X IRL, cliquez sur le bouton ci-dessous pour commencer.<br><br>Pour votre informations, voici le nombre d'équipes selon le nombre de joueurs (en comptant Mister X et le gérant):<br>4 joueurs (minimum) → 1 équipe de 2<br>5 joueurs → 1 équipe de 3<br>6 joueurs → 2 équipes de 2<br>7 joueurs → 1 équipe de 2 et 1 équipe de 3<br>8 joueurs → 3 équipes de 2<br>9 joueurs → 3 équipes de 2 et 1 équipe de 3<br>10 joueurs → 4 équipes de 2</p><button id="btn-blue" class="main-container-frame-btn" onclick="mainBtnFunction(1)">Continuer</button></div>`,
        `<div class="main-container-frame-div"><p>Pour commencer sélectionnez le nombre d'équipes de chercheurs:</p><select name="numberOfTeam" class="main-container-frame-select" id="numberOfTeamSelect"><option value="oneTeam">1 équipe</option><option value="twoTeams">2 équipes</option><option value="threeTeams">3 équipes</option><option value="fourTeams">4 équipes</option></select><br><button id="btn-green" class="main-container-frame-btn" onclick="selectNumberOfTeam(); mainBtnFunction(2)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Équipe 1:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p><input type="text" class="main-container-frame-input" id="playerNameSelectT1P1"><input type="text" class="main-container-frame-input" id="playerNameSelectT1P2"><input type="text" class="main-container-frame-input" id="playerNameSelectT1P3"><br><button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(1)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Équipe 2:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p><input type="text" class="main-container-frame-input" id="playerNameSelectT2P1"><input type="text" class="main-container-frame-input" id="playerNameSelectT2P2"><input type="text" class="main-container-frame-input" id="playerNameSelectT2P3"><br><button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(2)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Équipe 3:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p><input type="text" class="main-container-frame-input" id="playerNameSelectT3P1"><input type="text" class="main-container-frame-input" id="playerNameSelectT3P2"><input type="text" class="main-container-frame-input" id="playerNameSelectT3P3"><br><button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(3)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Équipe 4:<br>Complétez avec les noms des joueurs (si une équipe ne contient que 2 joueurs, laissez la dernière case vide):</p><input type="text" class="main-container-frame-input" id="playerNameSelectT4P1"><input type="text" class="main-container-frame-input" id="playerNameSelectT4P2"><input type="text" class="main-container-frame-input" id="playerNameSelectT4P3"><br><button id="btn-green" class="main-container-frame-btn" onclick="selectPlayersNames(4)">Valider</button></div>`,
        ``, //Page 6 Generated by the page6GetPlayersNames() function
        ``, //Page 7 Generated by the generateLocations() function
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,9)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,10)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,11)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,12)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,13)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,14)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,15)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,16)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,17)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,18)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,19)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,20)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,21)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,22)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,23)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,24)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,25)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,26)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,27)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,28)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,29)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,30)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,31)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,32)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,33)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,34)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,35)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(136)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,37)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,38)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,39)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,40)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,41)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,42)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,43)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,44)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,45)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,46)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,47)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,48)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,49)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,50)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,51)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,52)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,53)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,54)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,55)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,56)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,57)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,58)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,59)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,60)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,61)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,62)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Mister X se déplace !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-indigo" class="main-container-frame-btn" onclick="moveMisterX(1,63)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,64)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,65)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,66)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X a révélé sa position au dernier tour, son prochain déplacement sera mystère !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-orange" class="main-container-frame-btn" onclick="moveMisterX(3,67)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,68)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ Mister X va devoir révéler sa position à ce tour !<br>Sélectionnez le numéro de la station vers laquelle il se rend:</p><input type="number" class="main-container-frame-input" id="misterXLocationSelect" min="1" max="116"><p>Puis sélectionnez la direction cardinal vers laquelle il se rend:</p><select class="main-container-frame-select" id="cardinalSelect1"><option value="team1">le Nord ⬆️</option><option value="team1">le Nord-Est ↗️</option><option value="team1">l'Est ➡️</option><option value="team1">le Sud-Est ↘️</option><option value="team1">le Sud ⬇️</option><option value="team1">le Sud-Ouest ↙️</option><option value="team1">l'Ouest ⬅️</option><option value="team1">le Nord-Ouest ↖️</option></select><br><button id="btn-red" class="main-container-frame-btn" onclick="moveMisterX(2,69)">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>Les Équipes se déplacent !<br>Sélectionnez le numéro de la station vers chaque équipe se rend (laissez un vide pour les équipes ne jouant pas):<br>Équipe 1:</p><input type="number" class="main-container-frame-input" id="team1LocationSelect" min="1" max="116"><p>Équipe 2:</p><input type="number" class="main-container-frame-input" id="team2LocationSelect" min="1" max="116"><p>Équipe 3:</p><input type="number" class="main-container-frame-input" id="team3LocationSelect" min="1" max="116"><p>Équipe 4:</p><input type="number" class="main-container-frame-input" id="team4LocationSelect" min="1" max="116"><br><button id="btn-mint" class="main-container-frame-btn" onclick="moveTeams(1,70);gameWon(2);setGameData(2);">Valider</button></div>`,
        `<div class="main-container-frame-div"><p>⚠️ On est au Tour N°31, aucune équipe n'a réussi a trouver Mister X !<br>Mister X a gagné ! 🏆</p></div>`,
        ``, //Page 71 Generated by the gameWon() function
    ]
];

function gameWon(index, team){
    let roundNumber = sessionStorage.getItem('roundNumber');
    if(index==1){
        let textLog = `⚠️ On est au Tour N°${roundNumber}, l'${team} a trouvé Mister X ! Félicitations ! 🏆`;
        let textMessage = `⚠️ On est au **Tour N°${roundNumber}, l'${team} a trouvé Mister X** ! Félicitations ! 🏆`;
        createLog(textLog);
        sendMessageToDiscordFunction(textMessage);
        mainHTMLElements[0][71] = `<div class="main-container-frame-div">
        <p>⚠️ On est au Tour N°${roundNumber}, l'${team} a trouvé Mister X ! Félicitations ! 🏆</p>
        </div>`;
        mainBtnFunction(71);
    }else if(index==2){
        let textLog = `⚠️ On est au Tour N°${roundNumber}, aucune équipe n'a réussi a trouver Mister X !<br>Mister X a gagné ! 🏆`;
        let textMessage = `⚠️ On est au **Tour N°${roundNumber}, aucune équipe n'a réussi a trouver Mister X** !<br>Mister X a gagné ! 🏆`;
        createLog(textLog);
        sendMessageToDiscordFunction(textMessage);
    }
}

function mainBtnFunction(index){
    let nextHTMLElements = mainHTMLElements[0][index];
    let actualHTMLElements = document.querySelector('.main-container-frame-div');
    let frame = document.querySelector('.main-container-frame');
    actualHTMLElements.remove();
    frame.innerHTML = nextHTMLElements;
    setGameData(1);
}
function selectNumberOfTeam(){
    let dropdown = document.getElementById('numberOfTeamSelect');
    let liveLocationElementTeam2 = document.getElementById('live-locations-element-three');
    let liveLocationElementTeam3 = document.getElementById('live-locations-element-four');
    let liveLocationElementTeam4 = document.getElementById('live-locations-element-five');
    if(dropdown.value == "oneTeam"){
        sessionStorage.setItem('doesTeam2Exist', 'false');
        sessionStorage.setItem('doesTeam3Exist', 'false');
        sessionStorage.setItem('doesTeam4Exist', 'false');
        liveLocationElementTeam2.remove();
        liveLocationElementTeam3.remove();
        liveLocationElementTeam4.remove();
    }else if (dropdown.value == "twoTeams"){
        sessionStorage.setItem('doesTeam2Exist', 'true');
        sessionStorage.setItem('doesTeam3Exist', 'false');
        sessionStorage.setItem('doesTeam4Exist', 'false');
        liveLocationElementTeam3.remove();
        liveLocationElementTeam4.remove();
    }
    else if (dropdown.value == "threeTeams"){
        sessionStorage.setItem('doesTeam2Exist', 'true');
        sessionStorage.setItem('doesTeam3Exist', 'true');
        sessionStorage.setItem('doesTeam4Exist', 'false');
        liveLocationElementTeam4.remove();
    }
    else if (dropdown.value == "fourTeams"){
        sessionStorage.setItem('doesTeam2Exist', 'true');
        sessionStorage.setItem('doesTeam3Exist', 'true');
        sessionStorage.setItem('doesTeam4Exist', 'true');
    }
    setGameData(1);
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
    setGameData(1);
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

    setGameData(1);
}
function generateLocations() {
    let locations = [
        `4`,`6`,`11`,`13`,`16`,`19`,`26`,`28`,`30`,`34`,`39`,`44`,`49`,`58`,`62`,`65`,`68`,`72`,`75`,`77`,`79`,`84`,`86`,`90`,`96`,`102`,`106`,`111`,
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
        <p>Lorsque toutes les équipes se seront déplacées vers leur point de départ, et que chaque équipe se sera connecté à l'appel, cliquez sur le bouton ci-dessous:<br>(Pour votre information, le sélecteur de direction cardinal est affiché même si vous l'avez désactivé dans les paramètres, vous devrez tout de même le compléter, cependant les équipes ne recevront pas cette information, elle est juste utilisée dans le loging.)</p>
        <button id="btn-green" class="main-container-frame-btn" onclick="startGame()">Commencer la partie</button>
        </div>`;
    mainBtnFunction(7);
    updateLiveLocations();
    setGameData(1);
}
function startGame(){
    let liveAnimationBtn = document.querySelector('.menu-locations-span-two');
    liveAnimationBtn.classList.toggle('menu-locations-span-two-start');
    sessionStorage.setItem('roundNumber', '1')
    updateRoundNumber();
    mainBtnFunction(8);
    setGameData(1);
}
function updateRoundNumber(){
    let roundNumber = sessionStorage.getItem('roundNumber');
    let roundNumberTitle = document.getElementById('roundTitle');
    roundNumberTitle.innerHTML = "Tour N°" + roundNumber;
    createLog(roundNumberTitle.innerHTML);
    sendMessageToDiscordFunction(`**${roundNumberTitle.innerHTML}**`);
    setGameData(1);
}
function createLog(text){
    let logContainer = document.querySelector('.loging-container-scrollbox');
    let HTMLelement = document.createElement('p');
    let time = currentTime();
    HTMLelement.innerHTML = `${time} ${text}`;
    logContainer.appendChild(HTMLelement);

    let sendLogingToDiscordVar = localStorage.getItem('sendLogingToDiscord');
    if (sendLogingToDiscordVar=="true"){
        sendLogingToDiscordFunction(`${time} ${text}`);
    }
}
function sendMessageToDiscordFunction(text) {
    let sendMessageToDiscordVar = localStorage.getItem('sendNotificationsToDiscord');
    if (sendMessageToDiscordVar=="true"){
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1140628962117177354/111DRrxxskLzuRlwASMS_gGMX0esztCyVbloR6vrX7I2uTh1HSNy7E5sv-WVfIDiFkld");
        request.setRequestHeader('Content-type', 'application/json');
        const params = {content: text}
        request.send(JSON.stringify(params));
    }
}
function sendLogingToDiscordFunction(text) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1140638111831969913/GfC1WuI_OT_ZYHnXVtk_O-lnPwWa9HsrMSIyjo-hBRc2o_yTWLi-LGML5WScbRhLFaJt");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {content: text}
    request.send(JSON.stringify(params));
}
function moveMisterX(index, nextIndex){
    let number = document.querySelector('.main-container-frame-input').value;
    let dropdown = document.querySelector('.main-container-frame-select');
    let cardinal = dropdown.options[dropdown.selectedIndex].text;
    let areCardinalDirectionsActive = localStorage.getItem('areCardinalDirectionsActive');
    let roundNumber = sessionStorage.getItem('roundNumber');
    if(index==1){
        let textLog = `🔵 Mister X se déplace vers ${cardinal}, il va à la station ${number} !`;
        let textMessage = ``;
        if(areCardinalDirectionsActive=="true"){
            textMessage = `🔵 **Mister X** se déplace vers **${cardinal}** !`;
        }else if(areCardinalDirectionsActive=="false"){
            textMessage = `🔵 **Mister X** s'est déplacé !`;
        }
        createLog(textLog);
        sendMessageToDiscordFunction(textMessage);
        sessionStorage.setItem('misterx-location', number);
        updateLiveLocations();
        mainBtnFunction(nextIndex);
    }else if(index==2){
        let textLog = `🔴 On est au Tour N°${roundNumber}, Mister X doit révéler sa position ! Il est à la Station N°${number}! ⚠️`;
        let textMessage = `🔴 On est au **Tour N°${roundNumber}, Mister X doit révéler sa position** ! Il est à la **Station N°${number}**! ⚠️`;
        createLog(textLog);
        sendMessageToDiscordFunction(textMessage);
        sessionStorage.setItem('misterx-location', number);
        updateLiveLocations();
        mainBtnFunction(nextIndex);
    }
    else if(index==3){
        let number = document.querySelector('.main-container-frame-input').value;
        let dropdown = document.querySelector('.main-container-frame-select');
        let cardinal = dropdown.options[dropdown.selectedIndex].text;
        let textLog = `🟠 Mister X a utilisé un déplacement mystère ! ❓ Il s'est déplacé vers ${cardinal}, à la Station N°${number}`;
        let textMessage = `🟠 **Mister X** a utilisé un **déplacement mystère** ! ❓`;
        createLog(textLog);
        sendMessageToDiscordFunction(textMessage);
        sessionStorage.setItem('misterx-location', number);
        mainBtnFunction(nextIndex);
        updateLiveLocations();
    }
    setGameData(1);
}
function moveTeams(index, nextIndex){
    if(index==1){
        let number1 = document.getElementById('team1LocationSelect').value;
        let number2 = document.getElementById('team2LocationSelect').value;
        let number3 = document.getElementById('team3LocationSelect').value;
        let number4 = document.getElementById('team4LocationSelect').value;
        let textLog1 = ``;
        let textLog2 = ``;
        let textLog3 = ``;
        let textLog4 = ``;
        let textMessage1 = ``;
        let textMessage2 = ``;
        let textMessage3 = ``;
        let textMessage4 = ``;
        let doesTeam2Exist = sessionStorage.getItem('doesTeam2Exist');
        let doesTeam3Exist = sessionStorage.getItem('doesTeam3Exist');
        let doesTeam4Exist = sessionStorage.getItem('doesTeam4Exist');
        let team1PlayerName1 = sessionStorage.getItem('team1PlayerName1');
        let team1PlayerName2 = sessionStorage.getItem('team1PlayerName2');
        let team1PlayerName3 = sessionStorage.getItem('team1PlayerName3');
        let team2PlayerName1 = sessionStorage.getItem('team2PlayerName1');
        let team2PlayerName2 = sessionStorage.getItem('team2PlayerName2');
        let team2PlayerName3 = sessionStorage.getItem('team2PlayerName3');
        let team3PlayerName1 = sessionStorage.getItem('team3PlayerName1');
        let team3PlayerName2 = sessionStorage.getItem('team3PlayerName2');
        let team3PlayerName3 = sessionStorage.getItem('team3PlayerName3');
        let team4PlayerName1 = sessionStorage.getItem('team4PlayerName1');
        let team4PlayerName2 = sessionStorage.getItem('team4PlayerName2');
        let team4PlayerName3 = sessionStorage.getItem('team4PlayerName3');

        if(team1PlayerName3=="false"){
            textLog1 = `🟢 L'Équipe 1 [${team1PlayerName1}, ${team1PlayerName2}], s'est déplacée vers la station N°${number1} !`;
            textMessage1 = `🟢 L'**Équipe 1 [${team1PlayerName1}, ${team1PlayerName2}]**, s'est déplacée vers la **station N°${number1}** !`;
        }else {
            textLog1 = `🟢 L'Équipe 1 [${team1PlayerName1}, ${team1PlayerName2}, ${team1PlayerName3}], s'est déplacée vers la station N°${number1} !`;
            textMessage1 = `🟢 L'**Équipe 1 [${team1PlayerName1}, ${team1PlayerName2}, ${team1PlayerName3}]**, s'est déplacée vers la **station N°${number1}** !`;
        }
        createLog(textLog1);
        sendMessageToDiscordFunction(textMessage1);
        sessionStorage.setItem('team1-location', number1);
        if(doesTeam2Exist=="true"){
            if(team2PlayerName3=="false"){
                textLog2 = `🟢 L'Équipe 2 [${team2PlayerName1}, ${team2PlayerName2}], s'est déplacée vers la station N°${number2} !`;
                textMessage2 = `🟢 L'**Équipe 2 [${team2PlayerName1}, ${team2PlayerName2}]**, s'est déplacée vers la **station N°${number2}** !`;
            }else {
                textLog2 = `🟢 L'Équipe 2 [${team2PlayerName1}, ${team2PlayerName2}, ${team2PlayerName3}], s'est déplacée vers la station N°${number2} !`;
                textMessage2 = `🟢 L'**Équipe 2 [${team2PlayerName1}, ${team2PlayerName2}, ${team2PlayerName3}]**, s'est déplacée vers la **station N°${number2}** !`;
            }
            createLog(textLog2);
            sendMessageToDiscordFunction(textMessage2);
            sessionStorage.setItem('team2-location', number2);
        }
        if(doesTeam3Exist=="true"){
            if(team3PlayerName3=="false"){
                textLog3 = `🟢 L'Équipe 3 [${team3PlayerName1}, ${team3PlayerName2}], s'est déplacée vers la station N°${number3} !`;
                textMessage3 = `🟢 L'**Équipe 3 [${team3PlayerName1}, ${team3PlayerName2}]**, s'est déplacée vers la **station N°${number3}** !`;
            }else {
                textLog3 = `🟢 L'Équipe 3 [${team3PlayerName1}, ${team3PlayerName2}, ${team3PlayerName3}], s'est déplacée vers la station N°${number3} !`;
                textMessage3 = `🟢 L'**Équipe 3 [${team3PlayerName1}, ${team3PlayerName2}, ${team3PlayerName3}]**, s'est déplacée vers la **station N°${number3}** !`;
            }
            createLog(textLog3);
            sendMessageToDiscordFunction(textMessage3);
            sessionStorage.setItem('team3-location', number3);
        }
        if(doesTeam4Exist=="true"){
            if(team4PlayerName3=="false"){
                textLog4 = `🟢 L'Équipe 4 [${team4PlayerName1}, ${team4PlayerName2}], s'est déplacée vers la station N°${number4} !`;
                textMessage4 = `🟢 L'**Équipe 4 [${team4PlayerName1}, ${team4PlayerName2}]**, s'est déplacée vers la **station N°${number4}** !`;
            }else {
                textLog4 = `🟢 L'Équipe 4 [${team4PlayerName1}, ${team4PlayerName2}, ${team4PlayerName3}], s'est déplacée vers la station N°${number4} !`;
                textMessage4 = `🟢 L'**Équipe 4 [${team4PlayerName1}, ${team4PlayerName2}, ${team4PlayerName3}]**, s'est déplacée vers la **station N°${number4}** !`;
            }
            createLog(textLog4);
            sendMessageToDiscordFunction(textMessage4);
            sessionStorage.setItem('team4-location', number4);
        }
        mainBtnFunction(nextIndex);
        updateLiveLocations();
        let roundNumber = sessionStorage.getItem('roundNumber');
        sessionStorage.setItem('roundNumber', Number(roundNumber)+1);
        updateRoundNumber();
    }
    setGameData(1);
}
function currentTime(){
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let milliseconds = currentDate.getMilliseconds();
    let timeReturned = `[${year}-${month}-${day} | ${hour}:${minutes}:${seconds}:${milliseconds}]`;
    return timeReturned;
}
//End Main

//Last Game Data
function setGameData(index){

    let roundNumber = sessionStorage.getItem('roundNumber');
    let doesTeam2Exist = sessionStorage.getItem('doesTeam2Exist');
    let doesTeam3Exist = sessionStorage.getItem('doesTeam3Exist');
    let doesTeam4Exist = sessionStorage.getItem('doesTeam4Exist');
    let loc1 = sessionStorage.getItem('misterx-location');
    let loc2 = sessionStorage.getItem('team1-location');
    let loc3 = sessionStorage.getItem('team2-location');
    let loc4 = sessionStorage.getItem('team3-location');
    let loc5 = sessionStorage.getItem('team4-location');
    let T1PN1 = sessionStorage.getItem('team1PlayerName1');
    let T1PN2 = sessionStorage.getItem('team1PlayerName2');
    let T1PN3 = sessionStorage.getItem('team1PlayerName3');
    let T2PN1 = sessionStorage.getItem('team2PlayerName1');
    let T2PN2 = sessionStorage.getItem('team2PlayerName2');
    let T2PN3 = sessionStorage.getItem('team2PlayerName3');
    let T3PN1 = sessionStorage.getItem('team3PlayerName1');
    let T3PN2 = sessionStorage.getItem('team3PlayerName2');
    let T3PN3 = sessionStorage.getItem('team3PlayerName3');
    let T4PN1 = sessionStorage.getItem('team4PlayerName1');
    let T4PN2 = sessionStorage.getItem('team4PlayerName2');
    let T4PN3 = sessionStorage.getItem('team4PlayerName3');

    if (index == 1){
        localStorage.setItem(`lastGameData`, `${roundNumber};${doesTeam2Exist};${doesTeam3Exist};${doesTeam4Exist};${loc1};${loc2};${loc3};${loc4};${loc5};${T1PN1};${T1PN2};${T1PN3};${T2PN1};${T2PN2};${T2PN3};${T3PN1};${T3PN2};${T3PN3};${T4PN1};${T4PN2};${T4PN3}`);
        //* Round Number; Does Team 2 Exist; Does Team 3 Exist; Does Team 4 Exist; Mister X Location; Team 1 Location; Team 2 Location; Team 3 Location; Team 4 Location; Team 1 Player Name 1; T1PN2; T1PN3; T2PN1; T2PN2; T3PN3; T3PN1; T3PN2; T3PN3; T4PN1; T4PN2; T4PN3
    }else if (index == 2){
        localStorage.setItem(`lastGameData`, `0`);
    }
}

function checkGameData(){
    let lastGameData = localStorage.getItem('lastGameData');
    let lastGameDataArray = lastGameData.split(";");

    if (lastGameDataArray[0] != 0){
        sessionStorage.setItem('roundNumber', lastGameDataArray[0]);
        sessionStorage.setItem('doesTeam2Exist', lastGameDataArray[1]);
        sessionStorage.setItem('doesTeam3Exist', lastGameDataArray[2]);
        sessionStorage.setItem('doesTeam4Exist', lastGameDataArray[3]);
        sessionStorage.setItem('misterx-location', lastGameDataArray[4]);
        sessionStorage.setItem('team1-location', lastGameDataArray[5]);
        sessionStorage.setItem('team2-location', lastGameDataArray[6]);
        sessionStorage.setItem('team3-location', lastGameDataArray[7]);
        sessionStorage.setItem('team4-location', lastGameDataArray[8]);
        sessionStorage.setItem('team1PlayerName1', lastGameDataArray[9]);
        sessionStorage.setItem('team1PlayerName2', lastGameDataArray[10]);
        sessionStorage.setItem('team1PlayerName3', lastGameDataArray[11]);
        sessionStorage.setItem('team2PlayerName1', lastGameDataArray[12]);
        sessionStorage.setItem('team2PlayerName2', lastGameDataArray[13]);
        sessionStorage.setItem('team2PlayerName3', lastGameDataArray[14]);
        sessionStorage.setItem('team3PlayerName1', lastGameDataArray[15]);
        sessionStorage.setItem('team3PlayerName2', lastGameDataArray[16]);
        sessionStorage.setItem('team3PlayerName3', lastGameDataArray[17]);
        sessionStorage.setItem('team4PlayerName1', lastGameDataArray[18]);
        sessionStorage.setItem('team4PlayerName2', lastGameDataArray[19]);
        sessionStorage.setItem('team4PlayerName3', lastGameDataArray[20]);
        updateLiveLocations();
        updateRoundNumber();
        let indexNumber = parseInt(lastGameDataArray[0]);
        let index = (indexNumber-1)+indexNumber+7;
        mainBtnFunction(index);
    }
}

let inputFieldsMainContainer = document.querySelectorAll('.main-container-frame-input');
inputFieldsMainContainer.forEach((item) => {
    item.addEventListener("keypress", (e) => {
        console.log(e);
        if (e.key === ";") {
          e.preventDefault();
        }
    })
});
checkGameData();
//End Last Game Data
