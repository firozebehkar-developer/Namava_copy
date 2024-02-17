let template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<link rel="stylesheet" href="./src/components/Slider-header/Slider-header.css">
<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide div-1">Slide 1</div>
      <div class="swiper-slide div-2">Slide 2</div>
      <div class="swiper-slide div-3">Slide 3</div>
      <div class="swiper-slide div-4">Slide 4</div>
      <div class="swiper-slide div-5">Slide 5</div>
      <div class="swiper-slide div-6">Slide 6</div>
      <div class="swiper-slide div-7">Slide 7</div>
      <div class="swiper-slide div-8">Slide 8</div>
      <div class="swiper-slide div-9">Slide 9</div>
      <div class="swiper-slide div-9">Slide 10</div>
    </div>
    <div class="div-btn">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>

`

class Slider_header extends HTMLElement {
  constructor() {
    super();
    this.swiper = null;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper(this.shadowRoot.querySelector('.swiper'), {
      slidesPerView: 3,
      spaceBetween: 30,
      effect: "fade",
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: this.shadowRoot.querySelector('.swiper-button-next'),
        prevEl: this.shadowRoot.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: this.shadowRoot.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  }
}

export {Slider_header}

