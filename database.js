/* ==================== FRYMEDIAOFFICIAL DATABASE SYSTEM ==================== */
// This file contains all placeholder data for the FryMediaOfficial website
// Ready to be connected to backend/database in the future

// ==================== MAIN DATABASE OBJECT ==================== */
const FryMediaDB = {
    // PORTFOLIO DATABASE
    portfolio: [
        {
            id: 1,
            title: "Brand Identity Design",
            description: "Complete branding package for tech startup",
            category: "design",
            thumbnail: "",
            year: 2024,
            featured: true
        },
        {
            id: 2,
            title: "Corporate Video Production",
            description: "Professional promotional video for business",
            category: "video",
            thumbnail: "",
            year: 2024,
            featured: true
        },
        {
            id: 3,
            title: "E-Commerce Website",
            description: "Modern online store with payment integration",
            category: "website",
            thumbnail: "",
            year: 2024,
            featured: false
        },
        {
            id: 4,
            title: "Social Media Campaign",
            description: "Digital marketing campaign design",
            category: "design",
            thumbnail: "",
            year: 2023,
            featured: false
        },
        {
            id: 5,
            title: "Music Video Editing",
            description: "Creative video editing and visual effects",
            category: "video",
            thumbnail: "",
            year: 2023,
            featured: false
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Personal portfolio for creative professional",
            category: "website",
            thumbnail: "",
            year: 2023,
            featured: false
        },
        {
            id: 7,
            title: "App UI/UX Design",
            description: "Mobile application interface design",
            category: "design",
            thumbnail: "",
            year: 2024,
            featured: false
        },
        {
            id: 8,
            title: "Motion Graphics",
            description: "Animated graphics for social media",
            category: "video",
            thumbnail: "",
            year: 2024,
            featured: false
        },
        {
            id: 9,
            title: "Digital Poster Design",
            description: "Event poster and promotional materials",
            category: "other",
            thumbnail: "",
            year: 2023,
            featured: false
        }
    ],

    // SERVICES DATABASE
    services: [
        {
            id: 1,
            icon: "🎬",
            title: "Video Editing",
            description: "Professional video editing dengan visual effects, color grading, dan finishing berkualitas tinggi untuk berbagai kebutuhan konten video Anda."
        },
        {
            id: 2,
            icon: "🎨",
            title: "Graphic Design",
            description: "Desain grafis kreatif untuk branding, logo, poster, banner, dan berbagai kebutuhan visual bisnis dan personal Anda."
        },
        {
            id: 3,
            icon: "🌐",
            title: "Website Development",
            description: "Pengembangan website modern, responsif, dan SEO-friendly dengan teknologi terkini untuk bisnis dan personal branding."
        },
        {
            id: 4,
            icon: "📱",
            title: "Social Media Management",
            description: "Kelola konten dan strategi media sosial Anda untuk meningkatkan engagement dan reach audience target."
        },
        {
            id: 5,
            icon: "📸",
            title: "Digital Content Creation",
            description: "Produksi konten digital berkualitas tinggi untuk platform sosial media, website, dan kebutuhan marketing digital."
        },
        {
            id: 6,
            icon: "⚡",
            title: "Technology Solution",
            description: "Solusi teknologi modern untuk bisnis Anda termasuk automation, sistem management, dan integrasi digital."
        }
    ],

    // BLOG/POSTS DATABASE
    posts: [
        {
            id: 1,
            title: "Tips Desain Grafis untuk Pemula",
            slug: "tips-desain-grafis-pemula",
            excerpt: "Pelajari dasar-dasar desain grafis yang wajib diketahui untuk memulai karir di industri kreatif.",
            content: "",
            thumbnail: "",
            date: "2024-06-15",
            category: "Design",
            author: "FryMediaOfficial"
        },
        {
            id: 2,
            title: "Panduan Membuat Video Profesional",
            slug: "panduan-membuat-video-profesional",
            excerpt: "Step by step membuat video berkualitas dari pre-production hingga post-production.",
            content: "",
            thumbnail: "",
            date: "2024-06-10",
            category: "Video",
            author: "FryMediaOfficial"
        },
        {
            id: 3,
            title: "Website Modern: Trends 2024",
            slug: "website-modern-trends-2024",
            excerpt: "Tren desain website terkini yang wajib diikuti untuk bisnis online yang sukses.",
            content: "",
            thumbnail: "",
            date: "2024-06-05",
            category: "Website",
            author: "FryMediaOfficial"
        },
        {
            id: 4,
            title: "Strategi Konten Media Sosial",
            slug: "strategi-konten-media-sosial",
            excerpt: "Cara efektif membuat strategi konten untuk meningkatkan engagement dan followers.",
            content: "",
            thumbnail: "",
            date: "2024-05-28",
            category: "Marketing",
            author: "FryMediaOfficial"
        },
        {
            id: 5,
            title: "Color Theory dalam Desain",
            slug: "color-theory-dalam-desain",
            excerpt: "Memahami teori warna dan cara mengaplikasikannya dalam desain visual yang efektif.",
            content: "",
            thumbnail: "",
            date: "2024-05-20",
            category: "Design",
            author: "FryMediaOfficial"
        },
        {
            id: 6,
            title: "Update: Project Terbaru Kami",
            slug: "update-project-terbaru",
            excerpt: "Penampilan project terbaru dari tim kreatif FryMediaOfficial bulan ini.",
            content: "",
            thumbnail: "",
            date: "2024-05-15",
            category: "Update",
            author: "FryMediaOfficial"
        }
    ],

    // SHOWCASE PROJECTS DATABASE
    showcases: [
        {
            id: 1,
            title: "TechCorp Indonesia Rebranding",
            description: "Project rebranding lengkap untuk perusahaan teknologi terkemuka Indonesia. Meliputi redesign logo, brand guidelines, dan seluruh corporate identity materials.",
            status: "Completed",
            year: 2024,
            thumbnail: "",
            category: "Branding"
        },
        {
            id: 2,
            title: "Festival Music Nation",
            description: "Video production dan content creation untuk event musik terbesar tahun ini. Mencakup aftermovie, teaser, dan promotional materials untuk seluruh platform digital.",
            status: "In Progress",
            year: 2024,
            thumbnail: "",
            category: "Video"
        },
        {
            id: 3,
            title: "E-Commerce Platform Launch",
            description: "Pengembangan website e-commerce modern dengan sistem pembayaran terintegrasi, dashboard admin, dan fitur lengkap untuk pengelolaan toko online.",
            status: "Coming Soon",
            year: 2024,
            thumbnail: "",
            category: "Website"
        }
    ],

    // PRICING PLANS DATABASE
    pricing: [
        {
            id: 1,
            name: "Starter",
            price: "500K",
            period: "starting from",
            description: "Ideal untuk project kecil dan personal",
            features: [
                "Basic Design Package",
                "2 Revisions",
                "3 Days Delivery",
                "Source Files",
                "Basic Support"
            ],
            featured: false
        },
        {
            id: 2,
            name: "Professional",
            price: "1.5M",
            period: "starting from",
            description: "Untuk bisnis dan kebutuhan profesional",
            features: [
                "Full Design Package",
                "Unlimited Revisions",
                "7 Days Delivery",
                "Source Files Included",
                "Priority Support",
                "Multiple Formats",
                "Brand Guidelines"
            ],
            featured: true
        },
        {
            id: 3,
            name: "Enterprise",
            price: "5M+",
            period: "custom quote",
            description: "Solusi lengkap untuk enterprise",
            features: [
                "Complete Package",
                "Unlimited Revisions",
                "Fast Delivery",
                "All Source Files",
                "24/7 Dedicated Support",
                "Multiple Designs",
                "Full Documentation",
                "Consultation Included"
            ],
            featured: false
        }
    ],

    // USERS DATABASE PLACEHOLDER
    // Ready for future authentication system
    users: [],

    // PRODUCTS DATABASE PLACEHOLDER
    // Ready for future e-commerce features
    products: [],

    // ORDERS DATABASE PLACEHOLDER
    // Ready for future order management
    orders: [],

    // TESTIMONIALS DATABASE PLACEHOLDER
    // Ready for future testimonials section
    testimonials: [],

    // TEAM MEMBERS DATABASE PLACEHOLDER
    // Ready for future team section
    team: []
};

