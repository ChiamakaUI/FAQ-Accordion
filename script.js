let accBtn = document.querySelectorAll(".accordionTitle");

accBtn.forEach((acc) => acc.addEventListener("click", showContent));

function showContent() {
  let panel = this.nextElementSibling;
  let arrow = this.getElementsByClassName("arrow")[0];

  let content = document.getElementsByClassName("accordionContent");
  let arrowImg = document.getElementsByClassName("arrow");

  for (let i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  for (let j = 0; j < arrowImg.length; j++) {
    arrowImg[j].classList.remove("rotate");
  }

  panel.style.display = "block";
  arrow.classList.add("rotate");
}
