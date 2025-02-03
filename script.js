// JavaScript for Video Selector
const videoSelector = document.getElementById('video-selector');
const selectedVideo = document.getElementById('selected-video');

videoSelector.addEventListener('change', (event) => {
    selectedVideo.src = event.target.value; // Update the iframe source
});

// JavaScript for "See All" Button
const seeAllButton = document.querySelector('.see-all');
const gallery = document.querySelector('.gallery');

seeAllButton.addEventListener('click', () => {
    gallery.classList.toggle('expanded'); // Toggle expanded class
    seeAllButton.textContent = gallery.classList.contains('expanded') ? 'See Less' : 'See All';
});