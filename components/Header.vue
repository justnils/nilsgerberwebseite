<script setup lang="ts">
defineProps<{
  navOpen: boolean;
  toggleNav: () => void;
  classes?: string;
}>();
</script>
<template>
  <header class="header">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <NuxtLink to="/" :class="classes">
        <img src="/images/NilsGerberLogoWeb.gif" alt="Nils Gerber Logo" />
      </NuxtLink>

      <button @click="toggleNav" class="bg-transparent border-0 d-xl-none">
        <div :class="{ open: navOpen }" class="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 14px 0;
  width: 100%;
  z-index: 10;
  left: 0;
  right: 0;
  backdrop-filter: blur(3px);
  position: fixed;
  img {
    max-width: 200px;
    max-height: 45px;
    height: auto;
    @media (min-width: 768px) {
      max-width: 280px;
      max-height: 55px;
    }
  }
  .nav-icon {
    width: 36px;
    height: 22px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 15;
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: rgb(var(--black));
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
  }
  .nav-icon span:nth-child(1) {
    top: 0px;
  }

  .nav-icon span:nth-child(2) {
    top: 10px;
  }

  .nav-icon span:nth-child(3) {
    top: 20px;
  }

  .nav-icon.open span:nth-child(1) {
    top: 10px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    background-color: rgb(var(--white));
  }

  .nav-icon.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  .nav-icon.open span:nth-child(3) {
    top: 10px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    background-color: rgb(var(--white));
  }
}
</style>
