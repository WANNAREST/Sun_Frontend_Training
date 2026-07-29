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
let newsAutoTimer = null;
let isNewsAnimating = false;

const autoSlideNews = async () => {
  if (!newsTrack || isNewsAnimating) return;

  /*
   * Mobile: dùng cuộn ngang có sẵn.
   * Khi đến cuối thì quay về đầu.
   */
  if (window.innerWidth <= 720) {
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

  /*
   * Desktop: sử dụng kỹ thuật FLIP.
   * Đo vị trí cũ -> đổi DOM -> đo vị trí mới -> animate.
   */
  const cards = [...newsTrack.querySelectorAll(".news-card")];

  if (cards.length < 2) return;

  isNewsAnimating = true;

  // Ghi lại vị trí cũ
  const oldPositions = new Map();

  cards.forEach((card) => {
    oldPositions.set(card, card.getBoundingClientRect());
  });

  // Đưa tin đầu tiên xuống cuối
  newsTrack.append(cards[0]);

  // Animation từ vị trí cũ sang vị trí mới
  const animations = cards.map((card) => {
    const oldPosition = oldPositions.get(card);
    const newPosition = card.getBoundingClientRect();
    const distanceX = oldPosition.left - newPosition.left;

    return card.animate(
      [
        {
          transform: `translateX(${distanceX}px)`,
        },
        {
          transform: "translateX(0)",
        },
      ],
      {
        duration: 650,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
  });

  await Promise.all(
    animations.map((animation) =>
      animation.finished.catch(() => {}),
    ),
  );

  isNewsAnimating = false;
};
const stopAutoNews = () => {
  if (newsAutoTimer !== null) {
    clearInterval(newsAutoTimer);
    newsAutoTimer = null;
  }
};

const startAutoNews = () => {
  if (!newsTrack) return;

  stopAutoNews();

  newsAutoTimer = setInterval(() => {
    autoSlideNews();
  }, 5000);
};

newsTrack?.addEventListener("mouseenter", stopAutoNews);
newsTrack?.addEventListener("mouseleave", startAutoNews);

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

syncHeroVideo();
updateBackToTop();
startAutoNews();
