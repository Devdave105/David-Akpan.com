// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Project Modal
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Project details data
const projectDetails = {
    '1': {
        title: 'E-Commerce Platform',
        image: 'https://via.placeholder.com/900x500/1a1a1a/3b82f6?text=E-Commerce+Platform',
        description: 'A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
        features: [
            'Real-time inventory tracking',
            'Stripe payment integration',
            'Advanced search and filtering',
            'Customer reviews and ratings',
            'Order tracking system',
            'Responsive admin dashboard'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'Redis'],
        liveUrl: 'https://your-project-1-live-url.com', // Replace with actual URL
        githubUrl: 'https://github.com/yourusername/project-1' // Replace with actual GitHub URL
    },
    '2': {
        title: 'Task Management App',
        image: 'https://via.placeholder.com/900x500/1a1a1a/3b82f6?text=Task+Management+App',
        description: 'A collaborative project management tool with real-time updates, team collaboration features, and comprehensive analytics.',
        features: [
            'Real-time collaboration',
            'Kanban board interface',
            'Task dependencies',
            'Time tracking',
            'Team chat integration',
            'Project analytics'
        ],
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Redis', 'Docker'],
        liveUrl: 'https://your-project-2-live-url.com', // Replace with actual URL
        githubUrl: 'https://github.com/yourusername/project-2' // Replace with actual GitHub URL
    },
    '3': {
        title: 'Real Estate Portal',
        image: 'https://via.placeholder.com/900x500/1a1a1a/3b82f6?text=Real+Estate+Portal',
        description: 'A full-featured real estate listing platform with advanced search, virtual tours, and integrated mortgage calculators.',
        features: [
            'Advanced property search',
            'Virtual tour integration',
            'Mortgage calculator',
            'Agent dashboard',
            'Lead management',
            'Map-based search'
        ],
        technologies: ['Angular', 'Django', 'MySQL', 'Google Maps API', 'AWS S3', 'Celery'],
        liveUrl: 'https://your-project-3-live-url.com', // Replace with actual URL
        githubUrl: 'https://github.com/yourusername/project-3' // Replace with actual GitHub URL
    },
    '4': {
        title: 'Healthcare Dashboard',
        image: 'https://via.placeholder.com/900x500/1a1a1a/3b82f6?text=Healthcare+Dashboard',
        description: 'A secure healthcare management system with patient records, appointment scheduling, and comprehensive analytics.',
        features: [
            'Patient record management',
            'Appointment scheduling',
            'Prescription tracking',
            'Analytics dashboard',
            'HIPAA compliant',
            'Telemedicine integration'
        ],
        technologies: ['React', 'Python', 'AWS', 'PostgreSQL', 'Chart.js', 'WebRTC'],
        liveUrl: 'https://your-project-4-live-url.com', // Replace with actual URL
        githubUrl: 'https://github.com/yourusername/project-4' // Replace with actual GitHub URL
    },
    '5': {
        title: 'Finance Tracker',
        image: 'https://via.placeholder.com/900x500/1a1a1a/3b82f6?text=Finance+Tracker',
        description: 'Personal finance management application with budgeting tools, expense tracking, and financial goal planning.',
        features: [
            'Expense categorization',
            'Budget planning',
            'Financial goals tracking',
            'Investment portfolio',
            'Bill reminders',
            'Data visualization'
        ],
        technologies: ['Next.js', 'GraphQL', 'Redis', 'PostgreSQL', 'Recharts', 'Plaid API'],
        liveUrl: 'https://your-project-5-live-url.com', // Replace with actual URL
        githubUrl: 'https://github.com/yourusername/project-5' // Replace with actual GitHub URL
    },
    '6': {
        title: 'Social Media App',
        image: 'https://via.placeholder.com/900x500/1a1a1a/3b82f6?text=Social+Media+App',
        description: 'A community-focused social platform with real-time messaging, content sharing, and engagement analytics.',
        features: [
            'Real-time chat',
            'Content feed',
            'User profiles',
            'Post reactions',
            'Group communities',
            'Push notifications'
        ],
        technologies: ['React Native', 'Firebase', 'WebSocket', 'Node.js', 'MongoDB', 'FCM'],
        liveUrl: 'https://your-project-6-live-url.com', // Replace with actual URL
        githubUrl: 'https://github.com/yourusername/project-6' // Replace with actual GitHub URL
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const project = projectDetails[projectId];
        
        if (project) {
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}">
                <p>${project.description}</p>
                
                <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--accent-color);">Key Features</h3>
                <ul style="color: var(--text-secondary); padding-left: 1.5rem; line-height: 2;">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--accent-color);">Technologies Used</h3>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                
                <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="${project.liveUrl}" class="btn btn-primary" target="_blank">View Live</a>
                    <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">View Code</a>
                </div>
            `;
            
            modal.classList.add('active');
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Reviews Carousel
const reviewsTrack = document.getElementById('reviewsTrack');
const prevReview = document.getElementById('prevReview');
const nextReview = document.getElementById('nextReview');
const reviewCards = document.querySelectorAll('.review-card');

let currentReview = 0;

function showReview(index) {
    reviewCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

nextReview.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviewCards.length;
    showReview(currentReview);
});

prevReview.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
    showReview(currentReview);
});

// Initialize carousel
showReview(currentReview);

// Auto-advance carousel every 5 seconds
setInterval(() => {
    currentReview = (currentReview + 1) % reviewCards.length;
    showReview(currentReview);
}, 5000);

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would do something like:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // }).then(response => response.json())
    //   .then(data => {
    //       alert('Message sent successfully!');
    //       contactForm.reset();
    //   })
    //   .catch(error => {
    //       alert('Error sending message. Please try again.');
    //   });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .impact-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Active navigation link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class styles via JavaScript
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--accent-color);
    }
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

console.log('Portfolio website loaded successfully!');