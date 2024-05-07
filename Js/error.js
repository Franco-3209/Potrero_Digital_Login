    // Función para iniciar la reproducción del audio cuando se hace clic en cualquier parte de la pantalla
    function iniciarReproduccionAudio() {
        var audio = document.getElementById('player');
        audio.play();
        
        // Remover el evento de clic después de que se inicie la reproducción del audio
        document.removeEventListener('click', iniciarReproduccionAudio);
      }
  
      // Función para cambiar el texto del h1 cuando se hace clic en él
      function cambiarTextoH1() {
        var h1 = document.getElementById('cambiarTexto');
        h1.textContent = "ah ah ah! you didn't say the magic word!";
      }
  
      // Agregar un evento de clic a toda la pantalla que inicie la reproducción del audio
      document.addEventListener('click', iniciarReproduccionAudio);
  
      // Agregar un evento de clic al h1 para cambiar su texto
      document.getElementById('cambiarTexto').addEventListener('click', cambiarTextoH1);