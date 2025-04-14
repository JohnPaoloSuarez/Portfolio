function showSidebar() {
   const sidebar = document.querySelector('.side_nav');
   sidebar.style.display = 'flex';
   
}
function hideSidebar() {
   const sidebar = document.querySelector('.side_nav');
   sidebar.style.display = 'none';
}

function showProj() {
   const proj = document.querySelector('.side_nav');
   sidebar.style.display = 'flex';
   
}
function hideProj() {
   const proj = document.querySelector('.side_nav');
   sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
   const percent = document.querySelectorAll('.progress-per');

   percent.forEach((id) => {
       let value = id.dataset.text;
       id.style.width = '0%';
       id.textContent = '';

       setTimeout(() => {
           id.style.width = `${value}%`;
           id.textContent = value;
           id.dataset.text = value + '%';
       }, 100);
   });
});