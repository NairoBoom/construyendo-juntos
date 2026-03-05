// ==================== MOBILE MENU ====================

function toggleMobileMenu(btn) {
    const menu = btn.parentElement.querySelector('.mobile-menu');
    const arrow = btn.querySelector('.hamburger-arrow');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    arrow.classList.toggle('rotate-180');
}

// ==================== BANNER CAROUSEL ====================

let currentSlide = 0;
let slideInterval = null;

function goToSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    if (!slides.length) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].classList.add('bg-gray-300');
    dots[currentSlide].classList.remove('bg-brand-red');

    currentSlide = ((index % slides.length) + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].classList.remove('bg-gray-300');
    dots[currentSlide].classList.add('bg-brand-red');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
    resetAutoSlide();
}

function prevSlide() {
    goToSlide(currentSlide - 1);
    resetAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// ==================== HOME BANNER CAROUSEL ====================

let currentSlideHome = 0;
let slideIntervalHome = null;

function goToSlideHome(index) {
    const slides = document.querySelectorAll('.banner-slide-home');
    const dots = document.querySelectorAll('.banner-dot-home');
    if (!slides.length) return;

    slides[currentSlideHome].classList.remove('active');
    dots[currentSlideHome].classList.remove('active');
    dots[currentSlideHome].classList.add('bg-gray-300');
    dots[currentSlideHome].classList.remove('bg-brand-red');

    currentSlideHome = ((index % slides.length) + slides.length) % slides.length;

    slides[currentSlideHome].classList.add('active');
    dots[currentSlideHome].classList.add('active');
    dots[currentSlideHome].classList.remove('bg-gray-300');
    dots[currentSlideHome].classList.add('bg-brand-red');
}

function nextSlideHome() {
    goToSlideHome(currentSlideHome + 1);
    resetAutoSlideHome();
}

function prevSlideHome() {
    goToSlideHome(currentSlideHome - 1);
    resetAutoSlideHome();
}

function startAutoSlideHome() {
    slideIntervalHome = setInterval(() => goToSlideHome(currentSlideHome + 1), 5000);
}

function resetAutoSlideHome() {
    clearInterval(slideIntervalHome);
    startAutoSlideHome();
}

// Search from home → redirects to catalog with the search term
function searchFromHome() {
    const value = document.getElementById('search-input-home').value;
    if (value.trim()) {
        navigateTo('page-catalog');
        document.getElementById('search-input').value = value;
        filterProducts();
    }
}

// Start auto-slides when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.banner-slide')) {
        startAutoSlide();
    }
    if (document.querySelector('.banner-slide-home')) {
        startAutoSlideHome();
    }
});

// ==================== DATA ====================

