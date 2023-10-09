let names = [
    'Cloé',
    'Jéhanne',
    'Jérémy',
    'Lohan',
    'Louison',
    'Manon',
    'Matis',
    'Noah',
    'Noéline',
    'Sofia',
    'Valentin',
]

function generateHTMLElement(name){
    const elements = `
    <div class="name-options"><input type="checkbox" id="name-${name}" name="name-${name}"><label for="name-${name}">${name}</label></div>
    `
    let container = document.querySelector('.name-options-container')
    container.innerHTML += elements
}
function generateAllNames(){
    names.forEach((item) => {
        generateHTMLElement(item)
    })
}
function randomNameFunction(){
    let elements = document.querySelectorAll('.name-options')
    let presentNames = []
    elements.forEach((element) => {
        if (element.firstElementChild.checked){
            presentNames.push(element.lastElementChild.innerHTML)
        }
    })
    let randomNumber = Math.floor(Math.random() * presentNames.length)
    let randomName = presentNames[randomNumber]
    let nameContainer = document.querySelector('.random-name-container')
    if (randomName == null){
        nameContainer.innerHTML = `<p style="color:#f00;">Merci de sélectionner des prénoms !</p>`;
    }else {
        nameContainer.innerHTML = `<p style="color:#32d74b;">${randomName}</p>`;

    }
}
generateAllNames()
