//V.2.0.0 Beta 1

function currentTimeInMinutes(){
	let currentDate = new Date();
	let hour = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	return minutes+(hour*60);
}
function setSkyBackground(){
	let t = currentTimeInMinutes();
	let bg = document.querySelector('.sky-background');
	if(t>=30 && t<90 || t>=1410){
		bg.style.background = "var(--sky23)"
	}else if(t>=90 && t<150){
		bg.style.background = "var(--sky1)"
	}else if(t>=150 && t<210){
		bg.style.background = "var(--sky2)"
	}else if(t>=210 && t<270){
		bg.style.background = "var(--sky3)"
	}else if(t>=270 && t<330){
		bg.style.background = "var(--sky4)"
	}else if(t>=330 && t<390){
		bg.style.background = "var(--sky5)"
	}else if(t>=390 && t<450){
		bg.style.background = "var(--sky6)"
	}else if(t>=450 && t<510){
		bg.style.background = "var(--sky7)"
	}else if(t>=510 && t<570){
		bg.style.background = "var(--sky8)"
	}else if(t>=570 && t<630){
		bg.style.background = "var(--sky9)"
	}else if(t>=630 && t<690){
		bg.style.background = "var(--sky10)"
	}else if(t>=690 && t<750){
		bg.style.background = "var(--sky11)"
	}else if(t>=750 && t<810){
		bg.style.background = "var(--sky12)"
	}else if(t>=810 && t<870){
		bg.style.background = "var(--sky13)"
	}else if(t>=870 && t<930){
		bg.style.background = "var(--sky14)"
	}else if(t>=930 && t<990){
		bg.style.background = "var(--sky15)"
	}else if(t>=990 && t<1050){
		bg.style.background = "var(--sky16)"
	}else if(t>=1050 && t<1110){
		bg.style.background = "var(--sky17)"
	}else if(t>=1110 && t<1170){
		bg.style.background = "var(--sky18)"
	}else if(t>=1170 && t<1230){
		bg.style.background = "var(--sky19)"
	}else if(t>=1230 && t<1290){
		bg.style.background = "var(--sky20)"
	}else if(t>=1290 && t<1350){
		bg.style.background = "var(--sky21)"
	}else if(t>=1350 && t<1410){
		bg.style.background = "var(--sky22)"
	}
}
setSkyBackground();
