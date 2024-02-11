<template>
  <main class="main">
    <header class="hero">
      <h1 class="hero__title">We choose to go to the moon.</h1>
      <p class="hero__description">
        There is no strife, no prejudice, no national conflict in outer space as
        yet. Its hazards are hostile to us all.
      </p>
    </header>
    <section class="cards">
      <article class="card">
        <h1 class="card__title">
          <span>
            <Moon variant="bottom-half" />
          </span>
          Resist
        </h1>
        <p class="card__content">
          But why, some say, the moon? Why choose this as our goal? And they may
          well ask why climb the highest mountain? Why, 35 years ago, fly the
          Atlantic? Why does Rice play Texas?
        </p>
      </article>
      <article class="card">
        <h1 class="card__title">
          <span>
            <Moon variant="left-half" />
          </span>
          Big data
        </h1>
        <p class="card__content">
          It is for these reasons that I regard the decision last year to shift
          our efforts in space from low to high gear as among the most important
          decisions that will be made during my incumbency in the office of the
          Presidency.
        </p>
      </article>
      <article class="card">
        <h1 class="card__title">
          <span>
            <Ellipse variant="no-top-left-quarter" />
          </span>
          Game-changer
        </h1>
        <p class="card__content">
          In the last 24 hours we have seen facilities now being created for the
          greatest and most complex exploration in man's history. We have felt
          the ground shake and the air shattered by the testing of a Saturn C-1
          booster rocket, many times as powerful as the Atlas which launched
          John Glenn, generating power equivalent to 10,000 automobiles with
          their accelerators on the floor.
        </p>
      </article>
      <article class="card">
        <h1 class="card__title">
          <span>
            <Ellipse variant="bottom-half" />
          </span>
          Empower
        </h1>
        <p class="card__content">
          But why, some say, the moon? Why choose this as our goal? And they may
          well ask why climb the highest mountain? Why, 35 years ago, fly the
          Atlantic? Why does Rice play Texas?
        </p>
      </article>
    </section>
  </main>
</template>
<style scoped lang="css">
main {
  --max-container-width: 115.6rem;
}

.main {
  gap: 14rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  margin-top: 10.6rem;
  flex-direction: column;
}

.hero {
  gap: 2.4rem;
  display: flex;
  flex-direction: column;
  max-width: var(--max-container-width);
}

.hero__title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--font-spacing-sm);
}

.hero__description {
  color: var(--c-neutral-grey);
  font-size: var(--font-size-2xl);
  letter-spacing: var(--font-spacing-xs);
  line-height: var(--font-line-height-2xl);
  font-weight: var(--font-weight-semibold);
}

.cards {
  width: 100%;
  gap: 0.4rem;
  display: grid;
  max-width: var(--max-container-width);
  grid-template-columns: repeat(2, 1fr);
  min-height: var(--max-container-width);
  background-color: var(--c-neutral-black);
  border: 0.4rem solid var(--c-neutral-black);
}

.card {
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  padding: 6.4rem 1rem 0 6.4rem;
  background-color: var(--c-background);
}

.card__title {
  gap: 3.7rem;
  align-items: center;
  display: inline-flex;
  font-size: var(--font-size-xl);
  line-height: var(--font-line-height-xl);
  font-weight: var(--font-weight-semibold);
}

.card__content {
  max-width: 34.9rem;
  margin-left: 10.1rem;
}

@media (max-width: 768px) {
  .hero__description {
    font-size: var(--font-size-xl);
    line-height: var(--font-line-height-xl);
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 3.2rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 1.6rem;
  }
  .card__title {
    font-size: var(--font-size-lg);
  }
  .card__content {
    max-width: 100%;
    margin-left: 0;
  }
}
</style>
