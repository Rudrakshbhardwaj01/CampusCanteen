// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Classic Burger",
        price: 8.99,
        description: "Juicy beef patty with fresh vegetables and special sauce",
        category: "Main Course",
        isVegetarian: false,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format"
    },
    {
        id: 2,
        name: "French Toast",
        price: 7.99,
        description: "Thick-cut brioche bread dipped in vanilla custard, served with maple syrup",
        category: "Main Course",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format"
    },
    {
        id: 3,
        name: "Egg & Sausages",
        price: 9.99,
        description: "Farm-fresh eggs with premium sausages and toast",
        category: "Main Course",
        isVegetarian: false,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format"
    },
    {
        id: 4,
        name: "Margherita Pizza",
        price: 12.99,
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
        category: "Main Course",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format"
    },
    {
        id: 5,
        name: "Caesar Salad",
        price: 7.99,
        description: "Crisp romaine lettuce with parmesan and croutons",
        category: "Main Course",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format"
    },
    {
        id: 6,
        name: "Chocolate Muffin",
        price: 3.99,
        description: "Rich chocolate muffin with chocolate chips",
        category: "Snacks",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format"
    },
    {
        id: 7,
        name: "Iced Coffee",
        price: 4.99,
        description: "Cold brew coffee with milk and ice",
        category: "Beverages",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format"
    },
    {
        id: 8,
        name: "Avocado Toast",
        price: 6.99,
        description: "Fresh avocado on artisanal sourdough with microgreens",
        category: "Main Course",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&auto=format"
    },
    {
        id: 9,
        name: "Chicken Wrap",
        price: 9.99,
        description: "Grilled chicken with fresh vegetables in a whole wheat wrap",
        category: "Main Course",
        isVegetarian: false,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&auto=format"
    },
    {
        id: 10,
        name: "Fruit Smoothie",
        price: 5.99,
        description: "Mixed berries with yogurt and honey",
        category: "Beverages",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=500&auto=format"
    },
    {
        id: 11,
        name: "Veggie Sandwich",
        price: 7.99,
        description: "Fresh vegetables with hummus on multigrain bread",
        category: "Main Course",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format"
    },
    {
        id: 12,
        name: "Green Tea",
        price: 3.99,
        description: "Premium Japanese green tea with honey",
        category: "Beverages",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&auto=format"
    },
    {
        id: 13,
        name: "Fruit Bowl",
        price: 6.99,
        description: "Seasonal fruits with yogurt and granola",
        category: "Snacks",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=500&auto=format"
    },
    {
        id: 14,
        name: "Chocolate Chip Cookie",
        price: 2.99,
        description: "Warm chocolate chip cookie with sea salt",
        category: "Snacks",
        isVegetarian: true,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format"
    },
    {
        id: 15,
        name: "Chicken Salad",
        price: 8.99,
        description: "Grilled chicken with mixed greens and balsamic dressing",
        category: "Main Course",
        isVegetarian: false,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format"
    }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuGrid = document.querySelector('.carousel-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartButton = document.getElementById('cartButton');
const mobileCartButton = document.getElementById('mobileCartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const toast = document.getElementById('toast');
const backToTop = document.getElementById('backToTop');
const ordersList = document.getElementById('ordersList');
const noOrders = document.getElementById('noOrders');

// Cart State
let cart = [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Theme Toggle
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Menu Filtering
let currentCategory = 'All';
let currentPriceRange = 'all';
let currentDietary = 'all';
let searchQuery = '';

function filterMenu(category) {
    currentCategory = category;
    applyFilters();
}

function applyFilters() {
    let filteredItems = menuItems;

    // Apply category filter
    if (currentCategory !== 'All') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }

    // Apply price range filter
    if (currentPriceRange !== 'all') {
        const [min, max] = currentPriceRange.split('-').map(Number);
        filteredItems = filteredItems.filter(item => {
            if (max) {
                return item.price >= min && item.price <= max;
            } else {
                return item.price >= min;
            }
        });
    }

    // Apply dietary filter
    if (currentDietary !== 'all') {
        filteredItems = filteredItems.filter(item => {
            if (currentDietary === 'vegetarian') {
                return item.isVegetarian;
            } else {
                return !item.isVegetarian;
            }
        });
    }

    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );
    }

    renderMenuItems(filteredItems);
    updateFilterButtons(currentCategory);
}

