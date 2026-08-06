const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");
const navLinks = [...document.querySelectorAll(".nav-link")];
const languageButtons = document.querySelectorAll(".language");
const desktopHeroVideo = document.querySelector(".hero-video-desktop");
const mobileHeroVideo = document.querySelector(".hero-video-mobile");
const projectCard = document.querySelector("[data-project-card]");
const projectImage = document.querySelector("[data-project-image]");
const projectClient = document.querySelector("[data-project-client]");
const projectTitle = document.querySelector("[data-project-title]");
const projectDescription = document.querySelector("[data-project-description]");
const newsTrack = document.querySelector("[data-news-track]");
const counters = document.querySelectorAll("[data-counter]");
const backToTop = document.querySelector("[data-back-to-top]");
let currentLanguage = "vi";

const uiLabels = {
  vi: { menuOpen: "Mở menu", menuClose: "Đóng menu" },
  en: { menuOpen: "Open menu", menuClose: "Close menu" },
};

const syncHeroVideo = () => {
  const useMobileVideo = window.matchMedia("(max-width: 980px)").matches;
  const activeVideo = useMobileVideo ? mobileHeroVideo : desktopHeroVideo;
  const inactiveVideo = useMobileVideo ? desktopHeroVideo : mobileHeroVideo;

  inactiveVideo?.pause();
  activeVideo?.play().catch(() => {
    // Trình duyệt có thể chặn autoplay trong một số chế độ tiết kiệm dữ liệu.
  });
};

