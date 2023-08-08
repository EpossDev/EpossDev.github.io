const roundData = [
    [
        "<ol><li>⚠️ Avant de commencer la partie:</li><li>Aller dans Début de partie, et générer les positions des différentes équipes</li><li>Chaque équipe doit aller à la position qui lui a été assignée</li><li>Les équipes doivent de connecter à l'appel (Discord)<li>La partie peut commencer ! Cliquez sur suivant</ol><button id='desactivateCLoc' onclick='stopCLocalisations()'>Désactiver les indices cardinaux des déplacements de Mister X</button><button id='desactivateNotifications' onclick='stopNotifications()'>Désactiver les notifications</button> ", //Round 0 // roundData[0][0]
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>", //Round 1
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 3, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ Mister X a annoncé sa position au Tour précédent, il va donc utiliser un déplacement mystère !</li><li>Mister X change de position en annonçant un déplacement mystère</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 8, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ Mister X a annoncé sa position au Tour précédent, il va donc utiliser un déplacement mystère !</li><li>Mister X change de position en annonçant un déplacement mystère</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 13, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ Mister X a annoncé sa position au Tour précédent, il va donc utiliser un déplacement mystère !</li><li>Mister X change de position en annonçant un déplacement mystère</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 18, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ Mister X a annoncé sa position au Tour précédent, il va donc utiliser un déplacement mystère !</li><li>Mister X change de position en annonçant un déplacement mystère</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 23, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ Mister X a annoncé sa position au Tour précédent, il va donc utiliser un déplacement mystère !</li><li>Mister X change de position en annonçant un déplacement mystère</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 26, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ Mister X a annoncé sa position au Tour précédent, il va donc utiliser un déplacement mystère !</li><li>Mister X change de position en annonçant un déplacement mystère</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>Mister X change de position en annonçant la direction cardinal de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 29, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 30, Mister X va donc annoncer sa position !</li><li>Mister X change de position en annonçant le numéro de la station vers laquelle il se rend</li><li>Les équipes de chercheurs se déplacent en annonçant le numéro de la station vers laquelle ils se rendent (chaque équipe doit se déplacer vers une station différente)</li></ol>",
        "<ol><li>⚠️ On est au Tour 31, Aucune équipe n'a réussi à atteindre Mister X ! Mister X est le vainqueur de la partie ! ⚠️</li></ol>",
    ]
]



const containerNotification = document.querySelector('.container-notifications');
const containerloging = document.querySelector('.log-container');

const divTitle = document.querySelectorAll('.div-title');

const locNumber1 = document.getElementById("locNumber1");
const locNumber2 = document.getElementById("locNumber2");
const locNumber3 = document.getElementById("locNumber3");
const locNumber4 = document.getElementById("locNumber4");
const locNumber5 = document.getElementById("locNumber5");

const roundNumberTitle = document.getElementById("roundNumberTitle");
const roundInstructionsContainer = document.querySelector('.roundInstructionsContainer');

let roundNumber = 0
let areNotificationsActive = true

function stopCLocalisations() {
    let div = document.getElementById('cardinalIndex');
    div.style.display = "none";
    notification("⚠️ Les indices cardinaux pour les déplacements de Mister X ont été désactivés !")
}
function stopNotifications() {
    notification("⚠️ Les notifications ont été désactivées !")
    areNotificationsActive = false
}

function notification(text) {
    if (areNotificationsActive == true){
        const notification = document.createElement('div');
        notification.classList.add('toast-notification');
        notification.innerText = text;
        containerNotification.appendChild(notification);
        setTimeout(function(){
        notification.remove();
        }, 7200);
    }
}
function log(text) {
    const log = document.createElement('div');
    log.classList.add('loging');
    log.innerText = text;
    containerloging.appendChild(log);
}

function updateRound() {
    roundNumberTitle.innerHTML = `Tour N°${roundNumber}`
    roundInstructionsContainer.innerHTML = roundData[0][roundNumber]
}
function previousRound() {
    if (roundNumber == 0) {
        roundNumber = 0;
    }else {
        roundNumber = roundNumber - 1;
        updateRound();
    }
}
function nextRound() {
    if (roundNumber == 31) {
        roundNumber = 31;
    }else {
        roundNumber = roundNumber + 1;
        updateRound();
    }
}