function updateFilterButtons(activeCategory) {
    filterButtons.forEach(btn => {
        if (btn.textContent.trim() === activeCategory) {
            btn.classList.add('active', 'bg-primary', 'text-white');
            btn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-white');
        } else {
            btn.classList.remove('active', 'bg-primary', 'text-white');
            btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-white');
        }
    });
}

// Search functionality
const menuSearch = document.getElementById('menuSearch');
menuSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    applyFilters();
});

// Price range filter
const priceFilter = document.getElementById('priceFilter');
priceFilter.addEventListener('change', (e) => {
    currentPriceRange = e.target.value;
    applyFilters();
});

// Dietary filter
const dietaryFilter = document.getElementById('dietaryFilter');
dietaryFilter.addEventListener('change', (e) => {
    currentDietary = e.target.value;
    applyFilters();
});

// Render Menu Items
function renderMenuItems(items) {
    menuGrid.innerHTML = items.map(item => `
        <div class="flex-none w-80 snap-center">
            <div class="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
                <div class="relative">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-56 object-cover">
                    <div class="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
                        $${item.price}
                    </div>
                    <div class="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${item.isVegetarian ? 'text-green-600' : 'text-red-600'}">
                        ${item.isVegetarian ? '🥬 Veg' : '🍖 Non-Veg'}
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white">${item.name}</h3>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${item.category}</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${item.description}</p>
                    
                    <!-- Quantity Selector -->
                    <div class="flex items-center justify-between mb-4">
                        <label class="text-sm text-gray-600 dark:text-gray-400">Quantity:</label>
                        <div class="flex items-center space-x-2">
                            <button onclick="updateItemQuantity(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">-</button>
                            <span id="quantity-${item.id}" class="w-8 text-center text-gray-800 dark:text-white">1</span>
                            <button onclick="updateItemQuantity(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">+</button>
                        </div>
                    </div>

                    <!-- Spice Level Selector -->
                    <div class="mb-4">
                        <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">Spice Level:</label>
                        <div class="flex items-center space-x-4">
                            <label class="flex items-center space-x-2">
                                <input type="radio" name="spice-${item.id}" value="Mild" class="form-radio text-primary">
                                <span class="text-gray-800 dark:text-white">Mild</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" name="spice-${item.id}" value="Medium" checked class="form-radio text-primary">
                                <span class="text-gray-800 dark:text-white">Medium</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" name="spice-${item.id}" value="Hot" class="form-radio text-primary">
                                <span class="text-gray-800 dark:text-white">Hot</span>
                            </label>
                        </div>
                    </div>

                    <button 
                        onclick="addToCart(${item.id})"
                        class="w-full py-3 bg-primary text-white rounded-xl hover:shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                        <span>Add to Cart</span>
                        <span class="text-lg">🛒</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Update item quantity
function updateItemQuantity(itemId, delta) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    const currentQuantity = parseInt(quantityElement.textContent);
    const newQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
    quantityElement.textContent = newQuantity;
}

// Get selected spice level
function getSelectedSpiceLevel(itemId) {
    const selectedSpice = document.querySelector(`input[name="spice-${itemId}"]:checked`);
    return selectedSpice ? selectedSpice.value : 'Medium';
}

// Add to Cart with quantity and spice level
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const quantity = parseInt(document.getElementById(`quantity-${itemId}`).textContent);
    const spiceLevel = getSelectedSpiceLevel(itemId);
    
    const existingItem = cart.find(cartItem => 
        cartItem.id === itemId && cartItem.spiceLevel === spiceLevel
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ 
            ...item, 
            quantity: quantity,
            spiceLevel: spiceLevel
        });
    }

    updateCart();
    showToast(`${quantity} ${item.name} (${spiceLevel}) added to cart`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function updateCartQuantity(itemId, delta) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
    document.getElementById('mobileCartCount').textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between">
            <div class="flex-1">
                <h4 class="font-medium text-gray-800 dark:text-white">${item.name}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    $${item.price} × ${item.quantity} | ${item.spiceLevel}
                </p>
            </div>
            <div class="flex items-center space-x-4">
                <select onchange="updateCartItemSpiceLevel(${item.id}, this.value)" 
                    class="px-2 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white text-sm">
                    <option value="Mild" ${item.spiceLevel === 'Mild' ? 'selected' : ''}>Mild</option>
                    <option value="Medium" ${item.spiceLevel === 'Medium' ? 'selected' : ''}>Medium</option>
                    <option value="Hot" ${item.spiceLevel === 'Hot' ? 'selected' : ''}>Hot</option>
                </select>
                <div class="flex items-center space-x-2">
                    <button onclick="updateCartQuantity(${item.id}, -1)" class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">-</button>
                    <span class="text-gray-800 dark:text-white">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)" class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">+</button>
                </div>
            </div>
        </div>
    `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Update cart item spice level
function updateCartItemSpiceLevel(itemId, newSpiceLevel) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.spiceLevel = newSpiceLevel;
        updateCart();
    }
}

