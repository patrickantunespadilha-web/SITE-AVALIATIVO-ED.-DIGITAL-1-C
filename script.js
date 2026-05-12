// ========================================
// GESTÃO DE DADOS - ARRAYS MODULARES
// ========================================
const DATA = {
  clubs: [
    {
      id: 1,
      name: "Flamengo",
      badge: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=FLA",
      colors: ["#FF0000", "#000000"],
      titles: "38 Carioca, 8 Brasileirão",
      stadium: "Maracanã"
    },
    {
      id: 2,
      name: "Palmeiras",
      badge: "https://via.placeholder.com/80x80/008000/FFFFFF?text=PAL",
      colors: ["#008000", "#FFFFFF"],
      titles: "25 Paulistão, 12 Brasileirão",
      stadium: "Allianz Parque"
    },
    {
      id: 3,
      name: "Corinthians",
      badge: "https://via.placeholder.com/80x80/000000/FFFFFF?text=COR",
      colors: ["#000000", "#FFFFFF"],
      titles: "30 Paulistão, 7 Brasileirão",
      stadium: "Neo Química Arena"
    },
    {
      id: 4,
      name: "São Paulo",
      badge: "https://via.placeholder.com/80x80/FFFFFF/000000?text=SAO",
      colors: ["#FFFFFF", "#000000"],
      titles: "25 Paulistão, 6 Brasileirão",
      stadium: "Morumbi"
    },
    {
      id: 5,
      name: "Santos",
      badge: "https://via.placeholder.com/80x80/0000FF/FFFFFF?text=SAN",
      colors: ["#0000FF", "#FFFFFF"],
      titles: "22 Paulistão, 8 Brasileirão",
      stadium: "Vila Belmiro"
    },
    {
      id: 6,
      name: "Grêmio",
      badge: "https://via.placeholder.com/80x80/0033A0/FFFFFF?text=GRE",
      colors: ["#0033A0", "#FFFFFF"],
      titles: "42 Gauchão, 3 Brasileirão",
      stadium: "Arena do Grêmio"
    }
  ],
  
  players: [
    {
      id: 1,
      name: "Neymar Jr",
      photo: "https://via.placeholder.com/120x120/FF6B35/FFFFFF?text=NEYMAR",
      position: "Atacante",
      club: "Al-Hilal",
      stats: "42 gols na temporada"
    },
    {
      id: 2,
      name: "Vinicius Jr",
      photo: "https://via.placeholder.com/120x120/FFFFFF/000000?text=VINI",
      position: "Ponta",
      club: "Real Madrid",
      stats: "24 gols e 11 assistências"
    },
    {
      id: 3,
      name: "Raphinha",
      photo: "https://via.placeholder.com/120x120/FF0000/FFFFFF?text=RAPHINHA",
      position: "Ponta",
      club: "Barcelona",
      stats: "19 gols na La Liga"
    },
    {
      id: 4,
      name: "Casemiro",
      photo: "https://via.placeholder.com/120x120/0000FF/FFFFFF?text=CASEMIRO",
      position: "Volante",
      club: "Manchester United",
      stats: "89% acerto de passes"
    }
  ],
  
  news: [
    {
      id: 1,
      title: "Flamengo contrata reforço bilionário para 2026",
      date: "10/05/2026",
      content: "O Mengão anunciou a contratação de um dos principais nomes do mercado europeu. O jogador chega com a missão de levar o clube à sua primeira Libertadores."
    },
    {
      id: 2,
      title: "Palmeiras é tricampeão da Libertadores",
      date: "08/05/2026",
      content: "Com atuação impecável de seus jovens talentos, o Verdão conquista o tricampeonato continental e se consolida como maior vencedor brasileiro da competição."
    },
    {
      id: 3,
      title: "Seleção Brasileira se prepara para Eliminatórias",
      date: "09/05/2026",
      content: "Dorival Júnior convoca 28 jogadores para os próximos jogos das Eliminatórias. Destaque para o retorno de jogadores que atuam no exterior."
    }
  ]
};

// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  initAccessibility();
  renderClubs();
  initCarousel();
  renderNews();
  initTabs();
  initScrollReveal();
  initMobileMenu();
});

