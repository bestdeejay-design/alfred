const appData = {
  business: {
    name: 'Студия красоты "Элегант"',
    address: 'ул. Арбат, 15, Москва',
    phone: '+7 (495) 234-56-78',
    email: 'info@elegant-studio.ru'
  },
  services: [
    { id: 'sv1', name: 'Стрижка женская', price: 2500, duration: 60, category: 'Волосы', bookings: 128 },
    { id: 'sv2', name: 'Стрижка мужская', price: 1500, duration: 40, category: 'Волосы', bookings: 95 },
    { id: 'sv3', name: 'Окрашивание', price: 5000, duration: 120, category: 'Волосы', bookings: 67 },
    { id: 'sv4', name: 'Маникюр', price: 1800, duration: 60, category: 'Ногти', bookings: 112 },
    { id: 'sv5', name: 'Педикюр', price: 2200, duration: 70, category: 'Ногти', bookings: 78 },
    { id: 'sv6', name: 'Чистка лица', price: 3000, duration: 50, category: 'Уход', bookings: 54 },
    { id: 'sv7', name: 'Массаж спины', price: 2000, duration: 45, category: 'Массаж', bookings: 86 },
    { id: 'sv8', name: 'Массаж общий', price: 3500, duration: 80, category: 'Массаж', bookings: 43 },
    { id: 'sv9', name: 'Ламинирование ресниц', price: 1500, duration: 40, category: 'Ресницы', bookings: 61 }
  ],
  clients: [
    { id: 'cl1', name: 'Анна Смирнова', phone: '+7 (912) 345-67-89', email: 'anna@mail.ru', visits: 12, totalSpent: 45000, lastVisit: '2026-06-05', preferredServices: ['sv1', 'sv4'] },
    { id: 'cl2', name: 'Елена Петрова', phone: '+7 (915) 234-56-78', email: 'elena@yandex.ru', visits: 8, totalSpent: 32000, lastVisit: '2026-06-03', preferredServices: ['sv3', 'sv5'] },
    { id: 'cl3', name: 'Ольга Иванова', phone: '+7 (917) 876-54-32', email: 'olga@gmail.com', visits: 5, totalSpent: 15000, lastVisit: '2026-05-28', preferredServices: ['sv6'] },
    { id: 'cl4', name: 'Мария Кузнецова', phone: '+7 (916) 543-21-09', email: 'maria@bk.ru', visits: 15, totalSpent: 58000, lastVisit: '2026-06-06', preferredServices: ['sv4', 'sv7', 'sv1'] },
    { id: 'cl5', name: 'Дмитрий Волков', phone: '+7 (918) 111-22-33', email: 'dmitry@mail.ru', visits: 3, totalSpent: 6000, lastVisit: '2026-05-20', preferredServices: ['sv2'] },
    { id: 'cl6', name: 'Татьяна Соколова', phone: '+7 (919) 444-55-66', email: 'tanya@yandex.ru', visits: 7, totalSpent: 28000, lastVisit: '2026-06-01', preferredServices: ['sv1', 'sv5', 'sv9'] }
  ],
  appointments: [
    { id: 'ap1', clientId: 'cl1', serviceId: 'sv4', date: '2026-06-07', time: '09:00', status: 'confirmed', note: '' },
    { id: 'ap2', clientId: 'cl4', serviceId: 'sv1', date: '2026-06-07', time: '10:00', status: 'confirmed', note: '' },
    { id: 'ap3', clientId: 'cl2', serviceId: 'sv3', date: '2026-06-07', time: '11:00', status: 'confirmed', note: 'Хочет обсудить оттенок' },
    { id: 'ap4', clientId: 'cl6', serviceId: 'sv9', date: '2026-06-07', time: '12:30', status: 'confirmed', note: '' },
    { id: 'ap5', clientId: 'cl3', serviceId: 'sv6', date: '2026-06-07', time: '14:00', status: 'pending', note: '' },
    { id: 'ap6', clientId: 'cl1', serviceId: 'sv7', date: '2026-06-07', time: '16:00', status: 'confirmed', note: 'После стрижки' },
    { id: 'ap7', clientId: 'cl5', serviceId: 'sv2', date: '2026-06-07', time: '17:30', status: 'cancelled', note: 'Перезвонил, отменил' },
    { id: 'ap8', clientId: 'cl4', serviceId: 'sv4', date: '2026-06-08', time: '10:00', status: 'confirmed', note: '' },
    { id: 'ap9', clientId: 'cl2', serviceId: 'sv5', date: '2026-06-08', time: '14:00', status: 'confirmed', note: '' },
    { id: 'ap10', clientId: 'cl6', serviceId: 'sv1', date: '2026-06-09', time: '11:00', status: 'pending', note: '' }
  ],
  transactions: [
    { id: 'tx1', clientId: 'cl1', amount: 1800, date: '2026-06-05', type: 'income', method: 'card', service: 'Маникюр' },
    { id: 'tx2', clientId: 'cl4', amount: 2500, date: '2026-06-06', type: 'income', method: 'cash', service: 'Стрижка женская' },
    { id: 'tx3', clientId: 'cl2', amount: 5000, date: '2026-06-03', type: 'income', method: 'card', service: 'Окрашивание' },
    { id: 'tx4', clientId: 'cl3', amount: 3000, date: '2026-05-28', type: 'income', method: 'card', service: 'Чистка лица' },
    { id: 'tx5', clientId: 'cl6', amount: 1500, date: '2026-06-01', type: 'income', method: 'cash', service: 'Ламинирование ресниц' },
    { id: 'tx6', clientId: 'cl5', amount: 1500, date: '2026-05-20', type: 'income', method: 'card', service: 'Стрижка мужская' },
    { id: 'tx7', amount: 8000, date: '2026-06-04', type: 'expense', category: 'Материалы', note: 'Закупка краски' },
    { id: 'tx8', amount: 15000, date: '2026-06-02', type: 'expense', category: 'Аренда', note: 'Аренда помещения июнь' }
  ],
  notifications: [
    { id: 'n1', text: 'Анна Смирнова записалась на Маникюр в 09:00', time: '5 мин назад', read: false },
    { id: 'n2', text: 'Дмитрий Волков отменил запись на 17:30', time: '2 часа назад', read: false },
    { id: 'n3', text: 'Новая запись: Татьяна Соколова на 12:30 завтра', time: '3 часа назад', read: true },
    { id: 'n4', text: 'Напоминание: Елена Петрова в 11:00', time: 'вчера', read: true }
  ]
};

