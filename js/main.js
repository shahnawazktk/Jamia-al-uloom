/**
 * ============================================
 * JAMIA UL ULOOM - Main JavaScript
 * Premium Madrasa Portfolio
 * ============================================
 */

// ============================================
// DATA STORE (Simulating Database)
// ============================================
const AppData = {
    // Madrasa Information
    madrasa: {
        name: "Jamia Ul Uloom",
        tagline: "Islamic Educational Institution",
        established: 2015,
        registration: "REG-12345-EDU-PAK",
        address: "Gurgur, Karak, Pakistan",
        phone: "+92-349-9088073",
        email: "info@jamiaululoom.edu.pk",
        whatsapp: "923499088073"
    },

    // Daily Hadith/Ayat/Aqwal Collection
    dailyContent: [
        {
            type: "hadith",
            arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
            translation: "Actions are judged by intentions, and everyone will be rewarded according to what they intended.",
            reference: "Sahih al-Bukhari 1"
        },
        {
            type: "hadith",
            arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
            translation: "A Muslim is one from whose tongue and hand other Muslims are safe.",
            reference: "Sahih al-Bukhari 10"
        },
        {
            type: "ayat",
            arabic: "وَاقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
            translation: "Read in the name of your Lord who created.",
            reference: "Surah Al-Alaq (96:1)"
        },
        {
            type: "aqwal",
            arabic: "طلب العلم فريضة على كل مسلم",
            translation: "Seeking knowledge is obligatory upon every Muslim.",
            reference: "Ibn Majah"
        },
        {
            type: "hadith",
            arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
            translation: "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise.",
            reference: "Sahih Muslim 2699"
        }
    ],

    // Statistics
    stats: {
        students: 450,
        teachers: 28,
        yearsOfService: 29,
        graduates: 1200
    },

    // News & Updates
    news: [
        {
            id: 1,
            title: "Annual Examination Results Announced",
            date: "2026-04-15",
            summary: "The annual examination results have been declared with 95% pass rate.",
            category: "announcement"
        },
        {
            id: 2,
            title: "New Library Building Inaugurated",
            date: "2026-04-10",
            summary: "A state-of-the-art library building has been inaugurated by the chief guest.",
            category: "event"
        },
        {
            id: 3,
            title: "Admissions Open for 2026-27 Session",
            date: "2026-04-05",
            summary: "Admissions are now open for all classes. Apply before May 31st.",
            category: "admission"
        }
    ],

    // Announcements
    announcements: [
        "📢 Annual Sports Day scheduled for May 15, 2026",
        "📢 Parent-Teacher meeting on April 30, 2026",
        "📢 Eid Milad-un-Nabi celebration next Friday"
    ],

    // Teachers
    teachers: [
        {
            id: 1,
            name: "Mufti Abdul Rahman",
            position: "Principal",
            qualification: "PhD in Islamic Studies",
            experience: "8 years",
            image: "img/m1.jpg"
        },
        {
            id: 2,
            name: "Qari Muhammad Ibrahim",
            position: "Head of Tajweed",
            qualification: "Ijazah in Qira'at",
            experience: "6 years",
            image: "img/m1.jpg"
        },
        {
            id: 3,
            name: "Maulana Fazlur Rahman",
            position: "Hadith Professor",
            qualification: "Alimiyat + Fazilat",
            experience: "5 years",
            image: "img/m1.jpg"
        },
        {
            id: 4,
            name: "Hafiz Muhammad Yusuf",
            position: "Quran Memorization",
            qualification: "Hafiz-e-Quran",
            experience: "2 years",
            image: "img/m1.jpg"
        }
    ],

    // Students (Sample Data)
    students: [
        {
            rollNo: "JU-2025-001",
            name: "Abdullah Ahmed",
            fatherName: "Ahmed Khan",
            class: "Dars-e-Nizami Year 3",
            marks: 485,
            totalMarks: 500,
            grade: "A+",
            position: 1,
            attendance: 98
        },
        {
            rollNo: "JU-2025-002",
            name: "Muhammad Ali",
            fatherName: "Ibrahim Sheikh",
            class: "Dars-e-Nizami Year 3",
            marks: 465,
            totalMarks: 500,
            grade: "A",
            position: 2,
            attendance: 95
        },
        {
            rollNo: "JU-2025-003",
            name: "Abdul Rahman",
            fatherName: "Karim Bakhsh",
            class: "Dars-e-Nizami Year 2",
            marks: 445,
            totalMarks: 500,
            grade: "A",
            position: 3,
            attendance: 92
        },
        {
            rollNo: "JU-2025-004",
            name: "Hamza Ibrahim",
            fatherName: "Ibrahim Malik",
            class: "Dars-e-Nizami Year 2",
            marks: 425,
            totalMarks: 500,
            grade: "B+",
            position: 5,
            attendance: 88
        },
        {
            rollNo: "JU-2025-005",
            name: "Yusuf Muhammad",
            fatherName: "Muhammad Siddique",
            class: "Dars-e-Nizami Year 1",
            marks: 455,
            totalMarks: 500,
            grade: "A",
            position: 2,
            attendance: 96
        }
    ],

    // Class Schedule
    schedule: [
        { day: "Monday", classes: [
            { time: "07:00 - 08:30", subject: "Tajweed", teacher: "Qari Ibrahim" },
            { time: "08:45 - 10:15", subject: "Arabic Grammar", teacher: "Maulana Fazlur Rahman" },
            { time: "10:30 - 12:00", subject: "Quran Memorization", teacher: "Hafiz Yusuf" },
            { time: "12:15 - 01:45", subject: "Hadith Studies", teacher: "Maulana Fazlur Rahman" }
        ]},
        { day: "Tuesday", classes: [
            { time: "07:00 - 08:30", subject: "Fiqh", teacher: "Mufti Abdul Rahman" },
            { time: "08:45 - 10:15", subject: "Arabic Literature", teacher: "Maulana Fazlur Rahman" },
            { time: "10:30 - 12:00", subject: "Quran Memorization", teacher: "Hafiz Yusuf" },
            { time: "12:15 - 01:45", subject: "Islamic History", teacher: "Mufti Abdul Rahman" }
        ]},
        { day: "Wednesday", classes: [
            { time: "07:00 - 08:30", subject: "Tajweed", teacher: "Qari Ibrahim" },
            { time: "08:45 - 10:15", subject: "Aqeedah", teacher: "Mufti Abdul Rahman" },
            { time: "10:30 - 12:00", subject: "Quran Memorization", teacher: "Hafiz Yusuf" },
            { time: "12:15 - 01:45", subject: "Hadith Studies", teacher: "Maulana Fazlur Rahman" }
        ]},
        { day: "Thursday", classes: [
            { time: "07:00 - 08:30", subject: "Tafseer", teacher: "Mufti Abdul Rahman" },
            { time: "08:45 - 10:15", subject: "Arabic Grammar", teacher: "Maulana Fazlur Rahman" },
            { time: "10:30 - 12:00", subject: "Quran Memorization", teacher: "Hafiz Yusuf" },
            { time: "12:15 - 01:45", subject: "Seerah", teacher: "Mufti Abdul Rahman" }
        ]},
        { day: "Friday", classes: [
            { time: "07:00 - 08:30", subject: "Khutbah Practice", teacher: "All Teachers" },
            { time: "08:45 - 10:15", subject: "Jumu'ah Prayer", teacher: "-" },
            { time: "10:30 - 12:00", subject: "Islamic Ethics", teacher: "Mufti Abdul Rahman" },
            { time: "12:15 - 01:45", subject: "Group Discussion", teacher: "All Teachers" }
        ]}
    ],

    // Prayer Times
    prayerTimes: {
        Fajr: "05:15 AM",
        Dhuhr: "12:30 PM",
        Asr: "04:15 PM",
        Maghrib: "06:45 PM",
        Isha: "08:15 PM"
    },

    // Gallery Categories
    galleryCategories: ["All", "Events", "Classes", "Functions", "Sports", "Visits"],

    // Gallery Items
    gallery: [
        { id: 1, category: "Events", title: "Annual Prize Distribution", image: "img/p1.jpg" },
        { id: 2, category: "Classes", title: "Quran Class Session", image: "img/p2.jpg" },
        { id: 3, category: "Functions", title: "Eid Celebration", image: "img/p3.jpg" },
        { id: 4, category: "Sports", title: "Cricket Tournament", image: "img/p4.jpg" },
        { id: 5, category: "Events", title: "Islamic Quiz Competition", image: "img/p5.jpg" },
        { id: 6, category: "Visits", title: "Educational Trip", image: "img/p6.jpg" },
        { id: 7, category: "Classes", title: "Arabic Calligraphy Workshop", image: "img/p7.jpg" },
        { id: 8, category: "Functions", title: "Graduation Ceremony", image: "img/p8.jpg" }
    ],

    // Timeline Events
    timeline: [
        { year: "2015", title: "Foundation Laid", description: "Jamia Ul Uloom was established with just 20 students and 3 teachers." },
        { year: "2016", title: "First Batch Graduated", description: "The first batch of 15 students successfully completed their education." },
        { year: "2017", title: "Government Registration", description: "Received official government registration and recognition." },
        { year: "2018", title: "New Building Constructed", description: "A new three-story building was constructed to accommodate growing student numbers." },
        { year: "2019", title: "Library Established", description: "A comprehensive library with over 5000 books was established." },
        { year: "2020", title: "Digital Initiative", description: "Launched digital learning programs and computer labs." },
        { year: "2021", title: "Online Classes", description: "Successfully transitioned to online education during the pandemic." },
        { year: "2022", title: "30 Years of Excellence", description: "Celebrating three decades of Islamic education with over 1200 graduates." }
    ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const Utils = {
    // Format date
    formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    },

    // Get random item from array
    getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    // Animate number counting
    animateNumber(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Generate PDF (simplified)
    generatePDF(content, filename) {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write(`
            <html>
            <head>
                <title>${filename}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                    th { background: #1a5f48; color: white; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .header h1 { color: #1a5f48; }
                </style>
            </head>
            <body>
                ${content}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    },

    // Copy to clipboard
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Copied to clipboard!');
        });
    },

    // Show toast notification
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            z-index: 10000;
            animation: fadeInUp 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    // WhatsApp share
    shareOnWhatsApp(text) {
        const url = `https://wa.me/${AppData.madrasa.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
};

// ============================================
// UI COMPONENTS
// ============================================
const UI = {
    // Initialize all components
    init() {
        this.initNavbar();
        this.initSlider();
        this.initDailyContent();
        this.initStats();
        this.initScrollToTop();
        this.initLightbox();
        this.initAnnouncementBar();
    },

    // Navbar scroll effect
    initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', Utils.debounce(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 100));
    },

    // Hero slider
    initSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        if (slides.length === 0) return;

        let currentSlide = 0;
        const totalSlides = slides.length;

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        };

        // Auto advance
        setInterval(nextSlide, 5000);

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    },

    // Daily content rotation
    initDailyContent() {
        const dailyContentEl = document.getElementById('daily-content');
        if (!dailyContentEl) return;

        const content = Utils.getRandomItem(AppData.dailyContent);
        
        dailyContentEl.innerHTML = `
            <div class="daily-content-card">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <span class="badge badge-primary mb-2">${content.type.toUpperCase()}</span>
                        <p class="arabic-text">${content.arabic}</p>
                        <p class="translation">"${content.translation}"</p>
                        <p class="reference">📖 ${content.reference}</p>
                    </div>
                    <div class="share-buttons">
                        <button class="btn btn-sm btn-outline-success" onclick="Utils.shareOnWhatsApp('${content.translation}')">
                            <i class="fab fa-whatsapp"></i> Share
                        </button>
                        <button class="btn btn-sm btn-outline-primary" onclick="Utils.copyToClipboard('${content.arabic}\n${content.translation}\n${content.reference}')">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Animate stats on scroll
    initStats() {
        const stats = document.querySelectorAll('.stat-number');
        if (stats.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    Utils.animateNumber(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    },

    // Scroll to top button
    initScrollToTop() {
        const scrollBtn = document.querySelector('.scroll-top');
        if (!scrollBtn) return;

        window.addEventListener('scroll', Utils.debounce(() => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }, 100));

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // Lightbox for gallery
    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const lightboxImg = lightbox.querySelector('img');
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });

        // Close on click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
            }
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        });
    },

    // Announcement bar
    initAnnouncementBar() {
        const closeBtn = document.querySelector('.announcement-bar .close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeBtn.closest('.announcement-bar').style.display = 'none';
            });
        }
    }
};

// ============================================
// PAGE SPECIFIC FUNCTIONS
// ============================================

// Home Page
const HomePage = {
    init() {
        this.renderNews();
        this.renderHighlights();
    },

    renderNews() {
        const newsContainer = document.getElementById('news-container');
        if (!newsContainer) return;

        newsContainer.innerHTML = AppData.news.slice(0, 3).map(item => `
            <div class="card h-100">
                <div class="card-body">
                    <span class="badge badge-primary mb-2">${item.category}</span>
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.summary}</p>
                    <small class="text-muted">${Utils.formatDate(item.date)}</small>
                </div>
            </div>
        `).join('');
    },

    renderHighlights() {
        const highlightsContainer = document.getElementById('highlights-container');
        if (!highlightsContainer) return;

        const highlights = [
            { icon: 'fas fa-certificate', title: 'Government Registered', desc: 'Recognized by the government' },
            { icon: 'fas fa-award', title: 'Top Results', desc: '95% pass rate consistently' },
            { icon: 'fas fa-user-tie', title: 'Qualified Teachers', desc: 'Experienced scholars' },
            { icon: 'fas fa-book-open', title: 'Comprehensive Curriculum', desc: 'Dars-e-Nizami program' }
        ];

        highlightsContainer.innerHTML = highlights.map(h => `
            <div class="col-md-3 mb-4">
                <div class="feature-card gold">
                    <div class="feature-icon">
                        <i class="${h.icon}"></i>
                    </div>
                    <h5>${h.title}</h5>
                    <p class="text-muted">${h.desc}</p>
                </div>
            </div>
        `).join('');
    }
};

// About Page
const AboutPage = {
    init() {
        this.renderTimeline();
        this.renderTeachers();
    },

    renderTimeline() {
        const timelineContainer = document.getElementById('timeline-container');
        if (!timelineContainer) return;

        timelineContainer.innerHTML = AppData.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="timeline-year">${item.year}</span>
                    <h5>${item.title}</h5>
                    <p class="text-muted">${item.description}</p>
                </div>
            </div>
        `).join('');
    },

    renderTeachers() {
        const teachersContainer = document.getElementById('teachers-container');
        if (!teachersContainer) return;

        teachersContainer.innerHTML = AppData.teachers.map(teacher => `
            <div class="col-md-3 mb-4">
                <div class="card text-center h-100">
                    <img src="${teacher.image}" class="card-img-top" alt="${teacher.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${teacher.name}</h5>
                        <p class="text-primary mb-1">${teacher.position}</p>
                        <small class="text-muted">${teacher.qualification}</small>
                        <br>
                        <small class="text-muted">Experience: ${teacher.experience}</small>
                    </div>
                </div>
            </div>
        `).join('');
    }
};

