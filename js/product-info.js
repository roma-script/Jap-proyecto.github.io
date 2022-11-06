var product = {};

let comentarios;

//Muetsra las imágenes del producto en formato carrousel
function showImages(array) {

    let htmlContentToAppend = "";
    var activar;

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];


            if (i==0) activar = "active";

            else activar ="";

        htmlContentToAppend += ` <div class="carousel-item ` +activar+ ` " >
        <img src="` + imageSrc + `" class="d-block w-100"  alt="Carrusel">
        </div> `
       
    }
    document.getElementById("productImages").innerHTML = htmlContentToAppend;
}
//Muestra valoración del producto
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
//Muestra comentarios sobre el producto
function showComments(array) {
    htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let nroComentario = array[i];

           htmlContentToAppend += `<div class="card">  <div class="card-body"> ` +
         nroComentario.user + `> - ` + nroComentario.dateTime + 
         ` - ` + mostrarEstrellitas(nroComentario.score) + ` <br> ` 
         + nroComentario.description + `  </div> `

    }

    document.getElementById("comentario").innerHTML = htmlContentToAppend;

}

//Agrega comentario a caja de comentarios
function enviarComentario(e) {
       console.log("ok")
      
    var comentario = {
        score: e.estrellitas.value,
        description: e.opinion.value,
        user: localStorage.getItem("dataLogin"),
        dateTime:  new Date().toISOString().replace('T', ' ').split('.')[0].replace('Z', '')
    }

    comentarios.push(comentario)
    showComments(comentarios);
    return false;
}

//Muestra productos relacionados en tarjetas
function showRelatedProducts() {
    let showRelatedProduct = "";
               
               for (let product of category.relatedProducts) {
                showRelatedProduct += `     
                <div onclick= setCatID(${product.id}) class=" card col-sm-3 cursor-active">
                    <img src="${product.image}" alt="img" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">${product.name} </p> 
            </div>
            </div> 
            <br> 
           `
        
                document.getElementById("relatedProducts").innerHTML = showRelatedProduct;
            
    }
    }

     /*Entrega 5 add to cart */
//Añadir al carrito
     function addToCart () {
        console.log(category)
        var newItem = JSON.parse(localStorage.getItem("userCart"))
       newItem.push({
        count: 1,
        currency: category.currency,
        id: category.id,
        image: category.images[0],
        name: category.name,
        unitCost: category.cost,

       })
           
     
        localStorage.setItem("userCart", JSON.stringify(newItem));
    
       window.location.href = "cart.html";
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//Se obtienen los datos del json

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL+localStorage.getItem('catID', id1)+EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj)

            category = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let relatedProductsHTML = document.getElementById("relatedProducts");

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.category;

           
            showImages(category.images);
            showRelatedProducts (category.relatedProducts);


    getJSONData(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('catID')+EXT_TYPE).then(function (resultComm) {
        if (resultComm.status === "ok") {

            comentarios = resultComm.data;
            showComments(comentarios);
        }
    });

        }
    })})

   