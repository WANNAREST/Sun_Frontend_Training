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

const syncHeroVideo = () => {
  const useMobileVideo = window.matchMedia("(max-width: 720px)").matches;
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
  menuToggle.setAttribute("aria-label", "Mở menu");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Mở menu" : "Đóng menu");
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
  });
});

const projects = [
  {
    client: "Công ty TNHH SSK",
    title: "Dự án SSK",
    description:
      "Thử thách để tiếp thêm năng lượng cho mọi người và xã hội với sports data.",
    image: "./assets/images/projects/ssk.png",
    imageAlt: "Giao diện dự án SSK",
  },
  {
    client: "Công ty TNHH ZENKIGEN",
    title: "Dự án HARUTAKA",
    description:
      "Nền tảng phỏng vấn trực tuyến không bị giới hạn bởi thời gian hay địa điểm.",
    image: "./assets/images/projects/harutaka.png",
    imageAlt: "Giao diện dự án HARUTAKA",
  },
  {
    client: "Kurashicom Inc",
    title: "Dự án KURASHICOM",
    description: "Phát triển App giúp hiện thực hóa phong cách sống theo ý muốn.",
    image: "./assets/images/projects/kurashicom.png",
    imageAlt: "Giao diện dự án KURASHICOM",
  },
];

let currentProject = 0;

const renderProject = () => {
  const project = projects[currentProject];
  if (!projectCard || !projectImage) return;

  projectCard.classList.add("is-changing");
  projectImage.src = project.image;
  projectImage.alt = project.imageAlt;
  projectClient.textContent = project.client;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;

  projectImage.addEventListener(
    "load",
    () => projectCard.classList.remove("is-changing"),
    { once: true },
  );
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

  if (window.innerWidth > 720) {
    const cards = newsTrack.querySelectorAll(".news-card");

    if (direction > 0) {
      newsTrack.append(cards[0]);
    } else {
      newsTrack.prepend(cards[cards.length - 1]);
    }

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

const animateCounter = (counter) => {
  const target = Number(counter.dataset.counter);
  const step = Math.max(1, Number(counter.dataset.step) || 1);
  const duration = Math.max(0, Number(counter.dataset.duration) || 3000);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counter.textContent = target.toLocaleString("vi-VN");
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

    counter.textContent = currentValue.toLocaleString("vi-VN");

    if (currentValue < target) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.7 },
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

syncHeroVideo();
updateBackToTop();
