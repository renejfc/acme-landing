<template>
  <footer class="footer">
    <section class="footer__section">
      <h1 class="footer__title">
        <span class="footer__icon">
          <Ellipse />
        </span>
        Acme
      </h1>
      <nav class="footer__nav" aria-label="General footer navigation sections">
        <!-- Product Section -->
        <div class="footer__nav-section">
          <h2 class="footer__nav-title">Product</h2>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Product</NuxtLink>
            </li>
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Security</NuxtLink>
            </li>
            <!-- Ensure all NuxtLink elements have a 'to' attribute for consistency -->
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Pricing</NuxtLink>
            </li>
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Demo</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Company Section -->
        <div class="footer__nav-section">
          <h2 class="footer__nav-title">Company</h2>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">About us</NuxtLink>
            </li>
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Blog</NuxtLink>
            </li>
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">News</NuxtLink>
            </li>
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Careers</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Resources Section -->
        <div class="footer__nav-section">
          <h2 class="footer__nav-title">Resources</h2>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">Help center</NuxtLink>
            </li>
            <li class="footer__nav-item">
              <NuxtLink class="footer__nav-link" to="/">API</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
    <!-- Legal and Social Media Below Footer Sections -->
    <section class="footer__section-secondary">
      <nav aria-label="Legal" class="footer__nav-legal">
        <ul class="footer__nav-list-secondary">
          <li class="footer__nav-item-secondary">
            <NuxtLink class="footer__nav-link-secondary" to="/">
              Terms & conditions
            </NuxtLink>
          </li>
          <li class="footer__nav-item-secondary">
            <NuxtLink class="footer__nav-link-secondary" to="/">
              Legal notice
            </NuxtLink>
          </li>
          <li class="footer__nav-item-secondary">
            <NuxtLink class="footer__nav-link-secondary" to="/">
              Privacy policy
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav aria-label="Social media" class="footer__nav-social">
        <ul class="footer__nav-list-secondary">
          <li class="footer__nav-item-secondary">
            <NuxtLink
              class="footer__nav-link-secondary"
              to="/"
              aria-label="Facebook"
            >
              <Social variant="facebook" />
            </NuxtLink>
          </li>
          <li class="footer__nav-item-secondary">
            <NuxtLink
              class="footer__nav-link-secondary"
              to="/"
              aria-label="Instagram"
            >
              <Social variant="instagram" />
            </NuxtLink>
          </li>
          <li class="footer__nav-item-secondary">
            <NuxtLink
              class="footer__nav-link-secondary"
              to="/"
              aria-label="Twitter"
            >
              <Social variant="twitter" />
            </NuxtLink>
          </li>
          <li class="footer__nav-item-secondary">
            <NuxtLink
              class="footer__nav-link-secondary"
              to="/"
              aria-label="LinkedIn"
            >
              <Social variant="linkedin" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
  </footer>
</template>
<style scoped lang="css">
.footer {
  gap: 4rem;
  width: 100%;
  display: flex;
  margin-top: 14rem;
  align-self: center;
  max-width: 115.5rem;
  flex-direction: column;
  padding: 0 1rem 9.6rem 1rem;
  border-top: 0.4rem solid var(--c-foreground-light);
}

.footer__section {
  display: flex;
  padding: 4rem 0;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--c-foreground-light);
}

.footer__title {
  gap: 0.8rem;
  height: 100%;
  align-items: center;
  display: inline-flex;
  text-transform: uppercase;
  font-size: var(--font-size-lg);
  letter-spacing: var(--font-spacing-md);
  line-height: var(--font-line-height-md);
  font-weight: var(--font-weight-semibold);
}

.footer__nav {
  gap: 4rem;
  display: flex;
}

.footer__nav-section {
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
}

.footer__nav-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--font-spacing-sm);
}

.footer__nav-list {
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
}

.footer__nav-item {
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--font-spacing-sm);
}

.footer__section-secondary {
  display: flex;
  justify-content: space-between;
}

.footer__nav-list-secondary {
  gap: 3rem;
  display: flex;
}

@media (max-width: 768px) {
  .footer__section {
    gap: 4rem;
    align-items: center;
    flex-direction: column;
  }

  .footer__section-secondary {
    gap: 4rem;
    align-items: center;
    flex-direction: column;
  }
}
</style>
