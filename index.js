const imagePaths = ['images/testImages/hog.png', 'images/testImages/rofl.jpg', 'images/testImages/horse.jpg']

let currentIndex = 0;

function changeBackground(){
    const backgroundSection = document.getElementById('backgroundSection');
    backgroundSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length;
}

setInterval(changeBackground, 5000);


document.addEventListener('DOMContentLoaded', function () {
    var underConstructionElement = document.getElementById('underconstructioon');
    underConstructionElement.style.display = 'block';
});