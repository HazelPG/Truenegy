 
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCAkYMm53OZei6SEb1JhuqlBLsliXKrUM0",
    authDomain: "truenergy-833ad.firebaseapp.com",
    databaseURL: "https://truenergy-833ad.firebaseio.com",
    projectId: "truenergy-833ad",
    storageBucket: "truenergy-833ad.appspot.com",
    messagingSenderId: "810864766590"
  };
  firebase.initializeApp(config);
  watch();
}());
// AGG DATOS
function add() {
	var nro_estrato = document.getElementById('Estrato').value;
	var periodo = document.getElementById('Periodo').value;
	var datavalor = document.getElementById('Valor').value;
	var persona = document.getElementById('Persona').value;
	console.log(nro_estrato);
	if(Estrato.length!=0 || Periodo.length !=0 || Valor.length !=0){
		firebase.database().ref("Data/").push({
			Estrato:nro_estrato,
			Periodo:periodo,
			Valor:datavalor,
			Persona:persona
		})
	}else{
		alert("El campo esta vacio.!!")
	}
}

function watch(){
	mostrarData = document.getElementById("card");
	refDatas = firebase.database().ref().child("Data");
	refDatas.on('child_added', function(snap){
		var dato = snap.val();
		var Campos = "";
		Campos += '<div class="menu">'+
                                '<div class="menu-arriba col-lg-3 col-md-3 col-sm-3 col-xs-3" style="margin-left: 60px;">'+
                                    '<img class="img-menu" src="img/personas2.png">'+
                                    '<h6 class="text-menu">Personas en el hogar:</h6>'+
                                    '<select class="form-control2" name="personas" id="Persona" >'+
                                        '<option value="">'+dato.Persona+'</option>'+
                                    '</select>'+
                                '</div>'+
                                '<div class="menu-arriba col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
                                    '<img class="img-menu" src="img/mansion.png">'+
                                    '<h6 class="text-menu">Estratos en el que vives:</h6>'+
                                    '<select class="form-control2" name="Estrato" id="Estrato" >'+
                                        '<option value="">'+dato.Estrato+'</option>'+
                                    '</select>'+
                                '</div>'+
                                '<div class="menu-arriba col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
                                    '<img class="img-menu" src="img/weekly-calendar.png">'+
                                    '<h6 class="text-menu">Mes del año a consultar:</h6>'+
                                    '<select class="form-control2" name="personas" id="Periodo" >'+
                                        '<option value="">'+dato.Periodo+'</option>'+
                                    '</select>'+
                                '</div>'+
                                '<div class="menu-arriba col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
                                    '<img class="img-menu" src="img/bank.png">'+
                                    '<h6 class="text-menu">Valor ideal:</h6>'+
                                    '<h6>'+dato.Valor+'</h6>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div> ';          
		mostrarData.innerHTML = Campos;
	});
}

function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover
    e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
    e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
    e.target.style.opacity = '0.4'; // Establece la opacidad del elemento que se va arrastrar
}

function end(e) {
    e.target.style.opacity = ''; // Restaura la opacidad del elemento   
    e.dataTransfer.clearData("Data");
}
function enter(e) {
    e.target.style.border = '3px dotted #555'; 
}

function leave(e) {
    e.target.style.border = ''; 
}
function over(e) {
    var elemArrastrable = e.dataTransfer.getData("Data"); // Elemento arrastrado
    var id = e.target.id; // Elemento sobre el que se arrastra
 
    // return false para que se pueda soltar
    if (id == 'destino') {
        return false; // Cualquier elemento se puede soltar sobre el div destino 
    }

    
}

function drop(e) {
    var elementoArrastrado = document.createElement("Data");;
    e.appendChild(elementoArrastrado); // Añade el elemento arrastrado al elemento desde el que se llama a esta funcion

    // Dimensiones del elemento sobre el que se arrastra
    tamContX = $('#'+e.target.id).width();
    tamContY = $('#'+e.target.id).height();

    // Dimensiones del elemento arrastrado
    tamElemX = $('#'+elementoArrastrado).width();
    tamElemY = $('#'+elementoArrastrado).height();
  
    // Posicion del elemento sobre el que se arrastra
    posXCont = $(e.target).position().left;
    posYCont = $(e.target).position().top;

    // Posicion absoluta del raton
    x = e.layerX;
    y = e.layerY;

    // Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
    if (posXCont + tamContX <= x + tamElemX){
        x = posXCont + tamContX - tamElemX;
    }

    if (posYCont + tamContY <= y + tamElemY){
        y = posYCont + tamContY - tamElemY;
    }

    document.getElementById(elementoArrastrado).style.position="absolute";
    document.getElementById(elementoArrastrado).style.left=x+"px";
    document.getElementById(elementoArrastrado).style.top=y+"px";
    e.target.style.border = '';   // Quita el borde del cuadro al que se mueve
}
