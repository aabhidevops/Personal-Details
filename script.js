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
