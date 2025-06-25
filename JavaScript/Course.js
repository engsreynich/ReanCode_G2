// Course data
const courses = [
  {
    id: 1,
    title: "Standard Five",
    category: "Math",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.8,
    reviews: 324,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Standard Five",
    category: "English",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.9,
    reviews: 256,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Standard Five",
    category: "Science",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.7,
    reviews: 189,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 4,
    title: "Standard Five",
    category: "History",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.6,
    reviews: 298,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 5,
    title: "Standard Five",
    category: "Geography",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.8,
    reviews: 234,
    price: "$45",
    badge: "FREE",
    badgeColor: "bg-blue-500",
  },
  {
    id: 6,
    title: "Standard Five",
    category: "Physics",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.9,
    reviews: 345,
    price: "$45",
    badge: "FREE",
    badgeColor: "bg-blue-500",
  },
  {
    id: 7,
    title: "Standard Five",
    category: "Chemistry",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.7,
    reviews: 267,
    price: "$45",
    badge: "FREE",
    badgeColor: "bg-blue-500",
  },
  {
    id: 8,
    title: "Standard Five",
    category: "Biology",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.8,
    reviews: 198,
    price: "$45",
    badge: "FREE",
    badgeColor: "bg-blue-500",
  },
  {
    id: 9,
    title: "Standard Five",
    category: "Art",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.6,
    reviews: 156,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 10,
    title: "Standard Five",
    category: "Music",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.9,
    reviews: 234,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 11,
    title: "Standard Five",
    category: "PE",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.7,
    reviews: 289,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
  {
    id: 12,
    title: "Standard Five",
    category: "IT",
    description:
      "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
    rating: 4.8,
    reviews: 312,
    price: "$45",
    badge: "BEST",
    badgeColor: "bg-green-500",
  },
];

// Generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="text-yellow-400">★</span>';
  }

  if (hasHalfStar) {
    starsHTML += '<span class="text-yellow-400">☆</span>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="text-gray-300">★</span>';
  }

  return starsHTML;
}

// Create course card HTML
function createCourseCard(course) {
  return `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                    <div class="relative">
                        <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-300">
                            <div class="text-center text-white">
                                <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-30 transition-all duration-300">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div class="text-sm font-medium opacity-90">Learning Platform</div>
                            </div>
                        </div>
                        <div class="absolute top-3 right-3">
                            <span class="${
                              course.badgeColor
                            } text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                                ${course.badge}
                            </span>
                        </div>
                    </div>
                    
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">${
                              course.title
                            }</h3>
                            <span class="text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full text-sm">${
                              course.category
                            }</span>
                        </div>
                        
                        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                            ${course.description}
                        </p>
                        
                        <div class="flex items-center mb-4">
                            <div class="flex items-center mr-2">
                                ${generateStars(course.rating)}
                            </div>
                            <span class="text-sm text-gray-600 font-medium">${
                              course.rating
                            }</span>
                            <span class="text-sm text-gray-400 ml-1">(${
                              course.reviews
                            })</span>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-purple-600">${
                              course.price
                            }</span>
                            <button class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                                Enroll
                            </button>
                        </div>
                    </div>
                </div>
            `;
}

// Render courses
function renderCourses(coursesToRender = courses) {
  const courseGrid = document.getElementById("courseGrid");
  courseGrid.innerHTML = coursesToRender
    .map((course) => createCourseCard(course))
    .join("");
}

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
