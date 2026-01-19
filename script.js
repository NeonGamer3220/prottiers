// mode tabs
const modes = document.querySelectorAll(".mode");
modes.forEach(m => {
  m.addEventListener("click", () => {
    modes.forEach(x => x.classList.remove("mode--active"));
    m.classList.add("mode--active");
  });
});

// search filter (filters rows by name)
const input = document.getElementById("searchInput");
const rows = document.querySelectorAll(".row");

input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  rows.forEach(r => {
    const name = (r.getAttribute("data-name") || "").toLowerCase();
    r.style.display = name.includes(q) ? "" : "none";
  });
});
