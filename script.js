(() => {
  const container = document.getElementById('slide-container');
  if (!container) return;

  const indicators = document.querySelectorAll('.indicator');
  const slides = [
    {
      id: 'slide-1',
      title: 'Prosper',
      subtitle: 'Business workshops and events',
      src: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp',
      alt: 'the-lab-eating-area.webp',
      width: 1080,
      height: 810,
      sizes: '(max-width:768px)49.125vw,32.166666666666664vw',
      srcset: `
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=100w 100w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=300w 300w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=500w 500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=750w 750w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=1000w 1000w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=1500w 1500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/c5252fa9-f4a8-465d-a036-7d3ab7cd07e0/the-lab-eating-area.webp?format=2500w 2500w
    `,
    },
    {
      id: 'slide-2',
      title: 'Health',
      subtitle: 'Exercise and yoga',
      src: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp',
      alt: 'the-lab-swingset.webp',
      width: 1080,
      height: 720,
      sizes: '(max-width:768px)55.265625vw,36.1875vw',
      srcset: `
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=100w 100w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=300w 300w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=500w 500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=750w 750w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=1000w 1000w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=1500w 1500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/aa6957dd-6ea2-4e09-81ce-a5fe48b43308/the-lab-swingset.webp?format=2500w 2500w
    `,
    },
    {
      id: 'slide-3',
      title: 'Soul Prosper',
      subtitle: 'Prayer and worship or dinner party',
      src: 'https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp',
      alt: 'the-lab-umbrella.webp',
      width: 1080,
      height: 720,
      sizes: '(max-width:768px)55.265625vw,36.1875vw',
      srcset: `
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=100w 100w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=300w 300w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=500w 500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=750w 750w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=1000w 1000w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=1500w 1500w,
      https://images.squarespace-cdn.com/content/v1/688285c2e2a26d5f75c0134a/da149e0b-57e9-41c1-a6e9-02ffc73b3ffb/the-lab-umbrella.webp?format=2500w 2500w
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
          src="${slide.src}" 
          alt="${slide.alt}" 
          width="${slide.width}" 
          height="${slide.height}" 
          sizes="${slide.sizes}" 
          class="slide-image"
          style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%;" 
          srcset="${slide.srcset}"
          loading="lazy" 
          decoding="async"
        />
        <div class="slide-content">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
        </div>
      </div>
    `;

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
})();
