// Background Lottie animations
// You need to include lottie-web in your index.html before this script

// Desktop background
lottie.loadAnimation({
    container: document.getElementById('background-desktop'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animation - background1.json'
});

// Mobile background
lottie.loadAnimation({
    container: document.getElementById('background-mobile'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animation - background2.json' // <- replace with your preferred mobile background animation
});
