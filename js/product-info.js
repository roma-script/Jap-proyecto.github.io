var product = {};
let listado = [];
let id = localStorage.getItem('catID');


function showImages(array) {

 
    for (let images for listado.images) 
      
    }
    document.getElementById("productImages").innerHTML = htmlContentToAppend;
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

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);



            getJSONData(PRODUCTS_URL+localStorage.getItem('catID')+EXT_TYPE.then(function (resultProd) {
                if (resultProd.status === "ok") {

                    related = resultProd.data;
                    showRelatedImages(related);
                }
            })
            );
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultComm) {
        if (resultComm.status === "ok") {

            nroComentario = resultComm.data;
            showRelatedComments(nroComentario);
        }
    });



})