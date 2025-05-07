
let menuIcon = document.querySelector( '#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }); 
        }
});



    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


    function sendEmail() {
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            name: formData.get('name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            subject: formData.get('subject'),
            message: formData.get('message')
        }).then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    }
sendEmail();