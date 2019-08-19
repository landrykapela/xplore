const galleryItems = document.getElementsByClassName("grid-item");
const imageViewer = document.getElementById("image-viewer");
const image = document.getElementById("image");
const imageClose = document.getElementById("image-close");
const imageTitle = document.getElementById("image-source");
const imageNext = document.getElementById("image-next");
const imagePrevious = document.getElementById("image-previous");
let current = 0;
let images = [];
let title = "";
if (imageClose) {
  imageClose.addEventListener("click", () => {
    closeImageViewer();
  });
}
for (let i = 0; i < galleryItems.length; i++) {
  if (galleryItems[i]) {
    let item = galleryItems[i];
    item.addEventListener("mouseover", () => {
      //show label
      item.firstElementChild.classList.remove("hidden");
      //   console.log("has child: ", item.hasChildNodes());
      //   if (item.hasChildNodes())
      //     console.log("first child: ", item.firstElementChild.textContent);
    });
    item.addEventListener("mouseout", () => {
      item.firstElementChild.classList.add("hidden");
    });

    item.addEventListener("click", () => {
      showImage(item);

      //set current index
      current = i;
    });
  }
}

//add event click event to nextbutton
if (imageNext) {
  imageNext.addEventListener("click", () => {
    showNext();
  });
}

//add event click event to previousbutton
if (imagePrevious) {
  imagePrevious.addEventListener("click", () => {
    showPrevious();
  });
}

const showImage = item => {
  item.classList.forEach(className => {
    if (className.substr(0, 3) === "bg-") {
      let bg = className.split("-")[1].concat(".jpg");

      image.src = "./images/".concat(bg);
      imageViewer.classList.remove("hidden");
      imageViewer.classList.add("flex");
      imageViewer.style.zIndex = 10000;
      // document.body.classList.add("no-scroll");
      title = item.firstElementChild.textContent;
      imageTitle.textContent = title;
      imageViewer.scrollIntoView();
    }
  });
};
const showPrevious = () => {
  let previousIndex = current == 0 ? galleryItems.length - 1 : current - 1;
  item = galleryItems[previousIndex];
  showImage(item);
  current = previousIndex;
};
const showNext = () => {
  let nextIndex = current >= galleryItems.length - 1 ? 0 : current + 1;
  item = galleryItems[nextIndex];
  showImage(item);
  current = nextIndex;
};
const closeImageViewer = () => {
  imageViewer.classList.remove("flex");
  imageViewer.classList.add("hidden");
  imageViewer.style.zIndex = -10000;
  // document.body.classList.remove("no-scroll");
};