const PRODUCTS = [
    {
        id: '20105800166',
        name: 'MOLINO CORTADOR 3 EN 1',
        stock: 500,
        description: 'Ralla fácilmente tus frutas y verduras favoritas. Con este rallador podrás rallar en minutos una gran variedad de alimentos, además incluye tres cilindros de corte diferentes para que puedas lograr varios tipos de corte según lo necesites.\n\nCaracterísticas:\n• Sistema 3 En 1\n• Pieza de empuje\n• Tambores intercambiables en acero inoxidable\n• Desmontable para facilitar la limpieza\n• Base con ventosa ultra fuerte\n• Ideal para rayar, cortar, triturar verduras, frutas, queso y más',
        points: 70,
        category: 'Cocina',
        icon: 'fa-blender',
        image: 'img/MOLINO CORTADOR 3 EN 1.jpg'
    },
    {
        id: '20105811016',
        name: 'EDREDÓN CAMA DOBLE',
        stock: 326,
        description: 'Transforma tu habitación en un espacio acogedor y elegante con nuestro edredón doble, diseñado para brindarte máxima suavidad y calidez durante toda la noche.\n\nFabricado con materiales de alta calidad, su textura es suave al tacto y ligera.\n\nCaracterísticas:\n• Tamaño: Doble (ideal para camas de 1.40 m aprox.)\n• Tela exterior suave y resistente\n• Relleno ligero y térmico\n• Fácil de lavar y de secado rápido\n• Colores duraderos',
        points: 92,
        category: 'Hogar',
        icon: 'fa-bed',
        image: 'img/EDREDON CAMA DOBLE.jpg'
    },
    {
        id: '20105855807',
        name: 'JARRA + JUEGO DE 4 VASOS',
        stock: 310,
        description: 'Set que incluye una jarra con capacidad de 800 ml y cuatro vasos de 200 ml cada uno, elaborados en vidrio transparente con diseño acanalado.\n\nDimensiones:\n• Jarra: 19.5 cm de alto y 7.4 cm de diámetro\n• Vasos: 8.9 cm de alto y 7.7 cm de diámetro\n\nPresentación como set completo y listo para usar.',
        points: 52,
        category: 'Cocina',
        icon: 'fa-wine-glass-alt',
        image: 'img/JARRA + JUEGO DE 4 VASOS.jpg'
    },
    {
        id: '20105811081',
        name: 'WAFLERA REDONDA',
        stock: 291,
        description: 'Dale un toque delicioso a tus desayunos o meriendas con nuestra práctica waflera redonda de un puesto. ¡Prepara waffles dulces o salados en minutos!\n\nCon su revestimiento antiadherente y su tamaño compacto, es perfecta para cualquier cocina. Su diseño sencillo y fácil de usar te permitirá disfrutar de waffles perfectos en cuestión de minutos.',
        points: 92,
        category: 'Electrodomésticos',
        icon: 'fa-circle',
        image: 'img/WAFLERA REDONDA.jpg'
    },
    {
        id: '20105800116',
        name: 'JUEGO DE SARTENES',
        stock: 208,
        description: 'Juego de Sartén Imusa x3 (18-20-24 cm) totalmente original.\n\nCuentan con estructura resistente recubierta en antiadherente de alta calidad que evita que los alimentos se peguen a la superficie, además poseen un largo mango de agarre que facilita la manipulación.\n\nImusa lleva 80 años conociendo a las personas y diseñando productos que reúnen las más altas exigencias para quienes disfrutan de la cocina fácil y práctica.',
        points: 65,
        category: 'Cocina',
        icon: 'fa-utensils',
        image: 'img/JUEGO DE SARTENES X 3.jpg'
    },
    {
        id: '20105855792',
        name: 'FREIDORA DE AIRE',
        stock: 176,
        description: 'Disfruta de una alimentación más saludable con la Freidora de Aire Imusa de 3,2 litros. Cocina tus comidas favoritas con hasta un 80% menos de grasa.\n\nCaracterísticas:\n• Capacidad: 3,2 litros\n• Potencia: 1100W\n• Tecnología de circulación de aire caliente\n• Dimensiones: 30x30x32.8 cm\n• Fácil de usar y limpiar\n• Garantía de 1 año',
        points: 120,
        category: 'Electrodomésticos',
        icon: 'fa-fan',
        image: 'img/FREIDORA DE AIRE.jpg'
    },
    {
        id: '20105855798',
        name: 'CARRO DE MERCADO',
        stock: 170,
        description: 'Carro Lona Para Mercar en poliéster, resistente al agua.\n\nCaracterísticas:\n• Cierre de cordón para mayor seguridad\n• Bolsillo con cierre en la parte trasera\n• Estructura de aluminio metálico de alta calidad\n• Parte frontal plegable\n• 2 ruedas de goma resistentes\n• Capacidad máx: 25 kg\n• Ideal para ir al supermercado o al mercado sin cargar peso.',
        points: 82,
        category: 'General',
        icon: 'fa-shopping-bag',
        image: 'img/CARRO DE MERCADO.jpg'
    },
    {
        id: '20105800108',
        name: 'SÁBANAS CAMA DOBLE',
        stock: 168,
        description: 'Juego de Sábana Doble en polialgodón (50% algodón, 50% poliéster).\n\nIncluye:\n• Sábana ajustable: 140 x 190 cm\n• Sábana plana: 190 x 240 cm\n• 2 fundas para almohadas de 75 cm\n\nPerfecta para colchones de hasta 140 cm de ancho y 35 cm de altura. Fácil lavado a 30°C, apto para lavadora y secadora.',
        points: 78,
        category: 'Hogar',
        icon: 'fa-bed',
        image: 'img/SABANAS CAMA DOBLE.jpg'
    },
    {
        id: '20105800117',
        name: 'ASADOR BBQ',
        stock: 150,
        description: '¡Cocina con gusto! Este asador será tu aliado para agasajar a tus comensales y recibir todos los aplausos.\n\nPodrás preparar los mejores cortes y las verduras más deliciosas de una manera práctica y cómoda.\n\nEnciende el fuego y comienza a disfrutar. ¡Lleva tu asador a donde quieras! Trasládalo fácilmente hacia el jardín y disfruta de un rico asado al aire libre.',
        points: 350,
        category: 'General',
        icon: 'fa-fire',
        image: 'img/ASADOR BBQ.jpg'
    },
    {
        id: '20105811479',
        name: 'PIZZA MAKER',
        stock: 139,
        description: 'Pizza maker con sistema automático regulador de temperatura, carcasa termo-resistente y manija fría al tacto.\n\nCaracterísticas:\n• 2 parrillas en un solo producto (apertura 180°)\n• Calentamiento independiente\n• Plancha superior con acabado grill\n• Luces indicadoras de estado\n• Prepara pizzas, crepes, omelettes y mucho más',
        points: 200,
        category: 'Electrodomésticos',
        icon: 'fa-pizza-slice',
        image: 'img/PIZZA MARKET.webp'
    },
    {
        id: '20105800107',
        name: 'VAJILLA 4 PUESTOS',
        stock: 104,
        description: 'Renueva tus comidas con nuestra vajilla de 4 puestos, perfecta para el día a día o para recibir invitados con estilo.\n\nSu diseño moderno y acabado elegante combinan fácilmente con cualquier decoración. Fabricada con materiales resistentes y duraderos, ideal para uso frecuente, manteniendo su brillo y calidad con el paso del tiempo.',
        points: 210,
        category: 'Cocina',
        icon: 'fa-utensil-spoon',
        image: 'img/VAJILLA 4 PUESTOS.jpg'
    },
    {
        id: '20105800106',
        name: 'JUEGO X 2 TOALLAS',
        stock: 85,
        description: 'El Juego De Toallas Belle Noite / 2 Toallas es ideal para tu hogar. Modelo de gran suavidad, hermoso diseño y tremenda calidad.',
        points: 95,
        category: 'Hogar',
        icon: 'fa-tshirt',
        image: 'img/JUEGO X 2 TOALLAS.jpg'
    }
];

