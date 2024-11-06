document.addEventListener("DOMContentLoaded", async function () {
  const articContainer = document.getElementById("artic-card");

  // خواننده
  try {
    const response = await fetch(JsonArtic);
    const data = await response.json();

    document = articContainer.innerHTML = data.artic
      .map(createCardTemplate)
      .join("");
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});
