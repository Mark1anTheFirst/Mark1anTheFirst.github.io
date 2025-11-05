document.addEventListener('DOMContentLoaded', function() {
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Set initial theme
  if (localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleLightIcon.classList.add('hidden');
    themeToggleDarkIcon.classList.remove('hidden');
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    localStorage.setItem('color-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
});