// Usuarios de demo por perfil (usuario / contraseña)
const USERS_DB = {
    'Vendedores Depósitos': [
        { user: '1019056777', pass: '1234', name: 'Daniel Cuervo', cedula: '20004', email: 'daniel.cuervo@gmail.com', phone: '3000000004', address: 'Cl. 15 #27a-176', city: 'BOGOTA – BOGOTA', points: 900000 },
        { user: 'vendedor2', pass: '1234', name: 'Carlos Perez', cedula: '20005', email: 'perez.carlos@gmail.com', phone: '3000000005', address: 'Cra. 10 #45-12', city: 'MEDELLIN – ANTIOQUIA', points: 750000 }
    ]
};

const PRODUCT_COLORS = [
    '#FFE4E1', '#E8F5E9', '#E3F2FD', '#FFF3E0',
    '#F3E5F5', '#E0F7FA', '#FFF8E1', '#FCE4EC',
    '#E8EAF6', '#F1F8E9', '#FBE9E7', '#EFEBE9'
];

// ==================== STATE ====================

let currentProfile = '';
let currentUser = null;
let cart = loadCart();
let userPoints = 0;
let currentModalProductId = null;

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem('cj_cart') || '[]');
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('cj_cart', JSON.stringify(cart));
}

// ==================== AUTH / LOCAL STORAGE ====================

function getSession() {
    const data = localStorage.getItem('cj_session');
    if (!data) return null;
    try {
        return JSON.parse(data);
    } catch {
        return null;
    }
}

