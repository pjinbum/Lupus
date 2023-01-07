const hamberg = document.querySelector('.hbar');
const sidebar = document.querySelector('.sid');
const over = document.querySelector('.overlay');



function openSidebar() {
  sidebar.classList.add('super-active');
  over.classList.add('super-active');
}

hamberg.addEventListener('click' , openSidebar);


function closeSidebar() {
  sidebar.classList.remove('super-active');
  over.classList.remove('super-active');
}

over.addEventListener('click' , closeSidebar);