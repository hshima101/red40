const imagePaths = ['images/backgrounds/peezer.png', 'images/backgrounds/tree.jpg', 'images/testImages/horse.jpg']

let currentIndex = 0;

function changeBackground(){
    const backgroundSection = document.getElementById('backgroundSection');
    backgroundSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length;
}

setInterval(changeBackground, 3000);