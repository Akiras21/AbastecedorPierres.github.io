
function validarlogin () {

   var usuario = document.getElementById("Usuario").value;
   var contra = document.getElementById ("contra").value;
   
   if (usuario === "MP" && contra === "Granados", usuario === "Tony" && contra === "Vargas" ){
       window.location.href ="menu.html";   
       
    } else{ 
        alert ("Usuario y contraseña incorrectos");
       
    }
}

