<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.fromTo(
    ".section-title-overlay-text",
    { y: "50%" },
    {
      y: "-50%",
      scrollTrigger: {
        trigger: ".how-i-work",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
  gsap.from(".more-info", {
    scale: 0,
    duration: 1.2,
    ease: "elastic",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".more-info",
    },
  });
  gsap.from(".process", {
    stagger: 0.15,
    scale: 0,
    duration: 2.8,
    ease: "elastic",
    scrollTrigger: {
      trigger: ".process-list",
      start: "top 60%",
      end: "top 20%",
    },
  });
});
</script>
<template>
  <span class="section-title-overlay-text">Prozess</span>
  <SectionTitle subtitle="So arbeite ich" title="Ein einfacher Prozess, der dich in Bewegung bringt." />
  <div class="row pb-60 px-4 process-list justify-content-center">
    <div class="process col-6">
      <span class="circle position-absolute w-100 h-100"></span>
      <div>
        <p class="process-number">01.</p>
        <p class="process-title">Ziel & Fokus</p>
        <p class="process-desc">Wir definieren, was sich verbessern soll und wählen 1–3 Use Cases mit echtem Hebel.</p>
      </div>
    </div>
    <div class="process col-6">
      <span class="circle-even position-absolute w-100 h-100"></span>
      <div>
        <p class="process-number">02.</p>
        <p class="process-title">Daten & Sicherheit</p>
        <p class="process-desc">Wir klären Datenzugriff, Berechtigungen, Datenschutz und Qualitätschecks.</p>
      </div>
    </div>
    <div class="process col-6">
      <span class="circle position-absolute w-100 h-100"></span>
      <div>
        <p class="process-number">03.</p>
        <p class="process-title">Build & Pilot</p>
        <p class="process-desc">Wir liefern schnell, testen mit echten Nutzern, iterieren und messen Wirkung.</p>
      </div>
    </div>
    <div class="process col-6">
      <span class="circle-even position-absolute w-100 h-100"></span>
      <div>
        <p class="process-number">04.</p>
        <p class="process-title">Skalierung</p>
        <p class="process-desc">Wir bauen Standards, Governance, Betrieb und Enablement auf.</p>
      </div>
    </div>
  </div>
  <div class="more-info d-flex flex-wrap align-items-center gap-5 gap-md-3">
    <p>Bereit für den ersten Schritt?</p>
    <span class="line"></span>
    <a href="#contact" class="arrow-down position-relative">
      <div class="waves-top-md">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <svg width="45" height="54" viewBox="0 0 45 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 31.449L22.5 52.949L1 31.449L8.98204 23.3382L16.8353 31.449V0.550781H28.1647V31.449L36.018 23.3382L44 31.449Z" stroke="currentColor" />
      </svg>
      <div class="waves-bottom-md">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </div>
  <div class="col-12">
    <a href="#principles" class="d-flex gap-4 align-items-center next-chapter">
      <span class="page">06/10</span>
      <span class="next">Weiter</span>
      <PhosphorIconArrowElbowRightDown />
    </a>
  </div>
</template>

<style lang="scss">
// how i work
.how-i-work {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }
  .section-title-overlay-text {
    top: 120px;
  }
  .process-list {
    margin-top: 40px;
    margin-bottom: 60px;
    @media (min-width: 1200px) {
      margin-top: 80px;
    }
    display: flex;
    flex-wrap: wrap;
    .process {
      height: 220px;
      width: 220px;
      @media (min-width: 768px) {
        height: 240px;
        width: 240px;
      }
      border-radius: 50%;
      position: relative;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .process-number {
        font-size: 16px;
        margin-bottom: 4px;
      }
      .process-title {
        font-size: 16px;
        @media (min-width: 768px) {
          font-size: 18px;
        }
        font-weight: 600;
        margin-bottom: 8px;
      }
      .process-desc {
        font-size: 12px;
        @media (min-width: 768px) {
          font-size: 13px;
        }
        line-height: 1.4;
        padding: 0 10px;
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: rgb(var(--black));
        height: 9px;
        width: 9px;
      }
      .circle {
        position: relative;
        &::before,
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 50%;
          left: 0;
        }
        &::before {
          top: 0;
          border: 1px solid rgb(var(--black));
          border-bottom: none;
          border-top-left-radius: 216px;
          border-top-right-radius: 216px;
        }
        &::after {
          bottom: 0;
          border: 1px dashed rgb(var(--black));
          border-top: none;
          border-bottom-left-radius: 216px;
          border-bottom-right-radius: 216px;
        }
      }
      .circle-even {
        @extend .circle;
        &::before {
          border-style: dashed;
          border-bottom: none;
        }
        &::after {
          border-style: solid;
          border-top: none;
        }
      }
      p {
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
</style>
