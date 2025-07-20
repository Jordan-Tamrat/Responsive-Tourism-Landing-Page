
  const destinationData = {
    lalibela: {
      title: "Lalibela",
      description:
        "Famous for its 12th-century rock-hewn churches carved directly into volcanic rock. A UNESCO World Heritage site and a key pilgrimage center.",
      image: "images/lalibela.jpg",
    },
    axum: {
      title: "Axum",
      description:
        "An ancient kingdom and one of Ethiopia’s oldest cities. Known for the towering obelisks, Queen of Sheba’s palace, and Ark of the Covenant legends.",
      image: "images/axum.jpg",
    },
    simien: {
      title: "Simien Mountains",
      description:
        "A dramatic mountain range with deep valleys and high peaks. Home to rare wildlife like the Gelada baboon and Ethiopian wolf.",
      image: "images/simien.jpg",
    },
    danakil: {
      title: "Danakil Depression",
      description:
        "One of the hottest and most extreme places on Earth. Known for colorful sulfur springs, salt lakes, and the active Erta Ale volcano.",
      image: "images/danakil.jpg",
    },
  };

  const selectElement = document.getElementById("places");
  const infoContainer = document.getElementById("destination-info");

  selectElement.addEventListener("change", function () {
    const value = this.value;
    const data = destinationData[value];

    if (data) {
      infoContainer.innerHTML = `
        <div class="destination-card">
          <img src="${data.image}" alt="${data.title}" style="max-width: 100%; height: auto;" />
          <div class="destination-details">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
          </div>
        </div>
      `;
    } else {
      infoContainer.innerHTML = ""; 
    }
  });
   
    const nav = document.querySelector("nav");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

   document.getElementById("year").textContent = new Date().getFullYear();

    window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });



  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("show");

    menuToggle.innerHTML = navLinks.classList.contains("show") ? "&#10006;" : "&#9776;";
  });
  
  // Click outside to close menu
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove("show");
      menuToggle.innerHTML = "&#9776;";
    }
  });

  // Close menu when link is clicked (mobile only)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.innerHTML = "&#9776;";
    });
  });

