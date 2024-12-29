document.addEventListener('DOMContentLoaded', () => {
    const rightMenuToggle = document.querySelector('.toggle-sidebar');
    const rightMenu = document.querySelector('.right-menu');
    const leftMenuToggle = document.querySelector('.left-menu .toggle-menu');
    const leftMenuContent = document.querySelector('.left-menu .menu-content');
    const mainContent = document.querySelector('.main-content');

    function handlePageScaling() {
        const width = window.innerWidth;
        const body = document.body;
        
        body.style.transform = '';
        body.style.transformOrigin = '';
        body.style.marginLeft = '';
        body.style.marginRight = '';
        
        if (width >= 992 && width <= 1600) {
            body.style.transform = 'scale(0.9)';
            body.style.transformOrigin = '0 0';
            body.style.marginLeft = '10%';

        } else if (width >= 700 && width <= 767) {
            body.style.transform = 'scale(0.8)';
            body.style.transformOrigin = '0 0';
            body.style.marginLeft = '16%';
        } else if (width >= 600 && width < 700) {
            body.style.transform = 'scale(0.75)';
            body.style.transformOrigin = '0 0';
            body.style.marginLeft = '10%';
        } else if (width <= 600) {
            body.style.transform = 'scale(0.5)';
            body.style.transformOrigin = '0 0';
        }
        
    }

    leftMenuToggle.addEventListener('click', () => {
        if (leftMenuContent.style.display === 'none') {
            leftMenuContent.style.display = 'block';
            leftMenuToggle.textContent = 'Toggle';
        } else {
            leftMenuContent.style.display = 'none';
            leftMenuToggle.textContent = 'Toggle';
        }
    });

    rightMenuToggle.addEventListener('click', () => {
        if (rightMenu.style.display === 'none') {
            rightMenu.style.display = 'block';
            rightMenu.style.flex = '0.2'; 
            mainContent.style.flex = '0.6'; 
            rightMenuToggle.textContent = 'Hide';
           
        } else {
            rightMenu.style.display = 'none';
            rightMenu.style.flex = '0'; 
            mainContent.style.flex = '0.8'; 
            rightMenuToggle.textContent = 'Show';
        }
    });

handlePageScaling();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handlePageScaling, 250); // Debounce resize events
});
});
