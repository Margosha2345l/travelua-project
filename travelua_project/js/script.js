// Сайт розроблено студентом [Ваше ПІБ], група [Ваша група]

const bookingPanel = typeof document !== 'undefined' ? document.getElementById('bookingPanel') : null;

function openBooking(name, price) {
  const panel = document.getElementById('bookingPanel');
  if (!panel) return;

  panel.style.display = 'block';
  document.getElementById('tourName').value = name;
  document.getElementById('tourPrice').value = price;
  document.getElementById('tourDate').value = '';
  document.getElementById('tourPeople').value = 1;
  document.getElementById('bookingResult').innerHTML = '';
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function calculateTotal() {
  const name = document.getElementById('tourName').value;
  const price = Number(document.getElementById('tourPrice').value);
  const date = document.getElementById('tourDate').value;
  const people = Number(document.getElementById('tourPeople').value);
  const result = document.getElementById('bookingResult');

  if (!name) {
    alert('Спочатку оберіть тур.');
    return;
  }
  if (!date) {
    alert('Оберіть дату поїздки.');
    return;
  }
  if (!people || people < 1) {
    alert('Введіть коректну кількість осіб.');
    return;
  }

  let total = price * people;
  let discount = 0;

  if (people >= 4) {
    discount = total * 0.1;
    total -= discount;
  }

  result.innerHTML = `
    Обраний тур: <b>${name}</b><br>
    Дата поїздки: <b>${date}</b><br>
    Кількість осіб: <b>${people}</b><br>
    ${discount > 0 ? `Знижка 10%: <b>${discount.toFixed(0)} грн</b><br>` : ''}
    Загальна вартість: <b>${total.toFixed(0)} грн</b>
  `;
}

function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);