// Daily Content Page
const DailyContentPage = {
    currentFilter: 'all',

    init() {
        this.renderAllContent();
        this.initFilters();
    },

    renderAllContent() {
        const container = document.getElementById('all-content-container');
        if (!container) return;

        container.innerHTML = AppData.dailyContent.map((item, index) => `
            <div class="col-md-6 mb-4" data-type="${item.type}">
                <div class="daily-content-card h-100">
                    <span class="badge badge-primary mb-2">${item.type.toUpperCase()}</span>
                    <p class="arabic-text">${item.arabic}</p>
                    <p class="translation">"${item.translation}"</p>
                    <p class="reference">📖 ${item.reference}</p>
                    <div class="share-buttons mt-3">
                        <button class="btn btn-sm btn-outline-success" onclick="Utils.shareOnWhatsApp('${item.translation}')">
                            <i class="fab fa-whatsapp"></i> Share
                        </button>
                        <button class="btn btn-sm btn-outline-primary" onclick="Utils.copyToClipboard('${item.arabic}\\n${item.translation}\\n${item.reference}')">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterContent(btn.dataset.filter);
            });
        });
    },

    filterContent(type) {
        const items = document.querySelectorAll('#all-content-container > div');
        items.forEach(item => {
            if (type === 'all' || item.dataset.type === type) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
};

// Students & Results Page
const StudentsPage = {
    init() {
        this.renderStudentsTable();
        this.initSearch();
    },

    renderStudentsTable(data = AppData.students) {
        const tbody = document.getElementById('students-tbody');
        if (!tbody) return;

        tbody.innerHTML = data.map(student => `
            <tr>
                <td>${student.rollNo}</td>
                <td>${student.name}</td>
                <td>${student.fatherName}</td>
                <td>${student.class}</td>
                <td>${student.marks}/${student.totalMarks}</td>
                <td><span class="badge badge-${this.getGradeBadge(student.grade)}">${student.grade}</span></td>
                <td>${student.position}</td>
                <td>
                    <span class="badge badge-${student.attendance >= 90 ? 'success' : 'warning'}">${student.attendance}%</span>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="StudentsPage.viewResult('${student.rollNo}')">
                        <i class="fas fa-eye"></i> View
                    </button>
                </td>
            </tr>
        `).join('');
    },

    getGradeBadge(grade) {
        const badges = { 'A+': 'success', 'A': 'success', 'B+': 'primary', 'B': 'primary', 'C': 'warning', 'D': 'warning', 'F': 'danger' };
        return badges[grade] || 'secondary';
    },

    initSearch() {
        const searchInput = document.getElementById('student-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', Utils.debounce((e) => {
            const query = e.target.value.toLowerCase();
            const filtered = AppData.students.filter(s => 
                s.name.toLowerCase().includes(query) ||
                s.rollNo.toLowerCase().includes(query) ||
                s.class.toLowerCase().includes(query)
            );
            this.renderStudentsTable(filtered);
        }, 300));
    },

    viewResult(rollNo) {
        const student = AppData.students.find(s => s.rollNo === rollNo);
        if (!student) return;

        const percentage = ((student.marks / student.totalMarks) * 100).toFixed(1);
        
        const resultContent = `
            <div class="header">
                <h1>${AppData.madrasa.name}</h1>
                <p>${AppData.madrasa.address}</p>
                <h3>Result Card</h3>
            </div>
            <table>
                <tr><th>Roll Number</th><td>${student.rollNo}</td></tr>
                <tr><th>Name</th><td>${student.name}</td></tr>
                <tr><th>Father's Name</th><td>${student.fatherName}</td></tr>
                <tr><th>Class</th><td>${student.class}</td></tr>
                <tr><th>Total Marks</th><td>${student.totalMarks}</td></tr>
                <tr><th>Marks Obtained</th><td>${student.marks}</td></tr>
                <tr><th>Percentage</th><td>${percentage}%</td></tr>
                <tr><th>Grade</th><td>${student.grade}</td></tr>
                <tr><th>Position</th><td>${student.position}</td></tr>
                <tr><th>Attendance</th><td>${student.attendance}%</td></tr>
            </table>
        `;

        Utils.generatePDF(resultContent, `Result_${student.rollNo}`);
    }
};

// Attendance Page
const AttendancePage = {
    init() {
        this.renderAttendanceSummary();
        this.renderAttendanceChart();
        this.renderAttendanceTable();
    },

    renderAttendanceSummary() {
        const summary = { present: 425, absent: 20, late: 5 };
        const total = summary.present + summary.absent + summary.late;

        document.querySelectorAll('.attendance-stat').forEach(el => {
            const type = el.classList.contains('present') ? 'present' : 
                        el.classList.contains('absent') ? 'absent' : 'late';
            const count = summary[type];
            const percentage = ((count / total) * 100).toFixed(1);
            
            el.querySelector('.stat-count').textContent = count;
            el.querySelector('.stat-percent').textContent = `${percentage}%`;
        });
    },

    renderAttendanceChart() {
        const canvas = document.getElementById('attendance-chart');
        if (!canvas) return;

        // Simple bar chart using CSS
        const data = [
            { day: 'Mon', present: 95, absent: 5 },
            { day: 'Tue', present: 93, absent: 7 },
            { day: 'Wed', present: 96, absent: 4 },
            { day: 'Thu', present: 94, absent: 6 },
            { day: 'Fri', present: 98, absent: 2 }
        ];

        const chartContainer = canvas.parentElement;
        chartContainer.innerHTML = `
            <div class="chart-header text-center mb-4">
                <h5>Weekly Attendance Overview</h5>
            </div>
            <div class="d-flex justify-content-between align-items-end" style="height: 200px; gap: 10px;">
                ${data.map(d => `
                    <div class="text-center" style="flex: 1;">
                        <div style="display: flex; flex-direction: column; justify-content: flex-end; height: 180px;">
                            <div style="background: #2ecc71; width: 100%; border-radius: 4px 4px 0 0; height: ${d.present}%;"></div>
                            <div style="background: #e74c3c; width: 100%; border-radius: 0 0 4px 4px; height: ${d.absent}%;"></div>
                        </div>
                        <small class="mt-2 d-block">${d.day}</small>
                    </div>
                `).join('')}
            </div>
            <div class="d-flex justify-content-center gap-4 mt-3">
                <span><span style="display:inline-block;width:15px;height:15px;background:#2ecc71;margin-right:5px;"></span>Present</span>
                <span><span style="display:inline-block;width:15px;height:15px;background:#e74c3c;margin-right:5px;"></span>Absent</span>
            </div>
        `;
    },

    renderAttendanceTable() {
        const tbody = document.getElementById('attendance-tbody');
        if (!tbody) return;

        const attendanceData = AppData.students.slice(0, 5).map(s => ({
            rollNo: s.rollNo,
            name: s.name,
            class: s.class,
            status: s.attendance >= 90 ? 'present' : s.attendance >= 75 ? 'late' : 'absent',
            percentage: s.attendance
        }));

        tbody.innerHTML = attendanceData.map(a => `
            <tr>
                <td>${a.rollNo}</td>
                <td>${a.name}</td>
                <td>${a.class}</td>
                <td><span class="badge badge-${a.status === 'present' ? 'success' : a.status === 'late' ? 'warning' : 'danger'}">${a.status.toUpperCase()}</span></td>
                <td>${a.percentage}%</td>
            </tr>
        `).join('');
    }
};

// Schedule/Routine Page
const SchedulePage = {
    currentDay: new Date().toLocaleDateString('en-US', { weekday: 'long' }),

    init() {
        this.renderSchedule();
        this.renderPrayerTimes();
        this.initDaySelector();
    },

    renderSchedule(day = null) {
        const container = document.getElementById('schedule-container');
        if (!container) return;

        day = day || this.currentDay;
        const daySchedule = AppData.schedule.find(s => s.day === day);

        if (!daySchedule) {
            container.innerHTML = '<p class="text-center text-muted">No classes scheduled for this day.</p>';
            return;
        }

        container.innerHTML = `
            <h5 class="mb-4 text-center">Schedule for ${daySchedule.day}</h5>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Subject</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${daySchedule.classes.map(c => `
                            <tr>
                                <td>${c.time}</td>
                                <td>${c.subject}</td>
                                <td>${c.teacher}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    renderPrayerTimes() {
        const container = document.getElementById('prayer-times-container');
        if (!container) return;

        container.innerHTML = `
            <div class="prayer-header">
                <h5 class="mb-0">🕌 Today's Prayer Times</h5>
            </div>
            ${Object.entries(AppData.prayerTimes).map(([name, time]) => `
                <div class="prayer-row">
                    <span class="prayer-name">${name}</span>
                    <span class="prayer-time">${time}</span>
                </div>
            `).join('')}
        `;
    },

    initDaySelector() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const selector = document.getElementById('day-selector');
        if (!selector) return;

        selector.innerHTML = days.map(day => `
            <option value="${day}" ${day === this.currentDay ? 'selected' : ''}>${day}</option>
        `).join('');

        selector.addEventListener('change', (e) => {
            this.renderSchedule(e.target.value);
        });
    },

    downloadSchedule() {
        const daySchedule = AppData.schedule.find(s => s.day === this.currentDay);
        if (!daySchedule) return;

        const content = `
            <div class="header">
                <h1>${AppData.madrasa.name}</h1>
                <h3>Class Schedule - ${daySchedule.day}</h3>
            </div>
            <table>
                <thead>
                    <tr><th>Time</th><th>Subject</th><th>Teacher</th></tr>
                </thead>
                <tbody>
                    ${daySchedule.classes.map(c => `<tr><td>${c.time}</td><td>${c.subject}</td><td>${c.teacher}</td></tr>`).join('')}
                </tbody>
            </table>
        `;
        Utils.generatePDF(content, `Schedule_${daySchedule.day}`);
    }
};

// Gallery Page
const GalleryPage = {
    currentCategory: 'All',

    init() {
        this.renderCategories();
        this.renderGallery();
    },

    renderCategories() {
        const container = document.getElementById('gallery-categories');
        if (!container) return;

        container.innerHTML = AppData.galleryCategories.map(cat => `
            <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');

        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterGallery(btn.dataset.category);
            });
        });
    },

    renderGallery(filter = 'All') {
        const container = document.getElementById('gallery-grid');
        if (!container) return;

        const filtered = filter === 'All' 
            ? AppData.gallery 
            : AppData.gallery.filter(g => g.category === filter);

        container.innerHTML = filtered.map(item => `
            <div class="gallery-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
                <div class="p-2 bg-white">
                    <small class="text-muted">${item.category}</small>
                    <h6 class="mb-0">${item.title}</h6>
                </div>
            </div>
        `).join('');

        // Reinitialize lightbox for new items
        UI.initLightbox();
    },

    filterGallery(category) {
        this.currentCategory = category;
        this.renderGallery(category);
    }
};

