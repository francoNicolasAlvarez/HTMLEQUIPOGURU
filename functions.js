const sendButton = document.getElementById("send");

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
          });
      } else {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un correo valido"
      });
      }
    
}

