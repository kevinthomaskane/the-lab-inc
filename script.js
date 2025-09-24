document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('slide-container');
  if (!container) return;

  const indicators = document.querySelectorAll('.indicator');
  const slides = [
    {
      id: 'slide-2',
      title: 'Connect',
      subtitle: 'Prayer and worship or dinner party',
      src: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/3348f011-b9ab-462d-aa3e-6a991ed7b0e6/the-lab-connect-min.webp',
      alt: 'Prayer and worship or dinner party',
      width: 2000,
      height: 1333,
      sizes: '100vw',
      srcset: `
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/3348f011-b9ab-462d-aa3e-6a991ed7b0e6/the-lab-connect-min.webp?format=500w 500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/3348f011-b9ab-462d-aa3e-6a991ed7b0e6/the-lab-connect-min.webp?format=750w 750w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/3348f011-b9ab-462d-aa3e-6a991ed7b0e6/the-lab-connect-min.webp?format=1000w 1000w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/3348f011-b9ab-462d-aa3e-6a991ed7b0e6/the-lab-connect-min.webp?format=1500w 1500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/3348f011-b9ab-462d-aa3e-6a991ed7b0e6/the-lab-connect-min.webp?format=2000w 2000w
    `,
    },
    {
      id: 'slide-1',
      title: 'Create',
      subtitle: 'Business workshops and events',
      src: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/f73deca5-07c6-4333-8032-38d17fbcc185/the-lab-business-meeting-min.webp',
      alt: 'Business workshops and events',
      width: 2000,
      height: 1333,
      sizes: '100vw',
      srcset: `
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/f73deca5-07c6-4333-8032-38d17fbcc185/the-lab-business-meeting-min.webp?format=500w 500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/f73deca5-07c6-4333-8032-38d17fbcc185/the-lab-business-meeting-min.webp?format=750w 750w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/f73deca5-07c6-4333-8032-38d17fbcc185/the-lab-business-meeting-min.webp?format=1000w 1000w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/f73deca5-07c6-4333-8032-38d17fbcc185/the-lab-business-meeting-min.webp?format=1500w 1500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/f73deca5-07c6-4333-8032-38d17fbcc185/the-lab-business-meeting-min.webp?format=2000w 2000w
    `,
    },
    {
      id: 'slide-3',
      title: 'Grow',
      subtitle: 'Exercise and yoga',
      src: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/d7545236-05ea-469f-8543-b2b06b1d1959/the-lab-exercise-min.webp',
      alt: 'Exercise and yoga',
      width: 2000,
      height: 1335,
      sizes: '100vw',
      srcset: `
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/d7545236-05ea-469f-8543-b2b06b1d1959/the-lab-exercise-min.webp?format=500w 500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/d7545236-05ea-469f-8543-b2b06b1d1959/the-lab-exercise-min.webp?format=750w 750w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/d7545236-05ea-469f-8543-b2b06b1d1959/the-lab-exercise-min.webp?format=1000w 1000w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/d7545236-05ea-469f-8543-b2b06b1d1959/the-lab-exercise-min.webp?format=1500w 1500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/d7545236-05ea-469f-8543-b2b06b1d1959/the-lab-exercise-min.webp?format=2000w 2000w
    `,
    },
  ];

  let currentSlideIndex = 0;

  slides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.classList.add('slide');
    i !== currentSlideIndex && div.classList.add('hide');

    div.innerHTML = `
        <div class="slide-content-wrapper">
          <img
            alt="${slide.alt}"
            width="${slide.width}"
            height="${slide.height}"
            class="slide-image"
          />
          <div class="slide-content">
            <h2 class="slide-title">${slide.title}</h2>
            <p class="slide-subtitle">${slide.subtitle}</p>
          </div>
        </div>
      `;
    const img = div.querySelector('img');
    if (img) {
      img.setAttribute('data-src', slide.src);
      img.setAttribute('data-sizes', slide.sizes);
      img.setAttribute('data-srcset', slide.srcset);
      if (i === currentSlideIndex) {
        img.src = slide.src;
        img.srcset = slide.srcset;
        img.sizes = slide.sizes;
        img.removeAttribute('data-src');
        img.removeAttribute('data-sizes');
        img.removeAttribute('data-srcset');
      }
    }

    container.appendChild(div);
  });

  let slideElements;
  let slideInterval;

  function nextSlide(i) {
    slideElements =
      slideElements || Array.from(document.querySelectorAll('.slide'));

    slideElements.forEach((slide, i) => {
      if (i !== currentSlideIndex) {
        slide.classList.add('hide');
        return;
      }
      slide.classList.remove('hide');
      const img = slide.querySelector('img');
      if (img && img.hasAttribute('data-src')) {
        img.src = img.getAttribute('data-src');
        img.sizes = img.getAttribute('data-sizes');
        img.srcset = img.getAttribute('data-srcset');
        img.removeAttribute('data-src');
        img.removeAttribute('data-sizes');
        img.removeAttribute('data-srcset');
      }
    });

    indicators.forEach((indicator, idx) => {
      if (idx === i) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  function init() {
    slideInterval = setInterval(() => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      nextSlide(currentSlideIndex);
    }, 5000);
  }

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      indicators.forEach((ind) => ind.classList.remove('active'));
      indicator.classList.add('active');
      clearInterval(slideInterval);
      currentSlideIndex = i;
      nextSlide(currentSlideIndex);
      init();
    });
  });

  init();
});
