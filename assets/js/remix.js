document.addEventListener("DOMContentLoaded", async function () {
const container = document.getElementById("remixes-list");
// ریمیکس
try {
  const remixResponse = await fetch(JsonRemix);
  const remixData = await remixResponse.json();

  // آیدی‌های انتخاب شده برای ریمیکس (اعداد)
  const selectedRemixIds = [1, 3, 5, 2]; // تغییر دهید به آیدی‌های مورد نظر

  // ایجاد کارت‌های ریمیکس بر اساس ترتیب selectedRemixIds
  const filteredRemixData = selectedRemixIds
    .map((id) => remixData.remixes.find((item) => item.id === id))
    .filter(Boolean); // فیلتر کردن مقادیر undefined

  // ایجاد کارت‌های ریمیکس
  const remixCards = filteredRemixData.map(createRemixCardTemplate).join("");
  container.innerHTML = remixCards;
} catch (error) {
  console.error("Error loading remix data:", error);
}
});