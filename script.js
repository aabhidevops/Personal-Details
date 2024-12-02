document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect for profile picture
    const profilePicture = document.querySelector('.profile-picture');
    if (profilePicture) {
        profilePicture.addEventListener('mouseover', () => {
            profilePicture.style.transform = "scale(1.05)";
            profilePicture.style.transition = "transform 0.3s";
        });

        profilePicture.addEventListener('mouseout', () => {
            profilePicture.style.transform = "scale(1)";
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector('#scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
