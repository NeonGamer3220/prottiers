const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".tabpane");

function showTab(key) {
  tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === key));
  panes.forEach(p => p.classList.toggle("show", p.id === `tab-${key}`));
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});
