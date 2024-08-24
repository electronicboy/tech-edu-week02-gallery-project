let currentImage = 0;

const images = [
  {
    image: "bagus41-1440476",
    desc: "Close Up Photography of Cherry Blossom Tree",
    source:
      "https://www.pexels.com/photo/close-up-photography-of-cherry-blossom-tree-1440476/",
  },
  {
    image: "luna-luna-1821346-3625108",
    desc: "Kinkaku-ji Temple in Kyoto",
    source: "https://www.pexels.com/photo/kinkaku-ji-temple-in-kyoto-3625108/",
  },
  {
    image: "ryutaro-5745817",
    desc: "Narrow alley with small traditional wooden houses in Japan",
    source:
      "https://www.pexels.com/photo/narrow-alley-with-small-traditional-wooden-houses-in-japan-5745817/",
  },
  {
    image: "ryutaro-5745869",
    desc: "White and Red Paper Lanterns",
    source:
      "https://www.pexels.com/photo/white-and-red-paper-lanterns-5745869/",
  },
  {
    image: "willianjusten-15830265",
    desc: "Low Angle View of a Japanese Temple and a Tree in Autumn Foliage",
    source:
      "https://www.pexels.com/photo/low-angle-view-of-a-japanese-temple-and-a-tree-in-autumn-foliage-15830265/",
  },

  {
    image: "bagus41-1440476",
    desc: "Close Up Photography of Cherry Blossom Tree",
    source:
      "https://www.pexels.com/photo/close-up-photography-of-cherry-blossom-tree-1440476/",
  },
  {
    image: "luna-luna-1821346-3625108",
    desc: "Kinkaku-ji Temple in Kyoto",
    source: "https://www.pexels.com/photo/kinkaku-ji-temple-in-kyoto-3625108/",
  },
  {
    image: "ryutaro-5745817",
    desc: "Narrow alley with small traditional wooden houses in Japan",
    source:
      "https://www.pexels.com/photo/narrow-alley-with-small-traditional-wooden-houses-in-japan-5745817/",
  },
  {
    image: "ryutaro-5745869",
    desc: "White and Red Paper Lanterns",
    source:
      "https://www.pexels.com/photo/white-and-red-paper-lanterns-5745869/",
  },
  {
    image: "willianjusten-15830265",
    desc: "Low Angle View of a Japanese Temple and a Tree in Autumn Foliage",
    source:
      "https://www.pexels.com/photo/low-angle-view-of-a-japanese-temple-and-a-tree-in-autumn-foliage-15830265/",
  },
  {
    image: "bagus41-1440476",
    desc: "Close Up Photography of Cherry Blossom Tree",
    source:
      "https://www.pexels.com/photo/close-up-photography-of-cherry-blossom-tree-1440476/",
  },
  {
    image: "luna-luna-1821346-3625108",
    desc: "Kinkaku-ji Temple in Kyoto",
    source: "https://www.pexels.com/photo/kinkaku-ji-temple-in-kyoto-3625108/",
  },
  {
    image: "ryutaro-5745817",
    desc: "Narrow alley with small traditional wooden houses in Japan",
    source:
      "https://www.pexels.com/photo/narrow-alley-with-small-traditional-wooden-houses-in-japan-5745817/",
  },
  {
    image: "ryutaro-5745869",
    desc: "White and Red Paper Lanterns",
    source:
      "https://www.pexels.com/photo/white-and-red-paper-lanterns-5745869/",
  },
  {
    image: "willianjusten-15830265",
    desc: "Low Angle View of a Japanese Temple and a Tree in Autumn Foliage",
    source:
      "https://www.pexels.com/photo/low-angle-view-of-a-japanese-temple-and-a-tree-in-autumn-foliage-15830265/",
  },
];

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
}

/**
 *
 * @param {{image: string, desc: string}} image
 * @returns {HTMLImageElement}
 */
function createElementForImage(image) {
  let img = document.createElement("img");
  img.src = `./images/${image.image}/image.jpg`;
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

const thumbnailBanner = document.getElementById("thumbnail-banner");
const imageHolder = document.getElementById("image-container");
images.forEach(function (image, index) {
  /** @type {HTMLImageElement} */
  let img = document.createElement("img");

  img.src = `./images/${image.image}/image.jpg`;
  img.alt = image.desc;

  img.addEventListener("click", function () {
    setImage(index);
  });

  img.setAttribute("tabindex", 0);

  img.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      setImage(index);
    }
  });

  thumbnailBanner.appendChild(img);
});

setImage(0);
