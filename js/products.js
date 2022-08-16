
let listado = [];

//función para mostrar productos, let o var?
function showProductsList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < listado.length; i++) {
        let product = listado[i];


        htmlContentToAppend += `<div class="col-sm"  width="30%">
               
                     <div class="row">
                         <div class="">
                             <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                           
                         </div>
                         <div class="">
                             <div class="">
                                 <h4 class="">`+ product.name + `</h4>
                                 <small class="text-muted">` + product.soldCount + ` artículos</small>
                             </div>
                             <p class="">` + product.description + `</p>
                              <div> ` + product.cost + `</div>
                         </div>
                     </div>
                    
              
               </div>
`
}
//no funciona todavía
document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status == "ok") {
            listado = resultObj.data
                showProductsList(listado);
        }else{
            alert("Error");  
        }
    });
});