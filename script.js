const modes = document.querySelectorAll(".gamemode");

modes.forEach(m => {
  m.addEventListener("click", (e) => {
    e.preventDefault();
    modes.forEach(x => x.classList.remove("active"));
    m.classList.add("active");
  });
});
