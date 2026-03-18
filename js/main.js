// Klövern Mina Sidor - Shared Interactions

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initTabs();
  initFilters();
  initChecklist();
  initModals();
  initOfferCodes();
  initToast();
  initNotifications();
});

// --- Sidebar (mobile) ---
function initSidebar() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
}

// --- Tabs ---
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabBar => {
    const tabs = tabBar.querySelectorAll('.tab');
    const container = tabBar.closest('.tabs-container') || tabBar.parentElement;
    const panels = container.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        panels.forEach(p => {
          p.classList.toggle('active', p.dataset.panel === target);
        });
      });
    });
  });
}

// --- Filter Pills ---
function initFilters() {
  document.querySelectorAll('.filter-pills').forEach(pillContainer => {
    const pills = pillContainer.querySelectorAll('.filter-pill');
    const targetGrid = pillContainer.dataset.target;
    const grid = document.querySelector(targetGrid);

    if (!grid) return;

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const category = pill.dataset.filter;
        const cards = grid.querySelectorAll('[data-category]');

        cards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
}

// --- Checklist ---
function initChecklist() {
  const items = document.querySelectorAll('.checklist-item');
  if (!items.length) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('done');
      updateChecklistProgress();
    });
  });

  updateChecklistProgress();
}

function updateChecklistProgress() {
  const total = document.querySelectorAll('.checklist-item').length;
  const done = document.querySelectorAll('.checklist-item.done').length;
  if (total === 0) return;

  const percent = Math.round((done / total) * 100);

  const numberEl = document.querySelector('.progress-value .number');
  const labelEl = document.querySelector('.progress-value .label');
  const circleEl = document.querySelector('.progress-circle .progress');

  if (numberEl) numberEl.textContent = percent + '%';
  if (labelEl) labelEl.textContent = done + ' av ' + total;

  if (circleEl) {
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (percent / 100) * circumference;
    circleEl.style.strokeDasharray = circumference;
    circleEl.style.strokeDashoffset = offset;
  }
}

// --- Modals ---
function initModals() {
  // Open modal buttons
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector(btn.dataset.modal);
      if (modal) modal.classList.add('open');
    });
  });

  // Close modal buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay').classList.remove('open');
    });
  });

  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // Form submissions in modals
  document.querySelectorAll('.modal form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = form.closest('.modal-overlay');
      if (modal) modal.classList.remove('open');
      showToast(form.dataset.success || 'Klart!');
    });
  });
}

// --- Offer Code Reveal ---
function initOfferCodes() {
  document.querySelectorAll('.offer-reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.parentElement.querySelector('.offer-code');
      if (code) {
        code.classList.toggle('visible');
        btn.textContent = code.classList.contains('visible') ? 'Dölj kod' : 'Visa kod';
      }
    });
  });
}

// --- Toast Notifications ---
let toastTimeout;

function initToast() {
  // Create toast element if it doesn't exist
  if (!document.querySelector('.toast')) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
}

function showToast(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// --- Notifications Dropdown ---
function initNotifications() {
  const btn = document.querySelector('.topbar-notification');
  const dropdown = document.querySelector('.notification-dropdown');

  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
}
