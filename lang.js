// language detection logic
document.addEventListener('DOMContentLoaded', () => {
  const userLang = localStorage.getItem('lang') || 'en'; // default to English
  loadLanguage(userLang);
});

// language switcher button
function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerHTML = data[key];
      });
      localStorage.setItem('lang', lang);

      // Update CV download button behavior
      const cvButton = document.getElementById('cv-download-btn');
      if (cvButton) {
        if (lang === 'es') {
          cvButton.href = 'CV/CV_FernandoLanas_ES.pdf';
          cvButton.download = 'CV_FernandoLanas_ES.pdf'; // trigger download
        } else {
          cvButton.href = 'CV/CV_FernandoLanas_EN.pdf';
          cvButton.removeAttribute('download'); // open in browser
        }
      }
    });
}
