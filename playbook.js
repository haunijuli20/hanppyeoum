
const overlayImg = document.getElementById("overlay-img");
const overlayLink = document.getElementById("overlay-link");

const imageList = [
  { src: "./data/comparison_-01.png", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.t7gvi6b4kdms" },
  { src: "./data/comparison_-02.png", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.t7gvi6b4kdms" },
  { src: "./data/comparison_-03.png", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.t7gvi6b4kdms" },
  { src: "./data/1chair.png", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.0" },
  { src: "./data/3사랑.png", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.t0u0gjysumm2" },
  { src: "./data/4banana.jpg", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.kun6egr07ade" },
  { src: "./data/5iphone_se.jpg", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.9swvvn9kdbpy" },
  { src: "./data/2dolphin.jpg", link: "https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.2aa0xos837xl" },
  { src:"./data/7earth2.png", link:"https://docs.google.com/document/d/1aKahpikrOHUvAdtp1Y0i6gvctBbGsXsvJx9SfRYpH9Q/edit?tab=t.3msrmvnpxmdl"}
];

let intervalId;
let currentIndex = 0;
let isHovered = false;

function startSlideshow() {
  intervalId = setInterval(() => {
    if (isHovered) return;
    currentIndex = (currentIndex + 1) % imageList.length;
    overlayImg.src = imageList[currentIndex].src;
    overlayLink.href = imageList[currentIndex].link;
  }, 500);
}

// 이미지 초기화
overlayImg.src = imageList[0].src;
overlayLink.href = imageList[0].link;

// ✅ 마우스 호버 이벤트
overlayImg.addEventListener("mouseenter", () => {
  isHovered = true;
});
overlayImg.addEventListener("mouseleave", () => {
  isHovered = false;
});

// ✅ 터치 이벤트도 추가
overlayImg.addEventListener("touchstart", () => {
  isHovered = true;
});
overlayImg.addEventListener("touchend", () => {
  isHovered = false;
});

startSlideshow();
