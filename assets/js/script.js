
const data = {
  home: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["General", "Corporate", "Startup"],
    functions: ["Overview", "Highlights", "Updates"]
  },
  about: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["Company Info", "Vision", "Team"],
    functions: ["Mission", "Leadership", "Culture"]
  },
  solutions: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["Consumer", "Financial Services", "Healthcare", "Industrial", "Technology", "Real Estate"],
    functions: ["Board Search", "CEO Search", "C-Suite", "Finance", "HR", "IT"]
  },
  recruitment: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["Public Sector", "Professional Services"],
    functions: ["Legal", "Operations", "Sales", "Strategy"]
  },
  media: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["News", "Events", "Announcements"],
    functions: ["Press Releases", "Media Kit", "Coverage"]
  },
  reports: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["Quarterly", "Annual", "Market Insights"],
    functions: ["Download", "Analytics", "Trends"]
  },
  job: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["IT", "Marketing", "Engineering"],
    functions: ["Search Jobs", "Upload Resume", "Job Alerts"]
  },
  join: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["Internal Roles", "Graduate Program"],
    functions: ["Openings", "Benefits", "Apply Now"]
  },
  contact: {
    image: "../assets/images/home-nav-image.jpg",
    industries: ["Support", "Partnerships"],
    functions: ["Call Us", "Visit Us", "Email"]
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

typeWriter();

  const counters = document.querySelectorAll('.count-animate h3');
  const cardElements = document.querySelectorAll('.count-animate');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        const counter = entry.target.querySelector('h3');
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 100);

        const updateCount = () => {
          count += increment;
          if (count > target) {
            counter.textContent = target;
          } else {
            counter.textContent = count;
            requestAnimationFrame(updateCount);
          }
        };

        updateCount();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  cardElements.forEach(el => counterObserver.observe(el));

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
          slidesToShow: 3,
          centerMode: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false
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
      infinite: true,
      autoplay:true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
