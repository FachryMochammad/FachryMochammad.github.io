window.addEventListener('scroll', function(){
  const header = document.getElementById('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

const imageMenu = document.getElementById("imageMenu");
const textMenu = document.getElementById("txt");
const textH2 = textMenu.children[0];
const textP = textMenu.children[1];

function menuSlider(anything, text, desc) {
  imageMenu.src = anything;
  textH2.innerHTML = text;
  textP.innerHTML = desc;
}
