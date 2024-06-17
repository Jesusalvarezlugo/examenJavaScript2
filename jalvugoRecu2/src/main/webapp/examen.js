lista=[];
/*function introducirPalabra(){
	var palabra;
	var palabraEscondida="";
	palabra=prompt("Introduce la palabra");
	palabraEscondida=palabra;
	
	for(let i=0;i<palabra.length;i++){
		palabraEscondida[i]="*";
		
		
	}
	
	lista.push([palabraEscondida]);
	mostrarPalabra();
	
	
}*/
var palabraEscondida=[];
/*function introducirPalabra(){
	let palabra;
	
	palabra=prompt("Introduce la palabra");
	
	
	
	for(let i=0;i<palabra.length;i++){
		palabraEscondida[i]="*";
	}
	
	lista.push([palabraEscondida]);
	mostrarPalabra();
}*/

function introducirLetra(){
	let letra;
	
	letra=prompt("introduce una letra");
	let contador;
	palabra=["p,u,e,r,t,a"]
	palabra=palabra.split(",")
	
	
		for(let i=0;i<palabra.length;i++){
		
		if(letra==palabra[i]){
			
			palabraEscondida[i]=letra;
			
		}
	}
	
	
	lista.push([palabraEscondida])
	mostrarPalabra();
	
	
}
function mostrarPalabra(){
	const ruta=document.getElementById("palabra");
	let escritura="";
	
	ruta.innerHTML="";
	
		escritura+="<p>"+lista[0]+"</p>";
		
	ruta.innerHTML+="<div>"+escritura+"</div>";
}