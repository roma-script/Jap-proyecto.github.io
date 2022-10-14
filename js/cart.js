var cartResult = [];

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.document.addEventListener("DOMContentLoaded", function (e) {
   

function showCart() {
        htmlContentToAppend = "";
    
        for (let i = 0; i < cartResult.articles.length; i++) {
    
            htmlContentToAppend += `
            <tr>
                <td>  <img  src="`+ cartResult.articles[i].image + `  " height="50" ></img>    </td>
                <td>   ` + cartResult.articles[i].name + `  </td>
                <td>  <input type="number" class="form-control" id="prueba`+ [i + 1] + 
                `" placeholder=" " required="" value="` + cartResult.articles[i].count + `" min="0" onchange="update()" >    </td>
                <td>`+ cartResult.articles[i].currency + ` ` +  parseInt(cartResult.articles[i].unitCost) + `</td>
                <td style="font-weight:bold"; id="subtotal`+ [i + 1] + `">   </td>`
    
        }
        document.getElementById("showProducts").innerHTML = htmlContentToAppend;   
        console.log("ok");

        update();
        
    };
    
    function update() { 
       

        for (let i = 0; i < cartResult.articles.length; i++) {
            
            // Calcula lo que se verá en el carrito en la sección subtotal
            var unitCost = cartResult.articles[i].unitCost;
            var cantidad = document.getElementById("prueba" + [i + 1]).value;
    
            var subtotalProduct = (cantidad * unitCost)
            console.log ("ok")
           
            document.getElementById("subtotal" + [i + 1]).innerHTML =  "USD" + " " + subtotalProduct
   
            }
        }

    function addToCart () {
    var result = confirm("¿Añadir este producto al carrito de la compra?");
				if (result == false){
					return;
				}
				// Formulario de carrito de compras
				var obj = {
                    id: this.localStorage.setItem("catID", id),
                    image: this.image,
                    name: this.name,
                    unitCost: this.unitCost,
                }
            
                cartResult.push(obj)
                showProducts(cartResult);
           
                }
            
    getJSONData(CART_INFO_URL+25801+EXT_TYPE).then(function (resultCart) {
        if (resultCart.status === "ok") {

            cartResult = resultCart.data;

            showCart(cartResult);

          
        }})