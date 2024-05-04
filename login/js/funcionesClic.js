function toggleSubmenu(submenuId, event) {
    var submenu = document.getElementById(submenuId);
    var classList = submenu.classList;
    var shouldShow = classList.contains('show');
    classList.toggle('show', !shouldShow);
    if (event) {
        event.stopPropagation();
    }
}

document.getElementById('toggleMenu').addEventListener('click', function(e){
    e.stopPropagation();
    var menu = document.getElementById('menuSidebar');
    menu.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    var menuSidebar = document.getElementById('menuSidebar');
    // Si el menú lateral está abierto y el clic no ocurrió dentro del menú lateral
    if (menuSidebar.classList.contains('show') && !menuSidebar.contains(event.target)) {
        menuSidebar.classList.remove('show'); // Oculta el menú lateral
    }
});

//Main-nav fijo, después de que el encabezado no es visible
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var mainNav = document.querySelector('.main-nav');

    // Altura del encabezado
    var headerHeight = header.offsetHeight;

    // Posición actual de desplazamiento vertical
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= headerHeight) {
        // Si el usuario ha desplazado más allá de la altura del encabezado, fija el menú main-nav en la parte superior
        mainNav.style.transition = '0.3s ease-in-out all';
        mainNav.style.position = 'fixed';
        mainNav.style.top = '0';
        mainNav.style.width = '99%';
        mainNav.style.zIndex = '1'; // Asegura que el menú esté por encima de otros elementos
    } else {
        // Si el usuario está en la parte superior de la página, deja el menú main-nav en su posición normal
        mainNav.style.transition = 'all 0.3s ease';
        mainNav.style.position = 'static';
    }

    if (scrollPosition > 0 && scrollPosition < headerHeight) {
        // Si el usuario está desplazado pero aun no está en la parte superior de la página, agrega una transición suave al contenido cuando el main-nav se desfixe
        document.querySelector('.main-content').style.transition = '0.3s ease-in-out all';
        document.querySelector('.main-content').style.marginTop = mainNav.offsetHeight + 'px';
    } else {
        document.querySelector('.main-content').style.transition = 'all 0.3s ease';
        document.querySelector('.main-content').style.marginTop = '0';
    }
});

// Función para mostrar el menú del usuario al hacer clic en el icono del usuario
function toggleUserMenu(event) {
event.stopPropagation();
var userMenu = document.querySelector('.user-menu');
var iconUser = document.querySelector('.icon-user');
var iconUserRect = iconUser.getBoundingClientRect();
var userMenuWidth = userMenu.offsetWidth;
// Calcula la posición del menú relativa al icono de usuario
var menuLeft = iconUserRect.left;
var menuTop = iconUserRect.bottom + 10;
userMenu.style.left = menuLeft + -135 + 'px';
userMenu.style.top = menuTop + 'px';
userMenu.classList.toggle('show');
}

document.getElementById('toggleUserMenu').addEventListener('click', toggleUserMenu);

document.addEventListener('click', function(event) {
var userMenu = document.querySelector('.user-menu');
if (userMenu.classList.contains('show') && !userMenu.contains(event.target)) {
    userMenu.classList.remove('show');
}
});

function toggleInfo() {
    var info = document.getElementById('info');
    info.style.display = (info.style.display === 'none' || info.style.display === '') ? 'block' : 'none';
}