<template>
  <header class="pricing-header">
    <h1 class="pricing-header__title">Simple, traffic-based pricing</h1>
    <p class="pricing-header__subtitle">
      Sign-up for our 30-day trial. <br class="pricing-header__break" />No credit card required.
    </p>
  </header>
</template>

<style scoped>
.pricing-header {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 0.8125rem;
  padding-block: 6.5625rem 5.5625rem;
  text-align: center;
}

.pricing-header::before {
  content: '';
  position: absolute;
  top: 4.1875rem;
  left: 50%;
  z-index: -1;
  width: 9.125rem;
  height: 9.0625rem;
  background: url('../../../shared/assets/images/pattern-circles.svg') no-repeat center / contain;
  translate: -50% 0;
}

.pricing-header__title {
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.3;
  color: var(--slate-800);
}

.pricing-header__subtitle {
  font-size: 0.9375rem;
  line-height: 1.5;
}

.pricing-header__break {
  display: none;
}

@media (max-width: 47.9375em) {
  .pricing-header {
    gap: 0.5rem;
    padding-block: 5.625rem 4rem;
  }

  .pricing-header::before {
    top: 3.5rem;
  }

  .pricing-header__title {
    font-size: 1.25rem;
  }

  .pricing-header__subtitle {
    font-size: 0.8125rem;
    line-height: 1.75;
  }

  .pricing-header__break {
    display: inline;
  }
}
</style>
