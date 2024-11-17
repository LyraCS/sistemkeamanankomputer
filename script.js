// Toggle visibility of task content
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const taskContent = button.nextElementSibling;

    if (taskContent.style.display === "none" || !taskContent.style.display) {
      taskContent.style.display = "block";
    } else {
      taskContent.style.display = "none";
    }
  });
});
