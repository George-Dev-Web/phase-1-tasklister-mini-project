document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded!"); // Debugging

  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submitted!"); // Debugging

    const task = input.value.trim(); // Get user input
    if (task === "") return; // Prevent adding empty tasks

    console.log("Adding task:", task);

    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);

    input.value = ""; // Clear input field

    console.log("Updated task list:", list.innerHTML); // Debugging
  });
});
