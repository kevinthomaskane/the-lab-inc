// Renders the FAQ accordion for a Squarespace Code Block, and a local demo
// page that wraps it in the same Site Styles variables the space grid uses.

const escape = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export function renderFaqBlock(faq, categories) {
  const groups = categories
    .map((cat) => ({ ...cat, items: faq.filter((q) => q.category === cat.key) }))
    .filter((g) => g.items.length);

  const groupsHtml = groups
    .map(
      (g) => `
      <section class="lab-faq__group" id="faq-${g.key}">
        <h2 class="lab-faq__heading">${escape(g.label)}</h2>
        ${g.items
          .map(
            (q) => `
        <details class="lab-faq__item" id="faq-${slugify(q.question)}">
          <summary class="lab-faq__question">
            <span>${escape(q.question)}</span>
            <span class="lab-faq__icon" aria-hidden="true"></span>
          </summary>
          <div class="lab-faq__answer"><p>${escape(q.answer)}</p></div>
        </details>`
          )
          .join('')}
      </section>`
    )
    .join('');

  return `<!-- LAB FAQ: start (paste everything through "LAB FAQ: end" into a Code Block) -->
<div class="lab-faq" id="lab-faq">
  <header class="lab-faq__intro">
    <p class="lab-faq__eyebrow">FAQ</p>
    <h1 class="lab-faq__title">Questions, answered.</h1>
    <p class="lab-faq__script">Booking, events, the gym, and what we're about.</p>
    <span class="lab-faq__rule" aria-hidden="true"></span>
  </header>
  <nav class="lab-faq__jump" aria-label="FAQ sections">
    ${groups
      .map((g) => `<a href="#faq-${g.key}">${escape(g.label)}</a>`)
      .join('\n    ')}
  </nav>
  ${groupsHtml}
</div>
<style>
  /* Colors and fonts come from Squarespace Site Styles; fallbacks match
     the site's current values in case a variable is missing. */
  .lab-faq {
    --lab-ink: hsl(var(--black-hsl, 0, 0%, 0%));
    --lab-paper: hsl(var(--white-hsl, 0, 0%, 100%));
    --lab-muted: hsl(var(--darkAccent-hsl, 50, 8.33%, 42.35%));
    --lab-line: hsl(var(--black-hsl, 0, 0%, 0%) / 0.18);
    --lab-serif: var(--heading-font-font-family, 'Libre Caslon Display'), Georgia, serif;
    --lab-sans: var(--meta-font-font-family, 'Helvetica Neue', Arial, sans-serif);
    --lab-script: var(--body-font-font-family, 'Nothing You Could Do'), cursive;
    width: 100%;
    max-width: 52rem;
    margin: 0 auto;
    color: var(--lab-ink);
  }
  .lab-faq *,
  .lab-faq *::before,
  .lab-faq *::after {
    box-sizing: border-box;
  }
  /* Two-class selectors so Squarespace's global h1/h2/p styles don't win */
  .lab-faq .lab-faq__intro {
    text-align: center;
    padding: 0 1rem 2rem;
  }
  .lab-faq .lab-faq__eyebrow {
    font-family: var(--lab-sans);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 0 0 1rem;
  }
  .lab-faq .lab-faq__title {
    font-family: var(--lab-serif);
    font-size: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1;
    text-transform: none;
    color: inherit;
    margin: 0;
  }
  .lab-faq .lab-faq__script {
    font-family: var(--lab-script);
    font-size: clamp(1.25rem, 1rem + 1.25vw, 2rem);
    line-height: 1.3;
    margin: 0.75rem 0 0;
  }
  .lab-faq .lab-faq__rule {
    display: block;
    width: 96px;
    height: 2px;
    background: var(--lab-muted);
    margin: 1.25rem auto 0;
  }
  .lab-faq .lab-faq__jump {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem clamp(0.5rem, 3vw, 2rem);
    padding: 0 1rem 2.5rem;
  }
  .lab-faq .lab-faq__jump a {
    font-family: var(--lab-sans);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--lab-ink);
    border-bottom: 1px solid transparent;
    padding: 0.4rem 0;
  }
  .lab-faq .lab-faq__jump a:hover,
  .lab-faq .lab-faq__jump a:focus-visible {
    border-bottom-color: var(--lab-ink);
    outline: none;
  }
  .lab-faq .lab-faq__group {
    padding: 0 1rem 2.5rem;
    scroll-margin-top: 6rem;
  }
  .lab-faq .lab-faq__heading {
    font-family: var(--lab-serif);
    font-size: clamp(1.4rem, 1rem + 1vw, 2rem);
    font-weight: 400;
    letter-spacing: 0.08em;
    line-height: 1;
    text-transform: uppercase;
    color: inherit;
    margin: 0 0 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--lab-ink);
  }
  .lab-faq .lab-faq__item {
    border-bottom: 1px solid var(--lab-line);
    scroll-margin-top: 6rem;
  }
  .lab-faq .lab-faq__question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    cursor: pointer;
    list-style: none;
    font-family: var(--lab-sans);
    font-size: clamp(0.95rem, 0.9rem + 0.3vw, 1.1rem);
    font-weight: 500;
    line-height: 1.4;
    padding: 1.1rem 0;
    color: inherit;
  }
  .lab-faq .lab-faq__question::-webkit-details-marker {
    display: none;
  }
  .lab-faq .lab-faq__question:hover {
    color: var(--lab-muted);
  }
  .lab-faq .lab-faq__question:focus-visible {
    outline: 2px solid var(--lab-ink);
    outline-offset: 3px;
  }
  .lab-faq .lab-faq__icon {
    position: relative;
    flex: 0 0 auto;
    width: 0.8rem;
    height: 0.8rem;
  }
  .lab-faq .lab-faq__icon::before,
  .lab-faq .lab-faq__icon::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: currentColor;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
  }
  .lab-faq .lab-faq__icon::after {
    transform: translateY(-50%) rotate(90deg);
  }
  .lab-faq .lab-faq__item[open] .lab-faq__icon::after {
    transform: translateY(-50%) rotate(0deg);
  }
  .lab-faq .lab-faq__answer {
    padding: 0 0 1.25rem;
    max-width: 44rem;
  }
  .lab-faq .lab-faq__answer p {
    font-family: var(--lab-sans);
    font-size: 1rem;
    line-height: 1.65;
    margin: 0;
  }
  @media (max-width: 639px) {
    .lab-faq .lab-faq__jump {
      gap: 0.25rem 1rem;
      padding-bottom: 1.75rem;
    }
    .lab-faq .lab-faq__jump a {
      font-size: 0.66rem;
      letter-spacing: 0.2em;
    }
    .lab-faq .lab-faq__question {
      padding: 0.9rem 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .lab-faq .lab-faq__icon::before,
    .lab-faq .lab-faq__icon::after {
      transition: none;
    }
  }
</style>
<!-- LAB FAQ: end -->`;
}

export function renderFaqDemo(block, faqSchema) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FAQ — Demo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Nothing+You+Could+Do&display=swap"
      rel="stylesheet"
    />
    <style>
      /* DEMO ONLY — mirrors the variables Squarespace defines from Site Styles,
         so the component reads them the same way here as on the live site */
      :root {
        --white-hsl: 0, 0%, 100%;
        --black-hsl: 0, 0%, 0%;
        --accent-hsl: 24, 36.84%, 81.37%;
        --lightAccent-hsl: 40, 8.11%, 92.75%;
        --darkAccent-hsl: 50, 8.33%, 42.35%;
        --heading-font-font-family: 'Libre Caslon Display';
        --body-font-font-family: 'Nothing You Could Do';
        --meta-font-font-family: 'Helvetica Neue', Arial, sans-serif;
      }
      body {
        margin: 0;
        padding: 4rem 1rem;
        background: hsl(var(--lightAccent-hsl));
        color: hsl(var(--black-hsl));
        font-family: var(--meta-font-font-family);
      }
    </style>
    <!-- DEMO ONLY — on Squarespace this goes in the page's Header Code Injection -->
    ${faqSchema}
  </head>
  <body>
    ${block}
  </body>
</html>
`;
}