function saveSession(profile, userData) {
    localStorage.setItem('cj_session', JSON.stringify({
        profile: profile,
        user: userData.user,
        name: userData.name,
        cedula: userData.cedula,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        city: userData.city,
        points: userData.points
    }));
}

function clearSession() {
    localStorage.removeItem('cj_session');
}

function loadSession() {
    const session = getSession();
    if (session) {
        currentProfile = session.profile;
        currentUser = session;
        userPoints = session.points;
        setUserUI();
        navigateTo('page-home');
    } else {
        navigateTo('page-welcome');
    }
}

function setUserUI() {
    if (!currentUser) return;

    // Update all nav user names
    document.querySelectorAll('[id^="user-name-nav"]').forEach(el => {
        el.textContent = currentUser.name;
    });

    // Update all nav points
    updateNavCounts();

    // Prefill modal de redención con datos del usuario
    const redeemForm = document.getElementById('redeem-form');
    if (redeemForm) {
        document.getElementById('redeem-cedula').value = currentUser.cedula || '';
        document.getElementById('redeem-name').value = currentUser.name || '';
        document.getElementById('redeem-email').value = currentUser.email || '';
        document.getElementById('redeem-phone').value = currentUser.phone || '';
        document.getElementById('redeem-address').value = currentUser.address || '';
        document.getElementById('redeem-city').value = currentUser.city || 'BOGOTA – BOGOTA';
    }
}

// ==================== NAVIGATION ====================

