let currentImage = 0;

const images = [
  {
    image: "bagus41-1440476",
    desc: "Close Up Photography of Cherry Blossom Tree",
    sets: [512, 1024, 2048],
    source:
      "https://www.pexels.com/photo/close-up-photography-of-cherry-blossom-tree-1440476/",
  },
  {
    image: "balazsimon-16154088",
    desc: "A Japanese Garden with a Temple and a Pond",
    sets: [512, 1024, 2048],
    source:
      "https://www.pexels.com/photo/a-japanese-garden-with-a-temple-and-a-pond-16154088/",
  },
  {
    image: "luna-luna-1821346-3625108",
    desc: "Kinkaku-ji Temple in Kyoto",
    sets: [512, 1024, 2048],
    source: "https://www.pexels.com/photo/kinkaku-ji-temple-in-kyoto-3625108/",
  },
  {
    image: "pixabay-161164",
    desc: "Red Black and White Building Structure Surrounded by Trees Under White Clouds during Daytime",
    sets: [512, 1024, 2048],
    source:
      "https://www.pexels.com/photo/red-black-and-white-building-structure-surrounded-by-trees-under-white-clouds-during-daytime-161164/",
  },
  {
    image: "ryutaro-5745817",
    desc: "Narrow alley with small traditional wooden houses in Japan",
    sets: [512, 1024, 2048],
    source:
      "https://www.pexels.com/photo/narrow-alley-with-small-traditional-wooden-houses-in-japan-5745817/",
  },
  {
    image: "ryutaro-5745869",
    desc: "White and Red Paper Lanterns",
    sets: [512, 1024],
    source:
      "https://www.pexels.com/photo/white-and-red-paper-lanterns-5745869/",
  },
  {
    image: "stephan-streuders-2134979-3767837",
    desc: "Photo of Walkway Between Shinto Shrine",
    sets: [512, 1024, 2048],
    source:
      "https://www.pexels.com/photo/photo-of-walkway-between-shinto-shrine-3767837/",
  },
  {
    image: "willianjusten-15830265",
    desc: "Low Angle View of a Japanese Temple and a Tree in Autumn Foliage",
    sets: [512, 1024, 2048],
    source:
      "https://www.pexels.com/photo/low-angle-view-of-a-japanese-temple-and-a-tree-in-autumn-foliage-15830265/",
  },
];

const thumbnailBanner = document.getElementById("thumbnail-banner");
const imageHolder = document.getElementById("image-container");
const ariaAnnouncer = document.getElementById("aria-image-meta");

/**
 *
 * @param {number} imageId
 */
function setImage(imageId) {
  console.log(imageId);

  if (imageId < 0) {
    while (imageId < 0) {
      imageId += images.length;
    }
  }
  let image = images[imageId % images.length];
  currentImage = imageId;

  let currentImageElement = imageHolder.firstElementChild;
  if (currentImageElement != null) {
    //currentImage.classList.add("removal");
    currentImageElement.remove();
  }
  imageHolder.appendChild(createElementForImage(image));
  setTimeout(function () {
    ariaAnnouncer.textContent = image.desc;
  }, 1000);
}

/**
 *
 * @param {{image: string, desc: string, sets: number[]}} image
 * @returns {HTMLImageElement}
 */
function createElementForImage(image) {
  let img = document.createElement("img");
  let imgRoot = `./images/${image.image}`;

  let sourceSetDef = "";
  for (let sizeDef of image.sets) {
    sourceSetDef += `${imgRoot}/${sizeDef}.jpg ${sizeDef}w,`;
  }
  if (sourceSetDef.length !== 0) {
    img.srcset = sourceSetDef;
  }
  img.src = `${imgRoot}/image.jpg`;
  img.alt = image.desc;

  return img;
}

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    // Do not mutate the counter here, even if we can get away with it
    setImage(currentImage - 1);
  } else if (event.key === "ArrowRight") {
    setImage(currentImage + 1);
  }
  console.log(event);
});

images.forEach(function (image, index) {
  /** @type {HTMLImageElement} */
  let img = document.createElement("img");

  img.src = `./images/${image.image}/thumbnail.jpg`;
  img.alt = image.desc;

  img.addEventListener("click", function () {
    setImage(index);
  });

  img.setAttribute("tabindex", 0);
  img.setAttribute("aria-label", image.desc + ", click to enlargen this image");

  img.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      setImage(index);
    }
  });

  thumbnailBanner.appendChild(img);
});

ariaAnnouncer.textContent =
  "Image gallery, use arrow keys or image frame preview to navigate";

setImage(0);
