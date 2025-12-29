const text = ["Web Developer", "AI Enthusiast", "Problem Solver"];
let index = 0;
let char = 0;

function typeEffect() {
  if (char < text[index].length) {
    document.querySelector(".typing").textContent += text[index][char];
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    document.querySelector(".typing").textContent =
      text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 200);
  }
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const typingEl = document.querySelector(".typing");
  if (typingEl) {
    typeEffect();
  }

  const el = document.getElementById("about-title");
  if (el) el.textContent = "About Me";

  /* Smooth page change (guard href) */
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href && href.includes(".html")) {
        e.preventDefault();
        document.body.classList.remove("loaded");

        setTimeout(() => {
          window.location.href = link.href;
        }, 600);
      }
    });
  });
});
function openCert(imgPath) {
  const modal = document.getElementById("cert-modal");
  const img = document.getElementById("cert-img");

  img.src = imgPath;
  modal.style.display = "flex";
}

function closeCert() {
  document.getElementById("cert-modal").style.display = "none";
}

/* Close when clicking outside image */
document.addEventListener("click", (e) => {
  const modal = document.getElementById("cert-modal");
  if (e.target === modal) {
    closeCert();
  }
});