function smoothNavigateTo(pageId, sectionId) {
    navigateTo(pageId);
    setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function navigateTo(pageId) {
    // Block navigation to authenticated pages if not logged in
    const authPages = ['page-home', 'page-catalog', 'page-cart', 'page-profile'];
    if (authPages.includes(pageId) && !currentUser) {
        navigateTo('page-welcome');
        return;
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);

    if (pageId === 'page-home') {
        renderFeaturedProducts();
    }
    if (pageId === 'page-catalog') {
        renderProducts();
    }
    if (pageId === 'page-cart') {
        renderCart();
    }
    if (pageId === 'page-profile') {
        renderProfile();
    }
    updateNavCounts();
}

function selectProfile(profile) {
    currentProfile = profile;
    document.getElementById('login-profile-name').textContent = profile;
    // Clear previous login fields
    document.getElementById('login-user').value = '';
    document.getElementById('login-pass').value = '';
    clearLoginError();
    navigateTo('page-login');
    // Focus on user input
    setTimeout(() => document.getElementById('login-user').focus(), 300);
}

function doLogin() {
    const username = document.getElementById('login-user').value.trim();
    const password = document.getElementById('login-pass').value.trim();

    // Validate empty fields
    if (!username || !password) {
        showLoginError('Por favor ingresa tu usuario y contraseña.');
        return;
    }

    // Look for user in current profile
    const profileUsers = USERS_DB[currentProfile];
    if (!profileUsers) {
        showLoginError('Perfil no encontrado.');
        return;
    }

    const foundUser = profileUsers.find(u => u.user === username && u.pass === password);

    if (!foundUser) {
        showLoginError('Usuario o contraseña incorrectos. Intenta de nuevo.');
        shakeLoginForm();
        return;
    }

    // Login successful
    currentUser = foundUser;
    userPoints = foundUser.points;
    saveSession(currentProfile, foundUser);
    setUserUI();
    navigateTo('page-home');
    showToast(`Bienvenido(a) ${foundUser.name}`);
}

function showLoginError(message) {
    const errorEl = document.getElementById('login-error');
    errorEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i> <span>${message}</span>`;
    errorEl.classList.remove('hidden');
}

function clearLoginError() {
    const errorEl = document.getElementById('login-error');
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
}

function shakeLoginForm() {
    const form = document.getElementById('login-form');
    form.classList.add('shake');
    setTimeout(() => form.classList.remove('shake'), 600);
}

function logout() {
    cart = [];
    saveCart();
    userPoints = 0;
    currentUser = null;
    currentProfile = '';
    clearSession();
    navigateTo('page-welcome');
    showToast('Sesión cerrada correctamente');
}

function togglePassword() {
    const input = document.getElementById('login-pass');
    const icon = document.getElementById('eye-icon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

// Allow Enter key on login form
function handleLoginKeypress(e) {
    if (e.key === 'Enter') {
        doLogin();
    }
}

// ==================== FAQ ====================

function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    const isOpen = answer.classList.contains('show');

    document.querySelectorAll('.faq-answer').forEach(a => {
        a.classList.remove('show');
        a.classList.add('hidden');
    });
    document.querySelectorAll('.faq-item i.fa-chevron-down').forEach(i => {
        i.style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
        answer.classList.remove('hidden');
        answer.classList.add('show');
        icon.style.transform = 'rotate(180deg)';
    }
}

// ==================== PRODUCTS ====================

function renderProducts(filter = 'all', search = '') {
    const grid = document.getElementById('products-grid');
    let filtered = PRODUCTS;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }

    if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-brand-gray">
                <i class="fas fa-search text-4xl mb-3 opacity-30"></i>
                <p>No se encontraron productos</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((product, i) => {
        const originalIdx = PRODUCTS.indexOf(product);
        return `
        <div class="product-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100"
             style="animation-delay: ${i * 0.05}s"
             onclick="openProductModal('${product.id}')">
            <div class="h-48 flex items-center justify-center overflow-hidden" style="background-color: ${PRODUCT_COLORS[originalIdx % PRODUCT_COLORS.length]}">
                ${product.image
                    ? `<img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-contain p-2">`
                    : `<i class="fas ${product.icon} product-image text-6xl" style="color: rgba(0,0,0,0.15)"></i>`
                }
            </div>
            <div class="p-4">
                <h4 class="font-bold text-brand-dark text-sm mb-1 line-clamp-2">${product.name}</h4>
                <p class="text-xs text-brand-gray mb-3">Stock: ${product.stock} uds.</p>
                <div class="flex items-center justify-between">
                    <span class="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">${product.points} pts</span>
                    <button onclick="event.stopPropagation(); addToCart('${product.id}')" class="bg-brand-green text-white px-3 py-1 rounded-full text-sm hover:opacity-80 transition-all">
                        <i class="fas fa-cart-plus mr-1"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    const featured = PRODUCTS.slice(0, 3); // First 3 products
    container.innerHTML = featured.map((product, i) => {
        const idx = PRODUCTS.indexOf(product);
        return `
        <div class="product-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100"
             style="animation-delay: ${i * 0.1}s"
             onclick="openProductModal('${product.id}')">
            <div class="h-40 md:h-48 flex items-center justify-center overflow-hidden" style="background-color: ${PRODUCT_COLORS[idx % PRODUCT_COLORS.length]}">
                ${product.image
                    ? `<img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-contain p-2">`
                    : `<i class="fas ${product.icon} product-image text-5xl" style="color: rgba(0,0,0,0.15)"></i>`
                }
            </div>
            <div class="p-3 md:p-4">
                <h4 class="font-bold text-brand-dark text-xs md:text-sm mb-1 line-clamp-2">${product.name}</h4>
                <p class="text-xs text-brand-gray mb-2">Stock: ${product.stock} uds.</p>
                <div class="flex items-center justify-between">
                    <span class="bg-brand-red text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">${product.points} pts</span>
                    <button onclick="event.stopPropagation(); addToCart('${product.id}')" class="bg-brand-green text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm hover:opacity-80 transition-all">
                        <i class="fas fa-cart-plus mr-1"></i> Agregar
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function filterByCategory(category, e) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    e?.target?.classList.add('active');

    const search = document.getElementById('search-input')?.value || '';
    renderProducts(category, search);
    globalThis.currentCategory = category;
}

function filterProducts() {
    const search = document.getElementById('search-input').value;
    const category = globalThis.currentCategory || 'all';
    renderProducts(category, search);
}

globalThis.currentCategory = 'all';

// ==================== PRODUCT MODAL ====================

function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;

    const idx = PRODUCTS.indexOf(product);
    document.getElementById('modal-product-image').innerHTML = product.image
        ? `<div class="w-full h-64 flex items-center justify-center" style="background-color: ${PRODUCT_COLORS[idx % PRODUCT_COLORS.length]}">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4">
        </div>`
        : `<div class="w-full h-64 flex items-center justify-center" style="background-color: ${PRODUCT_COLORS[idx % PRODUCT_COLORS.length]}">
            <i class="fas ${product.icon} text-9xl" style="color: rgba(0,0,0,0.1)"></i>
        </div>`;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-points').textContent = product.points + ' pts';
    document.getElementById('modal-product-desc').innerHTML = product.description.replace(/\n/g, '<br>');

    document.getElementById('modal-product').classList.remove('hidden');
}

function addToCartFromModal() {
    if (currentModalProductId) {
        addToCart(currentModalProductId);
        closeModal('modal-product');
    }
}

// ==================== CART ====================

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check stock
    const existing = cart.find(item => item.id === productId);
    const currentQty = existing ? existing.quantity : 0;

    if (currentQty >= product.stock) {
        showToast(`No hay suficiente stock de ${product.name}`, true);
        return;
    }

    // Check if user has enough points
    const cartTotalAfter = getCartTotal() + product.points;
    if (cartTotalAfter > userPoints) {
        showToast('No tienes suficientes puntos para este producto', true);
        return;
    }

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    saveCart();
    updateNavCounts();
    showToast(`${product.name} agregado al carrito`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateNavCounts();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const product = PRODUCTS.find(p => p.id === productId);
    const newQty = item.quantity + delta;

    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }

    if (newQty > product.stock) {
        showToast(`Stock máximo alcanzado para ${product.name}`, true);
        return;
    }

    // Check points
    const currentTotal = getCartTotal();
    const diff = product.points * delta;
    if (currentTotal + diff > userPoints) {
        showToast('No tienes suficientes puntos', true);
        return;
    }

    item.quantity = newQty;
    saveCart();
    renderCart();
    updateNavCounts();
}

