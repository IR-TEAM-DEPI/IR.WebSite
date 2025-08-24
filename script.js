document.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.getElementById('team-banner');
    
    function showBanner() {
        banner.style.display = 'block';
        banner.style.animation = 'none';
        banner.offsetHeight; // trigger reflow
        banner.style.animation = 'slideDownFadeIn 1s ease-out, fadeOut 1s ease-in 4s forwards';
    }

    showBanner();
    setInterval(showBanner, 10000); 
});
