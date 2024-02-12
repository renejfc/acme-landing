<template>
  <header class="header">
    <h1 class="header__title">
      <span class="header__icon">
        <Ellipse />
      </span>
      Acme
    </h1>
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <NuxtLink to="/" class="header__link">Login</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink to="/" class="header__link">Sign up</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="css">
.header {
  display: flex;
  align-items: center;
  padding: 3.2rem 2.4rem;
  justify-content: space-between;
  border-bottom: 0.4rem solid var(--c-foreground-light);
}

.header__title {
  gap: 0.8rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: var(--font-size-lg);
  letter-spacing: var(--font-spacing-md);
  line-height: var(--font-line-height-md);
  font-weight: var(--font-weight-semibold);
}

.header__nav {
  flex-grow: 1;
}

.header__list {
  gap: 3.2rem;
  display: flex;
  justify-content: flex-end;
}

.header__link {
  font-size: var(--font-size-md);
  letter-spacing: var(--font-spacing-sm);
  font-weight: var(--font-weight-semibold);
}

@media (max-width: 480px) {
  .header {
    gap: 3.2rem;
    flex-direction: column;
  }

  .header__list {
    gap: 1.6rem;
  }
}
</style>
