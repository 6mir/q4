document.addEventListener("DOMContentLoaded", async function () {
  const singer = new URLSearchParams(window.location.search).get("singer");

  // آهنگ
  try {
    fetch(JsonSong)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const singerData = data[singer];
        if (singerData) {
          displayTitle(singerData.title);
          createCards(singerData.songs);
        } else {
          console.error("Singer not found in data");
        }
      })
      .catch((error) => console.error("Error loading song data:", error));

    // تابع برای نمایش عنوان در بالای صفحه
    function displayTitle(title) {
      document.getElementById("page-title").textContent = `آهنگ های ${title}`;
    }

    // تابع برای ایجاد کارت‌های آهنگ‌ها
    function createCards(songs) {
      const container = document.getElementById("song-list");
      container.innerHTML = songs.map(createRemixCardTemplate).join("");
    }
  } catch (error) {
    console.error("Error loading artic data:", error);
  }
});
