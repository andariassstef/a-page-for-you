const images = [
  "albumImage/sasa.jpg",
  "albumImage/bunga.jpg",
  "albumImage/album.jpg"
];

const contents = [

  `
  <p>
    Thank you for surviving this far, i know it hasn’t always been easy for you.
    i hope this new age brings you softer days, happier moments, and all the good
    things you truly deserve. may you always be surrounded by love, kindness,
    and people who genuinely care about you.
    <br><br>
    and please, don’t forget to be kinder to yourself too, okay?
    you deserve to be loved gently, including by your own self.
    <br><br>
    i’m really grateful i got to know you and have you in my life.
    stay longer, please. i still want to make so many memories with you.
  </p>
  `,

  `
  <div class="gift-box">
    <p>
      Maybe flowers can't say everything i feel,
      but i hope these little things can remind you
      how special you are to me.
      <br><br>
      Thank you for existing,
      thank you for staying,
      and thank you for being someone so precious in my life.
    </p>
  </div>
  `,

  `
  <div class="music-card">  

    <h3>Best Part</h3>
    <p>DAY6</p>

    <p class="music-text">
      “Best Part” reminds me of the way you make everything feel softer
      and warmer without even trying.
      <br><br>
      thank you for becoming one of the best parts of my days,
      in ways you probably don’t even realize.
      <br><br>
      so whenever you listen to this song,
      i hope you remember that someone out there
      loves you very deeply and sincerely.
    </p>

    <a href="https://open.spotify.com/track/5gBMDX31s0uvslfUtMLHKV?si=RWYDzfHYQniuXmzfqh7mjw"
       target="_blank"
       class="spotify-btn">
       PLAY ON SPOTIFY
    </a>

  </div>
  `
];

let current = 0;

function showImage(){

  document.getElementById("albumImage").src = images[current];

  document.getElementById("slideContent").innerHTML = contents[current];
}

function nextSlide(){
  current = (current + 1) % images.length;
  showImage();
}

function prevSlide(){
  current = (current - 1 + images.length) % images.length;
  showImage();
}

showImage();
