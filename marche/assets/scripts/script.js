//Creating Variables
let isDarkModeActive = localStorage.getItem('isDarkModeActive');
let localUsername = localStorage.getItem('localUsername');

function createVariables() {
    if (!(isDarkModeActive)){
        localStorage.setItem('isDarkModeActive', 'false')
    }
    if (!(localUsername)){
        localStorage.setItem('localUsername', 'false')
    }
}
createVariables();

function setTheme(){
    let isDarkModeActive = localStorage.getItem('isDarkModeActive');
    if (isDarkModeActive=='true'){
        document.documentElement.style.setProperty('--primary', '#000');
        document.documentElement.style.setProperty('--secondary', '#1c1c1c');
        document.documentElement.style.setProperty('--tertiary', '#2c2c2c');
        document.documentElement.style.setProperty('--text-primary', '#fff');
        document.documentElement.style.setProperty('--text-secondary', '#ccc');
    }else if(isDarkModeActive=='false'){
        document.documentElement.style.setProperty('--primary', '#fff');
        document.documentElement.style.setProperty('--secondary', '#f0f0f0');
        document.documentElement.style.setProperty('--tertiary', '#fff');
        document.documentElement.style.setProperty('--text-primary', '#000');
        document.documentElement.style.setProperty('--text-secondary', '#555');
    }
}
setTheme();

function changeTheme(){
    let isDarkModeActive = localStorage.getItem('isDarkModeActive');
    if (isDarkModeActive=='true'){
        localStorage.setItem('isDarkModeActive', 'false')
        setTheme()
    }else if(isDarkModeActive=='false'){
        localStorage.setItem('isDarkModeActive', 'true')
        setTheme()
    }
}

function resetUsername(){
	let localUsername = localStorage.getItem('localUsername');
	if (localUsername!='false'){
		let container = document.querySelector('.usernameSelectContainer');
		container.remove()
	}
}
resetUsername()

function setUsername(){
	let inputText = document.getElementById("usernameInput");
	localStorage.setItem('localUsername', inputText.value)
	let container = document.querySelector('.usernameSelectContainer');
	container.remove()
}

function sendMessageToDiscordFunction(text){
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1388104848809136291/KVQ7k0RafHO2l10Lji4q3tLd7U3N6xEUjMG-nwW2VSjDPkpLdXc-sJKW7y70a_ZtIIWo");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {content: text}
    request.send(JSON.stringify(params));
}

function finalize(){
	let username = localStorage.getItem('localUsername');
	let proname = document.getElementById("proNameSelect");
	let name = document.getElementById("articleName");
	let cat = document.getElementById("articleCatSelect");
	let price = document.getElementById("price");
	let text = `>>> **${username}** a conclu une vente !\n ** ${name.value} ** (*${cat.options[cat.selectedIndex].text}*) de ** ${proname.options[proname.selectedIndex].value} ** a été vendu pour ** ${price.value} €**.`;
	sendMessageToDiscordFunction(text);
	
}