let currentMode = 'business';
let currentPage = 'dashboard';
let history = ['dashboard'];
let currentViewDate = new Date();
let currentServiceFilter = null;
let scheduleFilter = 'all';
let selectedUserId = null;

/* ─── Utility ─── */
function formatCurrency(n) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

function getService(id) {
  return appData.services.find(s => s.id === id);
}

function getClient(id) {
  return appData.clients.find(c => c.id === id);
}

function getTodayAppointments() {
  const today = dateStr(new Date());
  return appData.appointments.filter(a => a.date === today);
}

function dateStr(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function formatDate(d) {
  const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

function formatDayName(d) {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return days[d.getDay()];
}

function dayAbbr(d) {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return days[d.getDay()] + ', ' + d.getDate();
}

const statusLabels = {
  confirmed: 'Подтверждена',
  pending: 'Ожидание',
  cancelled: 'Отменена',
  completed: 'Выполнена'
};

/* ─── Theme ─── */
function toggleTheme() {
  const html = document.documentElement;
  const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', theme);
  localStorage.setItem('alfred-theme', theme);
}

function loadTheme() {
  const saved = localStorage.getItem('alfred-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
}

/* ─── Mode Toggle ─── */
function toggleMode() {
  const knob = document.getElementById('modeKnob');
  const businessLabel = document.getElementById('businessLabel');
  const clientLabel = document.getElementById('clientLabel');
  const toggle = document.querySelector('.mode-toggle');
  const btn = document.getElementById('enterBtn');

  currentMode = currentMode === 'business' ? 'client' : 'business';

  if (toggle) toggle.classList.toggle('client', currentMode === 'client');
  if (businessLabel) businessLabel.classList.toggle('active', currentMode === 'business');
  if (clientLabel) clientLabel.classList.toggle('active', currentMode === 'client');
  if (btn) {
    btn.innerHTML = currentMode === 'business'
      ? 'Войти <svg class="icon"><use href="#icon-arrow"/></svg>'
      : 'Записаться <svg class="icon"><use href="#icon-arrow"/></svg>';
  }
  localStorage.setItem('alfred-mode', currentMode);
}

function initMode() {
  const saved = localStorage.getItem('alfred-mode') || 'business';
  if (saved !== currentMode) toggleMode();
}

/* ─── Navigation ─── */
function openApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('alfred-appOpen', 'true');
  updateBottomNav();
  if (currentMode === 'business') {
    currentPage = 'dashboard';
    showPage('dashboard');
  } else {
    currentPage = 'booking';
    showPage('booking');
  }
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  history = [currentMode === 'business' ? 'dashboard' : 'booking'];
  localStorage.setItem('alfred-appOpen', 'false');
}

function updateBottomNav() {
  const nav = document.getElementById('bottomNav');
  if (currentMode === 'client') {
    nav.innerHTML = `
      <button class="nav-item active" onclick="showPage('booking', this)">
        <svg class="icon-nav"><use href="#icon-plus"/></svg>
        <span>Запись</span>
      </button>
      <button class="nav-item" onclick="showPage('my-appointments', this)">
        <svg class="icon-nav"><use href="#icon-calendar"/></svg>
        <span>Мои записи</span>
      </button>
      <button class="nav-item" onclick="showPage('client-profile', this)">
        <svg class="icon-nav"><use href="#icon-user"/></svg>
        <span>Профиль</span>
      </button>
    `;
  } else {
    nav.innerHTML = `
      <button class="nav-item active" onclick="showPage('dashboard', this)">
        <svg class="icon-nav"><use href="#icon-home"/></svg>
        <span>Главная</span>
      </button>
      <button class="nav-item" onclick="showPage('schedule', this)">
        <svg class="icon-nav"><use href="#icon-calendar"/></svg>
        <span>Расписание</span>
      </button>
      <button class="nav-item" onclick="showPage('clients', this)">
        <svg class="icon-nav"><use href="#icon-users"/></svg>
        <span>Клиенты</span>
      </button>
      <button class="nav-item" onclick="showPage('services', this)">
        <svg class="icon-nav"><use href="#icon-star"/></svg>
        <span>Услуги</span>
      </button>
      <button class="nav-item" onclick="showPage('more', this)">
        <svg class="icon-nav"><use href="#icon-filter"/></svg>
        <span>Ещё</span>
      </button>
    `;
  }
}

function showPage(pageName, btnElement) {
  history.push(pageName);
  currentPage = pageName;
  updateHeader(pageName);
  renderContent(pageName);
  updateBottomNavActive(btnElement);
  document.getElementById('content').scrollTop = 0;
}

function updateBottomNavActive(btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
  }
}

function updateHeader(pageName) {
  const titles = {
    dashboard: 'Дашборд',
    schedule: 'Расписание',
    clients: 'Клиенты',
    services: 'Услуги',
    analytics: 'Аналитика',
    finances: 'Финансы',
    settings: 'Настройки',
    'more': 'Ещё',
    booking: 'Запись',
    'my-appointments': 'Мои записи',
    'client-profile': 'Профиль',
    'edit-client': 'Клиент'
  };
  document.getElementById('appTitle').textContent = titles[pageName] || pageName;
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prev = history[history.length - 1];
    currentPage = prev;
    updateHeader(prev);
    renderContent(prev);
  }
}