// ==================== DATABASE HELPER FUNCTIONS ==================== */

// Get all portfolio items
function getPortfolio() {
    return FryMediaDB.portfolio;
}

// Get portfolio by category
function getPortfolioByCategory(category) {
    if (category === 'all') return FryMediaDB.portfolio;
    return FryMediaDB.portfolio.filter(item => item.category === category);
}

// Get featured portfolio items
function getFeaturedPortfolio() {
    return FryMediaDB.portfolio.filter(item => item.featured);
}

// Get all services
function getServices() {
    return FryMediaDB.services;
}

// Get all posts
function getPosts() {
    return FryMediaDB.posts;
}

// Get post by slug
function getPostBySlug(slug) {
    return FryMediaDB.posts.find(post => post.slug === slug);
}

// Get all showcases
function getShowcases() {
    return FryMediaDB.showcases;
}

// Get all pricing plans
function getPricing() {
    return FryMediaDB.pricing;
}

// ==================== FUTURE API PLACEHOLDERS ==================== */
// These functions are ready for backend integration

// FUTURE: Add portfolio item (requires auth)
function addPortfolio(item) {
    console.log('[FUTURE] Adding portfolio item:', item);
    // FryMediaDB.portfolio.push(item);
}

// FUTURE: Update portfolio item (requires auth)
function updatePortfolio(id, data) {
    console.log('[FUTURE] Updating portfolio item:', id, data);
    // const index = FryMediaDB.portfolio.findIndex(item => item.id === id);
    // if (index !== -1) FryMediaDB.portfolio[index] = { ...FryMediaDB.portfolio[index], ...data };
}

// FUTURE: Delete portfolio item (requires auth)
function deletePortfolio(id) {
    console.log('[FUTURE] Deleting portfolio item:', id);
    // FryMediaDB.portfolio = FryMediaDB.portfolio.filter(item => item.id !== id);
}

// FUTURE: Add blog post (requires auth)
function addPost(post) {
    console.log('[FUTURE] Adding post:', post);
    // FryMediaDB.posts.push(post);
}

// FUTURE: User authentication placeholder
function loginUser(email, password) {
    console.log('[FUTURE] Login attempt:', email);
    // Will be connected to backend auth system
}

// FUTURE: User registration placeholder
function registerUser(userData) {
    console.log('[FUTURE] Registration attempt:', userData);
    // Will be connected to backend auth system
}

// FUTURE: Contact form submission placeholder
function submitContactForm(formData) {
    console.log('[FUTURE] Contact form submission:', formData);
    // Will be connected to backend API
}

// FUTURE: Payment processing placeholder
function processPayment(paymentData) {
    console.log('[FUTURE] Payment processing:', paymentData);
    // Will be connected to payment gateway
}

// ==================== DATABASE INITIALIZATION ==================== */
console.log('FryMediaDB initialized with', FryMediaDB.portfolio.length, 'portfolio items');
console.log('Services loaded:', FryMediaDB.services.length);
console.log('Posts loaded:', FryMediaDB.posts.length);
