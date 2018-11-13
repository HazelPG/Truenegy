 
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
<<<<<<< HEAD
		}).then(function(snapshot) {
            window.location.replace("menu.html");
            watch();
            });
	}else{
		alert("El campo esta vacio.!!")
	}
=======
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
>>>>>>> origin/master
}
//VER DATOS
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
 $( "#acordeon" ).accordion();

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    activeClass:'claseactiva'
    mostrarData = document.getElementById("destino");
    refDatas = firebase.database().ref("electrodomesticos");
    refDatas.on("value", function(snap){

        var c_kwh_TV = snap.child("4").child("consumoKWH").val();
        var v_kwh_TV = snap.child("4").child("Valor_Consumo").val();
        var c_kwh_DVD = snap.child("4").child("consumoKWH").val();
        var v_kwh_DVD = snap.child("4").child("Valor_Consumo").val();
        var dato_tv = snap.child("4").val();
        var dato = snap.val();
        var todo="";
        for (i in dato) {
            console.log(dato[i]);
            if(dato[i].ID =="001"){
                console.log(dato[i]);
                $('#destino').append(todo = '<div class="row" id="cuadro-atri">'+    
                    '<div  class=" cuadro ">'+
                        '<ul><li id="atributos" class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="width:60px;"><img src='+data+' ></li>'+
                            '<li id="atributos" class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><h6 class="h6-atributos" id="Nombre" ><br>'+dato[i].Nombre+'</h6></li>'+
                            '<li id="atributos" class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><h6 class="h6-atributos" id="KWH_Hora">KWH Hora:<br><br> ' + dato[i].KWH_hora +'</h6></li>'+
                            '<li id="atributos" class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><h6 class="h6-atributos" id="Valor_Hora">Valor Hora:<br><br> ' + dato[i].Valor_Hora +'</h6></li>'+ 
                            '<li id="atributos" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">'+
                                '<div id="div-cantidad">'+
                                    '<h6  class="s-atributos" id="select-atributos" style="margin-bottom: 0px;">Cantidad:</h6>'+
                                    '<select class="select-atributos" name="Cantidad" id="Cantidad" >'+
                                        '<option value="">'+dato[i].Unidad+'</option>'+
                                        '<option value="">2</option>'+
                                        '<option value="1">3</option>'+
                                        '<option value="2">4</option>'+
                                        '<option value="3">5</option>'+
                                        '<option value="4">6</option>'+
                                        '<option value="5">7</option>'+
                                        '<option value="">8</option>'+
                                        '<option value="1">9</option>'+
                                        '<option value="2">10</option>'+
                                        '<option value="3">11</option>'+
                                        '<option value="4">12</option>'+
                                        '<option value="5">13</option>'+
                                        '<option value="">14</option>'+
                                        '<option value="1">15</option>'+
                                    '</select>'+
                                '</div>'+
                            '</li>'+
                            '<li id="atributos" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">'+
                                '<div>'+
                                    '<h6 class="s-atributos " id="select-atributos" style="margin-bottom: 0px;">Uso Diario:</h6>'+
                                        '<select class="select-atributos" name="Tiempo" id="Tiempo_Uso" >'+
                                            '<option value="1 Hora">'+dato[i].Tiempo_Uso+'</option>'+
                                            '<option value="2 Hora">2 </option>'+
                                            '<option value="3 Hora">3 </option>'+
                                            '<option value="4 Hora">4 </option>'+
                                            '<option value="5 Hora">5 </option>'+
                                            '<option value="6 Hora">6 </option>'+
                                            '<option value="7 Hora">7 </option>'+
                                            '<option value="8 Hora">8 </option>'+
                                            '<option value="9 Hora">9 </option>'+
                                            '<option value="10 Hora">10 </option>'+
                                            '<option value="11 Hora">11 </option>'+
                                            '<option value="12 Hora">12 </option>'+
                                            '<option value="13 Hora">13 </option>'+
                                            '<option value="14 Hora">14 </option>'+
                                            '<option value="15 Hora">15 </option>'+
                                            '<option value="16 Hora">16 </option>'+
                                            '<option value="17 Hora">17 </option>'+
                                            '<option value="18 Hora">18 </option>'+
                                            '<option value="19 Hora">19 </option>'+
                                            '<option value="20 Hora">20 </option>'+
                                            '<option value="21 Hora">21 </option>'+
                                            '<option value="22 Hora">22 </option>'+
                                            '<option value="23 Hora">23 </option>'+
                                            '<option value="24 Hora">24 </option>'+           
                                        '</select>'+        
                                    '</div>'+                        
                                '</li>'+
                                '<li><a href="#"class="col-lg-1 col-md-1 col-sm-1 col-xs-1 borro" id="borrarelec" onclick="borrar()"><img src="img/borro.png" ></a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'
                    );                                                 
                     //AGG CONSUMO KWH
                    if (todo != "") {
                        var hora_TV = dato[i].Tiempo_Uso*30;
                        var kwh_TV = dato[i].KWH_hora*hora_TV;
                        c_kwh_TV = kwh_TV* dato[i].Unidad ;
                        var Campos = "";
                        Campos += '<h4 class="text-menu-b" id="consumo">TOTAL MENSUAL KWH: <br> ' + c_kwh_TV+'</h4>';
                        $("#consumo").html(Campos);   
                                
                    }
                     //AGG VALOR
                    if (todo != "") {
                        v_estrato1=224,4;
                        v_kwh_TV =c_kwh_TV*v_estrato1;
                        var Campos = "";
                        Campos += '<h4 class="text-menu-b" id="valor">VALOR CONSUMO: <br> ' + Math.round(v_kwh_TV, -2)+'</h4>';
                        $("#valor").html(Campos);   
                                
                    }
            break;                       
            }
             
        }           
    });
}

function borrar(){
    //para saber la clabve a borrar
    var keyborrar =  document.getElementById("borrarelec");
    keyborrar.remove();
}