function renderCart() {
    const tbody = document.getElementById('cart-table-body');
    const emptyMsg = document.getElementById('cart-empty');
    const btnRedimir = document.getElementById('btn-redimir');

    if (cart.length === 0) {
        tbody.innerHTML = '';
        emptyMsg.classList.remove('hidden');
        btnRedimir.disabled = true;
        document.getElementById('cart-total-display').textContent = '0';
        document.getElementById('available-points-display').textContent = formatNumber(userPoints);
        document.getElementById('total-points-display').textContent = formatNumber(userPoints);
        return;
    }

    emptyMsg.classList.add('hidden');
    btnRedimir.disabled = false;

    let totalCartPoints = 0;

    tbody.innerHTML = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        const idx = PRODUCTS.indexOf(product);
        const itemTotal = product.points * item.quantity;
        totalCartPoints += itemTotal;

        return `
            <tr class="border-b">
                <td class="py-4 px-4">
                    <div class="flex items-center gap-3">
                        <div class="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden" style="background-color: ${PRODUCT_COLORS[idx % PRODUCT_COLORS.length]}">
                            ${product.image
                                ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-1">`
                                : `<i class="fas ${product.icon} text-xl" style="color: rgba(0,0,0,0.2)"></i>`
                            }
                        </div>
                        <span class="font-semibold text-sm text-brand-dark">${product.name}</span>
                    </div>
                </td>
                <td class="text-center py-4 px-4">
                    <div class="flex items-center justify-center">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <input type="text" value="${item.quantity}" class="qty-input" readonly>
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </td>
                <td class="text-center py-4 px-4 font-medium">${product.points}</td>
                <td class="text-center py-4 px-4 font-bold">${itemTotal}</td>
                <td class="py-4 px-4">
                    <button class="delete-btn" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash-alt text-sm"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    document.getElementById('cart-total-display').textContent = formatNumber(totalCartPoints);
    document.getElementById('available-points-display').textContent = formatNumber(userPoints - totalCartPoints);
    document.getElementById('total-points-display').textContent = formatNumber(userPoints);
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = PRODUCTS.find(p => p.id === item.id);
        return sum + (product.points * item.quantity);
    }, 0);
}

// ==================== REDEMPTION ====================

