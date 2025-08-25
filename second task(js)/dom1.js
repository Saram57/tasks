
const images = document.querySelectorAll(".card img"); 
const layer = document.querySelector(".layer"); 
const imgBox = document.querySelector(".img-box"); 
const closeBtn = document.querySelector(".fa-square-xmark"); 
const nextBtn = document.querySelector(".fa-angle-right"); 
const prevBtn = document.querySelector(".fa-angle-left"); 

let imgArray = [];
images.forEach(img => imgArray.push(img.getAttribute("src")));


let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    layer.classList.remove("d-none");
  });
});


function showImage() {
  imgBox.style.backgroundImage = `url(${imgArray[currentIndex]})`;
}

function closeLayer() {
  layer.classList.add("d-none");
}


function nextImage() {
  currentIndex++;
  if (currentIndex >= imgArray.length) currentIndex = 0;
  showImage();
}


function prevImage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = imgArray.length - 1;
  showImage();
}


closeBtn.addEventListener("click", closeLayer);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

document.addEventListener("keydown", (e) => {
  if (layer.classList.contains("d-none")) return; 

  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeLayer();
});