const closeMenu = () => {
  if (!menuToggle || !navigation) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", uiLabels[currentLanguage].menuOpen);
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? uiLabels[currentLanguage].menuOpen
      : uiLabels[currentLanguage].menuClose,
  );
  navigation?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navigationObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries.find((entry) => entry.isIntersecting);
    if (!visibleSection) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${visibleSection.target.id}`,
      );
    });
  },
  { rootMargin: "-42% 0px -48% 0px" },
);

observedSections.forEach((section) => navigationObserver.observe(section));

const projects = [
  {
    vi: {
      client: "Công ty TNHH SSK",
      title: "Dự án SSK",
      description:
        "Thử thách để tiếp thêm năng lượng cho mọi người và xã hội với sports data.",
      imageAlt: "Giao diện dự án SSK",
    },
    en: {
      client: "SSK Corporation",
      title: "SSK Project",
      description: "A challenge to energize people and society through sports data.",
      imageAlt: "SSK project interface",
    },
    image: "./assets/images/projects/ssk.png",
  },
  {
    vi: {
      client: "Công ty TNHH ZENKIGEN",
      title: "Dự án HARUTAKA",
      description:
        "Nền tảng phỏng vấn trực tuyến không bị giới hạn bởi thời gian hay địa điểm.",
      imageAlt: "Giao diện dự án HARUTAKA",
    },
    en: {
      client: "ZENKIGEN Inc.",
      title: "HARUTAKA Project",
      description:
        "An online interview platform unrestricted by time or location.",
      imageAlt: "HARUTAKA project interface",
    },
    image: "./assets/images/projects/harutaka.png",
  },
  {
    vi: {
      client: "Kurashicom Inc",
      title: "Dự án KURASHICOM",
      description: "Phát triển App giúp hiện thực hóa phong cách sống theo ý muốn.",
      imageAlt: "Giao diện dự án KURASHICOM",
    },
    en: {
      client: "Kurashicom Inc.",
      title: "KURASHICOM Project",
      description: "Developing an app that helps users realize their ideal lifestyle.",
      imageAlt: "KURASHICOM project interface",
    },
    image: "./assets/images/projects/kurashicom.png",
  },
];

const translationEntries = [
  { selector: "title", en: "Sun* Inc. Careers | Digital Creative Studio" },
  { selector: ".skip-link", en: "Skip to main content" },
  {
    selector: ".nav-link",
    en: ["Home", "About us", "Projects", "Careers", "Work environment", "News"],
  },
  { selector: ".language-switcher", attribute: "aria-label", en: "Choose language" },
  { selector: "#business-title", en: "Business Areas" },
  {
    selector: ".business-copy > p",
    en: [
      'As a Digital Creative Studio, Sun* values product ownership and creative thinking in every project to deliver the most <strong>"Awesome"</strong> experiences to end users.',
      'Through our two service lines, <strong>"Creative &amp; Engineering"</strong> and <strong>"Talent Platform"</strong>, Sun* works with technology to create positive value for society.',
    ],
  },
  {
    selector: ".service-card > p:not(.service-label)",
    en: [
      "A strong team specializing in technology, design, and business.",
      "Human-resource solutions that support sustainable business growth.",
    ],
  },
  { selector: ".service-card .large-button", en: 'Learn more <span class="arrow-circle" aria-hidden="true">→</span>' },
  { selector: "#projects-title", en: "Our Projects" },
  { selector: ".stats-list dd", en: ["Partners", "Supported services"] },
  { selector: ".project-all-button", en: 'View all projects <span class="arrow-circle" aria-hidden="true">→</span>' },
  { selector: ".project-showcase .slider-controls", attribute: "aria-label", en: "Project controls" },
  { selector: "[data-project-prev]", attribute: "aria-label", en: "Previous project" },
  { selector: "[data-project-next]", attribute: "aria-label", en: "Next project" },
  { selector: "#careers-title", en: "Career Opportunities" },
  { selector: ".careers-content > p:nth-of-type(3)", en: 'Sun* is always looking for people who embrace challenges and create "Awesome" value.' },
  { selector: ".careers-content > p:nth-of-type(4)", en: "Become part of Sun* today." },
  { selector: ".careers-button", en: 'Join the Sun* team <span class="arrow-circle" aria-hidden="true">→</span>' },
  { selector: "#environment-title", en: "Work Environment" },
  {
    selector: ".value-list li > span:last-child",
    en: [
      "#ActiveChallenge: Proactively create continuous challenges for yourself.",
      "#ActiveLearn: Learn in an organization with the environment, opportunities, and capabilities needed for growth.",
      "#ActiveJoy: Thrive in a people-centered culture that promotes happiness for everyone.",
    ],
  },
  { selector: ".environment-button", en: 'View details <span class="arrow-circle" aria-hidden="true">→</span>' },
  { selector: "#news-title", en: "Culture - Events" },
  { selector: ".news .slider-controls", attribute: "aria-label", en: "News controls" },
  { selector: "[data-news-prev]", attribute: "aria-label", en: "Previous article" },
  { selector: "[data-news-next]", attribute: "aria-label", en: "Next article" },
  { selector: '[data-news-id="insurance"] h3', en: "Insurance SaaS Development Support: Golang and VueJS help Sunners push beyond their limits" },
  { selector: '[data-news-id="insurance"] > p', en: 'Difficult challenges are opportunities to master new technology, improve quality, and create "Awesome" value for clients...' },
  { selector: '[data-news-id="learning"] h3', en: "Six months into Sun*'s continuous learning and practice strategy: what have we achieved?" },
  { selector: '[data-news-id="learning"] > p', en: 'Building a strong learning culture and becoming a true "Learning Organization"...' },
  { selector: '[data-news-id="k8s"] h3', en: "Introducing the K8S server that empowers CEVs to build internal projects" },
  { selector: '[data-news-id="k8s"] > p', en: "In just two months, IFU's K8S server project team successfully released the platform..." },
  { selector: '[data-news-id="cka"] h3', en: 'Conquering CKA 2024 with Huu Kim (R&D): "Intense and full of hard-earned lessons"' },
  { selector: '[data-news-id="cka"] > p', en: "Sunner Huu Kim (R&D) recently completed his CKA certification journey in 2024..." },
  { selector: ".news-card .detail-link", en: 'View details <span class="arrow-circle" aria-hidden="true">→</span>' },
  { selector: ".news-more .large-button", en: 'View more news <span class="arrow-circle" aria-hidden="true">→</span>' },
  { selector: ".footer-grid h2", en: ["Who we are", "What we do", "News & updates"] },
  {
    selector: ".footer-grid nav li a",
    en: [
      "Vision and mission", "Core values", "Meaning of Sun*", "Creative & Engineering",
      "Talent Platform", "Our projects", "Culture - Events", "Careers", "Benefits policy",
    ],
  },
  { selector: ".footer-contact h2", en: '<span aria-hidden="true"></span>Contact' },
  { selector: ".footer-contact address a:first-child", en: "Phone: 84-24-3795-5417" },
  { selector: ".footer-office h2", en: '<span aria-hidden="true"></span>Offices' },
  {
    selector: ".footer-office p",
    en: [
      "13F Keangnam Hanoi Landmark Tower, E6 Cau Giay New Urban Area, Yen Hoa Ward, Hanoi, Vietnam.",
      "4F, 16 Ly Thuong Kiet Street, Hai Chau Ward, Da Nang, Vietnam.",
      "9F and 10F, L’Mak Long Tower, 101-103 Nguyen Cuu Van Street, Gia Dinh Ward, Ho Chi Minh City, Vietnam.",
      "Tokyo Office - Cebu Office - Phnom Penh Office",
    ],
  },
  {
    selector: ".legal-copy p",
    en: [
      "@ 2021 Sun-asterisk. All rights reserved.",
      "Enterprise Registration Certificate No. 0106045931, first issued by the Hanoi DPI on October 29, 2012.",
      "Employment Service License No. 03/2022, first issued by the Hanoi DOLISA on January 10, 2022.",
      "Legal representative: KOBAYASHI TAIHEI - General Director.",
    ],
  },
  { selector: ".social-links", attribute: "aria-label", en: "Social networks" },
  { selector: ".sun-news", attribute: "aria-label", en: "Open SunNews in a new tab" },
  { selector: ".back-to-top", attribute: "aria-label", en: "Back to top" },
];

translationEntries.forEach((entry) => {
  entry.elements = [...document.querySelectorAll(entry.selector)];
  entry.vi = entry.elements.map((element) =>
    entry.attribute ? element.getAttribute(entry.attribute) : element.innerHTML,
  );
});

let currentProject = 0;

const renderProject = () => {
  const project = projects[currentProject];
  const projectCopy = project[currentLanguage];
  if (!projectCard || !projectImage) return;

  projectCard.classList.add("is-changing");
  projectImage.src = project.image;
  projectImage.alt = projectCopy.imageAlt;
  projectClient.textContent = projectCopy.client;
  projectTitle.textContent = projectCopy.title;
  projectDescription.textContent = projectCopy.description;

  projectImage.addEventListener(
    "load",
    () => projectCard.classList.remove("is-changing"),
    { once: true },
  );

  if (projectImage.complete) {
    projectCard.classList.remove("is-changing");
  }
};

document.querySelector("[data-project-prev]")?.addEventListener("click", () => {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  renderProject();
});

document.querySelector("[data-project-next]")?.addEventListener("click", () => {
  currentProject = (currentProject + 1) % projects.length;
  renderProject();
});

const scrollNews = (direction) => {
  if (!newsTrack) return;

  if (window.innerWidth > 980) {
    animateDesktopNews(direction);
    return;
  }

  const firstCard = newsTrack.querySelector(".news-card");
  const gap = Number.parseFloat(getComputedStyle(newsTrack).columnGap) || 0;
  const distance = (firstCard?.getBoundingClientRect().width || 0) + gap;

  newsTrack.scrollBy({ left: distance * direction, behavior: "smooth" });
};

document
  .querySelector("[data-news-prev]")
  ?.addEventListener("click", () => scrollNews(-1));

document
  .querySelector("[data-news-next]")
  ?.addEventListener("click", () => scrollNews(1));
let newsAutoTimer = null;
let isNewsAnimating = false;

const animateDesktopNews = async (direction) => {
  if (!newsTrack || isNewsAnimating) return;

  const cards = [...newsTrack.querySelectorAll(".news-card")];

  if (cards.length < 2) return;

  isNewsAnimating = true;
  const oldPositions = new Map();
  const movedCard = direction > 0 ? cards[0] : cards[cards.length - 1];
  const gap = Number.parseFloat(getComputedStyle(newsTrack).columnGap) || 0;
  const step = cards[0].getBoundingClientRect().width + gap;

  cards.forEach((card) => {
    oldPositions.set(card, card.getBoundingClientRect());
  });

  if (direction > 0) {
    newsTrack.append(cards[0]);
  } else {
    newsTrack.prepend(cards[cards.length - 1]);
  }

  const animations = cards.map((card) => {
    const oldPosition = oldPositions.get(card);
    const newPosition = card.getBoundingClientRect();
    const distanceX =
      card === movedCard
        ? direction > 0
          ? step
          : -step
        : oldPosition.left - newPosition.left;

    return card.animate(
      [
        { transform: `translateX(${distanceX}px)` },
        { transform: "translateX(0)" },
      ],
      {
        duration: 650,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
  });

  await Promise.all(
    animations.map((animation) => animation.finished.catch(() => {})),
  );

  isNewsAnimating = false;
};

const applyLanguage = (language) => {
  currentLanguage = language === "en" ? "en" : "vi";
  document.documentElement.lang = currentLanguage;

  translationEntries.forEach((entry) => {
    entry.elements.forEach((element, index) => {
      const englishValue = Array.isArray(entry.en) ? entry.en[index] : entry.en;
      const value = currentLanguage === "en" ? englishValue : entry.vi[index];

      if (entry.attribute) {
        element.setAttribute(entry.attribute, value);
      } else {
        element.innerHTML = value;
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (menuToggle) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? uiLabels[currentLanguage].menuClose
        : uiLabels[currentLanguage].menuOpen,
    );
  }

  renderProject();

  try {
    localStorage.setItem("sun-language", currentLanguage);
  } catch {
    // Một số trình duyệt chặn localStorage khi trang được mở trực tiếp từ file.
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

const autoSlideNews = () => {
  if (!newsTrack || isNewsAnimating) return;

  /*
   * Mobile: dùng cuộn ngang có sẵn.
   * Khi đến cuối thì quay về đầu.
   */
  if (window.innerWidth <= 980) {
    const firstCard = newsTrack.querySelector(".news-card");
    if (!firstCard) return;

    const gap =
      Number.parseFloat(getComputedStyle(newsTrack).columnGap) || 0;

    const distance =
      firstCard.getBoundingClientRect().width + gap;

    const reachedEnd =
      newsTrack.scrollLeft + newsTrack.clientWidth >=
      newsTrack.scrollWidth - 2;

    newsTrack.scrollTo({
      left: reachedEnd ? 0 : newsTrack.scrollLeft + distance,
      behavior: "smooth",
    });

    return;
  }

  // Tự động đưa thẻ đầu xuống cuối để nội dung trượt sang hướng tiếp theo.
  animateDesktopNews(1);
};
const stopAutoNews = () => {
  if (newsAutoTimer !== null) {
    clearInterval(newsAutoTimer);
    newsAutoTimer = null;
  }
};

const startAutoNews = () => {
  if (
    !newsTrack ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  stopAutoNews();

  newsAutoTimer = setInterval(() => {
    autoSlideNews();
  }, 5000);
};

newsTrack?.addEventListener("mouseenter", stopAutoNews);
newsTrack?.addEventListener("mouseleave", startAutoNews);
newsTrack?.addEventListener("focusin", stopAutoNews);
newsTrack?.addEventListener("focusout", startAutoNews);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAutoNews();
  } else {
    startAutoNews();
  }
});


const counterAnimations = new WeakMap();
const animateCounter = (counter) => {
  // Hủy lượt đếm cũ nếu nó vẫn đang chạy
  const previousAnimation = counterAnimations.get(counter);

  if (previousAnimation) {
    cancelAnimationFrame(previousAnimation);
  }

  const target = Number(counter.dataset.counter);
  const step = Math.max(1, Number(counter.dataset.step) || 1);
  const duration = Math.max(
    0,
    Number(counter.dataset.duration) || 3000,
  );

  counter.textContent = "0";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counter.textContent = String(target);
    return;
  }

  const totalSteps = Math.ceil(target / step);
  const stepDuration = duration / totalSteps;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;

    const completedSteps = Math.min(
      Math.floor(elapsed / stepDuration),
      totalSteps,
    );

    const currentValue = Math.min(completedSteps * step, target);

    counter.textContent = String(currentValue);

    if (currentValue < target) {
      const animationId = requestAnimationFrame(update);
      counterAnimations.set(counter, animationId);
    } else {
      counterAnimations.delete(counter);
    }
  };

  const animationId = requestAnimationFrame(update);
  counterAnimations.set(counter, animationId);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Reset rồi đếm lại mỗi lần số xuất hiện trong màn hình
      entry.target.textContent = "0";
      animateCounter(entry.target);
    });
  },
  {
    threshold: 0.4,
  },
);

counters.forEach((counter) => {
  counter.textContent = "0";
  counterObserver.observe(counter);
});

const updateBackToTop = () => {
  backToTop?.classList.toggle("is-visible", window.scrollY > 700);
};

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTop, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
  syncHeroVideo();
});

let savedLanguage = "vi";

try {
  savedLanguage = localStorage.getItem("sun-language") || "vi";
} catch {
  // Giữ tiếng Việt nếu trình duyệt không cho phép truy cập localStorage.
}

applyLanguage(savedLanguage);
syncHeroVideo();
updateBackToTop();
startAutoNews();