function renderContent(pageName) {
  const content = document.getElementById('content');
  if (currentMode === 'business') {
    if (pageName === 'dashboard') content.innerHTML = renderDashboard();
    else if (pageName === 'schedule') content.innerHTML = renderSchedule();
    else if (pageName === 'clients') content.innerHTML = renderClients();
    else if (pageName === 'services') content.innerHTML = renderServices();
    else if (pageName === 'analytics') content.innerHTML = renderAnalytics();
    else if (pageName === 'finances') content.innerHTML = renderFinances();
    else if (pageName === 'settings') content.innerHTML = renderSettings();
    else if (pageName === 'more') content.innerHTML = renderMore();
    else if (pageName === 'edit-client') content.innerHTML = renderEditClient(selectedUserId);
  } else {
    if (pageName === 'booking') content.innerHTML = renderBooking();
    else if (pageName === 'my-appointments') content.innerHTML = renderMyAppointments();
    else if (pageName === 'client-profile') content.innerHTML = renderClientProfile();
  }
}

/* ─── DASHBOARD ─── */
function renderDashboard() {
  const today = getTodayAppointments();
  const todayRevenue = today.reduce((s, a) => s + (a.status !== 'cancelled' ? (getService(a.serviceId)?.price || 0) : 0), 0);
  const totalClients = appData.clients.length;
  const newNotifications = appData.notifications.filter(n => !n.read).length;

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div class="stat-row">
            <div class="stat-item">
              <div class="stat-label">Сегодня</div>
              <div class="stat-value" style="color:var(--primary)">${today.filter(a => a.status !== 'cancelled').length}</div>
              <div class="stat-label">записей</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Выручка</div>
              <div class="stat-value" style="color:var(--success);font-size:20px">${formatCurrency(todayRevenue)}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Клиентов</div>
              <div class="stat-value" style="color:var(--accent);font-size:20px">${totalClients}</div>
            </div>
          </div>
        </div>
      </div>

      ${newNotifications > 0 ? `
        <div class="dashboard-card" style="border-color:var(--primary);margin-bottom:12px" onclick="showPage('settings')">
          <div style="display:flex;align-items:center;gap:10px">
            <svg class="icon" style="width:22px;height:22px;color:var(--primary)"><use href="#icon-bell"/></svg>
            <span style="flex:1;font-size:14px">Уведомления</span>
            <span style="background:var(--primary);color:white;padding:2px 8px;border-radius:10px;font-size:12px;font-weight:600">${newNotifications}</span>
          </div>
        </div>
      ` : ''}

      <div class="section-title">
        <span>Сегодня ${formatDate(new Date())}</span>
      </div>

      ${today.length === 0 ? '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">На сегодня записей нет</p>' : ''}

      ${today.sort((a, b) => a.time.localeCompare(b.time)).map(a => {
        const client = getClient(a.clientId);
        const service = getService(a.serviceId);
        return `
          <div class="appointment-card">
            <div class="appointment-time">${a.time}</div>
            <div class="appointment-info">
              <div class="appointment-name">${client ? client.name : '—'}</div>
              <div class="appointment-service">${service ? service.name : '—'} ${a.note ? '• ' + a.note : ''}</div>
            </div>
            <span class="appointment-status status-${a.status}">${statusLabels[a.status]}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ─── SCHEDULE ─── */
function renderSchedule() {
  const ds = dateStr(currentViewDate);
  const dayApps = appData.appointments.filter(a => a.date === ds).sort((a, b) => a.time.localeCompare(b.time));

  return `
    <div class="page-content">
      <div class="schedule-controls">
        <button class="schedule-nav" onclick="shiftDay(-1)">←</button>
        <span class="schedule-date">${dayAbbr(currentViewDate)}</span>
        <button class="schedule-nav" onclick="shiftDay(1)">→</button>
      </div>

      <div class="schedule-slots">
        ${generateTimeSlots(dayApps)}
      </div>

      <div style="display:flex;gap:6px;margin-bottom:12px">
        <button class="time-slot ${scheduleFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">Все</button>
        <button class="time-slot ${scheduleFilter === 'confirmed' ? 'active' : ''}" onclick="setFilter('confirmed')">Подтвержд.</button>
        <button class="time-slot ${scheduleFilter === 'pending' ? 'active' : ''}" onclick="setFilter('pending')">Ожидание</button>
      </div>

      ${dayApps.length === 0 ? '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">Нет записей на этот день</p>' : ''}

      ${dayApps.map(a => {
        const client = getClient(a.clientId);
        const service = getService(a.serviceId);
        return `
          <div class="appointment-card">
            <div class="appointment-time">${a.time}</div>
            <div class="appointment-info">
              <div class="appointment-name">${client ? client.name : '—'}</div>
              <div class="appointment-service">${service ? service.name : '—'} ${a.note ? '• ' + a.note : ''}</div>
            </div>
            <span class="appointment-status status-${a.status}">${statusLabels[a.status]}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function shiftDay(n) {
  currentViewDate.setDate(currentViewDate.getDate() + n);
  renderContent('schedule');
}

function generateTimeSlots(dayApps) {
  const slots = [];
  for (let h = 8; h <= 20; h++) {
    for (let m = 0; m < 60; m += 30) {
      const t = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
      const has = dayApps.some(a => a.time === t);
      const count = dayApps.filter(a => a.time === t).length;
      slots.push({ time: t, has, count });
    }
  }
  return slots.map(s => `
    <div class="time-slot ${s.has ? 'has-bookings' : ''}">${s.time}${s.count ? ' (' + s.count + ')' : ''}</div>
  `).join('');
}

function setFilter(f) {
  scheduleFilter = f;
  renderContent('schedule');
}

/* ─── CLIENTS ─── */
function renderClients() {
  return `
    <div class="page-content">
      <div style="margin-bottom:12px;display:flex;gap:8px">
        <input type="text" id="clientSearch" class="admin-input" placeholder="Поиск клиентов..." oninput="filterClients()" style="flex:1">
      </div>
      ${appData.clients.sort((a, b) => b.visits - a.visits).map(c => `
        <div class="client-card" onclick="openEditClient('${c.id}')">
          <div class="client-avatar">${c.name.split(' ').map(s => s[0]).join('')}</div>
          <div class="client-info">
            <div class="client-name">${c.name}</div>
            <div class="client-meta">${c.phone} • ${c.email}</div>
          </div>
          <div class="client-visits">${c.visits} виз.</div>
        </div>
      `).join('')}
    </div>
  `;
}

function openEditClient(id) {
  selectedUserId = id;
  showPage('edit-client');
}

function renderEditClient(id) {
  const c = getClient(id);
  if (!c) return '<div class="page-content"><p>Клиент не найден</p></div>';

  return `
    <div class="page-content">
      <div class="client-profile-header">
        <div class="client-profile-avatar">${c.name.split(' ').map(s => s[0]).join('')}</div>
        <div class="client-profile-name">${c.name}</div>
        <div class="client-profile-stat">
          <div class="client-profile-stat-item">
            <div class="client-profile-stat-value">${c.visits}</div>
            <div class="client-profile-stat-label">Визитов</div>
          </div>
          <div class="client-profile-stat-item">
            <div class="client-profile-stat-value">${formatCurrency(c.totalSpent)}</div>
            <div class="client-profile-stat-label">Потрачено</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:16px">
        <div class="settings-item"><svg class="icon"><use href="#icon-phone"/></svg>
          <div class="settings-info"><div class="settings-label">${c.phone}</div><div class="settings-desc">Телефон</div></div></div>
        <div class="settings-item"><svg class="icon"><use href="#icon-mail"/></svg>
          <div class="settings-info"><div class="settings-label">${c.email}</div><div class="settings-desc">Email</div></div></div>
      </div>

      <div class="section-title"><span>История записей</span></div>
      ${appData.appointments.filter(a => a.clientId === id).sort((a, b) => b.date.localeCompare(a.date)).map(a => {
        const sv = getService(a.serviceId);
        return `
          <div class="my-appointment-card">
            <div class="my-appointment-top">
              <span class="my-appointment-service">${sv ? sv.name : '—'}</span>
              <span class="appointment-status status-${a.status}">${statusLabels[a.status]}</span>
            </div>
            <div class="my-appointment-date">${a.date} в ${a.time}</div>
            <div class="my-appointment-price">${sv ? formatCurrency(sv.price) : '—'}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function filterClients() {
  renderContent('clients');
}

/* ─── SERVICES ─── */
function renderServices() {
  const categories = [...new Set(appData.services.map(s => s.category))];
  const totalRevenue = appData.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div class="stat-row">
            <div class="stat-item">
              <div class="stat-label">Услуг</div>
              <div class="stat-value" style="color:var(--primary);font-size:20px">${appData.services.length}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Всего записей</div>
              <div class="stat-value" style="color:var(--success);font-size:20px">${appData.services.reduce((s, sv) => s + sv.bookings, 0)}</div>
            </div>
          </div>
        </div>
      </div>

      ${categories.map(cat => `
        <div style="margin-bottom:16px">
          <div class="section-title">${cat}</div>
          ${appData.services.filter(s => s.category === cat).map(s => `
            <div class="service-card">
              <div class="service-icon"><svg class="icon"><use href="#icon-star"/></svg></div>
              <div class="service-info">
                <div class="service-name">${s.name}</div>
                <div class="service-meta">${s.duration} мин • ${s.bookings} записей</div>
              </div>
              <div class="service-price">${formatCurrency(s.price)}</div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

/* ─── MORE (hub for analytics, finances, settings) ─── */
function renderMore() {
  return `
    <div class="page-content">
      <div style="margin-bottom:12px">
        <div class="client-card" onclick="showPage('analytics')">
          <div class="service-icon"><svg class="icon"><use href="#icon-chart"/></svg></div>
          <div class="client-info">
            <div class="client-name">Аналитика</div>
            <div class="client-meta">Тренды, отчёты, статистика</div>
          </div>
          <svg class="icon" style="width:20px;height:20px;color:var(--text-muted)"><use href="#icon-arrow"/></svg>
        </div>
        <div class="client-card" onclick="showPage('finances')">
          <div class="service-icon"><svg class="icon"><use href="#icon-wallet"/></svg></div>
          <div class="client-info">
            <div class="client-name">Финансы</div>
            <div class="client-meta">Доходы, расходы, отчёты</div>
          </div>
          <svg class="icon" style="width:20px;height:20px;color:var(--text-muted)"><use href="#icon-arrow"/></svg>
        </div>
        <div class="client-card" onclick="showPage('settings')">
          <div class="service-icon"><svg class="icon"><use href="#icon-settings"/></svg></div>
          <div class="client-info">
            <div class="client-name">Настройки</div>
            <div class="client-meta">Профиль, уведомления, приложение</div>
          </div>
          <svg class="icon" style="width:20px;height:20px;color:var(--text-muted)"><use href="#icon-arrow"/></svg>
        </div>
      </div>
    </div>
  `;
}

/* ─── ANALYTICS ─── */
function renderAnalytics() {
  const totalAppointments = appData.appointments.length;
  const completed = appData.appointments.filter(a => a.status === 'confirmed' || a.status === 'completed').length;
  const cancelled = appData.appointments.filter(a => a.status === 'cancelled').length;
  const totalRevenue = appData.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const topService = [...appData.services].sort((a, b) => b.bookings - a.bookings)[0];
  const topClient = [...appData.clients].sort((a, b) => b.visits - a.visits)[0];

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div class="stat-row">
            <div class="stat-item">
              <div class="stat-label">Записей всего</div>
              <div class="stat-value" style="color:var(--primary);font-size:20px">${totalAppointments}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Выполнено</div>
              <div class="stat-value" style="color:var(--success);font-size:20px">${completed}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Отмены</div>
              <div class="stat-value" style="color:var(--error);font-size:20px">${cancelled}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3>Выручка <span style="font-size:20px;color:var(--success)">${formatCurrency(totalRevenue)}</span></h3>
      </div>

      <div class="analytics-section">
        <h3>Популярные услуги</h3>
        <div class="insight-card success">
          <h4>🏆 Самая популярная</h4>
          <p>${topService.name} — ${topService.bookings} записей</p>
        </div>
        ${appData.services.sort((a, b) => b.bookings - a.bookings).slice(0, 5).map((s, i) => `
          <div class="insight-card">
            <div style="display:flex;justify-content:space-between">
              <span>${i + 1}. ${s.name}</span>
              <span style="color:var(--primary);font-weight:600">${s.bookings}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="analytics-section">
        <h3>Активные клиенты</h3>
        <div class="insight-card success">
          <h4>⭐ Лучший клиент</h4>
          <p>${topClient.name} — ${topClient.visits} визитов, потрачено ${formatCurrency(topClient.totalSpent)}</p>
        </div>
      </div>
    </div>
  `;
}

/* ─── FINANCES ─── */
function renderFinances() {
  const totalIncome = appData.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totalExpense = appData.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div class="stat-row">
            <div class="stat-item">
              <div class="stat-label">Доход</div>
              <div class="stat-value" style="color:var(--success);font-size:18px">${formatCurrency(totalIncome)}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Расход</div>
              <div class="stat-value" style="color:var(--error);font-size:18px">${formatCurrency(totalExpense)}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Баланс</div>
              <div class="stat-value" style="color:var(--primary);font-size:18px">${formatCurrency(balance)}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-title"><span>Последние операции</span></div>
      ${appData.transactions.sort((a, b) => b.date.localeCompare(a.date)).map(t => `
        <div class="finance-card">
          <div class="finance-header">
            <span class="finance-title">${t.service || t.category || t.note}</span>
            <span class="finance-amount ${t.type === 'income' ? 'positive' : 'negative'}">${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}</span>
          </div>
          <div class="finance-meta">${t.date} • ${t.type === 'income' ? (t.method === 'card' ? 'Карта' : 'Наличные') : t.category}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/* ─── SETTINGS ─── */
function renderSettings() {
  return `
    <div class="page-content">
      <div class="settings-group">
        <h3>Профиль</h3>
        <div class="settings-item">
          <svg class="icon"><use href="#icon-building"/></svg>
          <div class="settings-info"><div class="settings-label">${appData.business.name}</div><div class="settings-desc">${appData.business.address}</div></div>
        </div>
        <div class="settings-item">
          <svg class="icon"><use href="#icon-phone"/></svg>
          <div class="settings-info"><div class="settings-label">${appData.business.phone}</div><div class="settings-desc">Телефон</div></div>
        </div>
        <div class="settings-item">
          <svg class="icon"><use href="#icon-mail"/></svg>
          <div class="settings-info"><div class="settings-label">${appData.business.email}</div><div class="settings-desc">Email</div></div>
        </div>
      </div>

      <div class="settings-group">
        <h3>Уведомления</h3>
        ${appData.notifications.map(n => `
          <div class="settings-item" style="${n.read ? '' : 'border-color:var(--primary)'}">
            <svg class="icon"><use href="#icon-bell"/></svg>
            <div class="settings-info">
              <div class="settings-label" style="${n.read ? '' : 'font-weight:600'}">${n.text}</div>
              <div class="settings-desc">${n.time}</div>
            </div>
            ${n.read ? '' : '<span style="width:8px;height:8px;border-radius:50%;background:var(--primary);flex-shrink:0"></span>'}
          </div>
        `).join('')}
      </div>

      <div class="settings-group">
        <h3>О приложении</h3>
        <div class="settings-item">
          <div class="settings-info"><div class="settings-label">Версия</div><div class="settings-desc">Alfred v1.0</div></div>
        </div>
      </div>
    </div>
  `;
}

/* ════════════════════════════════════════
   CLIENT MODE
   ════════════════════════════════════════ */

let bookingStep = 1;
let bookingService = null;
let bookingDate = null;
let bookingTime = null;

function renderBooking() {
  const content = [];

  content.push(`<div class="page-content"><div class="booking-step"><h3>Выберите услугу</h3>`);

  appData.services.forEach(s => {
    content.push(`
      <div class="service-select-item ${bookingService === s.id ? 'selected' : ''}" onclick="selectBookingService('${s.id}')">
        <div class="radio-ring"><div class="radio-ring-inner" style="opacity:${bookingService === s.id ? 1 : 0}"></div></div>
        <div class="service-info">
          <div class="service-name">${s.name}</div>
          <div class="service-meta">${s.duration} мин</div>
        </div>
        <div class="service-price" style="font-size:14px">${formatCurrency(s.price)}</div>
      </div>
    `);
  });

  content.push(`</div>`);

  if (bookingService) {
    const sv = getService(bookingService);
    content.push(`
      <div class="booking-step">
        <h3>Выберите дату</h3>
        <div class="schedule-controls">
          <button class="schedule-nav" onclick="shiftBookingDate(-1)">←</button>
          <span class="schedule-date">${formatDate(bookingDate || new Date())}</span>
          <button class="schedule-nav" onclick="shiftBookingDate(1)">→</button>
        </div>
      </div>

      <div class="booking-step">
        <h3>Выберите время</h3>
        <div class="time-select-grid">
          ${generateBookingTimes()}
        </div>
      </div>
    `);

    if (bookingTime) {
      content.push(`
        <div class="booking-confirm">
          <h4>Подтверждение записи</h4>
          <div class="booking-confirm-row"><span class="label">Услуга</span><span class="value">${sv.name}</span></div>
          <div class="booking-confirm-row"><span class="label">Дата</span><span class="value">${formatDate(bookingDate || new Date())}</span></div>
          <div class="booking-confirm-row"><span class="label">Время</span><span class="value">${bookingTime}</span></div>
          <div class="booking-confirm-row"><span class="label">Длительность</span><span class="value">${sv.duration} мин</span></div>
          <div class="booking-confirm-row"><span class="label">Стоимость</span><span class="value" style="color:var(--accent);font-size:16px">${formatCurrency(sv.price)}</span></div>
        </div>
        <button class="btn-book" onclick="confirmBooking()">Записаться</button>
      `);
    }
  }

  content.push(`</div>`);
  return content.join('');
}

function selectBookingService(id) {
  bookingService = id;
  if (!bookingDate) bookingDate = new Date();
  renderContent('booking');
}

function shiftBookingDate(n) {
  if (!bookingDate) bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() + n);
  bookingTime = null;
  renderContent('booking');
}

function generateBookingTimes() {
  const times = [];
  for (let h = 9; h <= 19; h++) {
    for (let m = 0; m < 60; m += 30) {
      const t = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
      times.push(t);
    }
  }
  return times.map(t => `
    <button class="time-select-btn ${bookingTime === t ? 'selected' : ''}" onclick="selectBookingTime('${t}')">${t}</button>
  `).join('');
}

function selectBookingTime(t) {
  bookingTime = t;
  renderContent('booking');
}

function confirmBooking() {
  const sv = getService(bookingService);
  if (!sv || !bookingTime || !bookingDate) return;

  const newId = 'ap' + (appData.appointments.length + 1);
  const ds = dateStr(bookingDate);
  appData.appointments.push({
    id: newId,
    clientId: 'cl1',
    serviceId: bookingService,
    date: ds,
    time: bookingTime,
    status: 'pending',
    note: ''
  });

  appData.notifications.unshift({
    id: 'n' + (appData.notifications.length + 1),
    text: 'Новая запись: ' + sv.name + ' на ' + bookingTime + ' ' + formatDate(bookingDate),
    time: 'только что',
    read: false
  });

  bookingService = null;
  bookingDate = null;
  bookingTime = null;

  showPage('my-appointments');
}

/* ─── MY APPOINTMENTS ─── */
function renderMyAppointments() {
  const myApps = appData.appointments.sort((a, b) => b.date.localeCompare(a.date));

  return `
    <div class="page-content">
      <h3 style="margin-bottom:12px">Мои записи</h3>
      ${myApps.length === 0 ? '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">У вас пока нет записей</p>' : ''}
      ${myApps.map(a => {
        const sv = getService(a.serviceId);
        return `
          <div class="my-appointment-card">
            <div class="my-appointment-top">
              <span class="my-appointment-service">${sv ? sv.name : '—'}</span>
              <span class="appointment-status status-${a.status}">${statusLabels[a.status]}</span>
            </div>
            <div class="my-appointment-date">${a.date} в ${a.time}</div>
            <div class="my-appointment-price">${sv ? formatCurrency(sv.price) : '—'}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ─── CLIENT PROFILE ─── */
function renderClientProfile() {
  const client = appData.clients[0];
  return `
    <div class="page-content">
      <div class="client-profile-header">
        <div class="client-profile-avatar">${client.name.split(' ').map(s => s[0]).join('')}</div>
        <div class="client-profile-name">${client.name}</div>
        <div class="client-profile-stat">
          <div class="client-profile-stat-item">
            <div class="client-profile-stat-value">${client.visits}</div>
            <div class="client-profile-stat-label">Визитов</div>
          </div>
          <div class="client-profile-stat-item">
            <div class="client-profile-stat-value">${formatCurrency(client.totalSpent)}</div>
            <div class="client-profile-stat-label">Потрачено</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:16px">
        <div class="settings-item"><svg class="icon"><use href="#icon-phone"/></svg>
          <div class="settings-info"><div class="settings-label">${client.phone}</div><div class="settings-desc">Телефон</div></div></div>
        <div class="settings-item"><svg class="icon"><use href="#icon-mail"/></svg>
          <div class="settings-info"><div class="settings-label">${client.email}</div><div class="settings-desc">Email</div></div></div>
      </div>

      <div class="section-title"><span>Мои записи</span></div>
      ${appData.appointments.filter(a => a.clientId === 'cl1').sort((a, b) => b.date.localeCompare(a.date)).map(a => {
        const sv = getService(a.serviceId);
        return `
          <div class="my-appointment-card">
            <div class="my-appointment-top">
              <span class="my-appointment-service">${sv ? sv.name : '—'}</span>
              <span class="appointment-status status-${a.status}">${statusLabels[a.status]}</span>
            </div>
            <div class="my-appointment-date">${a.date} в ${a.time}</div>
            <div class="my-appointment-price">${sv ? formatCurrency(sv.price) : '—'}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ─── Init ─── */
document.getElementById('splash').classList.add('hidden');
loadTheme();
initMode();
