function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}


const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", function () {
    document.body.classList.toggle("cerrar");
});


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode")
})
function toggleVideo() {
  var vidContainer = document.querySelector('.vid-container');
  vidContainer.classList.toggle('new-vid-container');
  
  var videoSource = document.querySelector('.bgvid source');
  if (videoSource.src.includes("camp-in-the-jungle-")) {
    videoSource.src = "https://static.vecteezy.com/system/resources/previews/033/299/609/mp4/ai-generative-an-animated-scene-of-tents-in-the-woods-at-night-free-video.mp4";
  } else {
    videoSource.src = "https://static.vecteezy.com/system/resources/previews/028/594/534/mp4/ai-generative-camp-in-the-jungle-animation-free-video.mp4";
  }
  document.querySelector('.bgvid').load();
}