// ========================================
// ACESSIBILIDADE
// ========================================
function initAccessibility() {
  const fontSmaller = document.getElementById('font-smaller');
  const fontLarger = document.getElementById('font-larger');
  const highContrast = document.getElementById('high-contrast');
  
  let fontSize = 1;
  
  fontSmaller.addEventListener('click', () => {
    fontSize = Math.max(0.8, fontSize - 0.1);
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}rem`);
  });
  
  fontLarger.addEventListener('click', () => {
    fontSize = Math.min(1.4, fontSize + 0.1);
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}rem`);
  });
  
  highContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    highContrast.setAttribute('aria-pressed', isHighContrast);
    highContrast.textContent = isHighContrast ? 'Contraste Normal' : 'Alto Contraste';
  });
}

// ========================================
// RENDERIZAÇÃO DINÂMICA - CLUBES
// ========================================
function renderClubs() {
  const container = document.getElementById('clubs-grid');
  container.innerHTML = DATA.clubs.map(club => `
    <article class="club-card" tabindex="0">
      <img src="${club.badge}" alt="Escudo do ${club.name}" class="club-badge">
      <h3>${club.name}</h3>
      <p><strong>${club.titles}</strong></p>
      <p>🏟️ ${club.stadium}</p>
    </article>
  `).join('');
}

// ========================================
// CARROSSEL DE JOGADORES
// ========================================
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  let currentIndex = 0;
  const totalSlides = DATA.players.length;
  
  // Renderiza slides
  track.innerHTML = DATA.players.map((player, index) => `
    <article class="player-card" role="group" aria-label="Jogador ${player.name}">
      <img src="${player.photo}" alt="Foto de ${player.name}" class="player-photo">
      <h3>${player.name}</h3>
      <p><strong>${player.position}</strong> - ${player.club}</p>
      <p>⚽ ${player.stats}</p>
    </article>
  `).join('');
  
  // Renderiza dots
  dotsContainer.innerHTML = DATA.players.map((_, index) => 
    `<button class="dot" data-slide="${index}" aria-label="Ir para slide ${index + 1}"></button>`
  ).join('');
  
  const dots = document.querySelectorAll('.dot');
  
  function updateCarousel() {
    const offset = -currentIndex * (300 + 24); // largura + gap
    track.style.transform = `translateX(${offset}px)`;
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
      dot.setAttribute('aria-selected', index === currentIndex);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Auto play
  setInterval(() => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);
}

// ========================================
// ACORDEÃO DE NOTÍCIAS
// ========================================
function renderNews() {
  const container = document.getElementById('news-accordion');
  container.innerHTML = DATA.news.map(news => `
    <article class="news-item">
      <div class="news-header" 
           tabindex="0" 
           role="button" 
           aria-expanded="false" 
           aria-controls="news-${news.id}">
        <h4>${news.title}</h4>
        <span>📅 ${news.date}</span>
      </div>
      <div class="news-content" id="news-${news.id}" aria-hidden="true" hidden>
        <p>${news.content}</p>
      </div>
    </article>
  `).join('');
  
  // Adiciona event listeners
  container.addEventListener('click', handleAccordion);
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAccordion(e);
    }
  });
}

function handleAccordion(e) {
  const header = e.target.closest('.news-header');
  if (!header) return;
  
  const content = header.nextElementSibling;
  const isExpanded = header.getAttribute('aria-expanded') === 'true';
  
  // Fecha todos os outros
  document.querySelectorAll('.news-header').forEach(h => {
    h.setAttribute('aria-expanded', 'false');
    const c = h.nextElementSibling;
    c.setAttribute('aria-hidden', 'true');
    c.hidden = true;
  });
  
  // Toggle atual
  if (!isExpanded) {
    header.setAttribute('aria-expanded', 'true');
    content.setAttribute('aria-hidden', 'false');
    content.hidden = false;
  }
}

// ========================================
// SISTEMA DE ABAS
// ========================================
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.closest('.tabs-container');
      const tabId = button.getAttribute('aria-controls');
      
      // Remove active de todos
      parent.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1');
      });
      
      parent.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.hidden = true;
      });
      
      // Ativa atual
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      button.setAttribute('tabindex', '0');
      document.getElementById(tabId).classList.add('active');
      document.getElementById(tabId).hidden = false;
    });
    
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
}

// ========================================
// SCROLL REVEAL
// ========================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========================================
// MENU MOBILE
// ========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', () => {
    const isActive = menuToggle.classList.contains('active');
    
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', !isActive);
  });
}

// ========================================
// UTILITÁRIOS
// ========================================
function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

// Fechar menu mobile ao clicar em link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
    document.querySelector('.menu-toggle').classList.remove('active');
  });
});
