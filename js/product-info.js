var product = {};
let id = localStorage.getItem('catID');

function showImages(array) {

    let htmlContentToAppend = "";
    
    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];


        htmlContentToAppend += ` <div class="row" >
        <div class="d-block mb-4 h-100">
        <img src="` + imageSrc + `" class="img-fluid img-thumbnail" alt="" >
         `
       
    }
    
    document.getElementById("productImages").innerHTML = htmlContentToAppend;
}
function mostrarEstrellitas(nroEstrellasMarcadas) {
    var estrellitas = "";

    for (let i = 0; i < 5; i++) {
        if (i < nroEstrellasMarcadas) {
            estrellitas += `<span class="fa fa-star checked"></span>`;
        } else {
            estrellitas += `<span class="fa fa-star"></span>`;
        }
    }

    return estrellitas;
}

function showComments(array) {
    htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let nroComentario = array[i];

        htmlContentToAppend += `<div class="card">  <div class="card-body"> ` + nroComentario.user + `> - ` + nroComentario.dateTime + ` - ` + mostrarEstrellitas(nroComentario.score) + ` <br> ` + nroComentario.description + `  </div> `

    }

    document.getElementById("comentario").innerHTML = htmlContentToAppend;

}

function enviarComentario(e) {
    var comentario = {
        score: e.estrellitas.value,
        description: e.opinion.value,
        user: localStorage.getItem("dataLogin"),
        dateTime: new Date()
    }

    nroComentario.push(comentario)
    showComments(nroComentario);
    return false;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL+localStorage.getItem('catID')+EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {

            category = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.category;

           
            showImages(category.images);



    getJSONData(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('catID')+EXT_TYPE).then(function (resultComm) {
        if (resultComm.status === "ok") {

            comentarios = resultComm.data;
            showComments(comentarios);
        }
    });

        }
    })})