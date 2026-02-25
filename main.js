const danceButton = document.getElementById('danceButton');
const characterImage = document.getElementById('characterImage');
const themeToggle = document.getElementById('themeToggle');

danceButton.addEventListener('click', () => {
  characterImage.classList.add('dancing');
  setTimeout(() => {
    characterImage.classList.remove('dancing');
  }, 2000);
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️ 화이트모드';
  } else {
    themeToggle.textContent = '🌙 다크모드';
  }
});
