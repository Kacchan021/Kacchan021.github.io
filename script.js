// JavaScript for Video Selector
const videoSelector = document.getElementById('video-selector');
const selectedVideo = document.getElementById('selected-video');
const kofiMessage = document.getElementById('kofi-message');
const kofiLink = document.getElementById('kofi-link');
const projectDescription = document.getElementById('project-description'); // New description element

videoSelector.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    if (selectedValue.includes("ko-fi.com")) {
        // Handle Ko-Fi links
        selectedVideo.style.display = 'none'; // Hide the iframe
        kofiMessage.style.display = 'block'; // Show the Ko-Fi message
        kofiLink.href = selectedValue; // Set the Ko-Fi link
        projectDescription.innerHTML = ""; // Clear description
    } else {
        // Handle YouTube links
        selectedVideo.style.display = 'block'; // Show the iframe
        kofiMessage.style.display = 'none'; // Hide the Ko-Fi message
        selectedVideo.src = selectedValue; // Update the iframe source

        // Check if the selected video is the Merco Distributor project and show description
        if (selectedValue === "https://www.youtube.com/embed/uIaRVKaiRPk") {
            projectDescription.innerHTML = `
                <h3>Purpose & Overview:</h3>
                <p>Merco Bakery Logistics is designed to replace Merco’s outdated pen-and-paper logistics system with a modern, database-driven web application. The purpose is to streamline operations by centralizing the management of products, inventory, deliveries, and supplier data. By automating tasks that were once done manually, the application reduces human error, speeds up order processing, and enhances data accuracy and security.</p>

                <h3>Target Users:</h3>
                <ul>
                    <li><strong>Administrators & Managers:</strong> Overseeing inventory and logistics, generating reports, and monitoring daily stock levels.</li>
                    <li><strong>Warehouse/Delivery Staff:</strong> Inputting and updating delivery details and real-time inventory changes.</li>
                    <li><strong>Suppliers:</strong> Entering and updating supplier information for seamless coordination.</li>
                </ul>

                <h3>Main Features:</h3>
                <ul>
                    <li><strong>User Authentication:</strong> Secure login functionality for authorized personnel.</li>
                    <li><strong>Product Management:</strong> Registering new products and updating prices.</li>
                    <li><strong>Inventory Management:</strong> Real-time tracking of inventory using the <code>inventorydetails</code> table.</li>
                    <li><strong>Delivery Processing:</strong> Managing deliveries by recording delivery dates, employee IDs, outlet IDs, and cash transactions.</li>
                    <li><strong>Supplier Management:</strong> Recording supplier details while preventing duplicate entries.</li>
                    <li><strong>Reporting:</strong> Generating Excel reports for full inventory export using ExcelJS.</li>
                </ul>

                <h3>Technologies & Tools:</h3>
                <ul>
                    <li><strong>Front-End:</strong> HTML, CSS, and JavaScript for building the user interface.</li>
                    <li><strong>Back-End:</strong> Uses database-driven technology to manage inventory and reports.</li>
                </ul>
            `;
        } else {
            projectDescription.innerHTML = ""; // Clear description for other videos
        }
    }
});

// JavaScript for "See All" Button
const seeAllButton = document.querySelector('.see-all');
const gallery = document.querySelector('.gallery');

seeAllButton.addEventListener('click', () => {
    gallery.classList.toggle('expanded'); // Toggle expanded class
    seeAllButton.textContent = gallery.classList.contains('expanded') ? 'See Less' : 'See All';
});
