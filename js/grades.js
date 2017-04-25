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





        function pos(){
          var numero = document.fo.valores.value;


          if(numero >= 70 && numero <=79){
            numero = document.fo.valores.value="Grado númerico C";
          }else if(numero >= 80 && numero <=89){
            numero = document.fo.valores.value="Grado númerico B";
          }else if(numero >= 90){
            numero = document.fo.valores.value="Grado númerico A";
          }else{numero <= 69
           numero = document.fo.valores.value="No presentó";
                }
      };

      function eliminar(){
        document.fo.valores.value="";
      };
