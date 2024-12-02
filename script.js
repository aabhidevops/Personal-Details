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
    scrollToTopBtn.style.backgroundHere are the full HTML, CSS, and JavaScript files with the desired formatting for the profile page:

### **HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biodata</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1>Biodata</h1>
        <div class="links">
            <a href="https://photos.app.goo.gl/qZxrJvrM47A3ae6VA" target="_blank">View Images</a>
            <a href="https://www.linkedin.com/in/abhishek-kamble-06b916136/" target="_blank">LinkedIn Profile</a>
        </div>
    </header>

    <section id="personal-info">
        <h2>Personal Information</h2>
        <div class="info-container">
            <div class="image-container">
                <img src="images/profile.jpg" alt="Profile Picture" class="profile-picture">
            </div>
            <div class="details">
                <p><strong>Full Name:</strong> Abhishek Anil Kamble</p>
                <p><strong>Date of Birth:</strong> 30 May 1996</p>
                <p><strong>Height:</strong> 5'8"</p>
                <p><strong>Weight:</strong> 73 kg</p>
                <p><strong>Religion:</strong> Hindu</p>
                <p><strong>Caste:</strong> Agri</p>
                <p><strong>Mother Tongue:</strong> Marathi</p>
                <p><strong>Education:</strong> B.Tech in Information Technology</p>
                <p><strong>Profession:</strong> DevOps Engineer</p>
                <p><strong>Company:</strong> Veefin</p>
                <p><strong>Salary:</strong> ₹10,00,000</p>
                <p><strong>Address:</strong> Ghatla Gaon, Chembur, Mumbai</p>
                <p><strong>Contact 1:</strong> +91-9969678915</p>
                <p><strong>Contact 2:</strong> +91-9594321335</p>
            </div>
        </div>
    </section>

    <section id="family-details">
        <h2>Family Details</h2>
        <div class="info-container">
            <img src="images/family.JPG" alt="Family Picture" class="family-picture">
            <div class="details">
                <p><strong>Father's Name:</strong> Mr. Anil Kamble (Retired)</p>
                <p><strong>Mother's Name:</strong> Mrs. Akshata Kamble (Housewife)</p>
                <p><strong>Siblings:</strong> Ms. Mansi Kamble (Unmarried)</p>
                <p><strong>Family Status:</strong> Middle Class</p>
                <p><strong>Family Values:</strong> Traditional with Modern Outlook</p>
            </div>
        </div>
    </section>

    <section id="partner-preference">
        <h2>Partner Preference</h2>
        <div class="info-container">
            <div class="details">
                <p><strong>Age:</strong> 25 to 28 years</p>
                <p><strong>Height:</strong> 5'0" to 5'6"</p>
                <p><strong>Education:</strong> Graduate/Postgraduate</p>
                <p><strong>Religion:</strong> Hindu</p>
                <p><strong>Caste:</strong> Agri</p>
                <p><strong>Location Preference:</strong> Maharashtra</p>
                <p><strong>Profession:</strong> Should be working</p>
            </div>
        </div>
    </section>

    <footer>
        <p>Thank you for considering my profile!</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
