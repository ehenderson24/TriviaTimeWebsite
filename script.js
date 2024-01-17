// Function to hide the main content container
function hideMainContent() {
    document.getElementById('main-content').style.display = 'none';
}

// Function to load content and attach event listeners
function loadContent(page) {
    // Hide the main content container
    hideMainContent();

    // Fetch the content of the specified HTML file
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Replace the content of the container with the fetched HTML
            document.getElementById('content-container').innerHTML = data;

            // Attach event listeners to buttons
            attachButtonListeners();
        })
        .catch(error => console.error('Error fetching content:', error));
}

// Function to attach event listeners to buttons
function attachButtonListeners() {
    const answerButtons = document.querySelectorAll('.answers button');

    answerButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Check if the clicked answer is correct
            if (button.classList.contains('correct')) {
                // Display "Correct!" and change background to green
                button.innerHTML = 'Correct!';
                button.style.backgroundColor = 'green';
            } else {
                // Display "Incorrect!" and change background to red
                button.innerHTML = 'Incorrect!';
                button.style.backgroundColor = 'red';

                // Reset the button after a delay (e.g., 2 seconds)
                setTimeout(function () {
                    button.innerHTML = 'Incorrect!';
                    button.style.backgroundColor = 'lavender';
                }, 2000);
            }
        });
    });
}

// Function to update links and load content on click
function updateLinksAndLoadContent() {
    // Update links to trigger loadContent on click
    document.getElementById('westvirginia-link').addEventListener('click', function () {
        loadContent('westvirginia.html');
    });

    document.getElementById('popculture-link').addEventListener('click', function () {
        loadContent('popculture.html');
    });

    document.getElementById('animalfacts-link').addEventListener('click', function () {
        loadContent('animalfacts.html');
    });
}

// Ensure that the content and event listeners are loaded on initial page load
document.addEventListener('DOMContentLoaded', function () {
    loadContent('index.html');
    updateLinksAndLoadContent();
});

// Ensure that the content and event listeners are loaded when going back to homepage
document.getElementById('home-link').addEventListener('click', function () {
    loadContent('index.html');
    updateLinksAndLoadContent();
});
