
// تبديل اللغة
function switchLang(lang) {
  document.getElementById('content-ar').style.display = lang === 'ar' ? 'block' : 'none';
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// تشغيل البث
function playLive() {
  document.querySelector('.player-hidden').style.display = 'block';
  document.querySelector('.player-hidden').scrollIntoView({ behavior: 'smooth' });
}

// الساعة + تختفي عند التمرير
const clockWidget = document.createElement('div');
clockWidget.id = 'clock-widget';
clockWidget.innerHTML = `<div id="time"></div><div id="date" style="font-size:12px;margin-top:5px;color:#555"></div>`;
document.body.appendChild(clockWidget);

setInterval(() => {
  const now = new Date();
  document.getElementById('time').innerText = now.toLocaleTimeString('en-US', { hour12: false });
  document.getElementById('date').innerText = now.toLocaleDateString('en-US');
}, 1000);

// إخفاء الساعة عند التمرير
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll + 50) {
    clockWidget.classList.add('hidden');
  } else if (currentScroll < lastScroll - 50) {
    clockWidget.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});
