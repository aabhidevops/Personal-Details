// Download PDF functionality
document.getElementById('download-btn').onclick = function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Biodata of Abhishek Anil Kamble", 20, 20);
    doc.text("Full Name: Abhishek Anil Kamble", 20, 30);
    doc.text("Date of Birth: 30 May 1996", 20, 40);
    doc.text("Height: 5'8\"", 20, 50);
    doc.text("Weight: 73 kg", 20, 60);
    doc.text("Religion: Hindu", 20, 70);
    doc.text("Caste: Agri", 20, 80);
    doc.text("Mother Tongue: Marathi", 20, 90);
    doc.text("Education: B.Tech in Information Technology", 20, 100);
    doc.text("Profession: DevOps Engineer", 20, 110);
    doc.text("Job: Veefin", 20, 120);
    doc.text("Salary: ₹10,00,000", 20, 130);
    doc.text("Address: Ghatla Gaon, Chembur, Mumbai", 20, 140);
    doc.text("Contact 1: +91-9969678915", 20, 150);
    doc.text("Contact 2: +91-9594321335", 20, 160);
    doc.text("Family Details:", 20, 170);
    doc.text("Father's Name: Mr. Anil Kamble (Retired)", 20, 180);
    doc.text("Mother's Name: Mrs. Akshata Kamble (Housewife)", 20, 190);
    doc.text("Siblings: Ms. Mansi Kamble (Unmarried)", 20, 200);
    doc.text("Family Status: Middle Class", 20, 210);
    doc.text("Family Values: Traditional with Modern Outlook", 20, 220);
    doc.text("Partner Preference:", 20, 230);
    doc.text("Age: 25 to 28 years", 20, 240);
    doc.text("Height: 5'0\" to 5'6\"", 20, 250);
    doc.text("Education: Graduate/Postgraduate", 20, 260);
    doc.text("Religion: Hindu", 20, 270);
    doc.text("Caste: Agri", 20, 280);
    doc.text("Location Preference: Maharashtra", 20, 290);
    doc.text("Profession: Should be working", 20, 300);

    doc.save("biodata.pdf");
};
