<template>
  <footer class="site-footer">
    <p>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
      Coded by <a href="https://mmalabugin.ru/" target="_blank" rel="noopener noreferrer">1t1sCooL</a>.
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-block: 1.5rem;
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: center;
  color: var(--slate-400);
}

.site-footer a {
  font-weight: 800;
  color: var(--slate-800);
  text-decoration: underline;
  text-underline-offset: 0.125rem;
}

.site-footer a:hover {
  color: var(--green-400);
}

@media (prefers-reduced-motion: no-preference) {
  .site-footer a {
    transition: color 0.15s ease;
  }
}
</style>
