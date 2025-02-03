// JavaScript for Video Selector
const videoSelector = document.getElementById('video-selector');
const selectedVideo = document.getElementById('selected-video');
const kofiMessage = document.getElementById('kofi-message');
const kofiLink = document.getElementById('kofi-link');

videoSelector.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue.includes("ko-fi.com")) {
        // Handle Ko-Fi links
        selectedVideo.style.display = 'none'; // Hide the iframe
        kofiMessage.style.display = 'block'; // Show the Ko-Fi message
        kofiLink.href = selectedValue; // Set the Ko-Fi link
    } else {
        // Handle YouTube links
        selectedVideo.style.display = 'block'; // Show the iframe
        kofiMessage.style.display = 'none'; // Hide the Ko-Fi message
        selectedVideo.src = selectedValue; // Update the iframe source
    }
});

// JavaScript for "See All" Button
const seeAllButton = document.querySelector('.see-all');
const gallery = document.querySelector('.gallery');

seeAllButton.addEventListener('click', () => {
    gallery.classList.toggle('expanded'); // Toggle expanded class
    seeAllButton.textContent = gallery.classList.contains('expanded') ? 'See Less' : 'See All';
});