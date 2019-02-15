document.getElementById('first-screen').style.display = 'block';
document.getElementById('second-screen').style.display = 'none';

const home = document.getElementById('home');
home.addEventListener('click', () => {
  document.getElementById('first-screen').style.display = 'block';
  document.getElementById('second-screen').style.display = 'none';
});

const tienda = document.getElementById('tienda');
tienda.addEventListener('click', () => {
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
});