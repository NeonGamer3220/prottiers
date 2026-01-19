const tabs = document.querySelectorAll(".mode");
const panes = document.querySelectorAll(".pane");

function showTab(key){
  tabs.forEach(t => {
    const on = t.dataset.tab === key;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });

  panes.forEach(p => p.classList.toggle("show", p.id === `tab-${key}`));
}

tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));
