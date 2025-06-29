//navbar
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    console.log("Mobile menu clicked");
    // Mobile menu functionality would go here
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply fade-in animation to service cards
document.querySelectorAll(".card-hover").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Search functionality
const searchInput = document.querySelector(
  'input[placeholder="Want to learn?"]'
);
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log("Searching for:", searchTerm);
    // Search functionality would be implemented here
  });
}

// Enhanced button interactions
document.querySelectorAll("button, .bg-gradient-to-r").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".animate-float");
  const speed = 0.5;

  parallax.forEach((element) => {
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s ease-in-out";
});
//Courses was fantastic!

tailwind.config = {
  theme: {
    extend: {
      colors: {
        "custom-purple": "#8B5CF6",
        "custom-light-purple": "#F3F4F6",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
        "fade-in": "fadeIn 1s ease-out",
        "slide-up": "slideUp 1s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
};

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    renderCourses(filteredCourses);

    // Add a subtle animation to show results are updating
    const courseGrid = document.getElementById("courseGrid");
    courseGrid.classList.add("opacity-75");
    setTimeout(() => {
      courseGrid.classList.remove("opacity-75");
    }, 200);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderCourses();
  setupSearch();

  // Add staggered animation to cards on load
  setTimeout(() => {
    const cards = document.querySelectorAll("#courseGrid > div");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 100);
});
