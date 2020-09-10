var ListComp=[];

function anadirCompaAlSistema(pnombre,pdireccion,pemail,ptelefono){

var nuevoCompa={
    nombre   : pnombre,
    direccion: pdireccion,
    correo   : pemail,
    telefono : ptelefono
};
console.log(nuevoCompa);
ListComp.push(nuevoCompa);

};

function getListaCompa(){
    return ListComp;
}