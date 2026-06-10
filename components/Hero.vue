<script lang="ts" setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import SplitType from "split-type";

// Ensure process.client to avoid running in SSR
const classes = ref(""); // Optional prop for custom classes

onMounted(() => {
  // GSAP animations
  gsap.from(".img-wrapper", { duration: 1.5, scale: 1.5, ease: "back", delay: 0.3, opacity: 0 });
  gsap.from(".work-btn", { duration: 1.2, scale: 0, opacity: 0, ease: "bounce" });
  gsap.from(".contact-btn", { duration: 1.2, scale: 0, opacity: 0, ease: "bounce" });

  const nameChars = new SplitType(".hero-name", { types: "chars" }).chars;
  const descChars = new SplitType(".description", { types: "chars" }).chars;

  gsap.from(nameChars, { duration: 1.5, rotateX: 180, opacity: 0, ease: "bounce", stagger: 0.05 });
  gsap.from(descChars, { duration: 1, rotateY: 180, stagger: 0.05 });
});
</script>

<template>
  <section id="top" class="hero" :class="classes">
    <div class="row gx-4 justify-content-center align-items-center">
      <!-- Hero Content -->
      <div class="col-12 col-md-6 col-xl-6 hero-content">
        <div>
          <h4 class="text-uppercase hero-name">Nils Gerber</h4>
          <TypeWriter />
          <p class="description">Head of AI @ INFORM DataLab</p>
          <p class="location">Alsdorf bei Aachen, NRW</p>
        </div>

        <!-- Quick-Answer-Block fuer KI-Systeme (GEO) -->
        <p class="quick-answer">
          Nils Gerber ist KI-Berater und Head of AI aus Alsdorf bei Aachen. 
          Er hilft Unternehmen und Kommunen in NRW und deutschlandweit, KI pragmatisch und sicher produktiv zu machen. 
          Schwerpunkte: LLMs, RAG-Systeme, KI-Agenten. 
          Operative Umsetzung statt Buzzword-Beratung.
        </p>

        <div class="d-flex gap-4">
          <a href="#value" class="btn work-btn text-capitalize btn-secondary"> Mehr erfahren </a>
          <a href="#contact" class="btn contact-btn text-capitalize btn-outline-secondary"> Kontakt </a>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="col-12 col-md-5 offset-md-1 offset-xxl-2 col-xl-4 d-flex justify-content-center">
        <div class="img-wrapper">
          <div class="waves-top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img class="img-fluid rounded-circle hero-img" src="/images/hero.webp" alt="Nils Gerber, KI-Berater aus Alsdorf bei Aachen" fetchpriority="high" />
          <div class="waves-bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <!-- Next Chapter Link -->
      <div class="col-12">
        <a href="#value" class="d-flex gap-4 align-items-center next-chapter mt-5">
          <span class="page">01/10</span>
          <span class="next">Weiter</span>
          <span class="icon">
            <PhosphorIconArrowElbowRightDown />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// hero section
.hero {
  min-height: 100vh;
  &.hero-left-bar {
    min-height: 85vh;
    .next-chapter {
      @media (min-width: 992px) {
        padding-top: 80px;
      }
      padding-bottom: 40px;
    }
  }
  padding-top: 100px;
  @media (min-width: 1400px) {
    padding-top: 200px;
  }
  height: auto;
  .row {
    height: 100%;
    &:dir(rtl) {
      .hero-content {
        text-align: right;
      }
    }
    .hero-content {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    h4,
    h4 .char {
      font-size: 22px;
      @media (min-width: 992px) {
        font-size: 40px;
      }
      margin-bottom: 8px;
      letter-spacing: 1px;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 12px;
      @media (min-width: 768px) {
        margin-bottom: 20px;
        font-size: 70px;
      }
      @media (min-width: 1400px) {
        font-size: 100px;
      }
      font-weight: 600;
      letter-spacing: -1px;
    }
    p.description {
      font-size: 24px;
      font-weight: 500;
      letter-spacing: -1px;
      margin-bottom: 8px;
    }
    p.location {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.8;
      margin-bottom: 24px;
    }
    p.quick-answer {
      font-size: 15px;
      line-height: 1.6;
      opacity: 0.85;
      max-width: 500px;
      margin-bottom: 32px;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
    .img-wrapper {
      max-height: 416px;
      max-width: 416px;
      position: relative;
      &:hover {
        .waves-top,
        .waves-bottom {
          opacity: 0;
        }
      }
      .hero-img {
        border: 2px solid rgb(var(--black));
      }
    }
  }
  .next-chapter {
    padding-top: 20px;
    @media (min-width: 992px) {
      padding-top: 60px;
    }
  }
}
</style>
