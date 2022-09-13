var product = {};
let id = localStorage.getItem('catID');


function ShowProduct(array) {

    let htmlContentToAppend = "";
   
    for (let i = 0; i < array.length; i++) {
        let product = array[i];
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

           
            showImages(category.images);



    getJSONData(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('catID')+EXT_TYPE).then(function (resultComm) {
        if (resultComm.status === "ok") {

            comentarios = resultComm.data;
            showRelatedComments(comentarios);
        }
    });

        }
    })})