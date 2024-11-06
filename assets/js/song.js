document.addEventListener("DOMContentLoaded", async function () {
const song = document.getElementById("song-list");
// اهنگ
try {
  const songResponse = await fetch(JsonSong);
  const songData = await songResponse.json();

  // آیدی‌های انتخاب شده برای آهنگ‌ها
  const selectedSongIds = [1, 10, 5, 9]; // تغییر دهید به آیدی‌های مورد نظر

  // ایجاد آرایه‌ای از آهنگ‌های انتخاب شده بر اساس آیدی‌ها
  const filteredSongs = selectedSongIds
    .map((id) => {
      // جستجو در تمامی آهنگ‌ها
      return Object.values(songData)
        .flatMap((artist) => artist.songs) // جمع آوری تمام آهنگ‌ها
        .find((song) => song.id === id); // پیدا کردن آهنگ بر اساس ID
    })
    .filter(Boolean); // فیلتر کردن مقادیر undefined

  // ایجاد کارت‌های آهنگ
  const songCards = filteredSongs.map(createRemixCardTemplate).join(""); // استفاده از createRemixCardTemplate
  song.innerHTML = songCards; // نمایش کارت‌ها در عنصر HTML
} catch (error) {
  console.error("Error loading Song data:", error);
}
});