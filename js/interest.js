
// FUNCION ANIMACIÓN

var nave = new Image();
var fondo = new Image();
nave.src="img/marciano2.png";
fondo.src="img/puntos.jpg";
var posx=1;
var posy=100;
var dir = 5; // pixeles para desplazarse

function dibuja(){
  setInterval(animacion, 50);
}

function animacion(){
  var anima = document.getElementById("milienzo");
  var contexto = anima.getContext('2d');
  contexto.drawImage(fondo, 0, 0, 400, 200); // weidth=400; heigt=300;
  contexto.font="bold 18px Arial";
  contexto.fillStyle="#FFFFFF";
  contexto.fillText("CALCULADORAS DE COLOMBIA", 50, 40); //posx = 50; posy = 40;
  if(posx>=330 || posx<=0){
    dir=dir*-1;
  }
  posx=posx+dir;
  contexto.drawImage(nave,posx,posy,80,100);
}



// Función para interest

  function valorInicial(){

    var valor=document.getElementById("valorInicial").value;
  };

  function anos(){
    var anitos = document.getElementById("anos").value;
  };

  function tasa(){
    var tasaInicial = document.getElementById("tasa").value / 100;
  }

  function convertidor (){
    var valor=document.getElementById("valorInicial").value;
    var anitos = document.getElementById("anos").value;
    var tasaInicial = document.getElementById("tasa").value / 100;

    var resultado= valor * tasaInicial / anitos;
    var totalAPagar=Math.floor(resultado)
    document.getElementById("total").value= "$" + totalAPagar + " durante " + anitos + " año(s)";
  }

  function eliminar(){
    document.getElementById("valorInicial").value="";
    document.getElementById("anos").value="";
    document.getElementById("tasa").value="";
    document.getElementById("total").value="";
  }
