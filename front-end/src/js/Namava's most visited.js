"use strict";

const MainContainer = document.querySelector(".main__container");

const displayCard = function () {
  MainContainer.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    const html = ` 
    <div class="container__card">
    <div class="img__container__card">
      <img
        src="https://static.namava.ir/Content/Upload/Images/9bd2a17e-15c2-4acf-9bb1-f7249a172ee7.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294"
        srcset="
          https://static.namava.ir/Content/Upload/Images/9bd2a17e-15c2-4acf-9bb1-f7249a172ee7.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294 1x,
          https://static.namava.ir/Content/Upload/Images/9bd2a17e-15c2-4acf-9bb1-f7249a172ee7.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=400&amp;h=588 2x
        "
        alt="داوینچیز"
        title="داوینچیز"
        width="100%"
        height="100%"
        class="img__card"
      />
    </div>
    <div class="text__container__card">
      <h2 class="text__card">داوینچیز</h2>
    </div>
  </div>
      `;
    MainContainer.insertAdjacentHTML("afterbegin", html);
  }
};
displayCard();
