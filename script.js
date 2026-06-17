// ==========================================
// FRYMEDIAOFFICIAL - CORE JAVASCRIPT SYSTEM
// ==========================================

/* 1. DATABASE SYSTEM (Siap dikembangkan ke Backend/API) */
const FryMediaDB = {
    stats: [
        { id: 1, number: 120, label: "Projects Completed" },
        { id: 2, number: 45, label: "Happy Clients" },
        { id: 3, number: 5, label: "Years Experience" },
        { id: 4, number: 15, label: "Awards Won" }
    ],
    services: [
        { id: 1, icon: "fas fa-film", title: "Video Editing", desc: "Professional video editing for YouTube, TikTok, and Commercials." },
        { id: 2, icon: "fas fa-palette", title: "Graphic Design", desc: "Creative visual identity, UI/UX, and branding solutions." },
        { id: 3, icon: "fas fa-code", title: "Web Development", desc: "Modern, responsive, and high-performance website creation." },
        { id: 4, icon: "fas fa-mobile-alt", title: "Social Media", desc: "Content management and strategy for digital growth." }
    ],
    portfolio: [
        { id: 1, category: "Design", title: "Brand Identity 2026", desc: "Modern logo and branding for Tech Startup.", img: "" },
        { id: 2, category: "Video", title: "Cinematic Commercial", desc: "Product promotion video with VFX.", img: "" },
        { id: 3, category: "Website", title: "E-Commerce Platform", desc: "Fullstack web app with payment gateway.", img: "" },
        { id: 4, category: "Design", title: "UI/UX Mobile App", desc: "User interface design for fintech app.", img: "" },
        { id: 5, category: "Video", title: "YouTube Vlog Editing", desc: "Engaging edit with motion graphics.", img: "" },
        { id: 6, category: "Website", title: "Company Profile", desc: "Corporate website with CMS integration.", img: "" }
    ],
    posts: [
        { id: 1, date: "June 15, 2026", title: "Masa Depan Web 3.0", desc: "Bagaimana desentralisasi mengubah cara kita menggunakan internet." },
        { id: 2, date: "June 10, 2026", title: "Tips Video Editing", desc: "Cara membuat transisi smooth di Premiere Pro." },
        { id: 3, date: "June 05, 2026", title: "Pentingnya UI/UX", desc: "Kenapa desain aplikasi harus memikirkan psikologi user." }
    ],
    users: [] // FUTURE LOGIN SYSTEM
};

/* 2. LOADING SCREEN SYSTEM */
document.addEventListener("DOMContentLoaded", () => {
    let progress = 0;
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const loader = document.getElementById("loader");

    const simulateLoading = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress}%`;

        if (progress === 100) {
            clearInterval(simulateLoading);
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => loader.style.display = "none", 800);
                // Trigger reveal for elements in viewport after load
                reveal();
            }, 500);
        }
    }, 150);

    // Render Data from Database Object
    renderStats();
    renderServices();
    renderPortfolio("all");
    renderBlog();
    
    // Set Current Year in Footer
    document.getElementById("currentYear").innerText = new Date().getFullYear();
});

/* 3. CUSTOM CURSOR SYSTEM */
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add slight delay for outline (smooth effect)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effect on clickable items
document.querySelectorAll("a, button, input, textarea").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursorOutline.style.width = "60px";
        cursorOutline.style.height = "60px";
        cursorOutline.style.backgroundColor = "rgba(50, 123, 182, 0.1)"; // Primary blue transparent
    });
    el.addEventListener("mouseleave", () => {
        cursorOutline.style.width = "40px";
        cursorOutline.style.height = "40px";
        cursorOutline.style.backgroundColor = "transparent";
    });
});

/* 4. NAVBAR & MOBILE MENU SYSTEM */
const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

/* 5. RENDER FUNCTIONS (Injecting HTML from DB) */

function renderStats() {
    const container = document.getElementById("stats-container");
    container.innerHTML = FryMediaDB.stats.map(stat => `
        <div class="stat-item glass-card">
            <div class="stat-number" data-target="${stat.number}">0</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join("");
    // Counter animation logic would go here triggered by scroll
}

function renderServices() {
    const container = document.getElementById("services-container");
    container.innerHTML = FryMediaDB.services.map(srv => `
        <div class="service-card glass-card">
            <i class="${srv.icon} service-icon"></i>
            <h3>${srv.title}</h3>
            <p>${srv.desc}</p>
        </div>
    `).join("");
}

function renderPortfolio(filterValue) {
    const container = document.getElementById("portfolio-container");
    
    const filteredData = filterValue === "all" 
        ? FryMediaDB.portfolio 
        : FryMediaDB.portfolio.filter(item => item.category === filterValue);

    container.innerHTML = filteredData.map(item => `
        <div class="portfolio-card glass-card">
            <div class="portfolio-img">
                <i class="fas fa-image" style="font-size: 3rem; opacity: 0.2;"></i>
            </div>
            <div class="portfolio-info">
                <span class="badge status" style="margin-bottom:10px; display:inline-block;">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="#" class="btn btn-outline btn-full">View Details</a>
            </div>
        </div>
    `).join("");
}

function renderBlog() {
    const container = document.getElementById("blog-container");
    container.innerHTML = FryMediaDB.posts.map(post => `
        <div class="blog-card">
            <div class="blog-img"></div>
            <div class="blog-content">
                <span class="blog-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                <h3>${post.title}</h3>
                <p class="text-muted">${post.desc}</p>
                <a href="#" style="color: var(--color-primary); margin-top:10px; display:inline-block; font-weight:bold;">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join("");
}

/* 6. PORTFOLIO FILTER SYSTEM */
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove("active"));
        // Add active class to clicked
        btn.classList.add("active");
        
        const filterValue = btn.getAttribute("data-filter");
        renderPortfolio(filterValue);
    });
});

/* 7. SCROLL REVEAL ANIMATION */
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

/* 8. BACK TO TOP BUTTON */
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }
});

/* 9. CONTACT FORM SYSTEM (Placeholder) */
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate API Call
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = "#2ecc71";
        contactForm.reset();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = ""; // Reset to CSS default
        }, 3000);
    }, 1500);
});

// PAYMENT READY SYSTEM & LOGIN READY SYSTEM
// Data structure is ready in FryMediaDB. Can be integrated with Firebase / Node.js backend.