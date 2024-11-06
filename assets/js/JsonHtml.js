const createCardTemplate = (item) => `
  <div class="item">
    <a href="song.html?singer=${item.id}">
      <div class="img">
        <div class="skeleton-loader"></div>
        <img src="${item.image}" alt="${item.title}" onload="imageLoaded(this)" onerror="this.src='assets/error-img.png'" >
      </div>
        <h3>${item.title}</h3>
      </a>
    </div>
    `;

const createRemixCardTemplate = (item) => `
<div class="item">
  <div class="right">
    <div class="img">
      <div class="skeleton-loader"></div>
      <img src="${item.image}" alt="${item.title}" onload="imageLoaded(this)" onerror="this.src='assets/error-img.png'">
    </div>
    <div class="text">
      <p class="n-music">${item.title}</p>
      <p class="name">${item.artist}</p>
    </div>
  </div>
  <div class="left">
    <div class="dot-spinner loader" style="display: none;">
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
    </div>  
    <img src="assets/svg/play.svg" class="play-btn" onclick="playMusic('${item.file}', '${item.title}', '${item.artist}', '${item.image}', this)">
    <img src="assets/svg/download.svg" id="download-btn" onclick="downloadMusic('${item.file}')">
  </div>
</div>

`;
