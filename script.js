const galleryImages = document.querySelectorAll(".gallery-img");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
galleryImages.forEach((img) => observer.observe(img));

const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");

function showModal(imageSrc, title, desc, price) {
  modalImg.src = imageSrc;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modalPrice.textContent = price;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

window.onscroll = function () {
  document.getElementById("backToTopBtn").style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
