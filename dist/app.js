const concepts = JSON.parse(document.getElementById('concept-data').textContent);
let slide = 0;
function showSlide(index) {
  slide = (index + concepts.length) % concepts.length;
  const c = concepts[slide];
  const n = String(slide + 1).padStart(2, '0');
  const image = document.getElementById('hero-image');
  image.src = `assets/${c.id}.webp`;
  image.alt = c.alt;
  document.getElementById('hero-title').textContent = c.title;
  document.getElementById('hero-tagline').textContent = c.tagline;
  document.getElementById('hero-genre').textContent = `${n} / ${c.genre.toUpperCase()}`;
  document.getElementById('slide-count').textContent = `${n} / 05`;
  const link = document.getElementById('hero-link');
  link.href = `#${c.id}`;
  link.setAttribute('aria-label', `Explore ${c.title}`);
  document.querySelectorAll('.world-tab').forEach((b, i) => {
    b.classList.toggle('active', i === slide);
    b.setAttribute('aria-pressed', String(i === slide));
  });
}
document.getElementById('prev').addEventListener('click', () => showSlide(slide - 1));
document.getElementById('next').addEventListener('click', () => showSlide(slide + 1));
document.querySelectorAll('.world-tab').forEach(b => b.addEventListener('click', () => showSlide(Number(b.dataset.slide))));
function filterConcepts(genre) {
  let count = 0;
  document.querySelectorAll('.concept').forEach(card => {
    card.hidden = genre !== 'All concepts' && card.dataset.genre !== genre;
    if (!card.hidden) count++;
  });
  document.querySelectorAll('.filter').forEach(b => {
    const active = b.dataset.filter === genre;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('.result-count').textContent = `${count} concept${count === 1 ? '' : 's'}`;
}
document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => filterConcepts(b.dataset.filter)));
function revealHash() {
  const id = location.hash.slice(1);
  const card = concepts.some(c => c.id === id) && document.getElementById(id);
  if (card) {
    filterConcepts('All concepts');
    card.querySelector('details').open = true;
    requestAnimationFrame(() => card.scrollIntoView({ block: 'start' }));
  }
}
window.addEventListener('hashchange', revealHash);
revealHash();
document.getElementById('copy-credits').addEventListener('click', async () => {
  const credits = `3D assets: Kay Lousberg / KayKit — Space Base Bits and Halloween Bits (free CC0 tiers):\nhttps://kaylousberg.itch.io/space-base-bits\nhttps://kaylousberg.itch.io/halloween-bits\n\n3D assets: Quaternius — Ultimate Nature, Survival, Cars, Modular Streets, Simple Buildings, and Platformer Game Kit. Used under the applicable download license; current terms: https://quaternius.com/license.html\nPack links: https://github.com/MarcoPaoletta/five-worlds-game-lab/blob/main/ASSET-RESEARCH.md\n\nConcept images: original AI-generated artwork for Five Worlds; visual targets, not gameplay footage.`;
  const status = document.getElementById('copy-status');
  let box = document.getElementById('credit-fallback');
  if (!box) { box = document.createElement('textarea'); box.id = 'credit-fallback'; box.setAttribute('aria-label', 'Optional credits to copy'); box.rows = 10; box.style.cssText = 'width:100%;padding:14px;background:#151714;color:#e5e8df;border:1px solid #6c8155;border-radius:6px;font:11px/1.7 monospace'; status.after(box); }
  box.value = credits;
  status.textContent = 'Credits ready below. Copy the text and keep only the packs you use.';
  try { await navigator.clipboard.writeText(credits); status.textContent = 'Credits copied. Keep only the packs you actually use.'; }
  catch { box.focus(); box.select(); }
});
