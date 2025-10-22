// === CARGAR PROYECTOS DESDE JSON ===
fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const container = document.querySelector(".projects-grid");

    // 🎨 Paleta de colores para las tecnologías
    const colors = {
      HTML: "#E44D26",
      CSS: "#1572B6",
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      Angular: "#DD0031",
      React: "#61DAFB",
      Node: "#3C873A",
      Express: "#000000",
      MySQL: "#00758F",
      Python: "#3776AB",
      Git: "#F1502F",
    };

    projects.forEach((project) => {
      // ✅ Aquí generamos los tags con color dinámico
      const techTags = project.tech
        .map(
          (tech) =>
            `<span class="tag" style="background:${
              colors[tech] || "#666"
            }">#${tech}</span>`
        )
        .join("");

      const card = document.createElement("div");
      card.classList.add("project-card");
      card.dataset.title = project.title;
      card.dataset.description = project.description;
      card.dataset.tech = project.tech.join(", ");
      card.dataset.link = project.code;

      card.innerHTML = `
        <img src="${project.img}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">${techTags}</div>
        <div class="project-buttons">
          <a href="${project.demo}" target="_blank">Demo</a>
          <a href="${project.code}" target="_blank">Código</a>
        </div>
      `;

      container.appendChild(card);
    });

    // ✅ Activar el modal después de cargar los proyectos
    activarModal();
  })
  .catch((error) => console.error("Error al cargar los proyectos:", error));

// === FUNCIONALIDAD DEL MODAL ===
function activarModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".close");
  const title = document.getElementById("modal-title");
  const description = document.getElementById("modal-description");
  const tech = document.getElementById("modal-tech");
  const link = document.getElementById("modal-link");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      // Evita abrir el modal si se hace clic en los botones Demo o Código
      if (e.target.tagName.toLowerCase() === "a") return;

      title.textContent = card.dataset.title;
      description.textContent = card.dataset.description;
      tech.textContent = card.dataset.tech;
      link.href = card.dataset.link;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}
