document.addEventListener("DOMContentLoaded", async function () {
const articContainer = document.getElementById("artic-card");
// خواننده
try {
  const articResponse = await fetch(JsonArtic);
  const articData = await articResponse.json();

  // آیدی‌های انتخاب شده
  const selectedIds = [
    "tomaj",
    "hichkas",
    "fadaei",
    "shervin"
  ];

  // ایجاد کارت‌های آرٹیک بر اساس ترتیب selectedIds
  const filteredData = selectedIds
    .map((id) => articData.artic.find((item) => item.id === id))
    .filter(Boolean); // فیلتر کردن مقادیر undefined

  // ایجاد کارت‌های آرٹیک
  articContainer.innerHTML = filteredData.map(createCardTemplate).join("");
} catch (error) {
  console.error("Error loading artic data:", error);
}
});