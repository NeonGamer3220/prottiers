const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".tabpane");

function showTab(key) {
  tabs.forEach(t => {
    const isActive = t.dataset.tab === key;
    t.classList.toggle("active", isActive);
    t.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panes.forEach(p => {
    p.classList.toggle("show", p.id === `tab-${key}`);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});
