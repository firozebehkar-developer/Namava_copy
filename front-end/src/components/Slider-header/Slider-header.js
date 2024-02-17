let template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<link rel="stylesheet" href="./src/components/Slider-header/Slider-header.css">
<div class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide div-1">
    <div class="div-cont">
      <img class="poster" src="./src/assets/imgs/slider-header/img1.png" alt="">
      <h1 class="text-p">جاماندگان</h1>
      <div class="div-data">
        <ul>
          <li>
            <p>زیرنویس
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </p>
          </li>
          <li>
            <p> دوبله نماوا
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </p>
          </li>
          <li>
            <p>93%
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </p>
          </li>
          <li>
            <p>8</p>
          </li>
          <li>
            <p>
              <span>127 </span> دقیقه
            </p>
          </li>
          <li>
            <p>2023</p>
          </li>
          <li>
            <p>+15</p>
          </li>
        </ul>
  
      </div>
  
      <p class="text-p div-text">یک معلم تاریخ بداخلاق که در یک دانشگاه شبانه روزی دورافتاده تدریس می کند، مجبور می شود در
        حین تعطیلات کریسمس، کنار دانش آموزی که جایی برای رفتن ندارد بماند
      </p>
  
      <p class="text-p">هم اکنون با دوبله اختصاصی نماوا</p>
      <div class="div-btna">
        <a class="link-desc" href="#">
          توضیحات بیشتر
        </a>
        <a class="link-ashtrak" href="#">
          خرید اشتراک
        </a>
      </div>
      <p class="stars">Paul GiamattiDa'Vine Joy RandolphDominic Sessa : ستارگان</p>
    </div>
  </div>
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

