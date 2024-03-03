
document.addEventListener('DOMContentLoaded', (event) => {
    // Wait for the full page to be loaded
    window.onload = () => {
        // Get the loading screen element
        const loadingScreen = document.getElementById('loading-screen');
        
        // Set a timeout to fade out the loading screen
        setTimeout(() => {
            // Fade out the loading screen
            loadingScreen.style.transition = 'opacity 0.75s ease-out';
            loadingScreen.style.opacity = 0;

            // After the fade-out transition ends, remove the loading screen from the DOM
            setTimeout(() => {
                loadingScreen.remove();

                // After removing the loading screen, scroll to the features section
                document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
            }, 750); // This should match the transition duration
        }, 1000); // This delay can be adjusted as needed
    };
});
