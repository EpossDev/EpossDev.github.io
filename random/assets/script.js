//V.1.0 Beta 3

//Creating Variables
let startMessage = localStorage.getItem('RandomSelector-startMessage');
let elementsList = localStorage.getItem('RandomSelector-elements');
if(elementsList){
    elementsList = JSON.parse(elementsList);
};
function createVariables(){
    if (!(elementsList)){
        l = [];
        localStorage.setItem('RandomSelector-elements', JSON.stringify(l));
    };
    if (!(startMessage)){
        localStorage.setItem('RandomSelector-startMessage', false);
    }else if(startMessage == 'true'){
        document.getElementById('start-message-wrap').remove();
    };
};
createVariables();

function generateHTMLCheckbox(e){
    const elements = `
    <div class="element-checkbox" id="${e}"><input type="checkbox" id="element-${e}" name="element-${e}"><label for="element-${e}">${e}</label><div class="deleteBtn"><i class="fa-solid fa-trash-can"></i></div></div>
    `;
    let container = document.querySelector('.elements-checkboxes-container');
    container.innerHTML += elements;
    addDeleteEventListener()
};

function generateAllCheckboxes(){
    if(elementsList != null){
        elementsList.forEach((item) => {
            generateHTMLCheckbox(item);
        });
    };
};


function randomElementFunction(){
    let elements = document.querySelectorAll('.element-checkbox');
    let selectedElements = [];
    elements.forEach((element) => {
        if (element.firstElementChild.checked){
            selectedElements.push(element.id)
        };
    });
    selectedElements.sort();
    let r = selectedElements[0];
    let eContainer = document.querySelector('.random-element-container');
    if (r == null){
        eContainer.innerHTML = `<p style="color:#f00; font-size: 2.5rem; font-weight: bold; padding: 2rem 0;">Merci de sélectionner des éléments !</p>`;
    }else {
        eContainer.innerHTML = `<p style="color:#32d74b; font-size: 2.5rem; font-weight: bold; padding: 2rem 0;">${selectedElements[Math.round(rng.next(1,selectedElements.length))-1]}</p>`;
    };
};

function addElementToList(){
    let h = document.getElementById('newElementInput');
    let e = h.value;
    if(elementsList != null){
        elementsList.push(e);
    }else {
        elementsList = [e];
    };
    localStorage.setItem('RandomSelector-elements', JSON.stringify(elementsList));
    generateHTMLCheckbox(e);
};

function addDeleteEventListener(){
    let deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach(i => {
        i.addEventListener('click', function(){
            let p = i.parentElement;
            let index = elementsList.indexOf(p.id);
            elementsList.splice(index, 1);
            localStorage.setItem('RandomSelector-elements', JSON.stringify(elementsList));
            p.remove();
        })
    })
}

generateAllCheckboxes();

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
let numberToUse = Math.floor(`${year}${day}${month}`);
//CustomRandom function created by MichalBe on https://michalbe.blogspot.com/2011/02/javascript-random-numbers-with-custom_23.html
var CustomRandom = function(nseed) {    
    var seed,
      constant = Math.pow(2, 13)+1,
      prime = 1987,
      maximum = 1000;
      if (nseed) {
        seed = nseed;
      }
      if (seed == null) {
        seed = (new Date()).getTime();
      }
      return {
        next : function(min, max) { 
          seed *= constant;
          seed += prime;
          return min && max ? min+seed%maximum/maximum*(max-min) : seed%maximum/maximum;
        }    
      }
  }  
var rng = CustomRandom(numberToUse);
