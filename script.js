const translations = {
  ru: {
    "menu.about": "Обо мне",
    "menu.focus": "Фокус",
    "menu.stack": "Стек",
    "menu.projects": "Проекты",
    "menu.experience": "Опыт",
    "hero.kicker": "Python-first • Web • Telegram • Infra",
    "hero.title": "Алексей (utwoa)",
    "hero.text": "Я строю проекты на стыке backend, веба и ИИ: от Telegram mini-app и API до деплоя и поддержки в проде.",
    "about.title": "Обо мне",
    "about.subtitle": "Кратко о профиле",
    "about.intro": "Алексей (utwoa), студент РТУ МИРЭА по направлению «Искусственный интеллект и анализ данных». Фокус: backend-разработка, автоматизация и развитие веб-продуктов.",
    "about.profile": "ИИ использую в прикладных сценариях: аналитика, прототипирование и оптимизация процессов. Инфраструктура: VPS, WireGuard/VLESS, redsocks, локальные VPN-контуры и эксплуатация серверной среды. Основной язык: Python; дополнительный стек: Java, C, C++ и C#.",
    "stats.reposTitle": "Свежие репозитории",
    "stats.reposText": "Акцент на активных проектах 2025-2026.",
    "stats.botsTitle": "Боты и mini-app",
    "stats.botsText": "Telegram-решения: basket, tournament, red-green, more-stars.",
    "stats.communityTitle": "Хакатоны и комьюнити",
    "stats.communityText": "Хакатоны, акселераторы и практический опыт сисадмина в реальных задачах.",
    "focus.title": "Текущий фокус",
    "focus.subtitle": "Что делаю прямо сейчас",
    "focus.langoai": "Мобильный продукт во Flutter, развитие идеи и UX-сценариев.",
    "focus.aguide": "unlimy: Telegram-бот и mini-app для приватного доступа к онлайн-сервисам.",
    "focus.moreStars": "Связка frontend + backend и mini-app в Telegram.",
    "focus.opsTitle": "Deploy & Ops",
    "focus.opsText": "Docker, Nginx/Uvicorn, CI/CD, плюс системное администрирование и сетевые задачи: VPS, WireGuard, VLESS, redsocks и локальные VPN.",
    "proof.title": "Proof",
    "proof.subtitle": "Публичные метрики и инженерная активность",
    "proof.reposLabel": "Публичные репозитории",
    "proof.activeLabel": "Активные проекты (90д)",
    "proof.langsLabel": "Активные технологии",
    "proof.integrationsLabel": "Интеграции / платформы",
    "proof.uptimeLabel": "Uptime/CD подход",
    "stack.title": "Технический стек",
    "stack.subtitle": "В формате git-веток и коммитов",
    "stack.treeCaption": "Каждая ветка отражает отдельное рабочее направление.",
    "stack.nodeMain": "main: core/python",
    "stack.nodeFrontend": "feat/frontend",
    "stack.nodeBackend": "feat/backend",
    "stack.nodeMl": "feat/ml-ai",
    "stack.nodeData": "feat/data",
    "stack.nodeDevops": "feat/devops",
    "stack.nodeRelease": "release/fullstack",
    "stack.tipMain": "Python core, архитектура API и базовая логика проектов.",
    "stack.tipFrontend": "HTML5, CSS3, JavaScript/TypeScript, адаптивная и кроссбраузерная верстка.",
    "stack.tipBackend": "FastAPI, Django, Flask, REST API и сервисные интеграции.",
    "stack.tipMl": "NumPy, Pandas, scikit-learn, feature engineering и оценка моделей.",
    "stack.tipData": "SQL, PostgreSQL, SQLite, Redis, ETL-подход и очистка данных.",
    "stack.tipDevops": "Linux, Docker, Nginx, CI/CD, WireGuard, VLESS и эксплуатация VPS.",
    "stack.tipRelease": "Интегрированный full-cycle: frontend, backend, ML и инфраструктура.",
    "stack.frontend": "Frontend",
    "stack.frontendText": "Интерфейсы, адаптив и клиентская логика.",
    "stack.backend": "Backend",
    "stack.backendText": "API, сервисная логика и интеграции.",
    "stack.ml": "ML / AI",
    "stack.mlText": "Прикладное ML: анализ, обучение, оценка моделей.",
    "stack.data": "Data",
    "stack.dataText": "Хранение, структурирование и подготовка данных.",
    "stack.devops": "DevOps / Infrastructure",
    "stack.devopsText": "Деплой, серверы, VPN и сопровождение.",
    "stack.extra": "Additional",
    "stack.extraText": "Дополнительные языки и платформы.",
    "projects.title": "Свежие репозитории",
    "projects.subtitle": "Приоритет на новые и активные",
    "projects.updatedNow": "Обновлено недавно",
    "projects.dataPrep": "Подготовка и структурирование данных в практических сценариях Python.",
    "projects.asic": "Веб-интерфейс контроля RPi/ASIC через WireGuard VPN и локальные VPN-сценарии.",
    "projects.ml": "Материалы и эксперименты по машинному обучению.",
    "projects.front": "UI-слой проекта More Stars.",
    "projects.back": "Серверная логика проекта More Stars.",
    "projects.aguide": "unlimy: Telegram-бот и mini-app с акцентом на стабильный приватный доступ.",
    "projects.more": "Смотреть все репозитории на GitHub",
    "telegram.title": "Telegram-продукты",
    "telegram.subtitle": "Боты и mini-app",
    "telegram.fire": "бот огонек",
    "experience.title": "Опыт и движение",
    "experience.subtitle": "Не только код, но и продуктовая среда",
    "experience.hackathonsTitle": "Хакатоны и продуктовые интенсивы",
    "experience.hackathonsText": "Регулярно участвую в хакатонах, продуктоновых форматах и инженерных спринтах.",
    "experience.accelTitle": "Акселераторы и комьюнити",
    "experience.accelText": "Работа в среде быстрых проверок гипотез, коммуникация с командами и экспертами.",
    "experience.ownTitle": "Собственные проекты",
    "experience.ownText": "От мобильного приложения langoai до веб-сервисов и автоматизации через Telegram.",
    "experience.sysadminTitle": "Сисадмин и сетевой опыт",
    "experience.sysadminText": "Настраиваю VPS и VPN-инфраструктуру: WireGuard, VLESS, redsocks, локальные VPN и эксплуатация серверов.",
    "contacts.title": "Контакты",
    "contacts.text": "Если нужен разработчик под продуктовые задачи, пиши.",
    "footer.note": "Сделано как персональная витрина-портфолио"
  },
  en: {
    "menu.about": "About",
    "menu.focus": "Focus",
    "menu.stack": "Stack",
    "menu.projects": "Projects",
    "menu.experience": "Experience",
    "hero.kicker": "Python-first • Web • Telegram • Infra",
    "hero.title": "Alexey (utwoa)",
    "hero.text": "I build projects at the intersection of backend, web, and AI: from Telegram mini-apps and APIs to production deployment and support.",
    "about.title": "About Me",
    "about.subtitle": "Profile Summary",
    "about.intro": "Alexey (utwoa), RTU MIREA student in Artificial Intelligence and Data Analysis. Focus: backend engineering, automation, and web product development.",
    "about.profile": "I use AI in practical workflows: analytics, prototyping, and process optimization. Infrastructure scope includes VPS, WireGuard/VLESS, redsocks, local VPN topologies, and server operations. Primary language: Python; additional stack: Java, C, C++, and C#.",
    "stats.reposTitle": "Recent repositories",
    "stats.reposText": "Focused on active 2025-2026 projects.",
    "stats.botsTitle": "Bots and mini-apps",
    "stats.botsText": "Telegram products: basket, tournament, red-green, more-stars.",
    "stats.communityTitle": "Hackathons and community",
    "stats.communityText": "Hackathons, accelerators, and hands-on sysadmin experience in real tasks.",
    "focus.title": "Current focus",
    "focus.subtitle": "What I am building now",
    "focus.langoai": "Mobile product in Flutter with active idea and UX iteration.",
    "focus.aguide": "unlimy: Telegram bot and mini-app for private access to online services.",
    "focus.moreStars": "Frontend + backend bundle with Telegram mini-app integration.",
    "focus.opsTitle": "Deploy & Ops",
    "focus.opsText": "Docker, Nginx/Uvicorn, CI/CD, plus sysadmin and networking tasks: VPS, WireGuard, VLESS, redsocks, and local VPN flows.",
    "proof.title": "Proof",
    "proof.subtitle": "Public metrics and engineering activity",
    "proof.reposLabel": "Public repositories",
    "proof.activeLabel": "Active projects (90d)",
    "proof.langsLabel": "Active technologies",
    "proof.integrationsLabel": "Integrations / platforms",
    "proof.uptimeLabel": "Uptime/CD approach",
    "stack.title": "Tech stack",
    "stack.subtitle": "Visualized as git branches and commits",
    "stack.treeCaption": "Each branch represents a practical specialization track.",
    "stack.nodeMain": "main: core/python",
    "stack.nodeFrontend": "feat/frontend",
    "stack.nodeBackend": "feat/backend",
    "stack.nodeMl": "feat/ml-ai",
    "stack.nodeData": "feat/data",
    "stack.nodeDevops": "feat/devops",
    "stack.nodeRelease": "release/fullstack",
    "stack.tipMain": "Python core, API architecture, and project foundation.",
    "stack.tipFrontend": "HTML5, CSS3, JavaScript/TypeScript, responsive and cross-browser UI.",
    "stack.tipBackend": "FastAPI, Django, Flask, REST API, and service integrations.",
    "stack.tipMl": "NumPy, Pandas, scikit-learn, feature engineering, and model evaluation.",
    "stack.tipData": "SQL, PostgreSQL, SQLite, Redis, ETL patterns, and data cleaning.",
    "stack.tipDevops": "Linux, Docker, Nginx, CI/CD, WireGuard, VLESS, and VPS operations.",
    "stack.tipRelease": "Integrated full-cycle delivery: frontend, backend, ML, and infrastructure.",
    "stack.frontend": "Frontend",
    "stack.frontendText": "UI engineering, responsive layout, and client-side logic.",
    "stack.backend": "Backend",
    "stack.backendText": "API design, service logic, and integrations.",
    "stack.ml": "ML / AI",
    "stack.mlText": "Applied ML: analysis, model training, and evaluation.",
    "stack.data": "Data",
    "stack.dataText": "Storage, structuring, and preparation of datasets.",
    "stack.devops": "DevOps / Infrastructure",
    "stack.devopsText": "Deployment, servers, VPN networking, and operations.",
    "stack.extra": "Additional",
    "stack.extraText": "Additional languages and platform experience.",
    "projects.title": "Recent repositories",
    "projects.subtitle": "Priority on newer and active work",
    "projects.updatedNow": "Recently updated",
    "projects.dataPrep": "Data preprocessing and structuring in practical Python workflows.",
    "projects.asic": "Web dashboard for RPi/ASIC control over WireGuard VPN with local VPN workflows.",
    "projects.ml": "Machine learning notes and experiments.",
    "projects.front": "UI layer of the More Stars project.",
    "projects.back": "Server-side logic for the More Stars project.",
    "projects.aguide": "unlimy: Telegram bot and mini-app focused on stable private access.",
    "projects.more": "View all repositories on GitHub",
    "telegram.title": "Telegram products",
    "telegram.subtitle": "Bots and mini-apps",
    "telegram.fire": "fire streak bot",
    "experience.title": "Experience and momentum",
    "experience.subtitle": "Beyond coding: product environment and growth",
    "experience.hackathonsTitle": "Hackathons and product intensives",
    "experience.hackathonsText": "Regular participation in hackathons, product-oriented formats, and engineering sprints.",
    "experience.accelTitle": "Accelerators and community",
    "experience.accelText": "Fast hypothesis testing environment with cross-team communication.",
    "experience.ownTitle": "Own products",
    "experience.ownText": "From the mobile app langoai to web services and Telegram automation.",
    "experience.sysadminTitle": "Sysadmin and networking experience",
    "experience.sysadminText": "I configure VPS and VPN infrastructure: WireGuard, VLESS, redsocks, local VPN setups, and server operations.",
    "contacts.title": "Contacts",
    "contacts.text": "If you need a developer for product-focused tasks, message me.",
    "footer.note": "Built as a personal showcase portfolio"
  }
};

const root = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const storageKey = "utwoa-site-lang";
const githubUser = "UtwoA";
let currentLang = "ru";

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ru;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
  });

  root.lang = lang;
  localStorage.setItem(storageKey, lang);
  currentLang = lang;
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const preferredLang = localStorage.getItem(storageKey);
if (preferredLang && translations[preferredLang]) {
  applyLanguage(preferredLang);
} else {
  applyLanguage("ru");
}

document.getElementById("year").textContent = new Date().getFullYear();

function formatDate(dateString, lang) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  return new Intl.DateTimeFormat(lang === "ru" ? "ru-RU" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function setMetric(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function getLanguageCount(repos) {
  const set = new Set();
  repos.forEach((repo) => {
    if (repo.language) set.add(repo.language);
  });
  return set.size;
}

function getActiveReposCount(repos) {
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 90);
  return repos.filter((repo) => new Date(repo.updated_at) >= limitDate).length;
}

async function loadGithubData() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`);
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }
    const repos = await response.json();

    setMetric("metric-public-repos", repos.length);
    setMetric("metric-active-repos", getActiveReposCount(repos));
    setMetric("metric-langs", getLanguageCount(repos));
  } catch (error) {
    console.error(error);
  }
}

loadGithubData();
