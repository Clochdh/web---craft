
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function sendEmail(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const package = form.package.value;
    const message = form.message.value;
    
    const mailtoLink = `mailto:spideyprajith@gmail.com?subject=Website Development Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APackage: ${package}%0D%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;
    alert('Thank you for your interest! Opening your email client...');
    form.reset();
}
