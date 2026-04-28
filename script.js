// DATA SETS - Centralização de conteúdo
const NEWS_DATA = [
    { title: "Final da Champions", desc: "Tudo pronto para o confronto em Londres." },
    { title: "Mercado da Bola", desc: "Novas contratações agitam o campeonato brasileiro." },
    { title: "Seleção Feminina", desc: "Preparação intensiva para as Olimpíadas." }
];

const FAQS = [
    { q: "Como comprar ingressos?", a: "Através do portal oficial de cada clube ou federação." },
    { q: "Quais são as regras do VAR?", a: "O VAR atua em lances de gol, pênalti, cartão vermelho direto e erro de identidade." }
];

// RENDERIZAÇÃO DINÂMICA
function initApp() {
    renderNews();
    renderFaqs();
    setupCarousel();
    setupScrollReveal();
}

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = NEWS_DATA.map(item => `
        <article class="news-card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');
}

function renderFaqs() {
    const container = document.getElementById('faq-container');
    container.innerHTML = FAQS.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                ${item.q}
            </button>
            <div class="accordion-content" style="display:none; padding: 1rem;">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// ACESSIBILIDADE: CONTROLE DE FONTE
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

// ACESSIBILIDADE: ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// COMPONENTE: ACORDEÃO
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    
    element.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
}

// COMPONENTE: CARROSSEL SIMPLES
let currentSlide = 0;
function setupCarousel() {
    const stadiums = ["Maracanã", "Wembley", "Santiago Bernabéu"];
    const track = document.getElementById('stadium-carousel');
    
    track.innerHTML = stadiums.map(s => `
        <div class="carousel-item"><h3>${s}</h3></div>
    `).join('');

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % stadiums.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + stadiums.length) % stadiums.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

// UX: SCROLL REVEAL
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

window.onload = initApp;
