document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// وقتی صفحه بارگذاری می‌شود، ابتدا بارگذاری لودر و سپس محتوا را پس از یک تأخیر نمایش می‌دهیم.
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 1000); // تاخیر 1 ثانیه‌ای برای لودر
});

// این تابع زمانی که تصویر بارگذاری می‌شود فراخوانی می‌شود.
function imageLoaded(img) {
  const loader = img.previousElementSibling;
  loader.style.display = "none"; // مخفی کردن لودر
  img.style.display = "block"; // نمایش تصویر
}

JsonArtic = "assets/data/singer.json";
JsonSong = "assets/data/song.json";
JsonRemix = "assets/data/remix.json";
