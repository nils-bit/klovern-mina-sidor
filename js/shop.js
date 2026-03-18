// Klövern Mina Sidor - Shop Cart Logic

const CART_KEY = 'klovern_cart';

function getCart() {
  try {
    return JSON.parse(sessionStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = MOCK_DATA.shopProducts.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }

  saveCart(cart);
  showToast(`${product.name} tillagd i varukorgen`);
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const cart = getCart();

  // Update cart count badge
  const countBadge = document.querySelector('.cart-count');
  if (countBadge) {
    const count = getCartCount();
    countBadge.textContent = count;
    countBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  // Update cart drawer items
  const cartBody = document.querySelector('.cart-drawer-body');
  if (cartBody) {
    if (cart.length === 0) {
      cartBody.innerHTML = '<p class="text-muted text-sm" style="text-align:center;padding:40px 0;">Varukorgen är tom</p>';
    } else {
      cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.qty} x ${item.price} kr</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Ta bort">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `).join('');
    }
  }

  // Update total
  const totalEl = document.querySelector('.cart-total-value');
  if (totalEl) {
    totalEl.textContent = getCartTotal().toLocaleString('sv-SE') + ' kr';
  }
}

function toggleCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  if (drawer) drawer.classList.toggle('open');
}

function closeCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  if (drawer) drawer.classList.remove('open');
}

function mockCheckout() {
  const cart = getCart();
  if (cart.length === 0) return;

  closeCartDrawer();

  // Show checkout modal
  const modal = document.querySelector('#checkout-modal');
  if (modal) modal.classList.add('open');
}

function completeOrder() {
  sessionStorage.removeItem(CART_KEY);
  updateCartUI();

  const modal = document.querySelector('#checkout-modal');
  if (modal) modal.classList.remove('open');

  showToast('Tack för din beställning! Orderbekräftelse skickas till din e-post.');
}

// Initialize cart UI on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
});
