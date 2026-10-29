/**
 * Nodir Rimbayev — Shaxsiy Portfolio Sayti
 * Interaktivlik, ko'p tillilik (UZ, EN, RU) va boshqaruv funksiyalari
 */

// Tarjimalar lug'ati (Translations Dictionary)
const translations = {
    uz: {
        nav_about: "Haqimda",
        nav_exp: "Tajriba",
        nav_aidevix: "Aidevix",
        nav_achievements: "Yutuqlar",
        nav_skills: "Ko'nikmalar",
        nav_projects: "Loyihalar",
        nav_contact: "Aloqa",
        btn_contact_nav: "Bog'lanish",
        hero_status: "Hamkorlik va masofaviy ishlar uchun ochiqman",
        hero_role: "Frontend dasturchi · 15 yoshli web mutaxassisi",
        hero_desc: "Salom! Men Nodir Rimbayev, 15 yoshli iqtidorli Frontend dasturchiman. Men React, Next.js va TypeScript yordamida zamonaviy, qulay va interaktiv veb-saytlar hamda ilovalar yarataman — yangi texnologiyalar va AI integratsiyalarini faol o'rganib amaliyotda qo'llayman.",
        hero_location: "Toshkent, O'zbekiston",
        btn_contact: "Bog'lanish",
        btn_aidevix: "Aidevix'ga o'tish",
        btn_cv: "CV yuklab olish",
        sec_about: "MEN HAQIMDA",
        about_heading: "Mening maqsadim — zamonaviy, tezkor va go'zal web ilovalar yaratish",
        about_p1: "Salom! Men Nodir Rimbayev, 15 yoshdaman va zamonaviy web texnologiyalariga chuqur qiziqadigan <strong>Frontend Dasturchi</strong>man. Yoshimga qaramay, murakkab g'oyalarni toza, samarali va kengaytiriluvchi kodga aylantirishni o'rganib amaliyotda qo'llab kelmoqdaman.",
        about_p2: "Har bir loyihada foydalanuvchi tajribasi (UX), chiroyli dizayn, tez yuklanish va qulaylik mezonlariga alohida e'tibor qarataman. React, Next.js, TypeScript va AI texnologiyalarini o'rganishda har kuni o'z ustimda ishlayman.",
        fact_1: "Toza, semantik va modulli arxitektura",
        fact_2: "Mobil va barcha ekranlarga to'liq moslashuvchanlik (Responsive)",
        fact_3: "REST API, Zamonaviy UI komponentlar va AI integratsiyasi",
        stat_age: "Yoshimda (Yosh Iqtidor)",
        stat_exp: "Yillik Dasturlash Tajribasi",
        stat_projects: "Muvaffaqiyatli Loyihalar",
        stat_happy: "Ishtiyoq & Intilish",
        sec_exp: "ISh TAJRIBASI",
        exp_heading: "Faoliyatim & Tajribam",
        exp_desc1: "Aidevix va ta'lim loyihalarida Frontend dasturlash bo'yicha ishtirok etish. React va zamonaviy kutubxonalar orqali interfeyslar yaratish.",
        exp_desc2: "Veb-ilovalar ishlab chiqish, zamonaviy UI/UX komponentlar yaratish va sahifalar yuklanish tezligini oshirish.",
        exp_desc3: "Figma maketlari asosida pixel-perfect, adaptiv va animatsiyalarga boy veb-sahifalar yaratish.",
        sec_aidevix: "AIDEVIX PLATFORMASI",
        aidevix_heading: "Aidevix — Dasturlash ta'limida yangi avlod",
        aidevix_desc: "Sun'iy intellekt integratsiyalashgan platforma orqali talabalar real kod yozishni, xatolarni tahlil qilishni va professional darajaga tez yetishishni o'rganadilar.",
        sec_achievements: "YUTUQLAR VA SERTIFIKATLAR",
        achieve_heading: "Yutuqlarim & Ko'rsatkichlar",
        sec_skills: "KO'NIKMALAR & TEXNOLOGIYALAR",
        skills_heading: "Foydalanadigan Texnologiyalarim",
        sec_projects: "SARALANGAN LOYIHALAR",
        projects_heading: "Amalga Oshirilgan Ishlar",
        p1_desc: "Dasturlashni o'rganuvchilar uchun sun'iy intellektga asoslangan zamonaviy interaktiv ta'lim muhiti.",
        p2_desc: "Tezkor filterlash, savatcha holati, to'lov tizimlari va qulay boshqaruv paneliga ega zamonaviy internet-do'kon.",
        p3_desc: "Real-vaqt statistikasi, grafiklar va vazifalar boshqaruvini birlashtirgan analitika paneli.",
        sec_contact: "ALOQA VA HAMKORLIK",
        contact_heading: "Birgalikda ajoyib loyiha yarataylik!",
        contact_sub: "Yangi loyiha, frilans yoki hamkorlik takliflari bo'lsa, xabar qoldiring. Men har doim yangi va qiziqarli imkoniyatlarga ochiqman.",
        c_loc_label: "Manzil",
        f_name: "Ismingiz",
        f_email: "Email manzilingiz",
        f_message: "Xabaringiz",
        btn_send: "Xabarni yuborish",
        f_success: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanaman.",
        footer_rights: "Barcha huquqlar himoyalangan."
    },
    en: {
        nav_about: "About",
        nav_exp: "Experience",
        nav_aidevix: "Aidevix",
        nav_achievements: "Achievements",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        btn_contact_nav: "Get in Touch",
        hero_status: "Available for freelance and remote roles",
        hero_role: "Frontend Developer · 15-year-old Tech Prodigy",
        hero_desc: "Hi! I am Nodir Rimbayev, an enthusiastic 15-year-old Frontend Developer. I build modern, responsive, and intuitive web apps using React, Next.js, and TypeScript — constantly exploring modern web tech and AI.",
        hero_location: "Tashkent, Uzbekistan",
        btn_contact: "Get in Touch",
        btn_aidevix: "Go to Aidevix",
        btn_cv: "Download CV",
        sec_about: "ABOUT ME",
        about_heading: "My mission is crafting clean, modern, and high-performance web experiences",
        about_p1: "Hello! I am Nodir Rimbayev, a 15-year-old dedicated <strong>Frontend Developer</strong> passionate about modern web technologies. Despite my young age, I love converting complex ideas into clean, efficient, and scalable code.",
        about_p2: "I prioritize user experience (UX), responsive design, and performance in every project I build. I continuously sharpen my skills with React, Next.js, TypeScript, and AI integrations.",
        fact_1: "Clean, semantic and modular architecture",
        fact_2: "100% responsive across phones, tablets, and desktops",
        fact_3: "Modern UI components, REST APIs & AI integration",
        stat_age: "Years Old (Young Talent)",
        stat_exp: "Years of Coding Practice",
        stat_projects: "Completed Projects",
        stat_happy: "Passion & Drive",
        sec_exp: "EXPERIENCE",
        exp_heading: "Career Journey & Experience",
        exp_desc1: "Contributing to EdTech platforms and personal coding initiatives using React, Tailwind CSS, and modern web tooling.",
        exp_desc2: "Building responsive single page applications, interactive interfaces, and optimizing website loading performance.",
        exp_desc3: "Transforming Figma designs into pixel-perfect, accessible, and interactive web pages.",
        sec_aidevix: "AIDEVIX PLATFORM",
        aidevix_heading: "Aidevix — Next Generation Programming Education",
        aidevix_desc: "An AI-powered learning environment where students master real-world coding, error debugging, and software architecture rapidly.",
        sec_achievements: "ACHIEVEMENTS & AWARDS",
        achieve_heading: "Milestones & Achievements",
        sec_skills: "SKILLS & TECH STACK",
        skills_heading: "Technologies I Work With",
        sec_projects: "FEATURED WORK",
        projects_heading: "Selected Projects",
        p1_desc: "Next-gen AI powered interactive web programming platform for developers.",
        p2_desc: "High-performance digital marketplace with cart state, instant filters, and checkout.",
        p3_desc: "Real-time task tracking and KPI analytics dashboard with dynamic charting.",
        sec_contact: "GET IN TOUCH",
        contact_heading: "Let's build something exceptional together!",
        contact_sub: "Have a project in mind, a freelance opportunity, or just want to chat? Leave a message and I'll get back to you promptly.",
        c_loc_label: "Location",
        f_name: "Your Name",
        f_email: "Your Email",
        f_message: "Your Message",
        btn_send: "Send Message",
        f_success: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
        footer_rights: "All rights reserved."
    },
    ru: {
        nav_about: "Обо мне",
        nav_exp: "Опыт",
        nav_aidevix: "Aidevix",
        nav_achievements: "Достижения",
        nav_skills: "Навыки",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        btn_contact_nav: "Связаться",
        hero_status: "Открыт для сотрудничества и удаленной работы",
        hero_role: "Frontend разработчик · 15-летний веб-специалист",
        hero_desc: "Привет! Я Нодир Римбаев, 15-летний увлеченный Frontend разработчик. Разрабатываю современные, быстрые и удобные веб-сайты и приложения на React, Next.js и TypeScript — активно внедряю AI технологии.",
        hero_location: "Ташкент, Узбекистан",
        btn_contact: "Связаться",
        btn_aidevix: "Перейти в Aidevix",
        btn_cv: "Скачать резюме",
        sec_about: "ОБО МНЕ",
        about_heading: "Моя цель — создавать быстрые, современные и удобные веб-приложения",
        about_p1: "Здравствуйте! Я Нодир Римбаев, мне 15 лет, и я увлеченный <strong>Frontend разработчик</strong>. Несмотря на юный возраст, я с энтузиазмом превращаю сложные идеи в чистый, масштабируемый код.",
        about_p2: "В каждом проекте я уделяю внимание UX, адаптивному дизайну и скорости работы сайта. Постоянно развиваюсь в стеке React, Next.js, TypeScript и AI-инструментах.",
        fact_1: "Чистая, семантическая и модульная архитектура",
        fact_2: "Полная адаптивность под любые экраны и смартфоны",
        fact_3: "Современные компоненты, REST API и AI интеграции",
        stat_age: "Лет (Юный талант)",
        stat_exp: "Года практики кодинга",
        stat_projects: "Готовых проектов",
        stat_happy: "Энтузиазм и стремление",
        sec_exp: "ОПЫТ РАБОТЫ",
        exp_heading: "Мой опыт и карьерный путь",
        exp_desc1: "Разработка образовательных и веб-проектов на React, Next.js и Tailwind CSS.",
        exp_desc2: "Создание адаптивных интерфейсов, интерактивных компонентов и оптимизация скорости сайтов.",
        exp_desc3: "Вёрстка pixel-perfect интерфейсов по макетам Figma, интерактивные посадочные страницы.",
        sec_aidevix: "ПЛАТФОРМА AIDEVIX",
        aidevix_heading: "Aidevix — Новое поколение IT-образования",
        aidevix_desc: "Образовательная среда с искусственным интеллектом, где студенты быстро осваивают практическое программирование и архитектуру.",
        sec_achievements: "ДОСТИЖЕНИЯ И СЕРТИФИКАТЫ",
        achieve_heading: "Мои достижения",
        sec_skills: "НАВЫКИ И СТЕК",
        skills_heading: "Технологии, которые я использую",
        sec_projects: "ИЗБРАННЫЕ ПРОЕКТЫ",
        projects_heading: "Мои работы",
        p1_desc: "Современная интерактивная среда обучения программированию с поддержкой искусственного интеллекта.",
        p2_desc: "Интернет-магазин с мгновенной фильтрацией, корзиной и интеграцией платежей.",
        p3_desc: "Панель управления и аналитики в реальном времени с интерактивными графиками.",
        sec_contact: "КОНТАКТЫ",
        contact_heading: "Давайте создадим отличный проект вместе!",
        contact_sub: "Если у вас есть проект, вакансия или предложение о сотрудничестве, напишите мне. Я всегда открыт к новым возможностям.",
        c_loc_label: "Локация",
        f_name: "Ваше имя",
        f_email: "Ваш Email",
        f_message: "Ваше сообщение",
        btn_send: "Отправить сообщение",
        f_success: "Ваше сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.",
        footer_rights: "Все права защищены."
    }
};

// Tilni almashtirish funksiyasi (Language Switcher)
let currentLang = 'uz';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // data-i18n elementlarini yangilash
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Tugmalar faolligini yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.documentElement.lang = lang;
    try {
        localStorage.setItem('nodir_portfolio_lang', lang);
    } catch (e) {
        // localStorage xavfsiz o'tkazib yuboriladi
    }
}

// Barcha til tugmalariga click hodisasini ulash
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Mobil menyu boshqaruvi
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');

if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileNav.classList.toggle('open');
    });

    // Menyu bandi bosilganda mobil menyuni yopish
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('open');
        });
    });
}

// Aloqa formasi hodisasi
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Yuborilmoqda...</span>`;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            formSuccess.style.display = 'block';
            contactForm.reset();

            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 6000);
        }, 800);
    });
}

// Scroll paytida faol menyuni belgilash
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// Saqlangan tilni tiklash
document.addEventListener('DOMContentLoaded', () => {
    try {
        const savedLang = localStorage.getItem('nodir_portfolio_lang');
        if (savedLang && translations[savedLang]) {
            setLanguage(savedLang);
        }
    } catch (e) {
        // default uz
    }
});
