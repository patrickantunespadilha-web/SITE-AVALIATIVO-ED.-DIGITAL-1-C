// --- DATABASE MOCK (Gestão de Dados) ---
const newsData = [
    { title: "Final do Campeonato", desc: "Tudo sobre o jogo decisivo de domingo." },
    { title: "Mercado da Bola", desc: "As novas contratações dos clubes europeus." },
    { title: "Tática e Análise", desc: "Como o 4-3-3 dominou a última temporada." }
];

const faqData = [
    { q: "Onde assistir aos jogos?", a: "Você pode acompanhar através dos canais parceiros e streaming oficial." },
    { q: "Como comprar ingressos?", a: "Os ingressos são vendidos exclusivamente nos sites dos clubes." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function initApp() {
    const newsGrid = document.getElementById('news-grid');
    newsData.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
        newsGrid.appendChild(card);
    });

    const faqContainer = document.getElementById('faq-container');
    faqData.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(${index})">
                    ${item.q}
                </button>
                <div class="accordion-content">
                    <p style="padding: 1rem 0;">${item.a}</p>
                </div>
            </div>
        `;
    });
    
    setupScrollReveal();
}

// --- ACESSIBILIDADE: FONTE ---
let fontSize = 100;
document.getElementById('btn-increase').addEventListener('click', () => {
    fontSize += 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
});

document.getElementById('btn-decrease').addEventListener('click', () => {
    fontSize -= 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
});

// --- ACESSIBILIDADE: CONTRASTE ---
document.getElementById('btn-
