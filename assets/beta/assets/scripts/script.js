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
}
updateLiveLocations()
//End Live Locations

//Main 
const mainHTMLElements = [
    [
        `<div class="main-container-frame-div">
        <p>Bienvenue sur le Tableau de Bord du Mister X IRL, cliquez sur le bouton ci-dessous pour commencer.<br><br>Pour votre informations, voici le nombre d'équipes selon le nombre de joueurs (en comptant Mister X et le gérant):<br>4 joueurs (minimum) → 1 équipe de 2<br>5 joueurs → 1 équipe de 3<br>6 joueurs → 2 équipes de 2<br>7 joueurs → 1 équipe de 2 et 1 équipe de 3<br>8 joueurs → 3 équipes de 2<br>9 joueurs → 3 équipes de 2 et 1 équipe de 3<br>10 joueurs → 4 équipes de 2</p>
        <button id="btn-1" class="main-container-frame-btn" onclick="mainBtnFunction(1)">Continuer</button>
        </div>`,
        `<div class="main-container-frame-div">
        <p>Bienvenue sur le Test</p>
        <button id="btn-1" class="main-container-frame-btn" onclick="mainBtnFunction(0)">Débuter la partie</button>
        </div>`,
    ]
];

function mainBtnFunction(index){
    let nextHTMLElements = mainHTMLElements[0][index];
    let actualHTMLElements = document.querySelector('.main-container-frame-div');
    let frame = document.querySelector('.main-container-frame');
    actualHTMLElements.remove();
    frame.innerHTML = nextHTMLElements;
}
//End Main
