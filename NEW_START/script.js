/* ================= BUILD PROJECT DATA ================= */

const projects = PROJECT_FOLDERS.map(folder => {
  const title = folder
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  return {
    title,
    image: `../${folder}/preview.jpg`,
    video: `../${folder}/video.mp4`,
    link: `../${folder}/index.html`,
    description: "Click to open project"
  };
});

/* ================= ELEMENTS ================= */

const grid = document.getElementById("projectsGrid");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalMedia = document.querySelector(".modal-media");
const modalLink = document.getElementById("modalLink");
const modalClose = document.querySelector(".modal-close");

/* ================= CREATE CARDS ================= */

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" loading="lazy">
    <h3>${project.title}</h3>
  `;

  card.addEventListener("click", () => openModal(project));
  grid.appendChild(card);
});

/* ================= MODAL ================= */

function openModal(project) {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalLink.href = project.link;

  modalMedia.innerHTML = "";

  if (project.video) {
    const video = document.createElement("video");
    video.src = project.video;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    modalMedia.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = project.image;
    modalMedia.appendChild(img);
  }

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  modalMedia.innerHTML = "";
  document.body.style.overflow = "";
}

/* ================= EVENTS ================= */

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
