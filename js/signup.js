const firebaseConfig = {
    apiKey: "AIzaSyC3MIN64hy_oTQfQWUHl0lID-CJkIfci0M",
    authDomain: "yt-project-a29f8.firebaseapp.com",
    projectId: "yt-project-a29f8",
    storageBucket: "yt-project-a29f8.appspot.com",
    messagingSenderId: "159898773748",
    appId: "1:159898773748:web:2985334de4f06ff73356a1",
    measurementId: "G-DLWR9M5SJC"
  };
      firebase.initializeApp(firebaseConfig);
  render();
  function render(){
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
  function phoneAuth(){
      var number = document.getElementById('number').value;
      firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
          window.confirmationResult = confirmationResult;
          coderesult = confirmationResult;
          document.getElementById('sender').style.display = 'none';
          document.getElementById('verifier').style.display = 'block';
      }).catch(function(error){
          alert(error.message);
      });
  }
  function codeverify(){
      var code = document.getElementById('verificationcode').value;
      coderesult.confirm(code).then(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'block';
          document.getElementsByClassName('n-conf')[0].style.display = 'none';
      }).catch(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'none';
          document.getElementsByClassName('n-conf')[0].style.display = 'block';
      })
  }
  function gotohome() {
          window.location.href = 'home.html';
  }