// Cart UI
cartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
});

mobileCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
    mobileMenu.classList.add('hidden');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
});

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    const order = {
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        time: new Date().toLocaleString(),
        status: 'Preparing',
        statusTime: new Date().getTime()
    };

    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Play order sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.play();

    // Show success message
    showToast('Order placed successfully! 🎉');

    // Clear cart
    cart = [];
    updateCart();
    cartSidebar.classList.add('translate-x-full');

    // Update orders list
    renderOrders();
}

placeOrderBtn.addEventListener('click', placeOrder);

// Toast Notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('translate-y-full');
    setTimeout(() => {
        toast.classList.add('translate-y-full');
    }, 3000);
}

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0');
    } else {
        backToTop.classList.add('opacity-0');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Render Orders
function renderOrders() {
    if (orders.length === 0) {
        ordersList.classList.add('hidden');
        noOrders.classList.remove('hidden');
        return;
    }

    ordersList.classList.remove('hidden');
    noOrders.classList.add('hidden');

    ordersList.innerHTML = orders.map(order => {
        const currentTime = new Date().getTime();
        const orderTime = order.statusTime;
        const timeDiff = currentTime - orderTime;
        const minutesPassed = Math.floor(timeDiff / (1000 * 60));

        // Update order status based on time
        if (order.status === 'Preparing' && minutesPassed >= 2) {
            order.status = 'Ready for Pickup';
            localStorage.setItem('orders', JSON.stringify(orders));
        }

        return `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">Order #${order.id}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${order.time}</p>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-bold text-primary">$${order.total.toFixed(2)}</span>
                        <div class="mt-2">
                            <span class="px-3 py-1 rounded-full text-sm font-medium ${
                                order.status === 'Preparing' 
                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }">
                                ${order.status}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="space-y-2">
                    ${order.items.map(item => `
                        <div class="flex justify-between items-center text-sm">
                            <div class="flex-1">
                                <span class="text-gray-600 dark:text-gray-300">${item.name} × ${item.quantity}</span>
                                <span class="text-gray-500 dark:text-gray-400 ml-2">(${item.spiceLevel})</span>
                            </div>
                            <span class="text-gray-800 dark:text-white">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// Update order statuses every minute
setInterval(() => {
    renderOrders();
}, 60000);

// Initialize
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterMenu(btn.textContent.trim());
    });
});

// Initial render
renderMenuItems(menuItems);
renderOrders();

// Menu Carousel Functionality
const menuContainer = document.querySelector('.carousel-container');

// Touch support for menu carousel
let isDown = false;
let startX;
let scrollLeft;

menuContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    menuContainer.classList.add('active');
    startX = e.pageX - menuContainer.offsetLeft;
    scrollLeft = menuContainer.scrollLeft;
});

menuContainer.addEventListener('mouseleave', () => {
    isDown = false;
    menuContainer.classList.remove('active');
});

menuContainer.addEventListener('mouseup', () => {
    isDown = false;
    menuContainer.classList.remove('active');
});

menuContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - menuContainer.offsetLeft;
    const walk = (x - startX) * 2;
    menuContainer.scrollLeft = scrollLeft - walk;
});

// Testimonial Carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevTestimonialBtn = document.getElementById('prevTestimonial');
const nextTestimonialBtn = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = '1';
            slide.style.transform = 'translateX(0)';
            slide.style.zIndex = '1';
        } else {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)';
            slide.style.zIndex = '0';
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

// Auto-advance testimonials
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto-advance on hover
document.getElementById('testimonialSlides').addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.getElementById('testimonialSlides').addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// Manual navigation
prevTestimonialBtn.addEventListener('click', () => {
    prevTestimonial();
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

nextTestimonialBtn.addEventListener('click', () => {
    nextTestimonial();
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// Initialize testimonials
showTestimonial(0); 