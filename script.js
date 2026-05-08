const images = [
  "https://i.pinimg.com/736x/4b/f5/33/4bf533c598c1dbd6db93d7286213b563.jpg",

  "https://i.pinimg.com/736x/97/f9/68/97f9682c3bbfbe714b9843fd4fd6bfc0.jpg",

  "https://i.pinimg.com/736x/6f/c7/75/6fc775f8cc4e6d2d8bb3b4b2b08efc17.jpg"
];

let current = 0;

function showImage(){
  document.getElementById("albumImage").src = images[current];
}

function nextSlide(){
  current = (current + 1) % images.length;
  showImage();
}

function prevSlide(){
  current = (current - 1 + images.length) % images.length;
  showImage();
}
