function ContarElementosCarrito(){
    var carrito = localStorage.getItem("carrito");
    var total = 0;
    if (carrito) {
      carrito = JSON.parse(carrito);
      
      carrito.forEach(function (producto) {
        total += producto.cantidad;
      });
  
      var cantidadCarrito = document.getElementById("contador-productos");
      cantidadCarrito.innerHTML = "";
        
      var totalHTML = `
  
      <span class="text-xs font-bold">${total}</span>
      
      `
      cantidadCarrito.innerHTML += totalHTML;
  
      
    
  }
  else{

    var cantidadCarrito = document.getElementById("contador-productos");
    cantidadCarrito.innerHTML = "";
      
    var totalHTML = `
  
    <span class="text-xs font-bold">0</span>
    
    `
    cantidadCarrito.innerHTML += totalHTML;
  }
  
  
  }




  window.onload = function () {
   
    ContarElementosCarrito();
  };
  