// Dynamic Typing Effect
const dynamicText = document.getElementById('dynamic-text');
const texts = ['Abhishek Anil Kamble', 'a DevOps Engineer', 'an AWS Enthusiast'];
let i = 0;
let j = 0;
let typing = true;

function typeText() {
    if (typing) {
        if (j < texts[i].length) {
            dynamicText.textContent += texts[i].charAt(j);
            j++;
            setTimeout(typeText, 100);
        } else {
            typing = false;
            setTimeout(typeText, 2000);
        }
    } else {
        if (j > 0) {
            dynamicText.textContent = texts[i].substring(0, j - 1);
            j--;
            setTimeout(typeText, 50);
        } else {
            typing = true;
            i = (i + 1) % texts.length;
            setTimeout(typeText, 500);
        }
    }
}
typeText();

// Form Submit Response
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    form.reset();
});
