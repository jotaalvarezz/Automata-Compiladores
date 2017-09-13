class Analizador{

	constructor(expresion){
		this.error=-1;
		this.aceptado=1;
		this.expresion=expresion;
		this.indice=0;
	}

	EstadoCero(){

		//console.log(this.expresion[this.indice]);

		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			//console.log(this.expresion[this.indice]);
			this.indice++;
			//console.log(this.indice);
			//console.log(this.expresion[this.indice]);
			return this.EstadoSeis();
		}
		//console.log(this.expresion[this.indice]);

		switch(this.expresion[this.indice++]){
			case '+': return this.EstadoUno();
			break;
			case '-': return this.EstadoDos();
			break;
			case '=': return this.EstadoTres();
			break;
			case '0': return this.error+";"+"ERROR!";
			break;
			case '1': return this.EstadoCuatro();
			break;
			case '2': return this.EstadoCuatro();
			break;
			case '3': return this.EstadoCuatro();
			break;
			case '4': return this.EstadoCuatro();
			break;
			case '5': return this.EstadoCuatro();
			break;
			case '6': return this.EstadoCuatro();
			break;
			case '7': return this.EstadoCuatro();
			break;
			case '8': return this.EstadoCuatro();
			break;
			case '9': return this.EstadoCuatro();
			break;
			case 'p': return this.EstadoOcho();
			break;
			case 'r': return this.EstadoSeis();
			break;
			case 'i': return this.EstadoSeis();
			break;
			case 'n': return this.EstadoSeis();
			break;
			case 't': return this.EstadoSeis();
			break;
			default: return console.log(this.error+" - "+"ERROR!");
		}

	}


	EstadoUno(){
			if(this.indice == this.expresion.length){
				console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"SUMA");
			}else{
				console.log(this.error+" - "+"ERROR!");
			}
	}

	EstadoDos(){
			if(this.indice == this.expresion.length){
				console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"RESTA");
			}else{
				console.log(this.error+" - "+"ERROR!");
			}
	}

	EstadoTres(){
			if(this.indice == this.expresion.length){
				console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"ASIGNAR");
			}else{
				console.log(this.error+" - "+"ERROR!");
			}
	}

	EstadoCuatro(){


		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			//console.log(this.expresion[this.indice]);
			this.indice++;
			return this.EstadoCinco();
		}


			switch(this.expresion[this.indice++]){
			case '+': return this.EstadoCinco();
			break;
			case '-': return this.EstadoCinco();
			break;
			case '=': return this.EstadoCinco();
			break;
			case '0': return this.EstadoCuatro();
			break;
			case '1': return this.EstadoCuatro();
			break;
			case '2': return this.EstadoCuatro();
			break;
			case '3': return this.EstadoCuatro();
			break;
			case '4': return this.EstadoCuatro();
			break;
			case '5': return this.EstadoCuatro();
			break;
			case '6': return this.EstadoCuatro();
			break;
			case '7': return this.EstadoCuatro();
			break;
			case '8': return this.EstadoCuatro();
			break;
			case '9': return this.EstadoCuatro();
			break;
			case 'p': return this.EstadoCinco();
			break;
			case 'r': return this.EstadoCinco();
			break;
			case 'i': return this.EstadoCinco();
			break;
			case 'n': return this.EstadoCinco();
			break;
			case 't': return this.EstadoCinco();
			break;
			default: return console.log(this.error+" - "+"ERROR!");
		}
	}

	EstadoCinco(){
		if(this.indice == this.expresion.length){
			console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"ENTERO");
		}else{
			console.log(this.error+" - "+"ERROR!");
		}
	}

	EstadoSeis(){


		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			console.log(this.expresion[this.indice]);
			this.indice++;
			return this.EstadoSeis();
		}
			//console.log(this.expresion[this.indice]);
			//console.log(this.indice+" "+this.expresion.length);

			switch(this.expresion[this.indice++]){
			case '+': return this.EstadoSiete();
			break;
			case '-': return this.EstadoSiete();
			break;
			case '=': return this.EstadoSiete();
			break;
			case '0': return this.EstadoSiete();
			break;
			case '1': return this.EstadoSiete();
			break;
			case '2': return this.EstadoSiete();
			break;
			case '3': return this.EstadoSiete();
			break;
			case '4': return this.EstadoSiete();
			break;
			case '5': return this.EstadoSiete();
			break;
			case '6': return this.EstadoSiete();
			break;
			case '7': return this.EstadoSiete();
			break;
			case '8': return this.EstadoSiete();
			break;
			case '9': return this.EstadoSiete();
			break;
			case 'p': return this.EstadoSeis();
			break;
			case 'r': return this.EstadoSeis();
			break;
			case 'i': return this.EstadoSeis();
			break;
			case 'n': return this.EstadoSeis();
			break;
			case 't': return this.EstadoSeis();
			break;
			default: return console.log(this.error+" - "+"ERROR!");
			break;
		}


	}

	EstadoSiete(){
		if(this.indice == this.expresion.length){
			console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"LETRAS");
		}else{
			console.log(this.error+" - "+"ERROR!");
		}
		/*}else if(this.indice < this.expresion.length){
			this.indice++;
			return this.EstadoCero();*/
	}

	EstadoOcho(){

		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			//console.log(this.expresion[this.indice]);
			this.indice++;
			return this.EstadoSeis();
		}


			switch(this.expresion[this.indice++]){
			case '+': return this.EstadoTrece();
			break;
			case '-': return this.EstadoTrece();
			break;
			case '=': return this.EstadoTrece();
			break;
			case '0': return this.EstadoTrece();
			break;
			case '1': return this.EstadoTrece();
			break;
			case '2': return this.EstadoTrece();
			break;
			case '3': return this.EstadoTrece();
			break;
			case '4': return this.EstadoTrece();
			break;
			case '5': return this.EstadoTrece();
			break;
			case '6': return this.EstadoTrece();
			break;
			case '7': return this.EstadoTrece();
			break;
			case '8': return this.EstadoTrece();
			break;
			case '9': return this.EstadoTrece();
			break;
			case 'p': return this.EstadoSeis();
			break;
			case 'r': return this.EstadoNueve();
			break;
			case 'i': return this.EstadoSeis();
			break;
			case 'n': return this.EstadoSeis();
			break;
			case 't': return this.EstadoSeis();
			break;
			default: return console.log(this.error+" - "+"ERROR!");	
		}
	}

	EstadoNueve(){
		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			//console.log(this.expresion[this.indice]);
			this.indice++;
			return this.EstadoSeis();
		}


			switch(this.expresion[this.indice++]){
			case '+': return this.EstadoTrece();
			break;
			case '-': return this.EstadoTrece();
			break;
			case '=': return this.EstadoTrece();
			break;
			case '0': return this.EstadoTrece();
			break;
			case '1': return this.EstadoTrece();
			break;
			case '2': return this.EstadoTrece();
			break;
			case '3': return this.EstadoTrece();
			break;
			case '4': return this.EstadoTrece();
			break;
			case '5': return this.EstadoTrece();
			break;
			case '6': return this.EstadoTrece();
			break;
			case '7': return this.EstadoTrece();
			break;
			case '8': return this.EstadoTrece();
			break;
			case '9': return this.EstadoTrece();
			break;
			case 'p': return this.EstadoSeis();
			break;
			case 'r': return this.EstadoSeis();
			break;
			case 'i': return this.EstadoDies();
			break;
			case 'n': return this.EstadoSeis();
			break;
			case 't': return this.EstadoSeis();
			break;
			default: return console.log(this.error+" - "+"ERROR!");	
		}
	}

	EstadoDies(){
		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			//console.log(this.expresion[this.indice]);
			this.indice++;
			return this.EstadoSeis();
		}


			switch(this.expresion[this.indice++]){
			case '+': return this.EstadoTrece();
			break;
			case '-': return this.EstadoTrece();
			break;
			case '=': return this.EstadoTrece();
			break;
			case '0': return this.EstadoTrece();
			break;
			case '1': return this.EstadoTrece();
			break;
			case '2': return this.EstadoTrece();
			break;
			case '3': return this.EstadoTrece();
			break;
			case '4': return this.EstadoTrece();
			break;
			case '5': return this.EstadoTrece();
			break;
			case '6': return this.EstadoTrece();
			break;
			case '7': return this.EstadoTrece();
			break;
			case '8': return this.EstadoTrece();
			break;
			case '9': return this.EstadoTrece();
			break;
			case 'p': return this.EstadoSeis();
			break;
			case 'r': return this.EstadoSeis();
			break;
			case 'i': return this.EstadoSeis();
			break;
			case 'n': return this.EstadoOnce();
			break;
			case 't': return this.EstadoSeis();
			break;
			default: return console.log(this.error+" - "+"ERROR!");	
		}
	}

	EstadoOnce(){
		if((this.expresion[this.indice] >= 'A' && this.expresion[this.indice] <= 'Z') || ((this.expresion[this.indice] >= 'a' && this.expresion[this.indice] <= 'h') || 
			(this.expresion[this.indice] >= 'j' && this.expresion[this.indice] <= 'm') || (this.expresion[this.indice] == 'o') || (this.expresion[this.indice] == 'q') || 
			(this.expresion[this.indice] == 's') || (this.expresion[this.indice] >= 'u' && this.expresion[this.indice] <= 'z')) && (this.expresion[this.indice] != undefined)){
			//console.log(this.expresion[this.indice]);
			this.indice++;
			return this.EstadoSeis();
		}


			switch(this.expresion[this.indice++]){
			case '+': return this.EstadoTrece();
			break;
			case '-': return this.EstadoTrece();
			break;
			case '=': return this.EstadoTrece();
			break;
			case '0': return this.EstadoTrece();
			break;
			case '1': return this.EstadoTrece();
			break;
			case '2': return this.EstadoTrece();
			break;
			case '3': return this.EstadoTrece();
			break;
			case '4': return this.EstadoTrece();
			break;
			case '5': return this.EstadoTrece();
			break;
			case '6': return this.EstadoTrece();
			break;
			case '7': return this.EstadoTrece();
			break;
			case '8': return this.EstadoTrece();
			break;
			case '9': return this.EstadoTrece();
			break;
			case 'p': return this.EstadoSeis();
			break;
			case 'r': return this.EstadoSeis();
			break;
			case 'i': return this.EstadoSeis();
			break;
			case 'n': return this.EstadoSeis();
			break;
			case 't': return this.EstadoDoce();
			break;
			default: return console.log(this.error+" - "+"ERROR!");		
		}
	}

	EstadoDoce(){
		if(this.indice == this.expresion.length){
			console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"IMPRIMIR");
		}else{
			console.log(this.error+" - "+"ERROR");
		}
	}

	EstadoTrece(){
		if(this.indice == this.expresion.length){
			console.log(this.aceptado+" - "+" "+this.expresion+" "+"ACEPTADO"+" "+"LETRAS");
		}else{
			console.log(this.error+" - "+"ERROR");
		}
	}
}

var cadena;
var contador=0;
cadena="sjhd5";
cadena=cadena.split(' ');
//console.log(cadena.length);
//console.log(cadena[contador]);
while(contador < cadena.length){
	var jota = new Analizador(cadena[contador]);
	jota.EstadoCero();
	contador++;
}