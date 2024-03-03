////////////////// Obtenez le modal d'inscription ///////////////////////
// function userInfo (){

//   const userName = document.getElementById("a1").value;
//   const userPW = document.getElementById("b1").value;

//   const userNameL = localStorage.getItem("user");
//   const userPWL = localStorage.getItem("PW");

//   if ((userName === userNameL)&& (userPW === userPWL) ){
//     document.location='./accueil.html';
//     alert("Vous allez etre redirige vers votre page ---->")
//   }
//   else {
//     alert ("erreur")
//   }

// }
function userInfo (event){
  event.preventDefault()
  const userNameLog = document.getElementById("a1").value;
  const userPwLog = document.getElementById("b1").value;
  const loginName = localStorage.getItem("user");
  const loginPw = localStorage.getItem("PW");
  if ( (userPwLog === loginPw) && (userNameLog === loginName)) {
    document.location.href='../accueil.html';
    // window.location.href = "../Accueil/accueil.html";
  } else {
    alert("Nom ou mot de passe invalide.");
  }
}




// ////////////////// Obtenez le modal d'inscription ///////////////////////
// var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// ///////////////// Obtenez le modal de connexion //////////////////////////
// var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }

function descpUser (){

  const userName = document.getElementById("a").value;
  const userPW = document.getElementById("b").value;
  
  localStorage.setItem("user", userName);
  localStorage.setItem("PW", userPW);

  document.location='accueil.html';
}