function openRedeemModal() {
    if (cart.length === 0) return;

    // Prefill user data
    if (currentUser) {
        document.getElementById('redeem-cedula').value = currentUser.cedula || '';
        document.getElementById('redeem-name').value = currentUser.name || '';
        document.getElementById('redeem-email').value = currentUser.email || '';
        document.getElementById('redeem-phone').value = currentUser.phone || '';
        document.getElementById('redeem-address').value = currentUser.address || '';
        document.getElementById('redeem-city').value = currentUser.city || 'BOGOTA – BOGOTA';
    }

    document.getElementById('modal-redeem').classList.remove('hidden');
}

function confirmRedeem() {
    // Validate required fields
    const cedula = document.getElementById('redeem-cedula').value.trim();
    const name = document.getElementById('redeem-name').value.trim();
    const email = document.getElementById('redeem-email').value.trim();
    const phone = document.getElementById('redeem-phone').value.trim();
    const address = document.getElementById('redeem-address').value.trim();

    if (!cedula || !name || !email || !phone || !address) {
        showToast('Por favor completa todos los campos', true);
        return;
    }

    const total = getCartTotal();

    if (total > userPoints) {
        showToast('No tienes suficientes puntos para esta redención', true);
        return;
    }

    closeModal('modal-redeem');

    // Generate unique reference code: RED-YYYYMMDD-XXXXX
    const now = new Date();
    const datePart = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
    const history = getRedemptionHistory();
    const seqNum = String(history.length + 1).padStart(5, '0');
    const ref = `RED-${datePart}-${seqNum}`;

    document.getElementById('ref-redencion').textContent = ref;

    // Build redemption record
    const redeemedItems = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        return {
            productId: item.id,
            name: product.name,
            quantity: item.quantity,
            pointsUnit: product.points,
            pointsTotal: product.points * item.quantity
        };
    });

    const redemption = {
        ref,
        date: now.toISOString(),
        user: currentUser?.name || 'N/A',
        cedula,
        email,
        phone,
        address,
        city: document.getElementById('redeem-city').value,
        items: redeemedItems,
        totalPoints: total
    };

    // Save to localStorage history
    saveRedemption(redemption);

    // Render redeemed products in success modal
    const container = document.getElementById('redeemed-products');

    container.innerHTML = redeemedItems.map(item => `
        <div class="flex justify-between items-center border rounded-lg p-3">
            <div>
                <p class="font-semibold text-sm">${item.name}</p>
                <p class="text-xs text-brand-gray">Cantidad: ${item.quantity} × ${item.pointsUnit} pts</p>
            </div>
            <span class="bg-brand-red text-white px-2 py-1 rounded-full text-xs font-bold">${item.pointsTotal} pts</span>
        </div>
    `).join('');

    document.getElementById('total-redeemed').textContent = formatNumber(total) + ' pts';

    // Update points
    userPoints -= total;

    // Update session in localStorage
    if (currentUser) {
        currentUser.points = userPoints;
        saveSession(currentProfile, currentUser);
    }

    cart = [];
    saveCart();

    // Store data for thank you page before clearing cart
    lastRedemption = {
        ref,
        userName: currentUser?.name || name,
        items: redeemedItems,
        totalPoints: total,
        totalProducts: redeemedItems.reduce((sum, i) => sum + i.quantity, 0)
    };

    document.getElementById('modal-success').classList.remove('hidden');

    // Countdown 3 → 2 → 1 then redirect to thank you page
    let countdown = 3;
    document.getElementById('countdown-timer').textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        document.getElementById('countdown-timer').textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            closeModal('modal-success');
            showThankyouPage();
        }
    }, 1000);
}

let lastRedemption = null;

