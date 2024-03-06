const imagePaths = ['images/backgrounds/green.png', 'images/backgrounds/purple.png', 'images/backgrounds/blue.png', 'images/backgrounds/weezer.jpg']

let currentIndex = 0;

function changeBackground(){
    const backgroundSection = document.getElementById('backgroundSection');
    backgroundSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length;
}

setInterval(changeBackground, 3000);