// Contact Page
const ContactPage = {
    init() {
        this.initForm();
    },

    initForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Simulate form submission
            Utils.showToast('Message sent successfully!', 'success');
            form.reset();
        });
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core UI components
    UI.init();

    // Detect current page and initialize page-specific features
    const currentPage = document.body.dataset.page;
    
    switch(currentPage) {
        case 'home':
            HomePage.init();
            break;
        case 'about':
            AboutPage.init();
            break;
        case 'daily-content':
            DailyContentPage.init();
            break;
        case 'students':
            StudentsPage.init();
            break;
        case 'attendance':
            AttendancePage.init();
            break;
        case 'schedule':
            SchedulePage.init();
            break;
        case 'gallery':
            GalleryPage.init();
            break;
        case 'contact':
            ContactPage.init();
            break;
    }

    // Initialize Bootstrap tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    console.log('Jamia Ul Uloom Website Initialized');
});

// Make functions globally available
window.Utils = Utils;
window.UI = UI;
window.HomePage = HomePage;
window.AboutPage = AboutPage;
window.DailyContentPage = DailyContentPage;
window.StudentsPage = StudentsPage;
window.AttendancePage = AttendancePage;
window.SchedulePage = SchedulePage;
window.GalleryPage = GalleryPage;
window.ContactPage = ContactPage;
window.AppData = AppData;