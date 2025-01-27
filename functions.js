
function showMail (){
    
    const mail = document.getElementById("mail").value;
    if (mail.includes("@")) {
        
        Swal.fire({
            icon: "success",
            title: "Su correo es valido",
            text: `Gracias por inscribirse ${mail}`,
            showCancelButton: true,
            confirmButtonText: 'Ese es mi correo',
            cancelButtonText: 'No, me equivoque',
          }).then((result) =>{
            if(result.isConfirmed){
                window.location.assign('datos.html');
            }
          });
      } else {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un correo valido"
      });
      }

    
}
function showData (){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const ciudad = document.getElementById("ciudad").value;
    const nacimiento = document.getElementById("nacimiento").value;

    if(nombre!=""&&apellido!=""&&ciudad!=""&&nacimiento>0){
    Swal.fire({
        title: `Bienvenido ${nombre} ${apellido}\nDe ${ciudad}\nacido en ${nacimiento}`,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff",
        backdrop: `rgba(0,0,123,0.4)
        `
      });      
    }else{
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan ingresar datos"
      });
      }



}

