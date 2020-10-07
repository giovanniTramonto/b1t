<template>
  <nav class="navigation">
    <ul>
      <li>
        <nuxt-link to="/resume">
          <span>Resume</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/slideshow">
          <span>Portfolio</span>
        </nuxt-link>
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
  background: black;

  ul {
    height: var(--nav-height);
    display: flex;
  }

  li {
    height: 100%;
    flex: 1;
    display: flex;
    border: 1px solid white;

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

      span {
        border-bottom: 1px solid transparent;
      }

      &:hover,
      &:active {
        background: white;
        color: black;
      }

      &.nuxt-link-active {
        span {
          border-bottom-color: inherit;
        }
      }
    }
  }
}
</style>
