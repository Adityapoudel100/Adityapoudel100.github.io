document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');
    const email = 'mailto:adityapoudel100@gmail.com?subject=Hello%20from%20Your%20Website&body=Hi%2CAditya%2C,%0A0I%0Acame%0Aacross%0Ayour%0Aprofile%0Aand%0AI%0Awould%0Alike%0Ato%0Aget%0Ain%0Atouch.';

    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        window.location.href = email; // Redirect to the mailto link
    });
});