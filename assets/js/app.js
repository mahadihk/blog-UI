var togglerBtn = document.getElementById('navTogglerBtn');
togglerBtn.onclick =navToggle;

function navToggle() 
{
    togglerBtn.classList.toggle('active');
}