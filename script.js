const panels = document.querySelectorAll(".panel");

// QuerySelectorAll Gives a node list of all the panels
// And We can loop through it

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