function copyText1() {
    var dropdown = document.getElementById("cardinalSelect");
    var Text = `🔵 L'**Équipe Mister X** s'est déplacée vers** ${dropdown.options[dropdown.selectedIndex].text}**`;
    navigator.clipboard.writeText(Text);
    notification("🔵 Texte copié dans le presse-papier !");
    log(`🔵 L'Équipe Mister X s'est déplacée vers ${dropdown.options[dropdown.selectedIndex].text}`);
}
function copyText2() {
    var dropdown = document.getElementById("teamSelect");
    var numberSelect = document.getElementById("stationNumber")
    var Text = `🟢 L'**${dropdown.options[dropdown.selectedIndex].text}** s'est déplacée vers la **Station N°${numberSelect.value}**`;
    navigator.clipboard.writeText(Text);
    notification("🟢 Texte copié dans le presse-papier !");
    log(`🟢 L'${dropdown.options[dropdown.selectedIndex].text} s'est déplacée vers la Station N°${numberSelect.value}`)
}
function copyText3() {
    var dropdown = document.getElementById("roundSelect");
    var numberSelect = document.getElementById("stationNumber2")
    var Text = `🔴 On est au **Tour N°${dropdown.options[dropdown.selectedIndex].text}**, **Mister X** doit révéler sa **position** ! Il est à la **Station N°${numberSelect.value}** ! ⚠️`;
    navigator.clipboard.writeText(Text);
    notification("🔴 Texte copié dans le presse-papier !");
    log(`🔴 On est au Tour N°${dropdown.options[dropdown.selectedIndex].text}, Mister X doit révéler sa position ! Il est à la Station N°${numberSelect.value} ! ⚠️`)
}
function copyText4() {
    var Text = `🟠 **Mister X** a utilisé un **déplacement mystère** ! ❓`;
    navigator.clipboard.writeText(Text);
    notification("🟠 Texte copié dans le presse-papier !");
    log(`🟠 Mister X a utilisé un déplacement mystère ! ❓`)
}




divTitle.forEach((item)=>{
    item.addEventListener('click', function(){
        const next = item.nextElementSibling;
        next.classList.toggle('visible');
    })
})

locNumber1.addEventListener("change", (event) =>{
    notification(`🟤 Mister X s'est déplacé en ${locNumber1.value}`);
    log(`🟤 Mister X s'est déplacé en ${locNumber1.value}`)
})
locNumber2.addEventListener("change", (event) =>{
    notification(`🟤 L'Équipe 1 s'est déplacée en ${locNumber2.value}`);
    log(`🟤 L'Équipe 1 s'est déplacée en ${locNumber2.value}`);
    if (locNumber2.value == locNumber1.value) {
        locNumber1.parentElement.style.backgroundColor = "var(--dark-green)";
        locNumber2.parentElement.style.backgroundColor = "var(--dark-green)";
        notification(`⚠️ L'Équipe 1 a trouvé Mister X! ⚠️`);
        log(`⚠️ L'Équipe 1 a trouvé Mister X! ⚠️`)
    }
})
locNumber3.addEventListener("change", (event) =>{
    notification(`🟤 L'Équipe 2 s'est déplacée en ${locNumber3.value}`);
    log(`🟤 L'Équipe 2 s'est déplacée en ${locNumber3.value}`);
    if (locNumber3.value == locNumber1.value) {
        locNumber1.parentElement.style.backgroundColor = "var(--dark-green)";
        locNumber3.parentElement.style.backgroundColor = "var(--dark-green)";
        notification(`⚠️ L'Équipe 2 a trouvé Mister X! ⚠️`);
        log(`⚠️ L'Équipe 2 a trouvé Mister X! ⚠️`);
    }
})
locNumber4.addEventListener("change", (event) =>{
    notification(`🟤 L'Équipe 3 s'est déplacé en ${locNumber4.value}`);
    log(`🟤 L'Équipe 3 s'est déplacé en ${locNumber4.value}`);
    if (locNumber4.value == locNumber1.value) {
        locNumber1.parentElement.style.backgroundColor = "var(--dark-green)";
        locNumber4.parentElement.style.backgroundColor = "var(--dark-green)";
        notification(`⚠️ L'Équipe 3 a trouvé Mister X! ⚠️`);
        log(`⚠️ L'Équipe 3 a trouvé Mister X! ⚠️`);
    }
})
locNumber5.addEventListener("change", (event) =>{
    notification(`🟤 L'Équipe 4 s'est déplacé en ${locNumber5.value}`);
    log(`🟤 L'Équipe 4 s'est déplacé en ${locNumber5.value}`);
    if (locNumber5.value == locNumber1.value) {
        locNumber1.parentElement.style.backgroundColor = "var(--dark-green)";
        locNumber5.parentElement.style.backgroundColor = "var(--dark-green)";
        notification(`⚠️ L'Équipe 4 a trouvé Mister X! ⚠️`);
        log(`⚠️ L'Équipe 4 a trouvé Mister X! ⚠️`);
    }
})

function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
    x = offsetX/zoomer.offsetWidth*100;
    y = offsetY/zoomer.offsetHeight*100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

function numberGenerator(event){
    let btn = document.getElementById(event);
    let number = Math.floor(Math.random() * 116) + 1;
    btn.innerHTML = `Position de base: ${number}`
}

updateRound()