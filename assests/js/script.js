
const data = {
    solutions: {
        image: "https://via.placeholder.com/400x300?text=Solutions",
        industries: ["Consumer", "Financial Services", "Healthcare", "Industrial", "Technology", "Real Estate"],
        functions: ["Board Search", "CEO Search", "C-Suite", "Finance", "HR", "IT"]
    },
    recruitment: {
        image: "https://via.placeholder.com/400x300?text=Recruitment",
        industries: ["Public Sector", "Professional Services"],
        functions: ["Legal", "Operations", "Sales", "Strategy"]
    }
};

const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const previewImage = document.getElementById("previewImage");
const industriesList = document.querySelector("#industries ul");
const functionsList = document.querySelector("#functions ul");

// Open menu
hamburger.onclick = () => {
    overlay.classList.add("open");
};

// Close menu
closeBtn.onclick = () => {
    overlay.classList.remove("open");
};

// Hover effect
document.querySelectorAll(".menu-left li").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const key = item.getAttribute("data-key");
        if (data[key]) {
            previewImage.src = data[key].image;

            industriesList.innerHTML = "";
            functionsList.innerHTML = "";

            data[key].industries.forEach((ind) => {
                const li = document.createElement("li");
                li.textContent = ind;
                industriesList.appendChild(li);
            });

            data[key].functions.forEach((func) => {
                const li = document.createElement("li");
                li.textContent = func;
                functionsList.appendChild(li);
            });
        } else {
            previewImage.src = "";
            industriesList.innerHTML = "";
            functionsList.innerHTML = "";
        }
    });
});
const phrases = [
    "How can we help you?",
    "Need support?",
    "Looking for a service?",
    "Have a question?",
    "Let us know what you need!"
];

const input = document.getElementById("animatedInput");
let phraseIndex = 0;
let letterIndex = 0;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    if (letterIndex <= currentPhrase.length) {
        input.placeholder = currentPhrase.substring(0, letterIndex);
        letterIndex++;
        setTimeout(typeWriter, 100); // typing speed
    } else {
        setTimeout(() => {
            letterIndex = 0;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeWriter();
        }, 1500); // wait before next phrase
    }
}

// Start the animation
typeWriter();

const counters = document.querySelectorAll(".customer-cards h3");
const animationDuration = 2000; // in ms (2 seconds)
let hasAnimated = false;

function animateCounters() {
    const startTime = performance.now();

    function update() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // 0 to 1

        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const value = Math.floor(target * progress);
            counter.textContent = value.toLocaleString();
        });

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

window.addEventListener("scroll", () => {
    const section = document.getElementById("counterSection");
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100 && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
    }
});
$(document).ready(function () {
    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
$(document).ready(function () {
    $(".media").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            centerMode: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            centerMode: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        }
      ]
    });
  });
  
  $(document).ready(function () {
    $('.slick-team').slick({
      slidesToShow: 1.2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      autoplay:true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    });
});  