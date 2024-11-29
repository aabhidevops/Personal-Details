// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect for profile picture
    const profilePicture = document.querySelector('.profile-picture');
    if (profilePicture) {
        profilePicture.addEventListener('mouseover', () => {
            profilePicture.style.border = "3px solid #333";
            profilePicture.style.transform = "scale(1.05)";
            profilePicture.style.transition = "transform 0.3s, border 0.3s";
        });

        profilePicture.addEventListener('mouseout', () => {
            profilePicture.style.border = "2px solid #ccc";
            profilePicture.style.transform = "scale(1)";
        });
    }

    // Highlight partner preferences on click
    const partnerPreferences = document.querySelector('#partner-preference');
    if (partnerPreferences) {
        partnerPreferences.addEventListener('click', () => {
            partnerPreferences.style.backgroundColor = "#e2e8f0";
            setTimeout(() => {
                partnerPreferences.style.backgroundColor = "";
            }, 1500); // Reset after 1.5 seconds
        });
    }

    // Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = "↑ Top";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px 15px";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "5px";
    scrollToTopBtn.style.backgroundColor = "#333";
    scrollToTopBtn.style.color = "#fff";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none"; // Hidden by default
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
});