function showThankyouPage() {
    if (!lastRedemption) return;

    const r = lastRedemption;

    document.getElementById('ty-user-name').textContent = r.userName;
    document.getElementById('ty-ref').textContent = r.ref;
    document.getElementById('ty-total-products').textContent = r.totalProducts;
    document.getElementById('ty-total-points').textContent = formatNumber(r.totalPoints);

    document.getElementById('ty-products-table').innerHTML = r.items.map(item => `
        <tr>
            <td class="py-2 px-3 text-sm text-gray-700 border border-gray-200">${item.name}</td>
            <td class="text-center py-2 px-3 text-sm text-gray-700 border border-gray-200">${item.quantity}</td>
            <td class="text-right py-2 px-3 text-sm text-gray-700 border border-gray-200">${item.pointsUnit}</td>
            <td class="text-right py-2 px-3 text-sm font-bold text-gray-700 border border-gray-200">${item.pointsTotal}</td>
        </tr>
    `).join('');

    updateNavCounts();
    navigateTo('page-thankyou');
}

function closeThankyou() {
    lastRedemption = null;
    renderCart();
    navigateTo('page-catalog');
}

// ==================== REDEMPTION HISTORY (localStorage) ====================

function getRedemptionHistory() {
    try {
        return JSON.parse(localStorage.getItem('cj_redemptions') || '[]');
    } catch {
        return [];
    }
}

function saveRedemption(redemption) {
    const history = getRedemptionHistory();
    history.push(redemption);
    localStorage.setItem('cj_redemptions', JSON.stringify(history));
}

function closeSuccessModal() {
    closeModal('modal-success');
    showThankyouPage();
}

// ==================== MODALS ====================

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.add('hidden');
    }
});

// ==================== UTILITIES ====================

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function updateNavCounts() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const pointsFormatted = formatNumber(userPoints);

    document.querySelectorAll('[id^="cart-count-nav"], [id^="cart-count-mega"]').forEach(el => {
        el.textContent = count;
    });

    document.querySelectorAll('[id^="points-nav"], [id^="points-mega"]').forEach(el => {
        el.textContent = pointsFormatted;
    });

    document.querySelectorAll('[id^="user-name-nav"], [id^="user-name-mega"]').forEach(el => {
        el.textContent = currentUser ? currentUser.name : 'Usuario';
    });
}

function showToast(message, isError = false) {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast' + (isError ? ' error' : '');
    toast.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==================== PROFILE ====================

function renderProfile() {
    if (!currentUser) return;

    document.getElementById('profile-user-name').textContent = currentUser.name;
    document.getElementById('profile-points').textContent = formatNumber(userPoints);

    // Calculate monthly points (simulated: 10% of total)
    const monthlyPoints = Math.round(userPoints * 0.1);
    document.getElementById('profile-monthly-points').textContent = formatNumber(monthlyPoints);

    // Get redemption history
    const history = getRedemptionHistory();

    // Count total redeemed products and collect names
    let totalRedeemed = 0;
    const productNames = [];
    history.forEach(r => {
        r.items.forEach(item => {
            totalRedeemed += item.quantity;
            if (!productNames.includes(item.name)) {
                productNames.push(item.name);
            }
        });
    });

    document.getElementById('profile-redeemed-count').textContent = totalRedeemed;

    // Show redeemed product names with bullet points
    const listEl = document.getElementById('profile-redeemed-list');
    if (productNames.length > 0) {
        listEl.innerHTML = productNames.map(n => `<p class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-brand-red rounded-full inline-block"></span> ${n}</p>`).join('');
    } else {
        listEl.innerHTML = '';
    }

    // Render history
    const historyEl = document.getElementById('profile-history');
    if (history.length === 0) {
        historyEl.innerHTML = '<p class="text-sm text-brand-gray">No tienes redenciones aún.</p>';
    } else {
        historyEl.innerHTML = history.map(r => {
            const date = new Date(r.date);
            const dateStr = date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
            return `
                <div class="border rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <p class="font-semibold text-sm text-brand-dark">${r.ref}</p>
                        <p class="text-xs text-brand-gray">${dateStr} — ${r.items.map(i => i.name).join(', ')}</p>
                    </div>
                    <span class="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">${formatNumber(r.totalPoints)} pts</span>
                </div>
            `;
        }).join('');
    }
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', function() {
    // Attach Enter key listener on login inputs
    document.getElementById('login-user').addEventListener('keypress', handleLoginKeypress);
    document.getElementById('login-pass').addEventListener('keypress', handleLoginKeypress);

    // Check for existing session and auto-login
    loadSession();
});
