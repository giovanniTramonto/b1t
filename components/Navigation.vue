<template>
  <nav class="navigation">
    <ul>
      <li>
        <a
          href="/pdf/PORTFOLIO_AmBONET.pdf"
          download
        >
          <span>Download PDF Portfolio (11MB)</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-text);
  color: var(--color-bg);

  ul {
    height: var(--nav-height);
    display: flex;
  }

  li {
    height: 100%;
    flex: 1;
    display: flex;
    border: 1px solid var(--color-text);

    & + li {
      border-left: none;
    }

    a {
      flex: 1;
      height: 100%;
      display: flex;
      color: inherit;
      align-items: center;
      justify-content: center;

      &.nuxt-link-active,
      &:hover,
      &:active {
        color: white;
      }
    }
  }
}
</style>
