document.querySelector('#btnGrabar').addEventListener('click',guardarCompa);


function guardarCompa(){
   // alert("estas en la funcion");
   var sNombre=document.querySelector('#txtNombre').value,
       sDireccion=document.querySelector('#txtDireccion').value,
       sEmail=document.querySelector('#txtEmail').value,
       sTelefono=document.querySelector('#txtTelefono').value;

       anadirCompaAlSistema(sNombre,sDireccion,sEmail,sTelefono);
       pintaListaCompa();
}

function pintaListaCompa(){

    var list = getListaCompa();
    var tbody= document.querySelector('#listadoCompa');

    tbody.innerHTML="";

    for(var x=0;x<list.length;x++){
        tbody.innerHTML+='<div class="registro">'+ list[x].nombre + '</div>';
    }

}