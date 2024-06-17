function introducirPalabra(){
	let palabra;
	
	palabra=prompt("Introduce la palabra");
	
	let palabraEscondida=palabra.length;
	
	for(let i=0;i<palabra.length;i++){
		palabraEscondida[i]="*";
	}
}