/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f4f4f9;
    color: #333;
}

/* Header */
header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 5px 0; /* Reduced padding */
    margin-bottom: 10px;
}

header h1 {
    margin: 0;
    font-size: 1.5rem; /* Reduced font size for "Biodata" */
}

/* Section Titles */
h2 {
    color: #555;
    margin: 10px 0; /* Reduced margin */
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
}

/* Personal Information */
#personal-info {
    position: relative;
    height: 350px; /* Set a fixed height */
    background-color: #e2e2e2; /* Light background for contrast */
}

.info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 15px;
}

.image-container {
    flex: 1;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.profile-picture {
    object-fit: cover;
    width: 100%; /* Ensure it fills the space */
    height: 100%; /* Make the image fill the full container */
    border-radius: 0; /* Rectangle shape */
    border: 2px solid #ccc;
}

.details {
    flex: 2;
    margin-left: 20px;
    max-width: 600px;
}

/* Family Details */
.family-picture {
    width: 300px; /* Adjusted size */
    height: auto;
    border-radius: 8px;
    border: 2px solid #ccc;
    margin-right: 20px;
}

/* Footer */
footer {
    text-align: center;
    background: #333;
    color: #fff;
    padding: 10px 0;
    margin-top: 20px;
}