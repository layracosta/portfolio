
document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-link, .btn-project-home');
    const sections = document.querySelectorAll('.page-section');
    const particlesContainer = document.getElementById('particles-js');

    function showSection(targetId) {
       
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        if (targetId === 'home') {
            particlesContainer.style.display = 'block';
        } else {
            particlesContainer.style.display = 'none';
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href').substring(1) === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    function loadParticles() {
        tsParticles.load("particles-js", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#F44F83", 
                },
                links: {
                    color: "#EE9DBD", 
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        });
    }

    showSection('home');
    loadParticles();
});