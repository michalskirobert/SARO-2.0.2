var dots = document.querySelectorAll(".dots");
var moreText = document.querySelectorAll(".more");
var btnText = document.querySelectorAll(".button__default");
var jpBtn = document.querySelectorAll("html:lang(ja) .button__default");

dots,
  moreText,
  btnText.forEach(function (item, index) {
    btnText[index].addEventListener("click", () => {
      if (dots[index].style.display === "none") {
        dots[index].style.display = "block";
        btnText[index].innerHTML = "Read more";
        moreText[index].style.display = "none";
      } else {
        dots[index].style.display = "none";
        btnText[index].innerHTML = "Read less";
        moreText[index].style.display = "block";
      }
    });
  });

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "さらに読む";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "隠す";
    moreText.style.display = "block";
  }
