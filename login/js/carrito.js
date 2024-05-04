function AñadirCarrito(nombreProducto, precio, cantidad) {
  // Verificar si ya hay elementos en el carrito
  nombreProducto = "Camisa";
  precio = 10;
  cantidad = 2;
  var carrito = localStorage.getItem("carrito");
  if (!carrito) {
    carrito = [];
  } else {
    carrito = JSON.parse(carrito);
  }

  // Agregar el nuevo producto al carrito
  var producto = {
    nombreProducto: nombreProducto,
    precio: precio,
    cantidad: cantidad,
  };
  carrito.push(producto);

  // Guardar el carrito actualizado en el almacenamiento local
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function ObtenerCarrito() {
  var nombreProducto = localStorage.getItem("nombreProducto");
  var precio = localStorage.getItem("precio");
  var cantidad = localStorage.getItem("cantidad");

  alert(
    "Nombre del producto: " +
      nombreProducto +
      "\nPrecio: " +
      precio +
      "\nCantidad: " +
      cantidad
  );
}

function LimpiarCarrito() {
  localStorage.clear();
  alert("Carrito limpiado");
}

function SumarPrecioTotal() { 

    var carrito = localStorage.getItem("carrito");
    if (carrito) {
        carrito = JSON.parse(carrito);
        var total = 0;
        carrito.forEach(function (producto) {
        total += producto.precio * producto.cantidad;
        });

        var costoTotal = document.getElementById("total");
        costoTotal.innerHTML = "";
          
        var totalHTML = `

        <p>Total:</p>
        <p>Q${total}.00</p>
        
        
        `
        costoTotal.innerHTML += totalHTML;

        
      
    }
    

}

function imprimirCarrito() {
  var carrito = localStorage.getItem("carrito");
  if (carrito) {
    carrito = JSON.parse(carrito);
    var carritoContainer = document.getElementById("ProductosCarrito");
    carritoContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar los productos

    carrito.forEach(function (producto) {
      var productoHTML = `
                <div class="flex items-center mb-4">
                    <img src="/LoginHTML/login/assets/prueba2.jpg" alt="Producto" class="w-16 h-16 mr-4" />
                    <div class="w-full">
                        <h4 class="font-semibold">${producto.nombreProducto}</h4>
                        <p class="text-gray-500">Q${producto.precio}.00</p>
                        <div class="flex justify-end">
                  <label for="cantidad" class="text-gray-500 mr-4 inline-flex">
                    <svg
                      class="w-[41px] h-[41px] text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                    Cantidad:</label
                  >
                  <input
                    type="number"
                    id="cantidad"
                    value="${producto.cantidad}"
                    class="form-input w-10"
                  />
                </div>
                    </div>
                </div>`;
      carritoContainer.innerHTML += productoHTML;
    });
  }
}

function ContarElementosCarrito(){
  var carrito = localStorage.getItem("carrito");
  if (carrito) {
    carrito = JSON.parse(carrito);
    var total = 0;
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

}

// Llamar a la función para imprimir el carrito cuando la página se cargue
window.onload = function () {
  imprimirCarrito();
  SumarPrecioTotal();
  ContarElementosCarrito();
};
